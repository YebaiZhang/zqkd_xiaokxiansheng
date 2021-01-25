
const $ = new Env('文旅看点')

let Cookie = $.getdata('vlkd_ck')
if ($.isNode()) {
      console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
}
let artid;
let notice;



if (typeof $request !== 'undefined') {
   if ($request ) {
     const Cookie = JSON.stringify($request.headers)
if(Cookie)$.setdata(Cookie,'vlkd_ck')
     $.log(`Cookie:${Cookie}`)
     $.msg($.name,"获取Cookie成功")
     $.done()
   }
}




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

for (let i = 0; i < 150; i++) {
		
	   await GetArtlist();
	    
	}
	
	
}  


function GetArtlist() {
  return new Promise((resolve, reject) => {
  const url = "http://app.zhongchuanjukan.com/jkd/newmobile/artlist.action";
  const body=	'jsondata={"appid":"xzwl","connectionType":"100","optaction":"up","operatorType":"2","channel":"iOS","appversioncode":"102","articlevideo":"0","time":"1611322700","cateid":"3","openid":"12f498e6382246848a07689acf06506b","os":"iOS","idfa":"00000000-0000-0000-0000-000000000000","apptoken":"xzwltoken070704","appversion":"1.0.2","page":2}';

  const request = {
      url: url,
      headers: JSON.parse(Cookie),
      body: body
  };

$.post(request, async(error, request, data) =>{
      try {
		  
			let Jsondata = JSON.parse(data)
			if (Jsondata.ret == "ok"){
		 	
			   for(let artlist of Jsondata.artlist){
				    //$.log(artlist.item_type)
				   if(artlist.item_type=="article")
				   {
						let artTitle = artlist.art_title;
						artid =artlist.art_id;
                        $.log(" 【阅读文章】: "+artTitle);
						notice=" 【阅读文章】: 阅读完成,文章id:"+artid+",等待30s执行下一次阅读...";                        						
						await Readarticle(notice);
						await $.wait(30000);
						await Getreward();
				   }
				    if(artlist.item_type=="video")
				   {
					   $.log(" 【777】");
						let artTitle = artlist.art_title;
						artid =artlist.art_id;
                        $.log(" 【观看视频】: "+artTitle);
						notice=" 【观看视频】: 观看完成,视频id:"+artid+",等待30s执行下一次阅读...";
						await Readarticle(notice);
						await $.wait(30000);
						await Getreward();
				   }		   
			   }
		  }
		 
		 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
});
};



function Readarticle(notice) {
  return new Promise((resolve, reject) => {
  const url = `http://wlapp.ccdy.cn/jkd/weixin20/station/stationarticle.action?articleid=${artid}&openID=12f498e6382246848a07689acf06506b&ce=iOS&request_id=1611322700504870&scene_type=art_recommend_iOS&articlevideo=0&version=1.0.2&account_type=1&channel=iOS&shade=1&a=UJ-shFkMM9q-ifyjyWhPpA==&font_size=1&scene_type=&request_id=1611322700504870`;

  const body = "";
  const headers = {

};
  const request = {
      url: url,
      headers: headers,
      body: body
  };
  

$.post(request, async(error, request, data) =>{
      try {	
			  $.log(notice);					 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
});
};



function Getreward() {
  return new Promise((resolve, reject) => {
  const url = "http://app.zhongchuanjukan.com/jkd/account/readAccount.action";
  const body = `jsondata={"read_weal":0,"appid":"xzwl","securitykey":"","paytype":1,"channel":"iOS","apptoken":"xzwltoken070704","appversioncode":"102","time":"1611322747","appversion":"1.0.2","openid":"12f498e6382246848a07689acf06506b","os":"iOS","artid":"${artid}","accountType":"0","readmodel":"1"}`;
 
  const request = {
      url: url,
      headers: JSON.parse(Cookie),
      body: body
  };
  

$.post(request, async(error, request, data) =>{
      try {
		 
			let Jsondata = JSON.parse(data);
			if (Jsondata.ret == "ok")
		 	 $.log(" 【收益成功】: 获得收益: +"+Jsondata.profit);
			else if (Jsondata.ret == "fail")
		 	 $.log(" 【收益失败】: "+data);	
			else
			 $.log(data);	
						 
      } catch(e) {
			$.log(e)
      }	
      resolve();  
    });
});
};





function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}
isNode()
{return"undefined"!=typeof module&&!!module.exports}
isQuanX()
{return"undefined"!=typeof $task}
isSurge()
{return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}
isLoon(){return"undefined"!=typeof $loon}
toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}
toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}
getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}
setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}
getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}
runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}
loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}
writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}
lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}
lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}
getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}
setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}
getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}
setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}
initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}
get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}
post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}
time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}
msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}
log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}
logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}
wait(t){return new Promise(e=>setTimeout(e,t))}
done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
