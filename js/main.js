// ========================================
// 天猫校园 · 招投标信息平台 - 主逻辑
// TMALL CAMPUS BIDDING PLATFORM
// ========================================

// === 全局状态 ===
let currentFilter = {
    status: 'all',    // all / bidding / won
    type: 'all',
    time: 'all',
    region: 'all',
    search: ''
};
let currentPage = 1;
const pageSize = 10;

// === 初始化 ===
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initStatusTabs();
    initFilters();
    initScrollEffects();
    initCharts();
    updateTabCounts();
    // 行点击跳转详情（通过事件委托，避免与来源链接冲突）
    document.getElementById('projectTableBody').addEventListener('click', (e) => {
        // 如果点击的是来源链接或其子元素，不触发行点击
        if (e.target.closest('.td-source-link') || e.target.closest('.btn-detail')) return;
        const tr = e.target.closest('tr[data-id]');
        if (tr) showProjectDetail(Number(tr.dataset.id));
    });
});

// === 更新标签页计数 ===
function updateTabCounts() {
    const biddingCount = biddingProjects.filter(p => p.status === 'bidding').length;
    const wonCount = biddingProjects.filter(p => p.status === 'won').length;
    const allCount = biddingProjects.length;

    const elAll = document.getElementById('tabCountAll');
    const elBidding = document.getElementById('tabCountBidding');
    const elWon = document.getElementById('tabCountWon');

    if (elAll) elAll.textContent = allCount;
    if (elBidding) elBidding.textContent = biddingCount;
    if (elWon) elWon.textContent = wonCount;
}

// === 状态标签页切换 ===
function initStatusTabs() {
    const tabs = document.querySelectorAll('#statusTabs .status-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter.status = tab.dataset.status;
            currentPage = 1;
            renderProjects();
        });
    });
}

// === 渲染项目表格（合并近期+全部） ===
function renderProjects() {
    const filtered = getFilteredProjects();
    const totalPages = Math.ceil(filtered.length / pageSize);

    document.getElementById('allCount').textContent = filtered.length + '个项目';

    // 确保当前页有效
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

    const start = (currentPage - 1) * pageSize;
    const pageProjects = filtered.slice(start, start + pageSize);

    const tbody = document.getElementById('projectTableBody');

    if (pageProjects.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="10" style="text-align:center;padding:48px;color:var(--text-dim);">
                    <i class="fas fa-search" style="font-size:24px;margin-bottom:8px;display:block;"></i>
                    没有找到匹配的项目
                </td>
            </tr>`;
    } else {
        tbody.innerHTML = pageProjects.map((p, idx) => {
            const globalIdx = start + idx + 1;
            const isBidding = p.status === 'bidding';
            const rowClass = isBidding ? 'row-bidding' : '';
            const statusClass = p.status;
            const statusText = p.statusText;
            const sourceName = p.source || '中国政府采购网';
            const sourceUrl = p.sourceUrl || '#';
            // 转义引号，防止注入
            const escUrl = sourceUrl.replace(/'/g, "\\'");

            return `
            <tr class="${rowClass}" data-id="${p.id}">
                <td>${globalIdx}</td>
                <td class="td-project-name" title="${p.name}">${p.name}</td>
                <td>${p.unit}</td>
                <td>${p.region}</td>
                <td><span class="td-type ${p.type === '智能寝室' ? 'type-smart' : ''}">${p.type}</span></td>
                <td class="td-amount">${(() => {
                    if (isBidding) {
                        return '<span class="amount-label amount-label-bidding">招标金额</span>' + (p.amountNum > 0 ? p.amount : '<span style="color:var(--text-muted);">待公布</span>');
                    } else {
                        return '<span class="amount-label amount-label-won">中标金额</span>' + (p.amountNum > 0 ? p.amount : '<span style="color:var(--text-muted);">未公开</span>');
                    }
                })()}</td>
                <td>${p.date}</td>
                <td><span class="td-status ${statusClass}">${statusText}</span></td>
                <td>
                    <span class="td-source-link" onclick="window.open('${escUrl}','_blank')" style="cursor:pointer;">
                        <i class="fas fa-external-link-alt"></i> ${sourceName}
                    </span>
                </td>
                <td>
                    <button class="btn-detail" onclick="showProjectDetail(${p.id})">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </td>
            </tr>
            `;
        }).join('');
    }

    // 渲染分页
    renderPagination(totalPages);
}

// === 筛选逻辑 ===
function getFilteredProjects() {
    let projects = biddingProjects;

    // 状态筛选
    if (currentFilter.status === 'bidding') {
        projects = projects.filter(p => p.status === 'bidding');
    } else if (currentFilter.status === 'won') {
        projects = projects.filter(p => p.status === 'won');
    }

    return projects.filter(p => {
        // 类型筛选
        if (currentFilter.type !== 'all' && p.type !== currentFilter.type) return false;
        // 时间筛选
        if (currentFilter.time !== 'all' && !p.date.startsWith(currentFilter.time)) return false;
        // 地区筛选
        if (currentFilter.region !== 'all' && p.region !== currentFilter.region) return false;
        // 搜索
        if (currentFilter.search) {
            const s = currentFilter.search.toLowerCase();
            if (!p.name.toLowerCase().includes(s) &&
                !p.unit.toLowerCase().includes(s) &&
                !p.region.toLowerCase().includes(s) &&
                !p.type.toLowerCase().includes(s)) return false;
        }
        return true;
    });
}

function applyFilters() {
    currentFilter.type = document.querySelector('#typeFilters .filter-tag.active')?.dataset.filter || 'all';
    currentFilter.time = document.querySelector('#timeFilters .filter-tag.active')?.dataset.filter || 'all';
    currentFilter.region = document.getElementById('regionFilter').value;
    currentFilter.search = document.getElementById('localSearch').value;
    currentPage = 1;
    renderProjects();
}

function initFilters() {
    // 类型筛选
    document.getElementById('typeFilters').addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-tag')) {
            document.querySelectorAll('#typeFilters .filter-tag').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            applyFilters();
        }
    });

    // 时间筛选
    document.getElementById('timeFilters').addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-tag')) {
            document.querySelectorAll('#timeFilters .filter-tag').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            applyFilters();
        }
    });
}

// === 分页 ===
function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = '';
    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<span style="color:var(--text-dim);padding:0 4px;">...</span>`;
        }
    }

    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;

    container.innerHTML = html;
}

function goToPage(page) {
    const filtered = getFilteredProjects();
    const totalPages = Math.ceil(filtered.length / pageSize);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderProjects();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// === 项目详情弹窗 ===
function showProjectDetail(id) {
    const project = biddingProjects.find(p => p.id === id);
    if (!project) return;

    const isBidding = project.status === 'bidding';
    const statusColor = isBidding ? 'var(--red)' : (project.status === 'won' ? 'var(--green)' : 'var(--orange)');
    const amountLabel = isBidding ? '招标金额' : '中标金额';
    const amountDisplay = project.amountNum > 0 ? project.amount : (isBidding ? '待公布' : '未公开');
    const amountClass = isBidding ? '' : 'amount';

    document.getElementById('modalTitle').textContent = project.name;
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-info-grid">
            <div class="modal-info-item">
                <div class="modal-info-label">招标单位</div>
                <div class="modal-info-value">${project.unit}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">地区</div>
                <div class="modal-info-value">${project.region}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">项目类型</div>
                <div class="modal-info-value">${project.type}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">${isBidding ? '招标金额' : '中标金额'}</div>
                <div class="modal-info-value ${amountClass}">${amountDisplay}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">${isBidding ? '发布日期' : '中标时间'}</div>
                <div class="modal-info-value">${project.date}</div>
            </div>
            <div class="modal-info-item">
                <div class="modal-info-label">项目状态</div>
                <div class="modal-info-value" style="color: ${statusColor}">${project.statusText}</div>
            </div>
        </div>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border-light);">
            <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">项目详情</div>
            <p style="font-size:13px;color:var(--text-secondary);line-height:1.8;">${project.description}</p>
        </div>
        <div style="margin-top:12px;padding:12px 14px;background:var(--bg-secondary);border-radius:var(--radius);display:flex;align-items:center;gap:10px;">
            <span style="font-size:12px;color:var(--text-muted);">📋 招标来源：</span>
            <a href="${project.sourceUrl || '#'}" target="_blank" style="font-size:13px;color:var(--red);font-weight:600;text-decoration:none;display:flex;align-items:center;gap:4px;">
                ${project.source || '中国政府采购网'} <i class="fas fa-external-link-alt" style="font-size:10px;"></i>
            </a>
        </div>
    `;

    document.getElementById('projectModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('show');
    document.body.style.overflow = '';
}

// 点击遮罩关闭
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// ESC关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// === 全局搜索 ===
function handleGlobalSearch() {
    const query = document.getElementById('globalSearch').value.trim();
    if (query.length >= 1) {
        document.getElementById('localSearch').value = query;
        // 重置筛选
        document.querySelectorAll('#typeFilters .filter-tag').forEach(t => t.classList.remove('active'));
        document.querySelector('#typeFilters .filter-tag').classList.add('active');
        document.querySelectorAll('#timeFilters .filter-tag').forEach(t => t.classList.remove('active'));
        document.querySelector('#timeFilters .filter-tag').classList.add('active');
        document.getElementById('regionFilter').value = 'all';
        // 重置状态标签
        document.querySelectorAll('#statusTabs .status-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('#statusTabs .status-tab[data-status="all"]').classList.add('active');
        currentFilter.status = 'all';
        applyFilters();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    } else if (query.length === 0) {
        document.getElementById('localSearch').value = '';
        applyFilters();
    }
}

// 全局搜索回车
document.getElementById('globalSearch')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleGlobalSearch();
});

// === 滚动效果 ===
function initScrollEffects() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // 返回顶部按钮
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // 导航高亮
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// === 移动端菜单 ===
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// 点击导航链接关闭移动菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('show');
    });
});

// === 图表初始化 ===
function initCharts() {
    initTypeChart();
    initMonthlyChart();
    initRegionRanking();
    initSummary();
}

// 项目类型分布饼图 - 白底配色
function initTypeChart() {
    const ctx = document.getElementById('typeChart');
    if (!ctx) return;

    const typeCount = {};
    biddingProjects.forEach(p => {
        typeCount[p.type] = (typeCount[p.type] || 0) + 1;
    });

    const labels = Object.keys(typeCount);
    const data = Object.values(typeCount);

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#FF0036',
                    '#FF5252',
                    '#FF6D3F',
                    '#FFA726',
                    '#FFCA28',
                    '#6633FF'
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
                hoverBorderColor: '#ffffff',
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#555770',
                        padding: 16,
                        font: { size: 11 },
                        usePointStyle: true,
                        pointStyleWidth: 8,
                        generateLabels: function(chart) {
                            const data = chart.data;
                            return data.labels.map((label, i) => ({
                                text: label + ' (' + data.datasets[0].data[i] + ')',
                                fillStyle: data.datasets[0].backgroundColor[i],
                                strokeStyle: data.datasets[0].backgroundColor[i],
                                lineWidth: 0,
                                hidden: false,
                                index: i,
                                pointStyle: 'circle',
                                rotation: 0
                            }));
                        }
                    }
                }
            },
            cutout: '62%'
        }
    });
}

// 月度中标趋势 - 白底配色
function initMonthlyChart() {
    const ctx = document.getElementById('monthlyChart');
    if (!ctx) return;

    const monthlyData = {};
    biddingProjects.forEach(p => {
        const monthKey = p.date.substring(0, 7);
        monthlyData[monthKey] = (monthlyData[monthKey] || 0) + 1;
    });

    const sortedMonths = Object.keys(monthlyData).sort();
    const last12 = sortedMonths.slice(-12);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last12.map(m => m.substring(0, 7)),
            datasets: [{
                label: '项目数',
                data: last12.map(m => monthlyData[m]),
                backgroundColor: 'rgba(255, 0, 54, 0.7)',
                borderColor: '#FF0036',
                borderWidth: 1,
                borderRadius: 4,
                hoverBackgroundColor: '#FF0036',
                maxBarThickness: 36
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: '#f0f0f5',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#8e90a6',
                        font: { size: 10 }
                    }
                },
                y: {
                    grid: {
                        color: '#f0f0f5',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#8e90a6',
                        font: { size: 10 },
                        stepSize: 1
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// 地区排名
function initRegionRanking() {
    const container = document.getElementById('regionRanking');
    if (!container) return;

    const regionCount = {};
    biddingProjects.forEach(p => {
        regionCount[p.region] = (regionCount[p.region] || 0) + 1;
    });

    const sorted = Object.entries(regionCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    const maxCount = sorted[0]?.[1] || 1;

    container.innerHTML = sorted.map(([region, count], idx) => {
        const rankClass = idx < 3 ? `top-${idx + 1}` : 'normal';
        return `
            <div class="region-item">
                <div class="region-rank ${rankClass}">${idx + 1}</div>
                <span class="region-name">${region}</span>
                <div class="region-bar-bg">
                    <div class="region-bar" style="width: ${(count / maxCount * 100)}%"></div>
                </div>
                <span class="region-count">${count}</span>
            </div>
        `;
    }).join('');
}

// 汇总统计
function initSummary() {
    const wonProjects = biddingProjects.filter(p => p.status === 'won' && p.amountNum > 0);
    const totalAmount = wonProjects.reduce((sum, p) => sum + p.amountNum, 0);
    const totalCount = wonProjects.length;
    const avgAmount = totalCount > 0 ? (totalAmount / totalCount) : 0;

    const totalEl = document.getElementById('totalAmount');
    const countEl = document.getElementById('totalProjects');
    const avgEl = document.getElementById('avgAmount');

    if (totalEl) totalEl.textContent = totalAmount.toLocaleString('zh-CN', { maximumFractionDigits: 2 });
    if (countEl) countEl.textContent = totalCount;
    if (avgEl) avgEl.textContent = avgAmount.toLocaleString('zh-CN', { maximumFractionDigits: 2 });
}
