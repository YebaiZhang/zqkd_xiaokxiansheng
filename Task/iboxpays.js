/*

⚠️主机名以及重写👇

（圈x可以获取refreshTOKEN     其他开启抓包，然后登录笑谱，找到 https://veishop.iboxpay.com/nf_gateway/nf-user-auth-web/ignore_tk/veishop/v1/ 里的响应体 refreshTOKEN）

hostname=veishop.iboxpay.com

############## 圈x
#笑谱获取header
https:\/\/veishop\.iboxpay\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js
#笑谱获取更新TOKEN
https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf-user-auth-web\/ignore_tk\/veishop\/v1\/* url script-response-body https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js

############## loon
#笑谱获取header
http-request https:\/\/veishop\.iboxpay\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js, requires-header=true, tag=笑谱获取header

############## surge
#笑谱获取header
笑谱获取header = type=http-request,pattern=https:\/\/veishop\.iboxpay\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js, script-update-interval=0

 */
const $ = Env("笑谱");
$.idx = ($.idx = ($.getval('iboxpaySuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const CS = 6;

let liveIdcd = [],
logs = 0,
spid = [],
zbid = [],
hbyid = [],
liveId = [[], []],
CASH = [],
LiveTime = [];

let iboxpayheaderVal = ``;
let refreshtokenVal = ``;

let TOKEN = [];

iboxpayheaderArr =
    [{
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2FD8)",
        "X-User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2FD8)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1148855820752977920",
        "source": "VEISHOP_APP_IOS",
        "token": "352b20e4c6584621965131450d63d152",
        "traceid": "3135973249405943808016136556264312a7f2bfa26fc",
        "version": "1.4.8"
    }, {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-Hans;q=1, en;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE840)",
        "X-User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE840)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1148855820752977920",
        "source": "VEISHOP_APP_IOS",
        "token": "a4c2da143c63490ca656ddac7af74635",
        "traceid": "3134743528733152870416135570804802a7f2bfa26fc",
        "version": "1.4.8"
    }, {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-Hans;q=1, en;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE847)",
        "X-User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE847)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1353091776234577920",
        "source": "VEISHOP_APP_IOS",
        "token": "c57dd64e781f4fa99a7e8bd3ecb5f82d",
        "traceid": "3134724468017665638416135469643022a7f2bfa26fc",
        "version": "1.4.8"
    }, {
        "Accept": "*/*",
        "Accept-Encoding": "br, gzip, deflate",
        "Accept-Language": "zh-Hans;q=1, en;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.8 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510879)",
        "X-User-Agent": "VeiShop, 1.4.8 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510879)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1352290440102600704",
        "source": "VEISHOP_APP_IOS",
        "token": "44eea9bcc35f497c9e2ab2a1203f39d3",
        "traceid": "3134749904029934387216135498151702a7f2bfa26fc",
        "version": "1.4.8"
    }, {
        "Accept": "*/*",
        "Accept-Encoding": "br, gzip, deflate",
        "Accept-Language": "zh-Hans;q=1, en;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.8 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510877)",
        "X-User-Agent": "VeiShop, 1.4.8 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510877)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1351911905512841216",
        "source": "VEISHOP_APP_IOS",
        "token": "7a47e220815d4fe592a50a92c3f2842c",
        "traceid": "3134742808954921779216135486541162a7f2bfa26fc",
        "version": "1.4.8"
    }, {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED9)",
        "X-User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED9)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1270273757360041984",
        "source": "VEISHOP_APP_IOS",
        "token": "541fd3938cc6483fa00a6be48e682b96",
        "traceid": "3134895462533921996816135437486432a7f2bfa26fc",
        "version": "1.4.8"
    }, {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7",
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Host": "veishop.iboxpay.com",
        "User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)",
        "X-User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)",
        "mchtNo": "100529600058887",
        "shopkeeperId": "1148855820752977920",
        "source": "VEISHOP_APP_IOS",
        "token": "3a5ecacea20745edb680b5f6f28f1842",
        "traceid": "300000000000000000001611802533754000000000000",
        "version": "1.4.4"
    }, {
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'version': `1.4.4`,
        'mchtNo': `100529600058887`,
        'Content-Type': `application/json; charset=utf-8`,
        'source': `VEISHOP_APP_IOS`,
        'shopkeeperId': `1148855820752977920`,
        'User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
        'token': `8e98582d5ece46358d8e61dc6591d215`,
        'X-User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
        'traceid': `31350618275326124032161172172820147c0a4b847c0`,
        'Host': `veishop.iboxpay.com`,
        'Accept-Language': `zh-Hans;q=1, en;q=0.9`,
        'Accept': `*/*`
    }, {
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'version': `1.4.4`,
        'mchtNo': `100529600058887`,
        'Content-Type': `application/json; charset=utf-8`,
        'source': `VEISHOP_APP_IOS`,
        'shopkeeperId': `1352478788058406912`,
        'User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 78455E13-DD41-43BD-B55F-9101507E9C73)`,
        'token': `a3df95347e88450b97a24991f9890b09`,
        'X-User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 78455E13-DD41-43BD-B55F-9101507E9C73)`,
        'traceid': `30000000000000000000161180410790200002bfa26fc`,
        'Host': `veishop.iboxpay.com`,
        'Accept-Language': `zh-Hans-CN;q=1`,
        'Accept': `*/*`
    }, {
        'Connection': `keep-alive`,
        'Accept-Encoding': `br, gzip, deflate`,
        'version': `1.4.4`,
        'mchtNo': `100529600058887`,
        'Content-Type': `application/json; charset=utf-8`,
        'source': `VEISHOP_APP_IOS`,
        'shopkeeperId': `1352464952811118592`,
        'User-Agent': `VeiShop, 1.4.4 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510874)`,
        'token': `3a2c2421582b485ab82f03d51b60f5de`,
        'X-User-Agent': `VeiShop, 1.4.4 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510874)`,
        'traceid': `3134723830697786572816118051566652bfa26fca4b8`,
        'Host': `veishop.iboxpay.com`,
        'Accept-Language': `zh-Hans;q=1, en;q=0.9`,
        'Accept': `*/*`
    }, {
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'version': `1.4.4`,
        'mchtNo': `100529600058887`,
        'Content-Type': `application/json; charset=utf-8`,
        'source': `VEISHOP_APP_IOS`,
        'shopkeeperId': `1352436465475837952`,
        'User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)`,
        'token': `63bb54409de04db9b1da8d892b100f35`,
        'X-User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)`,
        'traceid': `3134725293711706521616120011249282a7f2bfa26fc`,
        'Host': `veishop.iboxpay.com`,
        'Accept-Language': `zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7`,
        'Accept': `*/*`
    }, {
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'version': `1.4.4`,
        'mchtNo': `253681078159371`,
        'Content-Type': `application/json; charset=utf-8`,
        'source': `VEISHOP_APP_IOS`,
        'User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
        'token': `63bb54409de04db9b1da8d892b100f35`,
        'X-User-Agent': `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
        'traceid': `3000000000000000000016119903943412bfa26fc2a7f`,
        'Host': `veishop.iboxpay.com`,
        'Accept-Language': `zh-Hans;q=1, en;q=0.9`,
        'Accept': `*/*`
    }
];

refreshTokenID = ['5f50e70aa7254bd2993f7bc6bb808741', '865097655e614645998c715659dd5bdb', '7b79386a555e47bab4f89fc422bb2e31', 'b1132b0904a5431d92366600fa328a5f', 'ba516fbec37d409ab78dc8c13fe75bdb', 'bfc3e0a1c49843e8916903d96f038b95', '2b071e135d9149049d395598669c0552', '121f8fcae1e7427ebcc67fea4e2b9411', '5efd43e8852b42cfb1844afe2e13ed01', '3939f148beeb44ae8249c704e9d8837c', 'f5de6d4171e842738ccca927addb7dc1', '61bd17ec5502459d81659f3737711cc1'];
Length = iboxpayheaderArr.length;
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`);
console.log(
`============ 共 ${Length} 个${$.name}账号=============\n`);

//时间
nowTimes = new Date(
        new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000);
//今天
Y = nowTimes.getFullYear() + '年';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '月';
D = nowTimes.getDate() + '日';
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else
        TTS = Math.round(new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else
        TS = Math.round((new Date().getTime() +
                    new Date().getTimezoneOffset() * 60 * 1000 +
                    8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else
        DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};

for (let i = 0; i < Length; i++) {
    LiveTime[i] = 0;
}
!(async() => {

    await all();

})()
.catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
})
.finally(() => {
    $.done();
})

async function all() {

    for (let i = 0; i < Length; i++) {
        await refreshtoken(i); //更新TOKEN
        await $.wait(1000);
    }

    for (let i = 0; i < Length; i++) {
        await user(i);
        await goldcoin(i); //金币信息
        await coin(i); //账户信息
        await withdraw(i); //提现
        await sylist(i); //收益列表
        await $.wait(1000);

    }
    await hdid(0); //活动id
    await liveslist(0); //直播节目表
    for (let j = 0; j < liveIdcd[0]; j++) {
        await lives(j); //看直播
        await $.wait(1000);
    }
    await $.wait(30000);
    await queryvideoPublishId(0) //视频列表
    for (let i = 0; i < Length; i++) {
        await play(i) //看视频
        await $.wait(1000);
        await video(i);
    }
}

//红包雨请求
function hbyqq(i) {
    return new Promise((resolve) => {
        // setTimeout(() => {
        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            do
                playTime = Math.floor(Math.random() * 31);
            while (playTime < 20)
            do
                playTimess = Math.floor(Math.random() * 36);
            while (playTimess < 30)
            do
                playid = Math.floor(Math.random() * 4960000000000000);
            while (playid < 1000000000000000)
            hbyqqbodyVal = `{"videoPublishId":"135${playid}","playTimeLenght":${playTime},"type":1,"videoTime":${playTimess}}`;
        let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/video/ignore_tk/v1/video_channel/uplaod_play_video_recode.json`,
            headers: JSON.parse(header),
            body: hbyqqbodyVal,

        }
        $.post(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 红包雨请求🚩: ${data}`);
                $.hbyqq = JSON.parse(data);
                if ($.hbyqq.resultCode == 1) {
                    console.log('红包雨请求：成功\n')
                    $.message += '【红包雨请求】：成功\n';
                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })
        //   }, timeout)
    })
}

//红包雨领取
function hbylq(i) {
    return new Promise((resolve) => {

        hbylqbodyVal = `{
 "actId": "319"
}`
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_redbag_by_redbag_rain.json`,
            headers: {
                "Connection": "keep-alive",
                "Accept-Encoding": "gzip, deflate, br",
                "version": "1.4.8",
                "timestamp": "1612931484515",
                "mchtNo": "100529600058887",
                "Content-Type": "application/json; charset=utf-8",
                "source": "VEISHOP_APP_IOS",
                "shopkeeperId": "1148855820752977920",
                "User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)",
                "signature": "95872F01-6A5D-4391-BEFD-88981ECC2ED8",
                "X-User-Agent": "VeiShop, 1.4.8 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)",
                "token": "9fd266f9fb104960b3b68f1a7e17a16e",
                "traceid": "313504258621921607681612929655144a4b82bfa26fc",
                "Host": "veishop.iboxpay.com",
                "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7",
                "Accept": "*/*",
                "random": "D62C4C8E-72BE-40FE-A0D7-BC735855B157"
            },
            body: hbylqbodyVal,
        }
        $.post(url, async(err, resp, data) => {
            try {
                //$.log(data);
                if (logs)
                    $.log(`${O}, 红包雨领取🚩: ${data}`);
                $.hbylq = JSON.parse(data);
                if ($.hbylq.resultCode == 1 && $.hbylq.data.goldCoinAmt != 0) {
                    console.log(`${O} 红包雨领取：本次领取 ${$.hbylq.data.goldCoinAmt}金币,预估金额${$.hbylq.data.goldCoinAmt / 10000} 元\n`)
                    $.message += `【${O} 红包雨领取】：本次领取 ${$.hbylq.data.goldCoinAmt}金币,预估金额${$.hbylq.data.goldCoinAmt / 10000} 元\n`

                }
                if ($.hbylq.resultCode == 1 && $.hbylq.data.goldCoinAmt == 0) {
                    console.log(`${O} 红包雨领取：${$.hbylq.data.redbagDesc}\n`)
                    $.message += `【${O} 红包雨领取】：${$.hbylq.data.redbagDesc}\n`;
                }
                if ($.hbylq.resultCode == 0) {
                    console.log(`${O} 红包雨领取：${$.hbylq.errorDesc}\n`);
                    $.message += `【${O} 红包雨领取】：${$.hbylq.errorDesc}\n`;
                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}

//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}

function cktime() {
    $.message += '【CK获取时间】：' + time(Number(oldtime)) + '\n'
};
//TOKEN更新
function refreshtoken(i) {
    return new Promise((resolve) => {
        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts()}`);
        refreshtokenbodyVal = `{"refreshToken":"${refreshtokenVal}","source":"VEISHOP_APP_IOS"}`;

        let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_user_auth_web/uc/ignore_tk/v1/refresh_access_token_to_c.json`,
            headers: JSON.parse(header),
            body: refreshtokenbodyVal,
        };
        $.post(url, async(err, resp, data) => {
            try {

                if (logs)
                    $.log(`${O}, TOKEN更新🚩: ${data}`);
                $.refreshtoken = JSON.parse(data);
                if ($.refreshtoken.resultCode == 1) {
                    TOKEN[i] = $.refreshtoken.data.accessToken
                        console.log(`【${$.name+(i+1)}】更新TOKEN成功:` + TOKEN[i]);

                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve();
            }
        })
    })
}
//用户名
function user(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_user_center_web/shopkeeper/v1/get_context_info.json`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 用户名🚩: ${data}`);
                $.user = JSON.parse(data);
                if ($.user.resultCode == 1) {

                    console.log(`========== 【${$.user.data.customerInfo.nickname}】 ==========`);
                    resolve(true);
                }

                if ($.user.resultCode == 0) {
                    $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                    if ($.isNode()) {
                        notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                    }
                    resolve(false);
                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}
//金币信息
function goldcoin(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/balance.json?source=WX_APP_KA_HTZP`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                //$.log(data);
                if (logs)
                    $.log(`${O}, 金币信息🚩: ${data}`);
                $.goldcoin = JSON.parse(data);
                console.log('【金币信息】今日金币' + $.goldcoin.data.coinSum + ',预估金额' + $.goldcoin.data.balanceSum / 100 + '元');
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}
//活动id
function hdid(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/ignore_tk/v1/query_act_list.json?source=WX_APP_KA_HTZP`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 活动id🚩: ${data}`);
                $.hdid = JSON.parse(data);
                if ($.hdid.resultCode == 1) {
                    spid[i] = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 9)
                        zbid[i] = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 10)
                        //hbyid[i] = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 11)
                        console.log('【' + spid[i].actName + 'ID】：' + spid[i].actId)
                        console.log('【' + zbid[i].actName + 'ID】：' + zbid[i].actId);
                    //console.log('【' + hbyid[i].actName + 'ID】：' + hbyid[i].actId) ;

                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}
//账户信息
function coin(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/withdraw_detail.json?source=WX_APP_KA_HTZP`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 账户信息🚩: ${data}`);
                $.coin = JSON.parse(data);

                $.log('【账户信息】可提余额' + $.coin.data.balance / 100 + ',明日入账' + $.coin.data.tomorrowAmt / 100 + '元');
                if ($.coin.data.balance / 100 >= 30)
                    CASH[i] = 30;
                else if ($.coin.data.balance / 100 >= 15)
                    CASH[i] = 15;
                else
                    CASH[i] = 1;

            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}

//视频id
function queryvideoPublishId(i) {
    return new Promise((resolve) => {
        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/video/ignore_tk/v1/video_channel/query_video_list.json?current=1&returnCount=0&size=1`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 活动id🚩: ${data}`);
                result = JSON.parse(data);

                playid = result.data.records[0].videoPublishId;
                $.log("\n【视频ID】" + playid)
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })
    })
}

//播放
function play(i) {
    return new Promise((resolve) => {
        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        do
            playTime = Math.floor(Math.random() * 31);
        while (playTime < 20)
        do
            playTimess = Math.floor(Math.random() * 36);
        while (playTimess < 30)

        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            playbodyVal = `{"videoPublishId":"${playid}","playTimeLenght":${playTime},"type":1,"videoTime":${playTimess}}`;
        videoPublishId = `${playid}`
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/video/ignore_tk/v1/video_channel/uplaod_play_video_recode.json`,
            headers: JSON.parse(header),
            body: playbodyVal,
        }
        $.post(url, async(err, resp, data) => {
            try {
                //console.log(data)
                if (logs)
                    $.log(`${O}, 播放ID${i+1}🚩: ${data}`);
                $.play = JSON.parse(data);
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })
    })
}
//视频
function video(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            videobodyVal = `{"type":1,"videoList":[{"videoId":"${videoPublishId}","type":1,"isFinishWatch":false}],"actId":"${spid[0].actId}"}`
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
            headers: JSON.parse(header),
            body: videobodyVal,
        }
        $.post(url, async(err, resp, data) => {
            try {

                if (logs)
                    $.log(`${O}, 视频🚩: ${data}`);
                $.video = JSON.parse(data);
                if ($.video.data && $.video.data.goldCoinNumber != 0) {
                    console.log(`【视频奖励】${$.name+(i+1)}开始领取视频奖励，获得${$.video.data.goldCoinNumber}金币`);
                }
                if ($.video.resultCode == 0) {
                    //console.log('【视频奖励】⚠️' + $.video.errorDesc + '\n');
                    console.log(`【视频奖励】${$.name+(i+1)}达到上限`);
                }
                if ($.video.data && $.video.data.goldCoinNumber == 0) {
                    console.log(`【视频奖励】${$.name+(i+1)}已灰，已无法获取视频奖励`);
                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })
    })
}

//直播节目表
function liveslist(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/live/ignore_tk/v1/query_living_list_id.json?size=60`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 直播节目表🚩: ${data}`);
                $.liveslist = JSON.parse(data);
                if ($.liveslist.resultCode == 1) {
                    liveId[i] = $.liveslist.data.liveIdList
                        liveIdcd[i] = liveId[i].length

                        console.log(`直播节目表，当前${liveIdcd[i]}个直播\n`);
                }
                if ($.liveslist.resultCode == 0) {
                    console.log($.liveslist.errorDesc + '\n');
                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}
//直播
async function lives(j) {
    Waittime = 0;
    for (let i = 0; i < Length; i++) {
        if (LiveTime[i] != 30) {
            IDNum = j;
            await singlelive(i);
            Waittime = 30000;
        } else {
            console.log(`【直播奖励】${$.name+(i+1)}达到直播上限`);
        }
    }
    await $.wait(Waittime);
}

function singlelive(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`);
        livesbodyVal = `{"actId": "${zbid[0].actId}","liveId": "${liveId[0][`${IDNum}`]}"}`;

        let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_redbag_by_live.json`,

            headers: JSON.parse(header),
            body: livesbodyVal,
        }
        $.post(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 直播🚩: ${data}`);
                $.lives = JSON.parse(data);

                if ($.lives.resultCode == 1) {

                    console.log(`【直播奖励】${$.name+(i+1)}领取第${parseInt(`${IDNum}`)+1}次直播奖励，获得${$.lives.data.goldCoinAmt}金币,等待30秒继续`);
                }
                if ($.lives.resultCode == 0) {

                    console.log(`【直播奖励】${$.name+(i+1)}领取第${parseInt(`${IDNum}`)+1}次直播奖励，${$.lives.errorDesc},等待30秒继续`);

                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })

}

//收益列表
function sylist(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/list_gold_coin.json?source=WX_APP_KA_HTZP&date=&actTypeId=0&size=600`,
            headers: JSON.parse(header),
        }
        $.get(url, async(err, resp, data) => {
            try {
                //$.log(data)
                if (logs)
                    $.log(`${O}, 收益列表🚩: ${data}`);
                $.sylist = JSON.parse(data);
                if ($.sylist.resultCode == 1) {
                    if (ddtime == $.sylist.data[0].obtainDate) {
                        live = JSON.stringify($.sylist.data[0]).match(/:500,/g);
                        if (live == null)
                            LiveTime[i] = 0;
                        else
                            LiveTime[i] = live.length;
                        console.log('【直播明细】今日已获得直播奖励 ' + LiveTime[i] + ' 次，共' + LiveTime[i] * 500 + '金币\n')
                    } else {
                        LiveTime[i] = 0;
                        console.log('【直播明细】今日已获得直播奖励 ' + LiveTime[i] + ' 次，共' + LiveTime[i] * 500 + '金币\n')
                    }

                }
                if ($.sylist.resultCode == 0) {
                    console.log($.sylist.errorDesc + '\n');

                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}

//提现
function withdraw(i) {
    return new Promise((resolve) => {

        iboxpayheaderVal = iboxpayheaderArr[i];
        refreshtokenVal = refreshTokenID[i];
        traceid = iboxpayheaderVal["traceid"];
        token = iboxpayheaderVal["token"];
        oldtime = traceid.substr(traceid.indexOf("161"), 13);
        O = (`${$.name + (i + 1)}🔔`);
        header = JSON.stringify(iboxpayheaderVal).replace(`${token}`, `${TOKEN[i]}`).replace(`${oldtime}`, `${tts()}`)
            withdrawbodyVal = `{
                "source": "WX_APP_KA_HTZP",
                "bizType": 2,
                "amount": ${CASH[i]*100}
            }`
            let url = {
            url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/activity/v1/withdraw.json`,
            headers: JSON.parse(header),
            body: withdrawbodyVal,
        }
        $.post(url, async(err, resp, data) => {
            try {
                if (logs)
                    $.log(`${O}, 提现🚩: ${data}`);
                $.withdraw = JSON.parse(data);
                if ($.withdraw.resultCode == 1 && $.withdraw.data.withdrawRes == 1) {
                    console.log('【余额提现】成功提现 ' + CASH[i] + ' 元')
                }
                if ($.withdraw.resultCode == 1 && $.withdraw.data.withdrawRes == 2) {
                    console.log('【余额提现】' + $.withdraw.data.remark)
                }
                if ($.withdraw.resultCode == 0) {
                    console.log('【余额提现】' + $.withdraw.errorDesc);
                }
            } catch (e) {
                $.logErr(e, resp);
            }
            finally {
                resolve()
            }
        })

    })
}
// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : ``;
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, ``) : e
                    } catch (t) {
                        e = ``
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
