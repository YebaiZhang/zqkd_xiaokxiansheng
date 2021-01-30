/* ziye 

github地址 https://github.com/ziye12
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/ziye.boxjs.json

转载请备注个名字，谢谢
⚠️笑谱

1.15 调整金蛋延迟为60秒
1.17 增加ck失效提醒，以及金币满额停止
1.27 笑谱恢复，活动id284


⚠️一共1个位置 1个ck  👉 2条 Secrets 
多账号换行

第一步 添加  hostname=veishop.iboxpay.com,

第二步 添加header重写 

点击 我的 获取header
iboxpayheaderVal 👉XP_iboxpayHEADER

设置提现变量 可设置 1 15 30 100 
CASH  👉  XP_CASH

⚠️主机名以及重写👇

hostname=veishop.iboxpay.com
#笑谱获取header
https:\/\/veishop\.iboxpay\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js

############## loon
#笑谱获取header
http-request https:\/\/veishop\.iboxpay\.com\/* script-path=https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js, requires-header=true, tag=笑谱获取header

############## surge
#笑谱获取body
笑谱获取body = type=http-request,pattern=https:\/\/veishop\.iboxpay\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js, script-update-interval=0


*/







const $ = Env("笑谱");
$.idx = ($.idx = ($.getval('iboxpaySuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;

const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1// 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2;// 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 

const CS=6

$.message = '', COOKIES_SPLIT = '', CASH = '', LIVE = '';
let ins=0
const iboxpayheaderArr = [];
let iboxpayheaderVal = ``;
let middleiboxpayHEADER = [];

//时间
const nowTimes = new Date(
  new Date().getTime() +
  new Date().getTimezoneOffset() * 60 * 1000 +
  8 * 60 * 60 * 1000
);

iboxpayheader=[{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7","Connection": "keep-alive","Content-Type": "application/json; charset=utf-8","Host": "veishop.iboxpay.com","User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)","X-User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)","mchtNo": "100529600058887","shopkeeperId": "1148855820752977920","source": "VEISHOP_APP_IOS","token": "3a5ecacea20745edb680b5f6f28f1842","traceid": "300000000000000000001611802533754000000000000","version": "1.4.4",},
{'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `1.4.4`,
'mchtNo' : `100529600058887`,
'Content-Type' : `application/json; charset=utf-8`,
'source' : `VEISHOP_APP_IOS`,
'shopkeeperId' : `1148855820752977920`,
'User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
'token' : `8e98582d5ece46358d8e61dc6591d215`,
'X-User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
'traceid' : `31350618275326124032161172172820147c0a4b847c0`,
'Host' : `veishop.iboxpay.com`,
'Accept-Language' : `zh-Hans;q=1, en;q=0.9`,
'Accept' : `*/*`},
{'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `1.4.4`,
'mchtNo' : `100529600058887`,
'Content-Type' : `application/json; charset=utf-8`,
'source' : `VEISHOP_APP_IOS`,
'shopkeeperId' : `1352478788058406912`,
'User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 78455E13-DD41-43BD-B55F-9101507E9C73)`,
'token' : `a3df95347e88450b97a24991f9890b09`,
'X-User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 78455E13-DD41-43BD-B55F-9101507E9C73)`,
'traceid' : `30000000000000000000161180410790200002bfa26fc`,
'Host' : `veishop.iboxpay.com`,
'Accept-Language' : `zh-Hans-CN;q=1`,
'Accept' : `*/*`},
{'Connection' : `keep-alive`,
'Accept-Encoding' : `br, gzip, deflate`,
'version' : `1.4.4`,
'mchtNo' : `100529600058887`,
'Content-Type' : `application/json; charset=utf-8`,
'source' : `VEISHOP_APP_IOS`,
'shopkeeperId' : `1352464952811118592`,
'User-Agent' : `VeiShop, 1.4.4 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510874)`,
'token' : `3a2c2421582b485ab82f03d51b60f5de`,
'X-User-Agent' : `VeiShop, 1.4.4 (iOS, 12.4.7, zh_CN, Apple, iPhone, C6C2BED7-4CB5-450E-917B-EDF576510874)`,
'traceid' : `3134723830697786572816118051566652bfa26fca4b8`,
'Host' : `veishop.iboxpay.com`,
'Accept-Language' : `zh-Hans;q=1, en;q=0.9`,
'Accept' : `*/*`},
{'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `1.4.4`,
'mchtNo' : `100529600058887`,
'Content-Type' : `application/json; charset=utf-8`,
'source' : `VEISHOP_APP_IOS`,
'shopkeeperId' : `1352436465475837952`,
'User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)`,
'token' : `63bb54409de04db9b1da8d892b100f35`,
'X-User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 95872F01-6A5D-4391-BEFD-88981ECC2ED8)`,
'traceid' : `3134725293711706521616120011249282a7f2bfa26fc`,
'Host' : `veishop.iboxpay.com`,
'Accept-Language' : `zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7`,
'Accept' : `*/*`},
{'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `1.4.4`,
'mchtNo' : `253681078159371`,
'Content-Type' : `application/json; charset=utf-8`,
'source' : `VEISHOP_APP_IOS`,
'User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
'X-User-Agent' : `VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, 4B4F2713-499B-4701-97DF-F48E510FE843)`,
'traceid' : `3000000000000000000016119903943412bfa26fc2a7f`,
'Host' : `veishop.iboxpay.com`,
'Accept-Language' : `zh-Hans;q=1, en;q=0.9`,
'Accept' : `*/*`
}]

refreshTokenID=['2b071e135d9149049d395598669c0552','121f8fcae1e7427ebcc67fea4e2b9411','5efd43e8852b42cfb1844afe2e13ed01','3939f148beeb44ae8249c704e9d8837c','f5de6d4171e842738ccca927addb7dc1','61bd17ec5502459d81659f3737711cc1']

Length = iboxpayheader.length
let limitcount=[];

for(let i = 0; i < Length; i++)
{
	limitcount[i]=0;
}

LIVE=0;

console.log(
  `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
  `============ 共 ${Length} 个${$.name}账号=============\n`
);
console.log(`============ 提现标准为：${CASH} =============\n`);
if (LIVE >=1 ){ 
console.log(`============ 看直播开启 =============\n`);
}else {
console.log(`============ 看直播关闭 =============\n`);
}

  !(async () => {
	  while(true)
	  {
		let sum=0  
		 for(let i = 0; i < Length; i++)
	     {
		  sum+=limitcount[i];
		 }
	  
		if(sum==Length)
		{
		await $.log("所有账号都达到上限");
		return;
		}
		await all();
		//await msgShow();
		  
	  }
   
  })()
      .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
      })
      .finally(() => {
        $.done();
      })

async function all() {


	 for (let i = 0; i < Length; i++) {
	
  iboxpayheaderVal = iboxpayheader[i];  

ts = Math.round((new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000)/1000).toString();

traceid=iboxpayheaderVal["traceid"];
oldtime=traceid.substr(traceid.indexOf("161"),13);
  O = (`${$.name + (i + 1)}🔔`);
  await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)


  await refreshtoken(i) ;
  let cookie_is_live = await user(i + 1);//用户名
  await lives(i);//看直播
  await sylist();//收益列表
     }
   limitcount[0]   
  }
  
  
  
  
  function refreshtoken(num) {
  return new Promise((resolve) => {
  const url = "https://veishop.iboxpay.com/nf_gateway/nf_user_auth_web/uc/ignore_tk/v1/refresh_access_token_to_c.json";
  const body = "{\"refreshToken\":\""+refreshTokenID[num]+"\",\"source\":\"VEISHOP_APP_IOS\"}";
  if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
  const request = {
      url: url,
      headers: JSON.parse(header),
      body: body
  };
  $.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.resultCode==1)
		{
			iboxpayheader[num].token=result.data.accessToken;
			$.log("刷新token成功");
		}
	    else
		{
			$.log("刷新token失败");
			$.log(data);
			
		}
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
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
//用户名
function user(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
//$.log(header);
      let url = {
        url: `https://veishop.iboxpay.com/nf_gateway/nf_user_center_web/shopkeeper/v1/get_context_info.json`,
        headers: JSON.parse(header),		
      }
	  
      $.get(url, async(err, resp, data) => {
        try {
			
          if (logs) $.log(`${O}, 用户名🚩: ${data}`);
          $.user = JSON.parse(data);
		  if($.user.resultCode == 0) {
let cookie_not_live_message = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()  + "❌❌❌COOKIE失效";	           
        $.msg(O, cookie_not_live_message);
if($.isNode()){      
        notify.sendNotify(O, cookie_not_live_message);
	  }	       
        resolve(false);
      } else {
        $.message +=`\n${O}`;
        $.message += `\n========== 【${$.user.data.customerInfo.nickname}】 ==========\n`;
		$.log(`========== 【${$.user.data.customerInfo.nickname}】 ==========`);
        resolve(true);
      }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
//金币信息  
function goldcoin(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
	  let url = {
        url:`https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/balance.json?source=WX_APP_KA_HTZP`,        
        headers: JSON.parse(header),
      }
      $.get(url, async(err, resp, data) => {
        try {
			
          if (logs) $.log(`${O}, 金币信息🚩: ${data}`);
          $.goldcoin = JSON.parse(data);
 $.message +='【金币信息】：今日金币'+$.goldcoin.data.coinSum+',预估金额'+$.goldcoin.data.balanceSum/100+'元'+'\n';
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
//账户信息  
function coin(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
	  let url = {
        url:`https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/withdraw_detail.json?source=WX_APP_KA_HTZP`,        
        headers: JSON.parse(header),
      }
      $.get(url, async(err, resp, data) => {
        try {
			
			
          if (logs) $.log(`${O}, 账户信息🚩: ${data}`);
          $.coin = JSON.parse(data);
 $.message +='【账户信息】：可提余额'+$.coin.data.balance/100+',明日入账'+$.coin.data.tomorrowAmt/100+'元'+'\n';
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
//播放
function play(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
		for (let i = 0; i < CS; i++) {
        setTimeout(() => {	
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
		do playTime = Math.floor(Math.random()*31);
        while( playTime < 20 )
		do playTimess = Math.floor(Math.random()*41);
        while( playTimess < 30 )
		do playid = Math.floor(Math.random()*49600000000000000);
        while( playid < 10000000000000000 )
playbodyVal=`{"videoPublishId":"13${playid}","playTimeLenght":${playTime},"type":1,"videoTime":${playTimess}}`;
videoPublishId=playbodyVal.substring(playbodyVal.indexOf("videoPublishId")+17,playbodyVal.indexOf(`","pl`))
if(i==2){
videoPublishId3=playbodyVal.substring(playbodyVal.indexOf("videoPublishId")+17,playbodyVal.indexOf(`","pl`))
}
if(i==3){
videoPublishId4=playbodyVal.substring(playbodyVal.indexOf("videoPublishId")+17,playbodyVal.indexOf(`","pl`))
}
if(i==4){
videoPublishId5=playbodyVal.substring(playbodyVal.indexOf("videoPublishId")+17,playbodyVal.indexOf(`","pl`))
}
if(i==5){
videoPublishId6=playbodyVal.substring(playbodyVal.indexOf("videoPublishId")+17,playbodyVal.indexOf(`","pl`))
}
console.log(`视频ID${i+1}📍${videoPublishId}`)
      let url = {
        url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/video/ignore_tk/v1/video_channel/uplaod_play_video_recode.json`,
        headers: JSON.parse(header),
		body: playbodyVal,
      }
      $.post(url, async(err, resp, data) => {
        try {
          if (logs) $.log(`${O}, 播放ID${i+1}🚩: ${data}`);
          $.play = JSON.parse(data);
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
	  }, i * 30000);
      }	  
    },timeout)
  })
}
//视频
function video(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
		for (let i = 0; i < CS; i++) {
$.index = i+1
        setTimeout(() => {	
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
		videobodyVal=`{"type":1,"videoList":[{"videoId":"${videoPublishId}","type":1,"isFinishWatch":false}],"actId":"284"}`
      let url = {
        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
        headers: JSON.parse(header),
        body: videobodyVal,
      }
      $.post(url, async(err, resp, data) => {
        try {
          if (logs) $.log(`${O}, 视频🚩: ${data}`);
          $.video = JSON.parse(data);		  
		  if($.video.resultCode == 0) {
        $.message +='⚠️'+$.video.errorDesc+'\n'      
        resolve(false);
      } else {
        console.log(`开始领取第${i+1}次视频奖励，获得${$.video.data.goldCoinNumber}金币\n`);
ins +=$.video.data.goldCoinNumber;
       
      }
await $.wait($.index*30000-29000);	  
  $.message +=  
`【视频奖励】：共领取${$.index}次视频奖励，共${ins}金币\n`
   resolve(true);
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
	  }, i * 30000);
      }	
    },timeout)
  })
}
//金蛋视频
function goldvideo(timeout = 60000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{		
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
		goldvideobodyVal=`{"type":2,"videoList":[{"videoId":"${videoPublishId3}","type":1,"isFinishWatch":false},{"videoId":"${videoPublishId4}","type":1,"isFinishWatch":false},{"videoId":"${videoPublishId5}","type":1,"isFinishWatch":false},{"videoId":"${videoPublishId6}","type":1,"isFinishWatch":false}],"actId":"284"}`
      let url = {
        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
        headers: JSON.parse(header),
        body: goldvideobodyVal,
      }
      $.post(url, async(err, resp, data) => {
        try {
          if (logs) $.log(`${O}, 金蛋视频🚩: ${data}`);
          $.goldvideo = JSON.parse(data);
	if ($.goldvideo.resultCode==1){	
      console.log('金蛋视频奖励，获得'+$.goldvideo.data.goldCoinNumber+'金币')
	  $.message +=  
  '【金蛋视频奖励】：获得'+$.goldvideo.data.goldCoinNumber+'金币\n'
	   }    
       if ($.goldvideo.resultCode==0){	
console.log($.goldvideo.errorDesc+'\n');
$.message +=  
  '【金蛋视频奖励】：'+$.goldvideo.errorDesc+'\n';
	    }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
//直播
function lives(accNum) {
  return new Promise((resolve) => {
    setTimeout( ()=>{		
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();
	do liveid = Math.floor(Math.random()*4274552669282305);
        while( liveid < 3654320204128256 )
header=JSON.stringify(iboxpayheaderVal).replace(`${oldtime}`, `${tts}`)
		livesbodyVal=`{
 "actId": "283",
 "liveId": "135${liveid}"
}`
      let url = {
        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_redbag_by_live.json`,
        headers: JSON.parse(header),
        body: livesbodyVal,
      }
      $.post(url, async(err, resp, data) => {
        try {
			
          if (logs) $.log(`${O}, 直播🚩: ${data}`);
          $.lives = JSON.parse(data);
	if ($.lives.resultCode==1){	
      console.log('直播奖励，获得'+$.lives.data.goldCoinAmt+'金币')
	  $.message +=  
  '【直播奖励】：获得'+$.lives.data.goldCoinAmt+'金币\n'
	   }    
       if ($.lives.resultCode==0){
		   limitcount[accNum]=1;
console.log($.lives.errorDesc+'\n');
$.message +=  
  '【直播奖励】：'+$.lives.errorDesc+'\n';
	    }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },30000)
  })
}
//收益列表
function sylist(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{		
if ($.isNode()) {
	tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 ).toString();
}else tts = Math.round(new Date().getTime() +
new Date().getTimezoneOffset() * 60 * 1000 +8 * 60 * 60 * 1000).toString();		
      let url = {
        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/list_gold_coin.json?source=WX_APP_KA_HTZP&date=&actTypeId=0&size=60`,
        headers: JSON.parse(header),
      }
      $.get(url, async(err, resp, data) => {
        try {
          if (logs) $.log(`${O}, 收益列表🚩: ${data}`);
          $.sylist = JSON.parse(data);
	if ($.sylist.resultCode==1 && data.match(/500/g)){		
 livecs = JSON.parse(data).data[0].totalCoinAmt/500;	
      console.log('已获得直播奖励 '+livecs+' 次，共'+JSON.parse(data).data[0].totalCoinAmt+'金币\n')
	  $.message +=  
  '【直播收益】：已获得直播奖励 '+livecs+' 次，共'+JSON.parse(data).data[0].totalCoinAmt+'金币\n'
	   }    
       if ($.sylist.resultCode==0){	
console.log($.sylist.errorDesc+'\n');
$.message +=  
  '【直播收益】：'+$.sylist.errorDesc+'\n';
	    }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
//提现
function goldcointowallet(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
	  let body =`auth=${pcpopclub}&userid=${app_userid}&cashtype=3&goldcoin_amount=${CASH*10000}&validatecode=&faceno=&a=18&pm=1&v=1.7.0&device_id=${app_deviceid}&sessionid=${sessionid}&_timestamp=${tts}`
      let url = {
        url: `https://mobile.app.autohome.com.cn/fasthome/goldcoin/goldcointowallet`,
        headers: JSON.parse(iboxpayheaderVal),
		body: body,
      }
      $.post(url, async(err, resp, data) => {
        try {
          if (logs) $.log(`${O}, 提现🚩: ${data}`);
          $.goldcointowallet = JSON.parse(data);
if($.goldcointowallet.returncode==0)
  $.message += `【现金提现】:成功提现${CASH}元\n`;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log(``,`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,``).trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):``;if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,``):e}catch(t){e=``}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+``).substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((``+e[s]).length)));return t}msg(e=t,s=``,i=``,r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=[``,"==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log(``,`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log(``,`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log(``,`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}


