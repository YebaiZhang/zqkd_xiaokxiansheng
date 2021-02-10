const jsname='测试'
const $=Env(jsname)


let count=0;
let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6InNkZmRzZmRmZHNmZCJ9.eyJpc3MiOiJhcGltdWwxIiwiYXVkIjoiYXBpbXVsMiIsImp0aSI6InNkZmRzZmRmZHNmZCIsImlhdCI6MTYxMTI5NTI3OSwibmJmIjoxNjExMjk1Mjc5LCJleHAiOjE2MTMwMjMyNzksInVpZCI6MTY3M30.fdpmbXYkU_iNmplrFJLXg17_o4ZMqGjCG4IdHfHQCB0"
let phoneNum;
let Code;
let mid;
let waitcount;






!(async () => {
	  await all(); 
})()
    .catch((e) => {
      $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
      $.done();
    })
 
async function all() {	


	    
	await readbook(0);	
	
	await receivecoin();
	
	await watchvedio(0);
	
	await getvideoreward(0);
	
	await getvideoreward2(0);
	await userinfo();
}  
  


function readbook(i) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
  const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMTk3OTczMSwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTQ2MTMzMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xXOoavJf5RLGfAWRW81ntAFYPLXK7iTy8A_2BOZs-Te-P7YExgai1rAbJo0_Xk_WQVW3nM1O7ztQGBjWaMjvlg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210111%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.3&deliveryId=707&key=sq_app_ad&miniWua=HHnB_BNsCjFTkqj6%2B7RHyZd0aRLgeHkU4UV2pXextU8aRqmBruB2/pWZbDDJbe0dkT8xg5orbTXnKz2iytGZ9SGab8GOdY/jR3HEaa0vjnSu4aEUPnH29sADapC6mDWmZvGM7&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=E0E8C4C87F2243AF5F17BAC3BF9B9876&timestamp=1611461764&userId=1581813721&wua=HIVW_s2mVadRqXN3UyOl0M5aLl/NhqRYxKO6V44KCvlNn0hrRXZeS5WIrHa/9F%2BOa247S8mUULn/y/ghMTdhKp53QMY6M3f0vPd0bRZ4Yk7cCL5utYSE1cXsanTEf6a1Y%2BXSmrmsi2bXlssNtsJZ2mrWKB7kOQySYG88yNcFra8RtLnokJ%2BoiZlyJ1VP/yr7LAfQ3j90XfolABYT4CoecYcnR4R3s%2BDh5jgJRvXLrYFn%2BoaW/%2BulXz7Sj29I5FYnMNbUAQpDLhalgWzW0VzsPrQ/bS1PUrs38ljtztnv/ZivuyS5XdkArQmIxuaya2sxlgkcJ4JwpxjSD5XTWSMr/8PF2Pg%3D%3D";
  const headers = {
    "Cookie": "isg=BHZ2nolwCs3IL_4p_gRfCfvhzah4l7rRpjsvXeBfY9n0IxS9SCZL4-aQP3lPkLLp; cna=y9yTGMQbbU8CAXFaguAKuky8",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.3.1 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "1748",
    "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			i++;
			$.log("【阅读任务】第"+i+"次阅读成功，获得3金币");
			await $.wait(1000);
			await readbook(i);
		}
		 else
		 {	 
			 $.log("【阅读任务】阅读失败，"+result.data.awardMessage);		 
		 }
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
}  

function receivecoin() {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
  const body = "platform=1&src=&timestamp=1611461883&userId=1581813721&sqSv=1.0&appVer=4.3.1.0&placeId=&sign=a55f2ff79d999cb502be4ac899215b90&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.3%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMTk4MDIxMiwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTQ2MTgxMiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xr4etiFVziWsRv8B4f21JQLnKy44b_YlpCAmwAGkSqgLBYbVm8HmX-j1BD3W_MrhQCggUq4p_TllyCPeRLj1RQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
  const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18C66 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.1.0) 1125x2436 Winding(WV_14) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.3&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=1581813721&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=XblVsgqHUiwDAN7BcQnm2A%2Fp&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMTk4MDIxMiwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTQ2MTgxMiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xr4etiFVziWsRv8B4f21JQLnKy44b_YlpCAmwAGkSqgLBYbVm8HmX-j1BD3W_MrhQCggUq4p_TllyCPeRLj1RQ&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1212",
    "Accept-Language": "zh-cn"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		  const result=JSON.parse(data);
		if(result.status==200)
		{
			
			$.log("【收集金币】收集成功");
			
		}
		 else
		 {	 
			 $.log("【收集金币】失败，");
             $.log(data);			 
		 }
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
}  
    //调用函数
	
function watchvedio(j) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
  const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMTk3OTczMSwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTQ2MTMzMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xXOoavJf5RLGfAWRW81ntAFYPLXK7iTy8A_2BOZs-Te-P7YExgai1rAbJo0_Xk_WQVW3nM1O7ztQGBjWaMjvlg%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210111%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.3&deliveryId=525&key=sq_app_ad&miniWua=HHnB_QQrKZaTlgcMCkvqMmsj4SEmckuUWLt/qHL00p5Xl/ag9mv%2BD6REEooYDhhKMzIUgyQGTdD/A6tudDYP1cnIT18u1mN19ACDZywkx1IroZGpRBf89esNWq7j/CgLpHb91&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E7166F87234C2333D1EF24CC6A75D781&timestamp=1611461386&userId=1581813721&user_id=1581813721&wua=HIVW_UngXdgVDCtHahzHxRl/n4dKZvdNevxDLwm4ULy5EEo7i9RD6e/OpbyCZCqcHctAXYfcW1M3Olh2G1kg7gNku7k1FG2ZPq29TqBhB00VEBE2bXdMaiVCvbtQXHAgjxiGUat2dlKknwJam95/aNQ6EzfEP9kqFx6jtrBy2/l6pSmYDj1G1Fv4DmUeupL9i2O8PsnaLs7Rc/v51f0zfgUXGc1sRk2Xko%2BuoHS2zZYStp1R5g3AsSQI%2BYFRskNeRTIs7AceWjYx4TiVmqRFugfzhpThEmE2mUi5ed/gQNafGtmp0byQ4ViRHL1oqWbjImOAPjryCsQPbyIOkiYmvDK/pww%3D%3D";
  const headers = {
    "Cookie": "isg=BO3tuKnOcUDp2BUscWlU9Lwk9o1nSiEcIrQqUi_yhQRupgdY95rs7bFklvxAPTnU; cna=y9yTGMQbbU8CAXFaguAKuky8",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.3.1 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "1772",
    "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			j++;
			$.log("【视频任务】观看第"+j+"个视频成功，等待30s观看下一个视频");
			await $.wait(30000);
			await watchvedio(j);
		}
		 else
		 {	 
			 $.log("【视频任务】观看失败，"+result.message);
			 
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
	
function getvideoreward(k) {
  return new Promise((resolve, reject) => {
  const url = "https://api-access.pangolin-sdk-toutiao-b.com/api/ad/union/sdk/reward_video/reward/";
  const body = "{\"message\":\"2S6JlWRty2bsy6VLzm16RUz19CRXFMVcvYmrrrvWckuxVkbJHLxIYI3oPBqq7zSFMELy4j5a\\/\\/Kj0eBMlwzjx\\/R2gpJsgAocJHV+MpUByIBZRzdbSjDQGEEn7UR4jBA7bCB1ouG5oTyKuzF8\\/IdK2y72ZzLh7GSnRdoR8WGcGTcbbRqeVi6AtP8bpT0sp6gMwucYTxMT20VowQHE06kLqE95TIDcD+el6rBxQMNC1q9lhO5CAgNpAZBdqCAyEJbi8A6RHs9z+GqUvi0ifUshLj7ef5H4LtE0E22ffi0xqj\\/+godhqn4NUreAkLuzP+cYdTB8NQQbFcg\\/MBI99u5G5PKp3vZYeFMaLBQsjiRq4brFqQqfDM6X6KvCrSw0dsjbTI6LpVmycxj37waMMqOWmGjsMATOQHS6TLuPJnabZtt3s7yoPYdw0o7hcKr7acRMkSFDqCXFp7z1dsX9bhAUFYP\\/QfWz\\/J0cFxfyJ7dkqq7N24v937nQdbMMcTo02OipzUGVhtlLTcIykcQ+X6gTHZ4hlDeEgHj+lOUYbG2Q4EAraP0lDvSnSdVV7MFiwv7XfzBUoLfNkRU\\/4+MWrjYKIw3jkwj6YpVRxHhAnvXHsOgx4aUxqL1C6WLuBssXITGx+3hNhoaQlUfih2JKWYqkBEpkK0hoypF3HFS2edKaluAgtJZKvgvk8N+nIfViwfYWlQ9QAALWh8uQxfRqKkq\\/ip6yYmVtWE\\/3mW\\/3iVrZaHBDhOv6+ccEdkGkVmbS+Ps\\/SxBXWgTp\\/LKDzNTcd1G8R4GuCIeXhUvoIKYth\\/cxliIHCHddKapY6GSWMN46gQ2HKY96mYOkZRgEC\\/gURmEOmuKPwk7lK5GChxOoINleHSboipkQ9ggZupoABpBCn5hHb3HQ7yusREszjrjU5puyszS+\\/\\/3g55XQimpu3Hspll03WxQEwSR59ko0911E3LjqPxjoWgsll+r7v0L1Kgh9eBRyIq6rCbDP2+PGCJgFVoOF9JHHsq5LMPg\\/RGdoS8Ijf61x0CJrapcpLA6jzEUl8DX9ElcvSxBtyqZCFGKvmAoP3peci7AmwQcmhlRHivDnMIlA7vNKfZFN+4ugmFpPsww28hhQSoIzfaVgHYdnZInLjhef6gXsoj2yco7duVR4gUaYNatDKiprfqkNZgAvHKyh8Uwb+ywkpqImuUqGz7IiWE8QU2+vAf1aSjBG+R+pdziuzmw\\/KS1zxrzrq6k2TY2hIICTQzEhlG0srn05cOd\\/8434EV0gIUos2Ex2fT5XFUwtZ\\/f4ImK\\/S11JfGCYPNM6c5oYy76Yi0SFCNezoJ\\/rjLWszmRI8+UZL4g4mj3\\/ooCyECEaWVH8keG+qaLybBsu2A2Sg9KE4q3ZV\\/rZ7WOxd9t\\/\\/+2umlMrMGFYz80jGaWwAOSlNBQVDmF81F\\/7gbaAJ1SJwl5wVkxKRVhTIIYDE9fBr5a1Zzp3vhbZI7DqtYgmHecaMp8fc7VzguyS\\/Ng3KDBerkequLv+Tuy1efEag0VlKJAG2xUPR6bFvhzY1SoOU4mze0J8S\\/yIjsZiOrKxPnHwFFyf6aYYDxDbZqWmUOK1AY9fRMdxYWzDF9J2ECps2xUjCeu2n9Pw9joWvMUCjP4hFLeJolI1vkooIsuWUx+JMjWhbZi6kkb0JcUssgXSj9w8zkve++w9g7x0w8V6Ety2Wztt5pATS6OnI1\\/5ZVY1koZZAPdX\\/79BVEhE\\/LJE37yYTDLlgggysvQ3eOZJhvTTBDkjr7JRZOTpTyp1C42Bof9LljI6xm5pVJAvQIY5HzPRs1LoIXqfj+1sHeF\\/RrWoZ5MOs2kBE5uW3TXzmSbs0dLvOUflRBeZdb5ji4UEa692KEBICYXfgayE4c1f4HQR+4oj9LVHYefQ6IyVXHzXDJv81JRSLUHE8ubZwQKLKA4GujkgwXgD5GBKS4170\\/t\\/CTHkZcEPZejQ2Jp6FAjM91M4eHbNCLMS\\/eQ7MIOxVFPFKW8yAqwyPh4\\/DxuwBS91NpwKZ43EVSZjtZ8AifXuKsREzIR6cX1bYZa418ETHDFjoHHZojof24JHcsOZz0ZSU3zJ+LF2SWZKdAXyKfQVZ4qeeAb78m2bJXEq0QBbe7BaEutz8VwMMaYNSkC\\/ZYWJRFtFKAeKNF2KUg8e8HASvlw0BtC6QUHEZWmL+6AUe0+wBeyoD6UMlsWgr25aFi4brhprQPVt0bOZACCPw63nXFUedprtSQ0p03HnK9fKYKhQbrvAqlJ9R4HXGSzAUFNorj8ZW+BtvapLnHIFjkBlmPLersiI715OVm8WT85bOZdXncxYCC+3Up\\/aUpSbP\\/f0h6NhOhSdrRqYh0spYqf58q8zr6kcQ8cl5\\/yn+IxzzgDRc6WSuXxT6SkJchcdloIHvB66Zd\\/2fchTIuubbG4G3HNL2QsbXjYUDnnOPvWBBw7ur1ZVVFBCpMu4Y3kls7kW5nWBpFtt90yhp4UR7dGfMC5jPDqGTn94nBwF7mwlKyJWn5zb7bSOCWqNqwgQtJFneLPfMs4iLZ+ATW4JwbDzT07xffGIqrj+4trY99tvZQccLhZl1YGPN6XfvdSOaC8KFRb+LYHoFCTw57uLvzZoVcfU4bQZTDSpNLAPkocM2tDapAC0jusbNLk56StI9rHL9uMQ79Pq0vXWhiN947pF6xNOYonxMd\\/BMMkPZKHecJaqTgY+DZiyKY9541lGhJ76zjX84lKOWAel+6RMkCGSucpDdebSZeXpxz0nqQskYy9P\\/bbDvmHZY7gPcTBFphnAsAsrEmUo1fQPNH3qiooz7Ws4zK+0G1+c\\/ybeS3Y9ktzyQWyKFYIJGviyQF+yPFkDXZc8yvYGPdPed0gHN4renwG7tsbmIpUZNqMXZvUJgwFIOk41MXnue67azMyhW2hWUKFSZtWJRJvCOrLhZafaJcBQbOC0POCUvDWU4xqkO4szPwoizbaM6MENrbfqzk46vp1iE9v5XfCTV9ib+YZ5lv3by1KgCqHdQuJKWoGndPuKfduxBZjRiHdMgWnyT1XolME5B6PENnTKnF0Kj9DWM3mw6oRUWzr\\/7\\/DHv0DwxrJQZenJFTttHAxRGlvOquq\\/FBcL0FoR1Y5Q6Miz6xmhhjSEFHaQqiIDj6tVN21VmozWF2IR6NawsbSElRczZws9XgJ9EhYG\\/q0xUz4yL34+ta1PFcxOPHmsymmwcGYh8gdJ5mPXW\\/njD8GGizbFUncHV3j0LekTpnJMAfG8+wIZenmKXbi4Db0KV2BW9fGx7NK0fQlPd1wkIvmK5j+ey8VkTB4ITx0D710jNOI+Febi9cJQdSU0WElxdrMEFwV4ndrXo\\/cK4G5rZg6Tf4P0+5OzeJBjAXnsAM+v0g7jFQ6V3b\\/3KMD0JbmKoR\\/og7HqOJqxeHdbTeg4EoTUjT6bLidbpQROGi2c7rdc\\/bFwvPMXC25PwqcSt8n1mgfRzxNBpiZHi0pZldjTyIq6oudiDic0R4aCvgsP9xqCGkOh2AmORXTpAQuJVCY8ju3DUx+qaMeQx+1eLFiZsOHxke\\/47UpvC7wg1H1sA8JQGDZx6y0AEvrg6eQxKZyGc2O3hrmXUsgTAEhx5DNb0lhhezuUKx+YjiqOgD8vZTLGueLE6kH+hFU+eghIbHAs=\",\"cypher\":2}";
  const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao-b.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "3727",
    "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		
		if(result.cypher==2)
		{
			k++;
			$.log("【抽奖广告】观看第"+k+"个视频成功，获得一次抽奖机会");
			await $.wait(5000);
			await draw(k);
		}
		 else
		 {	 
			 $.log("【抽奖广告】观看失败，");
			  $.log(data);
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
		
function draw(k) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
  const body = "wua=HIVW_HmJBltj%2BUe3K1aeq%2FPtPozXZqdJ7sjXQQKZZ8a3gyr0DUxrtBBw3iNUFQ7mHkL2NnVANAI0m4g7kJUlkG1fXstSyouP629GkKIuAdaKVqx72HGAjlRqINwL3f64fTmLpOBO1nV3Ti92PIE4KYcPS7nErpcq6TXsR4yl2ezI7o%2BcFZX0rBuF5XyxExzNgN0hQfd2gtGI3N9G58MafYV4htDpdx1twiNrW00D%2B%2BIx5FHagn%2FJvqaGSXUOXdI8jIBXWCliYFHVuUdhIdADt21bS8jnSSXd5XF1UXifkqqFdcC1JvVApYHLp7gHO12KvXAL4V24lMg369twu6XliBwOWMg%3D%3D&ua=&userId=1581813721&umidtoken=fhRLp7RLOuYHSjV3RaBbGs40CGdIqOaP&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1611771332&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b4a6a48f4b9892bb807e682160f6cd34&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.3%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DfhRLp7RLOuYHSjV3RaBbGs40CGdIqOaP%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMjI4OTUzNCwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTc3MTEzNCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V6njsyxuqlMwLeWtsA0RyUQxhhGGaGWw3QTJdlqa_g5o1lIRxXj9rZNysfGxIuocpGBqCfa1HIdPsSMFcFwZFA%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
  const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.1.0) 1125x2436 Winding(WV_3) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/lottery_page/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.3&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=1581813721&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=fhRLp7RLOuYHSjV3RaBbGs40CGdIqOaP&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMjI4OTUzNCwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTc3MTEzNCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V6njsyxuqlMwLeWtsA0RyUQxhhGGaGWw3QTJdlqa_g5o1lIRxXj9rZNysfGxIuocpGBqCfa1HIdPsSMFcFwZFA&skinColor=23B383&platform=iOS&ver=210111&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1882",
    "Accept-Language": "zh-cn"
   };
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			$.log("【抽奖任务】抽奖成功，获得"+result.data.prizeList[0].prizeName);
			await $.wait(5000);
			await getvideoreward(k);
		}
		 else
		 {	 
			 $.log("【视频任务】观看失败，"+result.message);
			// $.log(data);
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
	   
function getvideoreward2(k) {
  return new Promise((resolve, reject) => {
   const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
  const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.2.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMzE5Mzk4NywidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMjY3NTU4Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Y4wYYo7QJCkNL5g0uErRi0GJYIAE7Qi2rVka9ds5Mo6d4LDERVkymKL2TMGXeP8vwiMkn88y0Ka1RyHasGcBtA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210122%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.3&deliveryId=580&key=sq_app_ad&miniWua=HHnB_JmhFJjF5bbL3NmMmy2vk1XkO6%2Bq/uPcq2%2B/iAgLP5us%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=684&sign=E2F0F1ED07119FBCDA6D1965688B7B04&timestamp=1612675637&userId=1581813721&user_id=1581813721&wua=HIVW_dJvi4fpHYywatYJ%2BkfQBhkpWDy3uPKKAXKKf3OTZtrHkoqenwodktspd7Kn7ph5hvfuXTrYMeSXzfNk11p093HPZrU2bxNfYTk0KQm5E721os6bfgKlc4PJqwGQP58CNc95kRmyD%2BofKTLDaXgP6ldPKETTs3Zd0canwwT3Mo3DxwMBz63UDV%2Bq0%2Bd4bAPn1";
  const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BDEx7hD59d_FVVnYbT1Q6FiYSrnLHqWQQJcl5RNGLvgSOlKMW24OYeIYWEhc6T3I; cna=y9yTGMQbbU8CAXFaguAKuky8",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.3.2 (iPhone; iOS 14.3; Scale/3.00)",
    "Accept-Language": "zh-Hans-CN;q=1, zh-Hant-HK;q=0.9, hi-CN;q=0.8, en-CN;q=0.7"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		
		if(result.status==200)
		{
			k++;
			$.log("【抽奖广告2】观看第"+k+"个视频成功，获得一次抽奖机会");
			await $.wait(5000);
			await draw2(k);
		}
		 else
		 {	 
			
			  $.log("【抽奖广告2】观看失败，"+result.message);

		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
		
function draw2(k) {
  return new Promise((resolve, reject) => {
  const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=";
  const body = "wua=HIVW_HHVPqkzuqFvV07tZv2V4m3jWZz7ukEzAxolO15c60MzESIswfOOmKp97gz0uoy5V3KV9W8te0Z0GEc4Qpzp6p5%2F6baBnX51wLjXrV5kbv%2Baoao2PyeLmrZd%2BhCBAMPZGZXOenCrLctnUBLjNBk%2Bz%2FY8ji%2Fc3ZV4aJEv%2BuSddaR376H%2FKF9%2BUP4RY7cqOSF10&ua=&userId=1581813721&umidtoken=XblVsgqHUiwDAN7BcQnm2A%2Fp&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=&timestamp=1612675388&activityId=369&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=c6db79133ad5d0dfbe5e7d9695e13afa&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.3%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.2.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMzE5MzY2NCwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMjY3NTI2NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V6u6yFF_-6vG4_bZ6xKQiJIURjTC9K_fdd4DHvkoyxe_tbYwzZlvQ22c5tW8oh9NN1Lrz9OxCWeCLA9YGZyoWQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210122%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
  const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.2.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.2.0) 1125x2436 Winding(WV_3) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/sq_eleventh/?serviceWorkerOn=1&sdk=14.3&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=1581813721&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=XblVsgqHUiwDAN7BcQnm2A%2Fp&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.2.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMzE5MzY2NCwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMjY3NTI2NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V6u6yFF_-6vG4_bZ6xKQiJIURjTC9K_fdd4DHvkoyxe_tbYwzZlvQ22c5tW8oh9NN1Lrz9OxCWeCLA9YGZyoWQ&skinColor=23B383&platform=iOS&ver=210122&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1554",
    "Accept-Language": "zh-cn"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
	$.post(request, async(error, request, data) =>{
      try {
		const result=JSON.parse(data)
		//$.log(data);
		if(result.status==200)
		{
			$.log("【抽奖任务2】抽奖成功，获得"+result.data.prizeList[0].prizeName);
			await $.wait(5000);
			await getvideoreward2(k);
		}
		 else
		 {	 
			 $.log("【视频任务2】观看失败，"+result.message);
			// $.log(data);
		 }
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
} 	
	   

function userinfo() {
  return new Promise((resolve, reject) => {
 const url = "https://ocean.shuqireader.com/api/activity/xapi/gold/record?userId=1581813721&page=1&pageSize=10&sqSv=1.0&sign=d3109594d29dc9c3ea15171c5f19e2e3&key=sq_h5_gateway&_public=fe-env%253Duae-prod%2526sdk%253D14.3%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%2525252Fp%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526placeid%253D111111%2526user_id%253D1581813721%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526umidtoken%253DLhxLmAJLOivyITV3TqGS8cVeKmCfH266%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.1.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMjQ0NTg4MCwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTkyNzQ4MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.cDN9D61XMFeJF3HQDZsVgwKwb3OaOp0qbZs7tXuMxqUfLEVAxS8XyPQvVNDLEZcvwq5wpEKCHWvHMlHmhthMSg%2526skinColor%253D23B383%2526platform%253D1%2526ver%253D210111%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utype%253Dvip%2526skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000";
  const body = "{\"userId\":\"1581813721\",\"page\":1,\"pageSize\":10,\"sqSv\":\"1.0\",\"sign\":\"d3109594d29dc9c3ea15171c5f19e2e3\",\"key\":\"sq_h5_gateway\",\"_public\":\"fe-env%3Duae-prod%26sdk%3D14.3%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%25252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D1581813721%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DLhxLmAJLOivyITV3TqGS8cVeKmCfH266%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTgxODEzNzIxIiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYxMjQ0NTg4MCwidXNlcklkIjoiMTU4MTgxMzcyMSIsImlhdCI6MTYxMTkyNzQ4MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.cDN9D61XMFeJF3HQDZsVgwKwb3OaOp0qbZs7tXuMxqUfLEVAxS8XyPQvVNDLEZcvwq5wpEKCHWvHMlHmhthMSg%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000\"}";
  const headers = {
    "Origin": "https://g.alicdn.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.1.0) 1125x2436 Winding(WV_3) WK",
    "Referer": "https://g.alicdn.com/",
    "Content-Length": "1200",
    "Accept-Language": "zh-cn"
};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
  
	$.post(request, async(error, request, data) =>{
      try {
		  //$.log(data);
		  const result=JSON.parse(data);
		if(result.status==200)
		{
			
			$.log("【金币总数】"+result.data.gold);
			$.log("【总计收益】"+result.data.income+"元");
			
		}
		 else
		 {	 
			 $.log("【金币总数】异常");
             $.log(data);			 
		 }
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
  });
}  



   
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}