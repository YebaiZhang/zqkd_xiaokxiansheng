



const $ = new Env('步步寶')
let notice = ''


if ($.isNode())    
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
	  


CookieArr=[{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Content-Length": "0","Cookie": "PHPSESSID=muvh9j954nnrueuddc2l65dah4","Host": "bububao.duoshoutuan.com","User-Agent": "BBB/133 CFNetwork/1209 Darwin/20.2.0","idfa": "00000000-0000-0000-0000-000000000000","imei": "AD035F49-5B70-4AF0-AF18-DF6067A0204F","platform": "2","store": "appstore","tokenstr": "95B939DA1ED80E998E13F59B3527794G1613471646","version": "11"},
{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Content-Length": "0","Cookie": "PHPSESSID=t5le1vodjjtbba663jaok4bkh7","Host": "bububao.duoshoutuan.com","User-Agent": "BBB/133 CFNetwork/1209 Darwin/20.2.0","idfa": "00000000-0000-0000-0000-000000000000","imei": "AD035F49-5B70-4AF0-AF18-DF6067A0204F","platform": "2","store": "appstore","tokenstr": "AB559B4CD6DE8D3A1F3783B8C531203G1613479221","version": "11"},
{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "close","Content-Length": "0","Cookie": "PHPSESSID=m4jfop06alg76t0n74mmfkirs7","Host": "bububao.duoshoutuan.com","User-Agent": "BBB/133 CFNetwork/1209 Darwin/20.2.0","idfa": "00000000-0000-0000-0000-000000000000","imei": "AD035F49-5B70-4AF0-AF18-DF6067A0204F","platform": "2","store": "appstore","tokenstr": "18E6EB85BAFE9DE539A35D3DB531204G1613479618","version": "11"},
{'store' : `appstore`,
'tokenstr' : `1B7B45B00A6FB335CFB050420526472G1611307963`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'version' : `10`,
'idfa' : `A601E0C1-2F41-4967-8A9C-9E3CCA978FF2`,
'User-Agent' : `BBB/132 CFNetwork/1209 Darwin/20.2.0`,
'platform' : `2`,
'imei' : `6A23A82D-9A0E-41C2-85E7-71D4D982A4DD`,
'Cookie' : `PHPSESSID=8ae84od70t7nks6rfb5u0c83f4`,
'Host' : `bububao.duoshoutuan.com`,
'Accept-Language' : `zh-cn`,
'Accept' : `*/*`}]
let dayjinbi=0;
let lasttxTime=0;
now = new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000);  


!(async () => {
	for(let i=1;i<=CookieArr.length;i++)
	{
		CookieVal=CookieArr[i-1];
		await userInfo()
		await txAction()
		await signIn()
		await zaoWanDkInfo()
		await sleepStatus()
		await checkWaterNum()
		await clickTaskStatus()
		await watchTaskStatus()
		await getNewsId()
		await getQuestionId()
		await guaList()
		await checkHomeJin()
	}
       
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())




function showmsg(){
    $.msg($.name, '', notice)
     }

var getBoxId = (function () {
    var i = 0;
    return function () {
        return ++i;
    };
})();
function autoTx(){
	if(dayjinbi<5000)
	{
		$.log('【自动提现】今日金币'+dayjinbi+'少于5000，请先赚金币');
		return;	
	}
	nowTime=new Date().getTime()+8*60*60*1000;
	let nowdate=new Date(nowTime).toLocaleDateString();
	let lastdate=new Date(lasttxTime).toLocaleDateString();

	if(lastdate==nowdate)
	{
		pertx=new Date(lasttxTime).toLocaleString('chinese',{hour12:false})	
		nowtx=new Date(nowTime).toLocaleString('chinese',{hour12:false})
		$.log('【自动提现】上次提现:'+pertx+'，本次提现:'+nowtx+'，今日已提现，请明天再试');
		return;	
	}
	else
		return new Promise((resolve, reject) => {
			let userInfo =
			{
				url: 'https://bububao.duoshoutuan.com/user/tixian?',
				headers: CookieVal,
				body: `tx=0.3&`,
			}
			$.post(userInfo,async(error, response, data) =>{
				const txResult = JSON.parse(data)
				if(response.statusCode == 200 && txResult.code != -1)
				{
					$.log('【自动提现】提现成功') 
				}
				else
				{
					$.log('【自动提现】提现失败 '+txResult.tip+":"+txResult.msg) 
					//$.log(txResult.tip+":"+txResult.msg)
				}
				resolve()
			})
		})
		
	
}
function txAction() {
	return new Promise((resolve, reject) => {
		let userInfo ={
			url: 'https://bububao.duoshoutuan.com/user/tixian_record?',
			headers: CookieVal,
		}
		$.post(userInfo,async(error, response, data) =>{
			const txRecord = JSON.parse(data)
			if(response.statusCode == 200)
			{
				if(txRecord.length>0)
				{
					lasttxTime=new Date(txRecord[0].add_time).getTime();
				}
				else
					lasttxTime=0;
				autoTx();			
			}
			resolve()
		})
	})
  } 

function userInfo() {
	return new Promise((resolve, reject) => {
		 let timestamp=new Date().getTime();
		 let userInfo =
		 {
		 	url: 'https://bububao.duoshoutuan.com/user/profile',
		 	headers: CookieVal,
		 }
		 $.post(userInfo,async(error, response, data) =>{
		 const userinfo = JSON.parse(data)
		 if(response.statusCode == 200 && userinfo.code != -1)
		 {
		 	dayjinbi=userinfo.day_jinbi;
		 	$.log('==========【'+userinfo.username+'】==========')
			$.log('【当前金币】'+userinfo.jinbi+', 约'+userinfo.money+'元')
		 }
		 else
		 {
		 	$.log('️異常原因: '+userinfo.msg)
		 }
		 resolve()
		 })
	})
  } 





function signIn() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let signin =
		{
			url: `https://bububao.duoshoutuan.com/user/sign`,
			headers: CookieVal,
		}
		$.post(signin,async(error, response, data) =>{
			const sign = JSON.parse(data)
			if(sign.code == 1) 
			{
				$.log('【自动签到】'+sign.msg+'签到金币+ '+sign.jinbi)
				signInStr = sign.nonce_str
				await signDouble()
			}
			else
			{
				$.log('【自动签到】'+sign.msg)
			}
			resolve()
		})
	})
  } 

function signDouble() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let signdouble =
		{
			url: `https://bububao.duoshoutuan.com/you/callback`,
			headers: CookieVal,
			body: `nonce_str=${signInStr}&tid=2&pos=1&`,
		}
		$.post(signdouble,async(error, response, data) =>{
			const signin2 = JSON.parse(data)
			if(signin2.code == 1) 
			{
				$.log('【签到翻倍】签到翻倍成功')
			}
			else
			{
				$.log('️【签到翻倍】签到翻倍失败:'+signin2.msg+'')
			}
			resolve()
		})
	})
} 

function zaoWanDkInfo() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let zaowandkinfo =
		{
			url: `https://bububao.duoshoutuan.com/mini/dk_info`,
			headers: CookieVal,
		}
		$.post(zaowandkinfo,async(error, response, data) =>{
			const zwdkinfo = JSON.parse(data)
			//$.log(data)
			if(zwdkinfo.code == 1 && zwdkinfo.is_dk == 0) 
			{
				nowTime = zwdkinfo.now_time
				title1 = zwdkinfo.title1
				title2 = zwdkinfo.title2
				await zaoWanDk()
			}
		
				resolve()
		})
	})
  } 



function zaoWanDk() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let zaowandk =
		{
			url: `https://bububao.duoshoutuan.com/user/chuansj`,
			headers: CookieVal,
			body: `mini_pos=3&c_type=1&`,
		}
		$.post(zaowandk,async(error, response, data) =>{
			const zwdk = JSON.parse(data)
			//$.log(data)
			if(zwdk.code == 1) 
			{
				zwdkStr = zwdk.nonce_str
				await $.wait(30000)
				await dkClick()
			}
			resolve()
		})
	})
} 

function dkClick() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let dkclick ={
			url: `https://bububao.duoshoutuan.com/mini/dk_click`,
			headers: CookieVal,
			body: `now_time=${nowTime}&`,
		}
		$.post(dkclick,async(error, response, data) =>{
			const clickdk = JSON.parse(data)
			if(clickdk.code == 1) 
			{
				$.log('【早起打卡】'+clickdk.msg+'+ '+clickdk.jinbi)
			}
			else
			{
				$.log('️【早起打卡】'+clickdk.msg)
			}
			resolve()
		})
	})
  } 


function guaList() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let gualist ={
    url: `https://bububao.duoshoutuan.com/gua/gualist?`,
    headers: CookieVal,
}
   $.post(gualist,async(error, response, data) =>{
$.log('開始查詢刮刮卡ID')
     const guaid = JSON.parse(data)
      if(guaid.ka > 0){
      for (guaId of guaid.list)
	  {
		   if(guaId.is_ad == 0)
		   {
			   guaID = guaId.id
			   $.log('查詢刮刮卡ID成功,5s後開始刮卡,ID: '+guaID)
			   await $.wait(5000)
			   await guaDet()
		   }
				
		  
	  }
     
         }else{
$.log('️刮刮卡已用完,請明天再刮吧！')
        }

          resolve()
    })
   })
  } 

function guaDet() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let guadet ={
    url: `https://bububao.duoshoutuan.com/gua/guadet?`,
    headers: CookieVal,
    body: `gid=${guaID}&`
}
   $.post(guadet,async(error, response, data) =>{
$.log('開始查詢刮卡簽名')
     const guasign= JSON.parse(data)
      if(response.statusCode == 200) {
$.log('查詢刮卡簽名成功')
      SIGN = guasign.sign
      GLID = guasign.glid
$.log('sign: '+SIGN)
$.log('glid: '+GLID)
          await guaPost()
         }
          resolve()
    })
   })
  } 

function guaPost() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let guapost ={
    url: `https://bububao.duoshoutuan.com/gua/guapost?`,
    headers: CookieVal,
    body: `sign=${SIGN}&gid=${guaID}&glid=${GLID}&`
}
   $.post(guapost,async(error, response, data) =>{
$.log('開始刮卡')
     const guaka= JSON.parse(data)
      if(typeof guaka.jf === 'number') {
      guaStr = guaka.nonce_str
          $.log('刮卡成功恭喜您刮出'+guaka.tp+'張相同圖案金幣+ '+guaka.jf+'等待45s後開始翻倍刮卡獎勵')
          await $.wait(45000)
          await guaDouble()
         }
          resolve()
    })
   })
  } 


function guaDouble() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let guadouble ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${guaStr}&tid=6&pos=1&`,
}
   $.post(guadouble,async(error, response, data) =>{
     const guaka2 = JSON.parse(data)
     $.log('领取刮卡翻倍觀看獎勵')
      if(guaka2.code == 1) {
          $.log('刮卡翻倍成功')
          await $.wait(2000)
           }else{
          $.log('️刮卡翻倍失敗:'+guaka2.msg)
           }
          resolve()
    })
   })
  } 



function checkWaterNum() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let checkwaternum =
		{
			url: `https://bububao.duoshoutuan.com/mini/water_info`,
			headers: CookieVal,
		}
		$.post(checkwaternum,async(error, response, data) =>{
			
			const waternum = JSON.parse(data)
			if(waternum.code == 1 && waternum.day_num < 7)
			{
				waterNum = waternum.day_num
				if(waternum.is_sp == 1)
				{
					
					await $.wait(1000)
					await checkWaterSp()
				}
				else
				{
				
					await $.wait(1000)
					await waterClick()
				}
			}
			else
			{
				$.log('️【养生喝水】喝水失敗: 今日喝水已上限')
			}
			resolve()
		})
	})
} 

function checkWaterSp() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let checksp =
		{
			url: `https://bububao.duoshoutuan.com/user/chuansj`,
			headers: CookieVal,
			body: `mini_pos=2&c_type=1&`,
		}
		$.post(checksp,async(error, response, data) =>{
			const sp = JSON.parse(data)
			if(sp.code == 1) 
			{
				waterSpStr = sp.nonce_str
				await WaterSp()
			}
			resolve()
		})
	})
} 

function WaterSp() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let watersp =
		{
			url: `https://bububao.duoshoutuan.com/mini/water_sp`,
			headers: CookieVal,
			body: `day_num=${waterNum}&`,
		}
		$.post(watersp,async(error, response, data) =>{
			const spwater = JSON.parse(data)
			if(spwater.code == 1) 
			{
				//$.log('正在觀看喝水廣告, 30後領取喝水獎勵')
				//await $.wait(30000)
				await waterClick()
			}
			resolve()
		})
	})
} 

function waterClick() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let waterclick =
		{
			url: `https://bububao.duoshoutuan.com/mini/water_click`,
			headers: CookieVal,
			body: `day_num=0${waterNum}&`,
		}
		$.post(waterclick,async(error, response, data) =>{
			const clickwater = JSON.parse(data)
			//$.log('開始領取喝水獎勵')
			if(clickwater.code == 1) 
			{
				$.log('【喝水养生】'+clickwater.msg+'喝水金幣+ '+clickwater.jinbi+'💰')
			}
			else
			{
				$.log('【喝水养生】️喝水失敗:'+clickwater.msg+'')
			}
			resolve()
		})
	})
} 


function sleepStatus() {
	return new Promise((resolve, reject) => {
	let timestamp=new Date().getTime();
	let sleepstatus =
	{
		url: `https://bububao.duoshoutuan.com/mini/sleep_info`,
		headers: CookieVal,
	}
		$.post(sleepstatus,async(error, response, data) =>{
			//$.log('開始查詢睡覺狀態')
			//$.log(data)
			const slpstatus = JSON.parse(data)
				if(slpstatus.code == 1) 
				{
					if(slpstatus.is_lq == 1)
					{
						sleepStr = slpstatus.nonce_str
						sleepId = slpstatus.taskid
					}
					if(slpstatus.is_sleep == 1) 
					{
						$.log('【睡觉状态】睡觉中...')
						await $.wait(5000)
						await sleepEnd()
					}
					if(slpstatus.is_sleep == 0 && slpstatus.is_lq == 0 ) 
					{
						$.log('【睡觉状态】开始睡觉')
						await $.wait(5000)
						await sleepStart()
					}
				}
				resolve()
		})
	})
 } 



function sleepStart() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let sleepstart =
		{
			url: `https://bububao.duoshoutuan.com/mini/sleep_start`,
			headers: CookieVal,
		}
		$.post(sleepstart,async(error, response, data) =>{
			const startsleep = JSON.parse(data)
			
			if(startsleep.code == 1)
			{
				$.log('【开始睡觉】睡觉成功')
			}
			else
			{
				$.log('️开始睡觉】睡觉失败:'+startsleep.msg+'')
			}
			resolve()
		})
	})
} 

function sleepEnd() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let sleepend =
		{
			url: `https://bububao.duoshoutuan.com/mini/sleep_end`,
			headers: CookieVal,
		}
		$.post(sleepend,async(error, response, data) =>{
			const endsleep = JSON.parse(data)
			//$.log('開始起床')
			if(endsleep.code == 1) 
			{
				$.log('起床了！別睡了！')
				await sleepDone()
			}
			else
			{
				$.log('️【结束睡觉】起床失败:'+endsleep.msg)
			}
			resolve()
		})
	})
} 

function sleepDone() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let sleepdone =
		{
			url: `https://bububao.duoshoutuan.com/mini/sleep_done`,
			headers: CookieVal,
			body: `taskid=${sleepId}&nonce_str=${sleepStr}&`
		}
		$.post(sleepdone,async(error, response, data) =>{
			const donesleep = JSON.parse(data)
			//$.log('開始領取睡覺金幣')
			if(donesleep.code == 1) 
			{
				$.log('【结束睡觉】'+donesleep.msg+'金币+ '+donesleep.jinbi)
			}
			else
			{
				$.log('️【结束睡觉】领取睡觉金币失败:'+donesleep.msg+'')
			}
			resolve()
		})
	})
} 

function clickTaskStatus() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let clicktaskstatus =
		{
			url: `https://bububao.duoshoutuan.com/user/renwu`,
			headers: CookieVal,
			body: `idfa=${CookieVal['idfa']}&`,
		}
		$.post(clicktaskstatus,async(error, response, data) =>{
			const clicktask = JSON.parse(data)
			if(clicktask.first.admobile_st != 2)
			{
				//$.log('開始查詢每日點擊任務狀態')
				await checkDailyClickAdId()
			}
			else
			{
				$.log('️【广告任务】每日点击广告任务达上限')
			}
			resolve()
		})
	})
} 

function watchTaskStatus() {
	return new Promise((resolve, reject) => {
	let timestamp=new Date().getTime();
	let watchtaskstatus =
	{
		url: `https://bububao.duoshoutuan.com/user/renwu`,
		headers: CookieVal,
		body: `idfa=${CookieVal['idfa']}&`,
	}
		$.post(watchtaskstatus,async(error, response, data) =>{
			const watchtask = JSON.parse(data)
			//$.log('開始查詢每日觀看廣告任務狀態')
			if(watchtask.v_st != 2) 
			{
				$.log('每日觀看廣告任務狀態查詢成功,1s後查詢每日觀看廣告ID')
				await $.wait(1000)
				await checkDailyWatchAdId()
			}
			else
			{
				$.log('️【广告任务2】每日看廣告任務已上限')
			}
			resolve()
		})
	})
} 


function checkDailyWatchAdId() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checkdailywatchadid ={
    url: `https://bububao.duoshoutuan.com/user/chuansj`,
    headers: CookieVal,
    body: `mini_pos=0&c_type=1&`,
}
   $.post(checkdailywatchadid,async(error, response, data) =>{
$.log('開始查詢每日觀看廣告ID')
     const dailywatchid = JSON.parse(data)
      if(dailywatchid.code == 1) {
      dailyWatchStr = dailywatchid.nonce_str
         // $.log(''+dailyWatchStr+'')
          $.log('查詢成功,30s後領取獎勵')
          await $.wait(30000)
          await DailyWatchAd()
           }
          resolve()
    })
   })
  } 


function DailyWatchAd() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let dailywatchad ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${dailyWatchStr}&tid=9&pos=1&`,
}
   $.post(dailywatchad,async(error, response, data) =>{
     const dailywatch = JSON.parse(data)
$.log('開始領取每日觀看獎勵')
      if(dailywatch.code == 1) {
          $.log('每日觀看獎勵領取成功,5m(300s)後查詢下一次廣告')
          for(let i=1;i<=60;i++){
              (function(){
                  setTimeout(() => {
                    $.log('⏱請等待'+(60-i)*5+'s後查詢下一次廣告')
                  }, 5000*i);
              })()
          }
          await $.wait(300000)
          await watchTaskStatus()
           }else{
          $.log('️每日獎勵領取失敗:'+dailywatch.msg)
           }
          resolve()
    })
   })
  } 

function checkDailyClickAdId() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let checkdailyclickadid =
		{
			url: `https://bububao.duoshoutuan.com/user/admobile_show`,
			headers: CookieVal,
		}
		$.post(checkdailyclickadid,async(error, response, data) =>{
			$.log('開始查詢每日廣告ID')
			const dailyclickid = JSON.parse(data)
			if(dailyclickid.code == 1)
			{
				dailyClickAdId = dailyclickid.ad_id
				$.log('查詢成功,1s後領取獎勵')
				await $.wait(1000)
				await checkDailyClickAd()
			}
			resolve()
		})
	})
  } 


function checkDailyClickAd() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checkdailyclickad ={
    url: `https://bububao.duoshoutuan.com/user/admobile_click`,
    headers: CookieVal,
    body: `ad_id=${dailyClickAdId}&`,
}
   $.post(checkdailyclickad,async(error, response, data) =>{
$.log('開始查詢每日廣告點擊ID')
     const dailyclick = JSON.parse(data)
      if(dailyclick.code == 1) {
      dailyClickStr = dailyclick.nonce_str
         // $.log(''+dailyClickStr+'')
          $.log('查詢成功,5s後返回領取獎勵')
          await $.wait(5000)
          await DailyClickAd()
           }
          resolve()
    })
   })
  } 

function DailyClickAd() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let dailyclickad ={
    url: `https://bububao.duoshoutuan.com/user/admobile_done`,
    headers: CookieVal,
    body: `nonce_str=${dailyClickStr}&ad_id=${dailyClickAdId}&`,
}
   $.post(dailyclickad,async(error, response, data) =>{
     const dailyclick = JSON.parse(data)
$.log('開始領取每日點擊獎勵')
      if(dailyclick.code == 1) {
          $.log('每日點擊獎勵領取成功,1s後查詢下一次廣告ID')
          await $.wait(1000)
          await clickTaskStatus()
           }else{
          $.log('️每日點擊領取失敗:'+dailyclick.msg)
           }
          resolve()
    })
   })
  } 



function checkHomeJin() {
	return new Promise((resolve, reject) => {
		let timestamp=new Date().getTime();
		let checkhomejin =
		{
			url: 'https://bububao.duoshoutuan.com/user/home',
			headers: CookieVal,
		}
		$.post(checkhomejin,async(error, response, data) =>{   
			const checkhomejb = JSON.parse(data)
			//$.log(rightTime)
			rightTime=(typeof checkhomejb.right_time !== 'undefined')?checkhomejb.right_time:0;
			//$.log(rightTime)
			if(checkhomejb.right_st !=2 && rightTime > 0)
			{
				$.log('開始查詢首頁金幣狀態')
				$.log('等待'+(rightTime+5)+'s领取首页金币')
				await $.wait(rightTime*1000+5000)
				await homeJin()
			}
			else if(checkhomejb.right_st == 0 && rightTime <= 0)
			{
				$.log('開始查詢首頁金幣狀態')
				await homeJin()
			}
			else if(checkhomejb.right_st == 2 && checkhomejb.jindan_show != 2)
			{
				$.log('開始查詢首頁金蛋狀態')
				$.log('等待'+(checkhomejb.jindan_djs+5)+'s领取金蛋獎勵')
				await $.wait(checkhomejb.jindan_djs*1000+5000)
				await checkGoldEggId()
			}
			else if(checkhomejb.right_st == 2 && checkhomejb.jindan_show == 2 && checkhomejb.hb_st == 0)
			{
				$.log('開始查詢首頁紅包狀態')
				await checkRedBagId()
			}
			else if(checkhomejb.right_st == 2 && checkhomejb.jindan_show == 2 && checkhomejb.hb_st == 1)
			{
				$.log('開始查詢首頁紅包狀態')
				$.log('等待'+(checkhomejb.hb_time+5)+'s領取首頁紅包')
				time = checkhomejb.hb_time+5
				for(let i=1;i<=(time/5);i++)
				{
					(function(){
						setTimeout(() => {
							$.log('⏱請等待'+((time/5-i)*5)+'s後領取首頁紅包')
						}, 5000*i);
					})()
				}
				await $.wait(checkhomejb.hb_time*1000+5000)
				await checkRedBagId()
			}
			else if(checkhomejb.right_st == 2 && checkhomejb.jindan_show == 2 && checkhomejb.hb_time < 0)
			{
				await checkRedBagId()
			}
			else if(checkhomejb.right_st == 2 && checkhomejb.jindan_show == 2 && checkhomejb.hb_st == 2)
			{
				$.log('首頁金幣狀態:'+checkhomejb.right_text+'首頁紅包狀態:'+checkhomejb.hb_text+'首頁金蛋狀態:'+checkhomejb.jindan_text+'')
			}
			resolve()
		})
   })
  } 


function homeJin() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let homejin ={
    url: 'https://bububao.duoshoutuan.com/user/homejin',
    headers: CookieVal,
}
   $.post(homejin,async(error, response, data) =>{
     const homejb = JSON.parse(data)
     if(homejb.code == 1){
$.log('開始領取首頁金幣')
          $.log('首頁金幣:'+homejb.msg+'金幣+ '+homejb.jinbi+'等待30s後開始翻倍金幣')
         homeJinStr = homejb.nonce_str
          //$.log(''+homeJinStr+'')
          await $.wait(30000)
          await homeJinCallBack()
    }else{
          $.log('️首頁金幣失敗:'+homejb.msg)
           }
          resolve()
    })
   })
  } 



function homeJinCallBack() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let homejincallback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${homeJinStr}&tid=21&pos=1&`,
}
   $.post(homejincallback,async(error, response, data) =>{
     const hmjcallback = JSON.parse(data)
$.log('開始翻倍首頁金幣')
      if(hmjcallback.code == 1) {
          $.log('首頁金幣翻倍成功')
          await checkHomeJin()
           }else{
          $.log('首頁金幣翻倍失敗'+hmjcallback.msg)
           }
          resolve()
    })
   })
  } 

function checkRedBagId() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checkredbagid ={
    url: `https://bububao.duoshoutuan.com/user/chuansj`,
    headers: CookieVal,
    body: `mini_pos=0&c_type=2&`,
}
   $.post(checkredbagid,async(error, response, data) =>{
$.log('開始查詢首頁紅包ID')
     const code = JSON.parse(data)
      if(code.code == 1) {
      redBagStr = code.nonce_str
$.log('查詢首頁紅包ID成功,等待30s後領取首頁紅包')
          await $.wait(30000)
          await redBagCallback()
           }
          resolve()
    })
   })
  } 

function redBagCallback() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let redbagcallback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${redBagStr}&tid=17&pos=1&`,
}
   $.post(redbagcallback,async(error, response, data) =>{
     const redbag = JSON.parse(data)
$.log('開始領取首頁紅包')
      if(redbag.code == 1) {
          $.log('首頁紅包領取成功')
          await checkHomeJin()
           }else{
          $.log('️首頁紅包領取失敗:'+redbag.msg)
          await checkHomeJin()
           }
          resolve()
    })
   })
  } 

function checkGoldEggId() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checkgoldeggid ={
    url: `https://bububao.duoshoutuan.com/user/jindan_click`,
    headers: CookieVal,
}
   $.post(checkgoldeggid,async(error, response, data) =>{
     const goldeggid = JSON.parse(data)
      if(goldeggid.code == 1) {
$.log('金蛋ID data'+data)
$.log('開始查詢首頁金蛋ID')
      goldEggStr = goldeggid.nonce_str
          $.log(goldEggStr)
      goldEggId = goldeggid.taskid
          $.log(goldEggId)
          await goldEggDone()
           }else{
          $.log('️首頁金蛋失敗:'+goldeggid.msg)
          await checkHomeJin()
        }
          resolve()
    })
   })
  } 

function goldEggDone() {
return new Promise((resolve, reject) => {
  let timestamp= Date.parse(new Date())/1000;
  let goldeggdone ={
    url: `https://bububao.duoshoutuan.com/user/jindan_done`,
    headers: CookieVal,
    body: `taskid=${goldEggId}&clicktime=${timestamp}&donetime=${timestamp}+1000&nonce_str=${goldEggStr}&`
}
   $.post(goldeggdone,async(error, response, data) =>{
     const goldegg2 = JSON.parse(data)
      if(goldegg2.code == 1) {
$.log('開始領取首頁金蛋獎勵')
          $.log('首頁金蛋:'+goldegg2.msg+'金幣+ '+goldegg2.jinbi)
          await goldEggCallback()
           }else{
          $.log('️首頁金蛋失敗:'+goldegg2.msg+'')
          await checkHomeJin()
           }
          resolve()
    })
   })
  } 

function goldEggCallback() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let goldeggcallback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${goldEggStr}&tid=5&pos=1&`,
}
   $.post(goldeggcallback,async(error, response, data) =>{
     const goldeggback = JSON.parse(data)
$.log('開始翻倍首頁金蛋')
      if(goldeggback.code == 1) {
          $.log('金蛋翻倍成功')
          await checkHomeJin()
           }else{
          $.log('️金蛋翻倍失敗:'+goldeggback.msg)
          await checkHomeJin()
           }
          resolve()
    })
   })
  } 

function helpStatus() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let helpstatus ={
    url: `https://bububao.duoshoutuan.com/user/help_index`,
    headers: CookieVal,
}
   $.post(helpstatus,async(error, response, data) =>{
     const help = JSON.parse(data)
$.log('開始查詢助力視頻狀態')
      if(help.status == 0) {
$.log('查詢助力視頻狀態成功, 1s後獲取助力視頻ID')
          await checkCode()
           }else{
$.log('今日助力已上限,請明天再試!')
           }
          resolve()
    })
   })
  } 


function checkCode() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checkcode ={
    url: `https://bububao.duoshoutuan.com/user/chuansj`,
    headers: CookieVal,
    body: `mini_pos=5&c_type=1&`,
}
   $.post(checkcode,async(error, response, data) =>{
     const code = JSON.parse(data)
$.log('開始查詢助力視頻ID')
      if(code.code == 1) {
      nonce_str = code.nonce_str
$.log('查詢助力視頻ID成功, 開始觀看助力視頻')
          await helpClick()
           }
          resolve()
    })
   })
  } 


function helpClick() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let helpclick ={
    url: `https://bububao.duoshoutuan.com/user/help_click`,
    headers: CookieVal,
    body: `nonce_str=${nonce_str}`,
}
   $.post(helpclick,async(error, response, data) =>{
     const help = JSON.parse(data)
      if(help.code == 1) {
$.log('開始觀看助力視頻, 60s後領取助力視頻獎勵')
          await $.wait(60000)
          $.log('觀看助力視頻成功, 1s後領取金幣+ '+help.jinbi)
          await callBack()
           }else{
          $.log('️觀看助力視頻失敗: '+help.msg)
           }
          resolve()
    })
   })
  } 



function callBack() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let callback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${nonce_str}&tid=22&pos=1&`,
}
   $.post(callback,async(error, response, data) =>{
     const back = JSON.parse(data)
$.log('開始領取助力視頻獎勵')
      if(back.code == 1) {
          $.log('領取助力視頻獎勵成功,1s後查詢下一次助力視頻狀態')
          await $.wait(1000)
          await helpStatus()
           }else{
          $.log('️助力視頻獎勵失敗:'+back.msg)
           }
          resolve()
    })
   })
  } 

function getNewsId() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let getnewsid ={
    url: 'https://bububao.duoshoutuan.com/user/news',
    headers: CookieVal,
    body: `type_class=1&`
}
   $.post(getnewsid,async(error, response, data) =>{
     const newsid = JSON.parse(data)
     if(newsid.code == 1){
       if(newsid.is_first == 1 && newsid.is_max == 0){
          $.log('開始查詢新聞ID')
          newsStr = newsid.nonce_str
          $.log('新聞ID查詢成功,15s後領取閱讀獎勵')
          await $.wait(15000)
          await autoRead()
          }else{
          $.log('️【自动阅读】閱讀失敗: 今日閱讀已上限')
          await checkLuckNum()
         }}else{
          $.log('️查詢新聞ID失敗:'+newsid.msg)
           }
          resolve()
    })
   })
  } 

function autoRead() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let autoread ={
    url: 'https://bububao.duoshoutuan.com/user/donenews',
    headers: CookieVal,
    body: `nonce_str=${newsStr}& `,
}
   $.post(autoread,async(error, response, data) =>{
     const read = JSON.parse(data)
      if(read.code == 1) {
          $.log('【自动阅读】閱讀成功,金幣+ '+read.jinbi)
            await getNewsId()
          }else{
          $.log('️【自动阅读】閱讀失敗:'+data)
           }
          resolve()
    })
   })
  } 

function checkLuckNum() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let lucknum ={
    url: `https://bububao.duoshoutuan.com/user/lucky`,
    headers: CookieVal,
}
   $.post(lucknum,async(error, response, data) =>{
     const num = JSON.parse(data)
$.log('開始查詢抽獎次數')
      if(num.lucky_num != 0) {
          $.log('剩餘抽獎次數:'+num.lucky_num+'1s後開始抽獎')
          await $.wait(1000)
          await luckyClick()
         }else if(num.lucky_num == 0) {
          $.log('️今日抽獎次數已用完,1s後查詢寶箱狀態')
          await $.wait(1000)
		  luckyboxNum=0;
       for (box of num.lucky_box){
          luckyboxNum++;
          if (box != 2)
          await luckyBox();
          if (box == 2)
          $.log('️寶箱已開啟'+luckyboxNum);
         }
       }
          resolve()
    })
   })
  } 

function luckyClick() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let luckclick ={
    url: `https://bububao.duoshoutuan.com/user/lucky_click`,
    headers: CookieVal,
}
   $.post(luckclick,async(error, response, data) =>{
     const lucky = JSON.parse(data)
$.log('開始抽獎')
      if(lucky.code == 1) {
          $.log('抽獎:'+lucky.msg+'金幣+ '+lucky.jinbi)
         luckyStr = lucky.nonce_str
          //$.log(''+luckyStr)
      if(lucky.jinbi != 0) {
          await $.wait(5000)
          await luckyCallBack()
         }else{
          await luckyClick()
         }
       }
          resolve()
    })
   })
  } 


function luckyCallBack() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let luckycallback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${luckyStr}&tid=16&pos=1&`,
}
   $.post(luckycallback,async(error, response, data) =>{
     const callback = JSON.parse(data)
$.log('開始翻倍抽獎')
      if(callback.code == 1) {
          $.log('抽獎翻倍成功')
          await $.wait(5000)
          await luckyClick()
           }else{
          $.log('️抽獎翻倍失敗:'+callback.msg)
           }
          resolve()
    })
   })
  } 

function luckyBox() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let luckybox ={
    url: `https://bububao.duoshoutuan.com/user/lucky_box`,
    headers: CookieVal,
    body: `box=${getBoxId()}&`,
}
//$.log('lockyboxBODY:'+luckybox.body+'')
   $.post(luckybox,async(error, response, data) =>{
     const boxlucky = JSON.parse(data)
$.log('開始打開寶箱')
      if(boxlucky.code == 1) {
          $.log('寶箱: '+boxlucky.msg+'金幣+ '+boxlucky.jinbi)
         luckyBoxStr = boxlucky.nonce_str
          $.log('寶箱翻倍ID'+luckyBoxStr)
          await $.wait(5000)
          await luckyBoxCallBack()
         }else{
          $.log('️寶箱失敗:'+boxlucky.msg)
         }
          resolve()
    })
   })
  } 

function luckyBoxCallBack() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let luckyboxcallback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${luckyBoxStr}&tid=16&pos=1&`,
}
   $.post(luckyboxcallback,async(error, response, data) =>{
     const boxcallback = JSON.parse(data)
$.log('開始翻倍寶箱')
      if(boxcallback.code == 1) {
          $.log('寶箱翻倍成功')
          await $.wait(1000)
           }else{
          $.log('️寶箱翻倍失敗'+boxcallback.msg)
           }
          resolve()
    })
   })
  } 



function getQuestionId() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let getquestionid ={
    url: `https://bububao.duoshoutuan.com/mini/cy_info`,
    headers: CookieVal,
}
   $.post(getquestionid,async(error, response, data) =>{
     const question = JSON.parse(data)
      if(question.code == 1 && question.day_num != 0) {
$.log('開始查詢答題ID')
         questionSite = question.site
          $.log('答題ID1⃣️: '+questionSite)
         questionId = question.cy_id
          $.log('答題ID2⃣️: '+questionId)
         spId = question.day_num
          $.log('答題視頻: '+spId)
      if(question.is_sp == 1) {
          await $.wait(5000)
          await checkSp()
         }else{
          await answerQue()
         }}else{
          $.log('️查詢答題ID成功,答題失敗: 今日答題已上限')
         }
          resolve()
    })
   })
  } 

function checkSp() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checksp ={
    url: `https://bububao.duoshoutuan.com/user/chuansj`,
    headers: CookieVal,
    body: `mini_pos=1&c_type=1&`,
}
   $.post(checksp,async(error, response, data) =>{
     const sp = JSON.parse(data)
      if(sp.code == 1) {
      spStr = sp.nonce_str
          //$.log(''+spStr+'')
          await $.wait(5000)
          await cySp()
           }
          resolve()
    })
   })
  } 

function cySp() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let cysp ={
    url: `https://bububao.duoshoutuan.com/mini/cy_sp`,
    headers: CookieVal,
    body: `day_num=${spId}&`,
}
   $.post(cysp,async(error, response, data) =>{
     const sp = JSON.parse(data)
      if(sp.code == 1) {
         // $.log(''+sp.msg+'')
          //await $.wait(5000)
          await answerQue()
           }
          resolve()
    })
   })
  } 

function answerQue() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let answerque ={
    url: `https://bububao.duoshoutuan.com/mini/cy_click`,
    headers: CookieVal,
    body: `cy_id=${questionId}&site=${questionSite}&`,
}
//$.log('answerqueBODY:'+answerque.body+'')
   $.post(answerque,async(error, response, data) =>{
     const answer = JSON.parse(data)
$.log('開始答題')
      if(answer.code == 1) {
          $.log('答題: '+answer.msg+'金幣+ '+answer.jinbi)
         answerStr = answer.nonce_str
          $.log('答題翻倍ID:'+answerStr)
          await $.wait(5000)
          await answerQueCallBack()
         }else{
          $.log('️答題失敗: '+answer.msg)
         }
          resolve()
    })
   })
  } 


function answerQueCallBack() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let answerquecallback ={
    url: `https://bububao.duoshoutuan.com/you/callback`,
    headers: CookieVal,
    body: `nonce_str=${answerStr}&tid=18&pos=1&`,
}
//$.log('answerQueCallBackBODY:'+answerquecallback.body)
   $.post(answerquecallback,async(error, response, data) =>{
     const answerback = JSON.parse(data)
$.log('開始翻倍答題金幣')
      if(answerback.code == 1) {
          $.log('答題金幣翻倍成功')
          await $.wait(5000)
          await getQuestionId()
           }else{
          $.log('️答題金幣翻倍失敗:'+answerback.msg)
           }
          resolve()
    })
   })
  } 



function checkH5Id() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let checkh5id ={
    url: `https://bububao.duoshoutuan.com/user/h5_list?`,
    headers: CookieVal,
    body: `page=1&page_limit=50&`,
}
   $.post(checkh5id,async(error, response, data) =>{
     const checkh5 = JSON.parse(data)
      if(response.statusCode == 200){
         for(ID of checkh5){
          H5ID = ID.mini_id
          $.log(H5ID)
          await doTaskH5()
         }
        }
      resolve()
    })
   })
  } 


function doTaskH5() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let dotaskh5 ={
    url: `https://bububao.duoshoutuan.com/user/h5_news?`,
    headers: CookieVal,
    body: `mini_id=${H5ID}&`,
}
   $.post(dotaskh5,async(error, response, data) =>{
   $.post(dotaskh5,async(error, response, data) =>{
     const doh5task = JSON.parse(data)
$.log('doTaskH5:'+data)
      if(response.body.indexOf('nonce_str') != -1) {
         H5Str = doh5task.nonce_str
          $.log(H5Str)
         H5TaskID = doh5task.taskid
          $.log(H5TaskID)
          //await $.wait(30000)
          await upLoadTime2()
           }else{
          $.log(data)
           }
          resolve()
    })
   })})
  } 

function upLoadTime() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let uploadtime ={
    url: `https://wapinformation.dfxwdc.com/wapreport/screen_show?encodedMsg=cWlkMTAyNjcJMTYxMDkxODY0MzAyMjkwNTYJbmV3cwllYXN0ZGF5X3dhcG5ld3MJanVuc2hpCWRmdHQtNzcxMjNkYWI3MC04YWFmCXRvdXRpYW8JaHR0cHM6Ly90b3V0aWFvLmVhc3RkYXkuY29tLwlqdW5zaGkJMQkxCTAJLy9taW5pLmVhc3RkYXkuY29tL21vYmlsZS8yMTAxMTYxMTU0MTE5NTU1NTE3NzcuaHRtbAl0b3V0aWFvCWp1bnNoaQ%3D%3D&_=1610918646639&jsonpcallback=Zepto${timestamp}`,
    headers: {"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Host": "wapunionstatis.dfxwdc.com","Referer": "https://toutiao.eastday.com/?qid=qid10267","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",},
    timeout: 30000,
}
   $.get(uploadtime,async(error, response, data) =>{
$.log('upLoadTime:'+timestamp+data)
          await $.wait(30000)
          await h5Done()
          resolve()
    })
   })
  } 

function upLoadTime2() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let uploadtime ={
    url: `https://api.clotfun.online/tiger/getConfig/a0d2cb8e06bd53b0530f8786624999db?hdggHtmlId=675`,
    headers: {"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",},
    timeout: 30000,
}
   $.get(uploadtime,async(error, response, data) =>{
$.log('upLoadTime2:'+data)
          await $.wait(30000)
          await h5Done()
          resolve()
    })
   })
  } 



function h5Done() {
return new Promise((resolve, reject) => {
  let timestamp=new Date().getTime();
  let h5done ={
    url: `https://bububao.duoshoutuan.com/user/h5_newsdone`,
    headers: CookieVal,
    body: `taskid=${H5TaskID}&nonce_str=${H5Str}&`,
    timeout: 30000,
}
   $.post(h5done,async(error, response, data) =>{
     const doneh5 = JSON.parse(data)
      if(doneh5.code == 1) {
          $.log('看看賺成功, 金幣+ '+          $.log(''+doneh5.jinbi))
           }else{
          $.log(doneh5.msg)
           }
          resolve()
    })
   })
  } 


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}