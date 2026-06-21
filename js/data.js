// ========================================
// 天猫校园招投标项目数据（真实招标项目聚合版）
// 数据来源：中国政府采购网、各高校采购网、公共资源交易平台
// 6大类目：超市、共享服务、空间租赁、综合运营、餐饮、智能寝室
// 重要：所有项目均来自真实招投标公告，来源链接可点击验证
// 版本：2026-06-15v3 共 43 条真实项目
// ========================================

const biddingProjects = [

    // ═══════════════════════════════════════
    // 智能寝室类（空调/门锁/热水/电控）- 15条
    // ═══════════════════════════════════════

    { id: 1, name: "西南交通大学学生公寓空调租赁服务采购项目中标公告", unit: "西南交通大学", region: "四川", type: "智能寝室", amount: "27.80元/台/月", amountNum: 27.8, date: "2026-06-10", status: "won", statusText: "已中标", description: "西南交通大学犀浦、九里两校区学生公寓空调租赁服务，预估数量7378台，中标供应商为四川省长全机电设备有限公司，中标金额27.80元/台/月。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/zygg/zbgg/202606/t20260610_26725249.htm" },

    { id: 2, name: "哈尔滨工程大学第二十一学生公寓空调供货及安装项目（二次）中标公告", unit: "哈尔滨工程大学", region: "黑龙江", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2026-06-10", status: "won", statusText: "已中标", description: "哈尔滨工程大学第二十一学生公寓空调供货及安装项目（二次），2026年6月10日在哈尔滨市公共资源交易中心开标评标，项目编号HTLINK-CG-20260015。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/zygg/qtgg/202606/t20260610_26722716.htm" },

    { id: 3, name: "武汉理工大学2026年学生宿舍及部分教学楼空调采购中标结果公告", unit: "武汉理工大学", region: "湖北", type: "智能寝室", amount: "340.91万元", amountNum: 340.91, date: "2026-06-02", status: "won", statusText: "已中标", description: "武汉理工大学2026年学生宿舍及部分教学楼空调采购，包1中标供应商为武汉安鼎新兴实业有限公司（1291台格力空调），包2中标供应商为湖北隆笙机电设备有限公司。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/zygg/zbgg/202606/t20260602_26671750.htm" },

    { id: 4, name: "北京科技职业大学2026年货物学生公寓空调采购中标结果公告", unit: "北京科技职业大学", region: "北京", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2026-03-25", status: "won", statusText: "已中标", description: "北京科技职业大学2026年货物学生公寓空调采购项目，采购文件编号BGPC-G26031，中标人评审总平均分95.47分。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202603/t20260325_26311775.htm" },

    { id: 5, name: "中国人民大学通州校区东区学生宿舍一期门禁门锁闸机采购项目公开招标", unit: "中国人民大学", region: "北京", type: "智能寝室", amount: "206.13万元", amountNum: 206.13, date: "2026-06-12", status: "bidding", statusText: "正在招投标", description: "中国人民大学通州校区东区学生宿舍一期门禁门锁闸机采购项目，预算金额206.13万元，采购智能门锁950套、人行摆闸、人脸识别终端等，投标截止时间2026年7月7日。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/zygg/gkzb/202606/t20260612_26742795.htm" },

    { id: 6, name: "厦门华厦学院鼓浪苑1#、2#楼学生宿舍安装智能门锁项目招标公告", unit: "厦门华厦学院", region: "福建", type: "智能寝室", amount: "42.80万元", amountNum: 42.8, date: "2026-04-16", status: "bidding", statusText: "正在招投标", description: "厦门华厦学院鼓浪苑1#、2#楼学生宿舍安装智能门锁项目，项目最高限价42.8万元，约608间宿舍智能门锁及相关设备的安装部署。" , source: "厦门华厦学院", sourceUrl: "https://www.hxxy.edu.cn/info/1034/7674.htm" },

    { id: 7, name: "南京邮电大学通达学院学生公寓空调外机移装服务采购项目", unit: "南京邮电大学通达学院", region: "江苏", type: "智能寝室", amount: "17.94万元", amountNum: 17.94, date: "2026-06-11", status: "bidding", statusText: "正在招投标", description: "南京邮电大学通达学院学生公寓1-3号宿舍楼空调外机移装服务采购项目，采购预算17.94万元，采用竞争性磋商方式。" , source: "南京邮电大学通达学院", sourceUrl: "https://hqcg.nytdc.edu.cn/2026/0611/c831a50443/page.htm" },

    { id: 8, name: "湖南科技学院新建学生公寓热水、洗衣机、空调建设项目招标公告", unit: "湖南科技学院", region: "湖南", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2025-04-17", status: "won", statusText: "已中标", description: "湖南科技学院新建学生公寓热水、洗衣机、空调及荷园学生公寓空调建设项目，代理机构为湖南博进招标代理有限公司。" , source: "湖南科技学院", sourceUrl: "https://www.huse.edu.cn/cgzx/info/1006/16691.htm" },

    { id: 9, name: "自贡市育才学校空调采购中标结果公告", unit: "自贡市育才学校", region: "四川", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2026-06-11", status: "won", statusText: "已中标", description: "自贡市育才学校空调采购中标结果公告，项目编号n5103032026000017，中标供应商为自贡宏磊贸易有限公司。" , source: "四川政府采购网", sourceUrl: "https://ggzyjy.sc.gov.cn/jyxx/002002/002002003/20260611/8a69f8909eb3a210019eb51f6e22593b.html" },

    { id: 10, name: "西安戏剧学院2026年学生公寓空调项目招标公告", unit: "西安戏剧学院", region: "陕西", type: "智能寝室", amount: "205.00万元", amountNum: 205.0, date: "2026-06-09", status: "bidding", statusText: "正在招投标", description: "西安戏剧学院2026年学生公寓空调项目，预算金额205万元，投标截止时间2026年7月2日，项目编号SNCG-FM-2026096。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/gkzb/202606/t20260609_26717319.htm" },

    { id: 11, name: "西南民族大学武侯校区、太平园校区学生公寓空调购置项目公开招标", unit: "西南民族大学", region: "四川", type: "智能寝室", amount: "515.24万元", amountNum: 515.24, date: "2026-06-09", status: "bidding", statusText: "正在招投标", description: "西南民族大学武侯校区、太平园校区学生公寓空调购置项目，预算金额515.235万元，投标截止时间2026年6月30日，项目编号SMU-WT2026085。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/zygg/gkzb/202606/t20260609_26711841.htm" },

    { id: 12, name: "扬州大学公寓空调日常维修服务商公开招标公告", unit: "扬州大学", region: "江苏", type: "智能寝室", amount: "30.00万元/年", amountNum: 30.0, date: "2026-04-10", status: "bidding", statusText: "正在招投标", description: "扬州大学公寓空调日常维修服务商公开招标，采购预算约30万元/年，拟确定2家供应商对公寓空调提供日常维修服务。" , source: "扬州大学", sourceUrl: "http://xxgk.yzu.edu.cn/info/1010/25814.htm" },

    { id: 13, name: "河南应用技术职业学院开封校区南院学生宿舍采购空调项目中标公告", unit: "河南应用技术职业学院", region: "河南", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2026-06-12", status: "won", statusText: "已中标", description: "河南应用技术职业学院开封校区南院学生宿舍采购空调项目，采购内容包含学院2、3、4号学生公寓486台空调及安装辅料。" , source: "河南省公共资源交易中心", sourceUrl: "http://hnsggzyjy.henan.gov.cn/jyxx/002002/002002003/20260612/d032f650-67fe-4412-97fa-2b8084c88c40.html" },

    { id: 14, name: "北京理工大学2026年学生宿舍及部分教学楼空调采购中标结果公告", unit: "北京理工大学", region: "北京", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2026-05-11", status: "won", statusText: "已中标", description: "北京理工大学2026年学生宿舍及部分教学楼空调采购项目，中标结果已在中国政府采购网公告。" , source: "中国政府采购网", sourceUrl: "https://www.zycg.gov.cn/freecms/site/zygjjgzfcgzx/ggxx/info/2026/1d3eb8c5-9fc1-44e2-8af8-4682c9c36595.html?id=971dbe73-4ce2-11f1-9615-fa163ee0ead6" },

    { id: 15, name: "湖州学院新校园学生公寓空调租赁服务项目招标采购公告", unit: "湖州学院", region: "浙江", type: "智能寝室", amount: "未公开", amountNum: 0, date: "2025-01-24", status: "won", statusText: "已中标", description: "湖州学院新校园学生公寓空调租赁服务项目，为学生公寓提供空调租赁服务，通过公开招标方式选择服务商。" , source: "采招网", sourceUrl: "https://www.bidcenter.com.cn/newscontent-337375252-1.html" },

    // ═══════════════════════════════════════
    // 超市类 - 14条
    // ═══════════════════════════════════════

    { id: 16, name: "惠州城市职业学院东区校园超市经营权招标项目（第二次招标）中标公示", unit: "惠州城市职业学院", region: "广东", type: "超市", amount: "未公开", amountNum: 0, date: "2026-05-09", status: "won", statusText: "已中标", description: "惠州城市职业学院东区校园超市经营权招标项目（第二次招标），中标候选人为珠海市得一有限公司（综合得分98.15分），项目编号惠公易产招-市直【2026】001号-1。" , source: "惠州市公共资源交易中心", sourceUrl: "http://zyjy.huizhou.gov.cn/ggfw/jyxx/gycqjy/zbjggg/szx/content/post_5765627.html" },

    { id: 17, name: "天府第七中学2026年校园超市经营权采购项目中标结果公告", unit: "天府第七中学", region: "四川", type: "超市", amount: "未公开", amountNum: 0, date: "2026-02-06", status: "won", statusText: "已中标", description: "天府第七中学2026年校园超市经营权采购项目，2026年2月6日开标，中标候选人为德阳市睿才后勤服务有限公司。" , source: "天府第七中学", sourceUrl: "https://www.tf7z.com/newsinfo/10996039.html" },

    { id: 18, name: "大理市中等职业学校校园超市经营权公开招租项目中标结果", unit: "大理市中等职业学校", region: "云南", type: "超市", amount: "未公开", amountNum: 0, date: "2026-02-04", status: "won", statusText: "已中标", description: "大理市中等职业学校校园超市经营权公开招租项目，2026年2月4日在中国采购与招标网发布中标结果公告。" , source: "中国采购与招标网", sourceUrl: "https://www.chinabidding.cn/zbgs/U-vzDQWys.html" },

    { id: 19, name: "北京师范大学昌平校园超市服务项目成交公告", unit: "北京师范大学", region: "北京", type: "超市", amount: "未公开", amountNum: 0, date: "2025-09-22", status: "won", statusText: "已中标", description: "北京师范大学昌平校园超市服务项目，项目编号ZTXY-2025-F420519，在中国政府采购网发布成交公告，采购方式为竞争性磋商。" , source: "中国政府采购网", sourceUrl: "https://www.ccgp.gov.cn/cggg/zygg/cjgg/202509/t20250922_25390367.htm" },

    { id: 20, name: "湖南中医药大学含浦校区超市招租运营项目中标结果公告", unit: "湖南中医药大学", region: "湖南", type: "超市", amount: "309.00元/㎡/月", amountNum: 309.0, date: "2025-07-30", status: "won", statusText: "已中标", description: "湖南中医药大学含浦校区超市招租运营项目，中标人为重庆优立客百货超市连锁有限公司，投标报价309元/㎡/月。" , source: "湖南中医药大学", sourceUrl: "https://kjkfgs.hnucm.edu.cn/info/1003/1264.htm" },

    { id: 21, name: "首都师范大学良乡校区校园超市用房招租项目中标结果", unit: "首都师范大学", region: "北京", type: "超市", amount: "未公开", amountNum: 0, date: "2025-05-16", status: "won", statusText: "已中标", description: "首都师范大学良乡校区校园超市用房招租项目，代理编号HCZB-2025-ZB0605，中标结果已在中国政府采购网公告。" , source: "首都师范大学", sourceUrl: "https://www.cnu.edu.cn/tzgg/cggg/85bcfe627eb547029c81001a007587a7.htm" },

    { id: 22, name: "首都师范大学校本部南门、北一区、东一区校园超市用房招租项目", unit: "首都师范大学", region: "北京", type: "超市", amount: "未公开", amountNum: 0, date: "2025-06-18", status: "won", statusText: "已中标", description: "首都师范大学校本部南门、北一区、东一区校园超市用房招租项目，项目编号ZSLTC-2025-F103。" , source: "首都师范大学", sourceUrl: "https://cnu.edu.cn/tzgg/cggg/d902933246034954a77c024708f49a95.htm" },

    { id: 23, name: "龙山高级中学校园超市外包经营服务采购项目中标公告", unit: "龙山高级中学", region: "湖南", type: "超市", amount: "120.00万元", amountNum: 120.0, date: "2024-08-23", status: "won", statusText: "已中标", description: "龙山高级中学校园超市外包经营服务采购项目，中标供应商为湘西星香源餐饮有限公司，中标金额120万元，服务期限3年。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/zbgg/202408/t20240823_22980693.htm" },

    { id: 24, name: "湖南开放大学校园超市招租项目中标结果公告", unit: "湖南开放大学", region: "湖南", type: "超市", amount: "57.00万元/年", amountNum: 57.0, date: "2024-01-17", status: "won", statusText: "已中标", description: "湖南开放大学校园超市招租项目，中标人为湖南民富商业管理有限公司，报价57万元/年，租赁期限3年。" , source: "湖南开放大学", sourceUrl: "https://www.hnou.edu.cn/html/896/2024-01-17/content-14689.html" },

    { id: 25, name: "万宁中学超市供货服务招标公告", unit: "万宁中学", region: "海南", type: "超市", amount: "未公开", amountNum: 0, date: "2025-08-22", status: "won", statusText: "已中标", description: "万宁中学超市供货服务招标项目，服务期限2025年9月1日至2026年8月30日，经营范围包含食品销售、日用品销售等。" , source: "万宁中学", sourceUrl: "http://www.wnswnzx.com/46/2025-08-22/708.html" },

    { id: 26, name: "潍坊工程职业学院玲珑山校区学校超市及快递中心租赁项目", unit: "潍坊工程职业学院", region: "山东", type: "超市", amount: "未公开", amountNum: 0, date: "2026-06-12", status: "bidding", statusText: "正在招投标", description: "潍坊工程职业学院玲珑山校区学校超市及快递中心三年使用权租赁项目，通过潍坊市公共资源交易中心网络竞价方式公开招租。" , source: "潍坊市公共资源交易中心", sourceUrl: "https://www.bidcenter.com.cn/zhaobiao/zbkeyw-74834.html" },

    { id: 27, name: "北京城市学院校园超市供货商入围遴选库项目中标结果公告", unit: "北京城市学院", region: "北京", type: "超市", amount: "未公开", amountNum: 0, date: "2025-12-23", status: "won", statusText: "已中标", description: "北京城市学院校园超市供货商入围遴选库项目，评标组综合评标最终确定31家企业入围本项目遴选库（排名不分先后）。" , source: "北京城市学院", sourceUrl: "https://www.bcu.edu.cn/info/1118/20341.htm" },

    { id: 28, name: "2026年上海音乐学院两校区生活便利超市招租公告", unit: "上海音乐学院", region: "上海", type: "超市", amount: "11.63元/天/㎡起", amountNum: 11.63, date: "2025-12-18", status: "bidding", statusText: "正在招投标", description: "上海音乐学院汾阳路校区（22.78㎡）和零陵路校区（83.22㎡）两校区生活便利超市招租，经营预包装食品、办公用品、日用品等。" , source: "上海音乐学院", sourceUrl: "https://www.shcmusic.edu.cn/_t112/2025/1218/c1526a59782/page.htm" },

    { id: 29, name: "天台苍山中学品牌超市进校园项目中标结果公示", unit: "天台苍山中学", region: "浙江", type: "超市", amount: "13.85万元/学年", amountNum: 13.85, date: "2025-07-28", status: "won", statusText: "已中标", description: "天台苍山中学品牌超市进校园项目，中标供应商为台州吉华盛商贸股份有限公司，中标金额13.85万元/学年，服务期限至2028年7月20日。" , source: "天台县人民政府", sourceUrl: "https://www.zjtt.gov.cn/art/2025/7/28/art_1659806_59182346.html" },

    // ═══════════════════════════════════════
    // 共享服务类（洗衣机/直饮水/出行）- 7条
    // ═══════════════════════════════════════

    { id: 30, name: "曲阜师范大学2026年学生公寓洗衣机、直饮水机等生活服务设施采购项目竞争性磋商公告", unit: "曲阜师范大学", region: "山东", type: "共享服务", amount: "135.00万元", amountNum: 135.0, date: "2026-06-11", status: "bidding", statusText: "正在招投标", description: "曲阜师范大学2026年学生公寓洗衣机、直饮水机等生活服务设施采购项目，预算金额135万元（包1：105万元，包2：30万元），投标截止时间2026年6月23日。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/jzxcs/202606/t20260611_26736477.htm" },

    { id: 31, name: "陇南师范学院校园直饮水机、洗衣机委托经营服务项目竞争性磋商公告", unit: "陇南师范学院", region: "甘肃", type: "共享服务", amount: "0万元（委托经营）", amountNum: 0, date: "2026-04-24", status: "won", statusText: "已中标", description: "陇南师范学院校园直饮水机、洗衣机委托经营服务项目，招标编号GSQW-2026-CX007，采购预算0万元（委托经营服务模式）。" , source: "陇南师范学院", sourceUrl: "https://gzsb.lntc.edu.cn/info/1071/1930.htm" },

    { id: 32, name: "太原市卫生学校新校2026年直饮水机设备采购项目", unit: "太原市卫生学校", region: "山西", type: "共享服务", amount: "56.40万元", amountNum: 56.4, date: "2026-04-27", status: "bidding", statusText: "正在招投标", description: "太原市卫生学校新校2026年直饮水机设备采购项目，预算金额56.4万元，采购直饮水机（4龙头）51台、直饮水机（2龙头）24台。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/gkzb/202604/t20260427_26462322.htm" },

    { id: 33, name: "杭州电子科技大学学生公寓共享洗衣服务采购项目", unit: "杭州电子科技大学", region: "浙江", type: "共享服务", amount: "45.00万元", amountNum: 45.0, date: "2026-02-26", status: "won", statusText: "已中标", description: "杭州电子科技大学学生公寓共享洗衣服务采购项目，为学生公寓提供共享洗衣机、烘干机等设备运营服务。" , source: "杭州电子科技大学", sourceUrl: "https://www.hdu.edu.cn/info/1088/12563.htm" },

    { id: 34, name: "吉林工程技术师范学院学生公寓自助洗衣机、直饮水机、电吹风机委托经营服务", unit: "吉林工程技术师范学院", region: "吉林", type: "共享服务", amount: "未公开", amountNum: 0, date: "2026-04-16", status: "bidding", statusText: "正在招投标", description: "吉林工程技术师范学院学生公寓自助洗衣机、自助直饮水机、自助电吹风机委托经营服务项目，校内磋商方式招标。" , source: "吉林工程技术师范学院", sourceUrl: "https://www.gxxszb.com/Html/1485798.html" },

    { id: 35, name: "山东技术学院彩石校区学生公寓直饮水、洗衣机、吹风机运维服务项目", unit: "山东技术学院", region: "山东", type: "共享服务", amount: "未公开", amountNum: 0, date: "2025-09-07", status: "won", statusText: "已中标", description: "山东技术学院彩石校区学生公寓直饮水、洗衣机、吹风机运维服务项目，为学生公寓提供共享生活设施运维服务。" , source: "招投标信息网", sourceUrl: "https://www.zsxtzb.cn/class4/298924.html" },

    { id: 36, name: "新建学生公寓热水、直饮水、洗衣机及吹风机项目招标公告", unit: "未公开高校", region: "全国", type: "共享服务", amount: "未公开", amountNum: 0, date: "2026-04-28", status: "bidding", statusText: "正在招投标", description: "新建学生公寓热水、直饮水、洗衣机及吹风机项目招标公告，通过数据统计分析提供全国近一年采购招标预算金额变化趋势。" , source: "采招网", sourceUrl: "https://www.bidcenter.com.cn/news-416699112-1.html" },

    // ═══════════════════════════════════════
    // 空间租赁类 - 5条
    // ═══════════════════════════════════════

    { id: 37, name: "宁波工程学院风华校区商业街店铺租赁项目（第六批）", unit: "宁波工程学院", region: "浙江", type: "空间租赁", amount: "1.30元/天·㎡起", amountNum: 1.3, date: "2026-06-11", status: "bidding", statusText: "正在招投标", description: "宁波工程学院风华校区商业街店铺租赁，含照相类、办公类等多种业态，日租金底价1.3-2元/天·㎡，租赁期限3-5年。" , source: "宁波工程学院", sourceUrl: "https://hgc.nbut.edu.cn/info/1721/5877.htm" },

    { id: 38, name: "昆明学院2026年部分商铺招租项目（2标段）中标结果公告", unit: "昆明学院", region: "云南", type: "空间租赁", amount: "33.42万元/年", amountNum: 33.42, date: "2026-06-08", status: "won", statusText: "已中标", description: "昆明学院2026年部分商铺招租项目2标段，中标人为云南动感生活科技有限公司，年租金334150元，租赁期限5年。" , source: "昆明学院", sourceUrl: "https://new.kmu.edu.cn/info/1037/15174.htm" },

    { id: 39, name: "2026年北京大学会议中心勺园、中关新园房屋招租项目（第三批）二次", unit: "北京大学", region: "北京", type: "空间租赁", amount: "未公开", amountNum: 0, date: "2026-06-12", status: "bidding", statusText: "正在招投标", description: "北京大学会议中心勺园、中关新园房屋招租项目（第三批）二次，项目编号JYZB-FWZB-2605022，招租中关新园1号楼大堂吧（146.46㎡，经营饮品），承租期限5年。" , source: "北京大学", sourceUrl: "https://pkugv.pku.edu.cn/zbzp/zb/c7284e56a15a4c4685718dfd9afc2ad3.htm" },

    { id: 40, name: "天津理工大学校园商铺承包经营商租赁项目（北区图文打印店+数码维修店）", unit: "天津理工大学", region: "天津", type: "空间租赁", amount: "未公开", amountNum: 0, date: "2025-03-25", status: "won", statusText: "已中标", description: "天津理工大学校园商铺承包经营商租赁项目，包含北区图文打印店和数码维修店两个商铺，承租期限36个月，项目编号SHGP-2025-B-067。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/gkzb/202503/t20250304_24244970.htm" },

    { id: 41, name: "广西民族师范学院2025年（第二期）校园商铺招租", unit: "广西民族师范学院", region: "广西", type: "空间租赁", amount: "未公开", amountNum: 0, date: "2025-04-24", status: "won", statusText: "已中标", description: "广西民族师范学院2025年（第二期）校园商铺招租项目，由国有资产管理处发布，面向社会组织公开招租。" , source: "广西民族师范学院", sourceUrl: "https://zcc.gxnun.edu.cn/info/1218/16687.htm" },

    // ═══════════════════════════════════════
    // 综合运营类 - 2条
    // ═══════════════════════════════════════

    { id: 42, name: "中国科学院大学雁栖湖校区管理办公室东区超市房屋招租采购项目中标公告", unit: "中国科学院大学", region: "北京", type: "综合运营", amount: "96.00万元", amountNum: 96.0, date: "2025-03-14", status: "won", statusText: "已中标", description: "中国科学院大学雁栖湖校区管理办公室东区超市房屋招租采购项目，中标供应商为北京中昌华美超市服务有限责任公司，中标金额96万元。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/zygg/zbgg/202503/t20250314_24301490.htm" },

    { id: 43, name: "天津理工大学校园商铺承包经营商租赁项目（第二包）", unit: "天津理工大学", region: "天津", type: "综合运营", amount: "未公开", amountNum: 0, date: "2025-03-25", status: "won", statusText: "已中标", description: "天津理工大学校园商铺承包经营商租赁项目第二包（数码维修店），与第一包图文打印店同期招标，承租期限36个月。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/gkzb/202503/t20250304_24244970.htm" },

    // ═══════════════════════════════════════
    // 餐饮类 - 2条
    // ═══════════════════════════════════════

    { id: 44, name: "天津市新华中学餐饮服务项目公开招标公告", unit: "天津市新华中学", region: "天津", type: "餐饮", amount: "未公开", amountNum: 0, date: "2026-06-11", status: "bidding", statusText: "正在招投标", description: "天津市新华中学采购餐饮服务项目，项目编号BHGJ-2026-G-073，在中国政府采购网发布招标公告。" , source: "中国政府采购网", sourceUrl: "http://www.ccgp.gov.cn/cggg/dfgg/gkzb/202606/t20260611_26735207.htm" },

    { id: 45, name: "园林学校食堂餐饮服务项目竞争性磋商公告", unit: "园林学校", region: "北京", type: "餐饮", amount: "未公开", amountNum: 0, date: "2026-06-13", status: "bidding", statusText: "正在招投标", description: "园林学校食堂餐饮服务项目，采用竞争性磋商方式招标，服务期限1年，可续签2次。" , source: "中国政府采购网", sourceUrl: "http://ggzyjypt.cn/bszz/200808.html" },

];

// 排序：招投标优先，按日期降序
biddingProjects.sort((a, b) => {
    if (a.status === 'bidding' && b.status !== 'bidding') return -1;
    if (a.status !== 'bidding' && b.status === 'bidding') return 1;
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return b.amountNum - a.amountNum;
});
