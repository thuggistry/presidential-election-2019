(function(t){function e(e){for(var a,s,c=e[0],o=e[1],p=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/presidential-election-2019/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"055b":function(t,e,n){t.exports=n.p+"img/6-2.439df732.png"},"0eba":function(t,e,n){t.exports=n.p+"img/4.0ddbd9a5.png"},"1d24":function(t,e,n){t.exports=n.p+"img/4-1.0a459e92.png"},"1db6":function(t,e,n){t.exports=n.p+"img/15-1.713afc57.png"},"1dd4":function(t,e,n){t.exports=n.p+"img/2-2.cc1842aa.png"},"1dec":function(t,e,n){t.exports=n.p+"img/22-1.6174af8e.png"},"220f":function(t,e,n){t.exports=n.p+"img/21-2.a35a866b.png"},2447:function(t,e,n){t.exports=n.p+"img/9-2.343c4f6d.png"},"250a":function(t,e,n){t.exports=n.p+"img/14-1.9df37f0e.png"},"265f":function(t,e,n){t.exports=n.p+"img/5-1.8e6338f8.png"},"26a7":function(t,e,n){var a={"./1.png":"5494","./2.png":"da3b","./3.png":"4a95","./4.png":"0eba"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="26a7"},2818:function(t,e,n){t.exports=n.p+"img/12-2.dcd20039.png"},3488:function(t,e,n){t.exports=n.p+"img/22-2.1aa4c578.png"},"354d":function(t,e,n){t.exports=n.p+"img/8-2.af47ee56.png"},"38b0":function(t,e,n){t.exports=n.p+"img/6-1.0df2241d.png"},"38e1":function(t,e,n){t.exports=n.p+"img/3-1.2ac8adb5.png"},4091:function(t,e,n){t.exports=n.p+"img/9-1.fd809cb1.png"},"4a95":function(t,e,n){t.exports=n.p+"img/3.0462f8bb.png"},5494:function(t,e,n){t.exports=n.p+"img/1.897d217e.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"overview-container"},[a("div",{staticClass:"overview"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDistrict,expression:"selectedDistrict"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedDistrict=e.target.multiple?n:n[0]}}},t._l(t.districts,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),0),a("div",{staticClass:"record-container"},t._l(t.districtResults[t.selectedDistrict],(function(e){return a("div",{key:e.candidateId,staticClass:"record"},[a("div",{staticClass:"candidate"},[a("img",{attrs:{src:n("26a7")("./"+e.candidateId+".png")}})]),a("div",{staticClass:"votes"},[t._v(" "+t._s(e.votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),a("div",{staticClass:"precentage"},[t._v(" "+t._s(e.precentage)+"% ")])])})),0)]),a("div",{staticClass:"map"},[a("Map",{attrs:{overlay:t.overlay}})],1)]),a("Results",{attrs:{results:t.results,districts:t.districts,selectedDistrict:t.selectedDistrict}})],1)},r=[],s=(n("cb29"),n("d81d"),n("13d5"),n("4e82"),n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._v(" Presidential Election 2019 ")])}),c=[],o={name:"Header"},p=o,d=(n("839b"),n("2877")),u=Object(d["a"])(p,s,c,!1,null,"2675d92f",null),f=u.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map-container"},[a("img",{attrs:{src:n("f8a9")}}),t._l(t.overlay,(function(t){return a("img",{key:t.id,staticClass:"overlay",style:{opacity:t.precentage+"%"},attrs:{src:n("68cd")("./"+t.id+"-"+t.lead+".png")}})}))],2)},l=[],m={name:"Map",props:{overlay:Array}},v=m,b=(n("8aaf"),Object(d["a"])(v,g,l,!1,null,"69cff1b2",null)),x=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resluts-container"},t._l(t.results.filter((function(e){return 0==t.selectedDistrict||t.selectedDistrict==e.districtId})),(function(e){return n("div",{key:e.id,staticClass:"result"},[n("div",{staticClass:"division"},[n("span",{staticClass:"districtName"},[t._v(t._s(t.districts[e.districtId].name))]),t._v(" district - "),n("span",{staticClass:"divisionName"},[t._v(t._s(e.divisionName))])]),n("div",{staticClass:"record-container"},t._l(e.count,(function(e){return n("div",{key:e.id,staticClass:"record"},[n("div",{staticClass:"candidate"},[t._v(" "+t._s(e.candidate)+" ")]),n("div",{staticClass:"votes"},[t._v(" "+t._s(e.votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),n("div",{staticClass:"precentage"},[t._v(" "+t._s(e.precentage)+"% ")])])})),0)])})),0)},_=[],h=(n("a9e3"),{name:"Results",props:{results:Array,districts:Array,selectedDistrict:Number}}),C=h,O=(n("e8cc"),Object(d["a"])(C,y,_,!1,null,"271f5216",null)),w=O.exports,j=n("bc3a"),D=n.n(j),I={1:"Gotabaya Rajapaksha",2:"Sajith Premadasa",3:"Anura Kumara Dissanayaka",4:"Other"},k={name:"app",components:{Header:f,Map:x,Results:w},data:function(){return{overlay:[],districts:[{id:0,name:"All Island"},{id:1,name:"Colombo"},{id:2,name:"Gampaha"},{id:3,name:"Kaluthara"},{id:4,name:"Mahanuwara"},{id:5,name:"Matale"},{id:6,name:"Nuwara Eliya"},{id:7,name:"Galle"},{id:8,name:"Matara"},{id:9,name:"Hambantota"},{id:10,name:"Jaffna"},{id:11,name:"Vanni"},{id:12,name:"Batticaloa"},{id:13,name:"Digamadulla"},{id:14,name:"Trincomalee"},{id:15,name:"Kurunegala"},{id:16,name:"Puttalam"},{id:17,name:"Anuradhapura"},{id:18,name:"Polonnaruwa"},{id:19,name:"Badulla"},{id:20,name:"Moneragala"},{id:21,name:"Ratnapura"},{id:22,name:"Kegalle"}],selectedDistrict:0,results:[],districtResults:[]}},created:function(){this.fetchResults(),this.timer=setInterval(this.fetchResults,6e4)},methods:{fetchResults:function(){var t=this;D.a.get("data/results.json").then((function(e){var n=Array(23).fill(null).map((function(){return{1:0,2:0,3:0,4:0}})),a=e.data.results.map((function(t,e){var a=t.count.reduce((function(t,e){return t+e.votes}),0),i=Math.floor(t.divisionId/100),r=t.count.map((function(t,e){return n[0][t.candidate]+=t.votes,n[i][t.candidate]+=t.votes,{id:e,candidate:I[t.candidate],votes:t.votes,precentage:(100*t.votes/a).toFixed(2)}}));return r.sort((function(t,e){return e.votes-t.votes})),{id:e,divisionId:t.divisionId,divisionName:t.divisionName,districtId:i,count:r}})),i=[],r=n.map((function(t,e){var n=t[1]+t[2]+t[3]+t[4],a=[{candidateId:1,votes:t[1],precentage:n?(100*t[1]/n).toFixed(2):0},{candidateId:2,votes:t[2],precentage:n?(100*t[2]/n).toFixed(2):0},{candidateId:3,votes:t[3],precentage:n?(100*t[3]/n).toFixed(2):0},{candidateId:4,votes:t[4],precentage:n?(100*t[4]/n).toFixed(2):0}];return a.sort((function(t,e){return e.votes-t.votes})),e&&i.push({id:e,lead:a[0].candidateId,precentage:a[0].precentage}),a}));t.results=a,t.districtResults=r,t.overlay=i}))}}},M=k,N=(n("034f"),Object(d["a"])(M,i,r,!1,null,null,null)),P=N.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(P)}}).$mount("#app")},5944:function(t,e,n){},"5b77":function(t,e,n){t.exports=n.p+"img/4-2.030505a8.png"},"5eee":function(t,e,n){t.exports=n.p+"img/16-2.8b18be18.png"},6831:function(t,e,n){t.exports=n.p+"img/17-2.2f5d6ca4.png"},"68cd":function(t,e,n){var a={"./1-1.png":"be9f","./1-2.png":"d62c","./10-1.png":"a319","./10-2.png":"c358","./11-1.png":"fb46","./11-2.png":"8f7a","./12-1.png":"93c3","./12-2.png":"2818","./13-1.png":"a611","./13-2.png":"83c3","./14-1.png":"250a","./14-2.png":"bb50","./15-1.png":"1db6","./15-2.png":"9ae5","./16-1.png":"baed","./16-2.png":"5eee","./17-1.png":"8d88","./17-2.png":"6831","./18-1.png":"d260","./18-2.png":"d8b3","./19-1.png":"add6","./19-2.png":"e5c5","./2-1.png":"d1f0","./2-2.png":"1dd4","./20-1.png":"da90","./20-2.png":"98d4","./21-1.png":"99b4","./21-2.png":"220f","./22-1.png":"1dec","./22-2.png":"3488","./3-1.png":"38e1","./3-2.png":"6a32","./4-1.png":"1d24","./4-2.png":"5b77","./5-1.png":"265f","./5-2.png":"aca4","./6-1.png":"38b0","./6-2.png":"055b","./7-1.png":"b2e4","./7-2.png":"9975","./8-1.png":"a51a","./8-2.png":"354d","./9-1.png":"4091","./9-2.png":"2447","./map-default.png":"f8a9"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="68cd"},"6a32":function(t,e,n){t.exports=n.p+"img/3-2.5e07e8d8.png"},"839b":function(t,e,n){"use strict";var a=n("9007"),i=n.n(a);i.a},"83c3":function(t,e,n){t.exports=n.p+"img/13-2.46cb0c71.png"},"85ec":function(t,e,n){},"8aaf":function(t,e,n){"use strict";var a=n("f2fe"),i=n.n(a);i.a},"8d88":function(t,e,n){t.exports=n.p+"img/17-1.dfc0ec93.png"},"8f7a":function(t,e,n){t.exports=n.p+"img/11-2.b8cf05a3.png"},9007:function(t,e,n){},"93c3":function(t,e,n){t.exports=n.p+"img/12-1.4d87df00.png"},"98d4":function(t,e,n){t.exports=n.p+"img/20-2.2c572eb8.png"},9975:function(t,e,n){t.exports=n.p+"img/7-2.494df04d.png"},"99b4":function(t,e,n){t.exports=n.p+"img/21-1.139b8e3f.png"},"9ae5":function(t,e,n){t.exports=n.p+"img/15-2.6001cc0e.png"},a319:function(t,e,n){t.exports=n.p+"img/10-1.ccfbab89.png"},a51a:function(t,e,n){t.exports=n.p+"img/8-1.7c0b0d0c.png"},a611:function(t,e,n){t.exports=n.p+"img/13-1.b36d912d.png"},aca4:function(t,e,n){t.exports=n.p+"img/5-2.4f066d88.png"},add6:function(t,e,n){t.exports=n.p+"img/19-1.94347f60.png"},b2e4:function(t,e,n){t.exports=n.p+"img/7-1.2965a05b.png"},baed:function(t,e,n){t.exports=n.p+"img/16-1.17ff840d.png"},bb50:function(t,e,n){t.exports=n.p+"img/14-2.c7e08855.png"},be9f:function(t,e,n){t.exports=n.p+"img/1-1.f6e8193d.png"},c358:function(t,e,n){t.exports=n.p+"img/10-2.e345a241.png"},d1f0:function(t,e,n){t.exports=n.p+"img/2-1.bef02aae.png"},d260:function(t,e,n){t.exports=n.p+"img/18-1.159a0b7a.png"},d62c:function(t,e,n){t.exports=n.p+"img/1-2.aeab425a.png"},d8b3:function(t,e,n){t.exports=n.p+"img/18-2.1cc73a86.png"},da3b:function(t,e,n){t.exports=n.p+"img/2.d57ad318.png"},da90:function(t,e,n){t.exports=n.p+"img/20-1.60ddf4aa.png"},e5c5:function(t,e,n){t.exports=n.p+"img/19-2.4b84ad7f.png"},e8cc:function(t,e,n){"use strict";var a=n("5944"),i=n.n(a);i.a},f2fe:function(t,e,n){},f8a9:function(t,e,n){t.exports=n.p+"img/map-default.81d630ac.png"},fb46:function(t,e,n){t.exports=n.p+"img/11-1.5eebaef0.png"}});
//# sourceMappingURL=app.4d3f5327.js.map