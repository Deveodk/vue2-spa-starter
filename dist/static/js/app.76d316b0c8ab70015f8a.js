webpackJsonp([1],{135:function(e,t,s){"use strict";var n=s(5),a=s(189);n.a.use(a.a),t.a=new a.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/404",name:"404",component:s(182)},{path:"*",redirect:"404"},{path:"/",name:"Index",component:s(183)}]})},136:function(e,t,s){"use strict";var n=s(5),a=s(191);n.a.use(a.a),t.a=new a.a.Store({state:{},modules:{}})},138:function(e,t){},142:function(e,t,s){s(170);var n=s(3)(s(162),s(187),null,null);e.exports=n.exports},161:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5),a=s(142),r=s.n(a),i=s(135),o=s(134),l=s.n(o),u=s(141),d=s.n(u),j=s(136),c=s(143),f=s.n(c),v=s(137),p=(s.n(v),s(140)),m=s.n(p),h=s(139),k=s.n(h),_=s(132),b=s.n(_),g=s(133),y=s.n(g),w=s(138),x=(s.n(w),s(128)),z=s.n(x);m.a.addPlugin(k.a,n.a).install(),n.a.prototype.$raven=m.a,n.a.use(b.a),n.a.use(d.a,l.a),l.a.defaults.baseURL="",n.a.use(y.a,{defaultPosition:"toast-bottom-right",defaultType:"info",defaultTimeout:5e3}),n.a.use(z.a,{HttpDriver:s(129),NotificationDriver:s(130),ReportDriver:s(131),HttpErrorCodes:{401:{title:"Ingen adgang",message:"Du har ikke adgang til at se dette",type:"error"},400:{title:"Ukendt fejl",message:"Noget gik galt",type:"error"},500:{title:"Server fejl",message:"Åhh nej noget er gået galt",type:"error"}}}),n.a.use(f.a),s(4),n.a.config.productionTip=!1,new n.a({el:"#app",store:j.a,router:i.a,template:"<App/>",components:{App:r.a}})},162:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{layout:s(181)}}},163:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"",data:function(){return{isOnline:!0}},created:function(){this.updateStatus()},components:{offline:s(180)},methods:{updateStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine,window.addEventListener("online",this.updateStatus),window.addEventListener("offline",this.updateStatus)}}}},164:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Index",data:function(){return{msg:"Something awesome is coming"}}}},168:function(e,t){},169:function(e,t){},170:function(e,t){},171:function(e,t){},174:function(e,t,s){function n(e){return s(a(e))}function a(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":12,"./af.js":12,"./ar":19,"./ar-dz":13,"./ar-dz.js":13,"./ar-kw":14,"./ar-kw.js":14,"./ar-ly":15,"./ar-ly.js":15,"./ar-ma":16,"./ar-ma.js":16,"./ar-sa":17,"./ar-sa.js":17,"./ar-tn":18,"./ar-tn.js":18,"./ar.js":19,"./az":20,"./az.js":20,"./be":21,"./be.js":21,"./bg":22,"./bg.js":22,"./bn":23,"./bn.js":23,"./bo":24,"./bo.js":24,"./br":25,"./br.js":25,"./bs":26,"./bs.js":26,"./ca":27,"./ca.js":27,"./cs":28,"./cs.js":28,"./cv":29,"./cv.js":29,"./cy":30,"./cy.js":30,"./da":4,"./da.js":4,"./de":33,"./de-at":31,"./de-at.js":31,"./de-ch":32,"./de-ch.js":32,"./de.js":33,"./dv":34,"./dv.js":34,"./el":35,"./el.js":35,"./en-au":36,"./en-au.js":36,"./en-ca":37,"./en-ca.js":37,"./en-gb":38,"./en-gb.js":38,"./en-ie":39,"./en-ie.js":39,"./en-nz":40,"./en-nz.js":40,"./eo":41,"./eo.js":41,"./es":43,"./es-do":42,"./es-do.js":42,"./es.js":43,"./et":44,"./et.js":44,"./eu":45,"./eu.js":45,"./fa":46,"./fa.js":46,"./fi":47,"./fi.js":47,"./fo":48,"./fo.js":48,"./fr":51,"./fr-ca":49,"./fr-ca.js":49,"./fr-ch":50,"./fr-ch.js":50,"./fr.js":51,"./fy":52,"./fy.js":52,"./gd":53,"./gd.js":53,"./gl":54,"./gl.js":54,"./gom-latn":55,"./gom-latn.js":55,"./he":56,"./he.js":56,"./hi":57,"./hi.js":57,"./hr":58,"./hr.js":58,"./hu":59,"./hu.js":59,"./hy-am":60,"./hy-am.js":60,"./id":61,"./id.js":61,"./is":62,"./is.js":62,"./it":63,"./it.js":63,"./ja":64,"./ja.js":64,"./jv":65,"./jv.js":65,"./ka":66,"./ka.js":66,"./kk":67,"./kk.js":67,"./km":68,"./km.js":68,"./kn":69,"./kn.js":69,"./ko":70,"./ko.js":70,"./ky":71,"./ky.js":71,"./lb":72,"./lb.js":72,"./lo":73,"./lo.js":73,"./lt":74,"./lt.js":74,"./lv":75,"./lv.js":75,"./me":76,"./me.js":76,"./mi":77,"./mi.js":77,"./mk":78,"./mk.js":78,"./ml":79,"./ml.js":79,"./mr":80,"./mr.js":80,"./ms":82,"./ms-my":81,"./ms-my.js":81,"./ms.js":82,"./my":83,"./my.js":83,"./nb":84,"./nb.js":84,"./ne":85,"./ne.js":85,"./nl":87,"./nl-be":86,"./nl-be.js":86,"./nl.js":87,"./nn":88,"./nn.js":88,"./pa-in":89,"./pa-in.js":89,"./pl":90,"./pl.js":90,"./pt":92,"./pt-br":91,"./pt-br.js":91,"./pt.js":92,"./ro":93,"./ro.js":93,"./ru":94,"./ru.js":94,"./sd":95,"./sd.js":95,"./se":96,"./se.js":96,"./si":97,"./si.js":97,"./sk":98,"./sk.js":98,"./sl":99,"./sl.js":99,"./sq":100,"./sq.js":100,"./sr":102,"./sr-cyrl":101,"./sr-cyrl.js":101,"./sr.js":102,"./ss":103,"./ss.js":103,"./sv":104,"./sv.js":104,"./sw":105,"./sw.js":105,"./ta":106,"./ta.js":106,"./te":107,"./te.js":107,"./tet":108,"./tet.js":108,"./th":109,"./th.js":109,"./tl-ph":110,"./tl-ph.js":110,"./tlh":111,"./tlh.js":111,"./tr":112,"./tr.js":112,"./tzl":113,"./tzl.js":113,"./tzm":115,"./tzm-latn":114,"./tzm-latn.js":114,"./tzm.js":115,"./uk":116,"./uk.js":116,"./ur":117,"./ur.js":117,"./uz":119,"./uz-latn":118,"./uz-latn.js":118,"./uz.js":119,"./vi":120,"./vi.js":120,"./x-pseudo":121,"./x-pseudo.js":121,"./yo":122,"./yo.js":122,"./zh-cn":123,"./zh-cn.js":123,"./zh-hk":124,"./zh-hk.js":124,"./zh-tw":125,"./zh-tw.js":125};n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=174},180:function(e,t,s){s(168);var n=s(3)(null,s(184),"data-v-00423872",null);e.exports=n.exports},181:function(e,t,s){var n=s(3)(s(163),s(186),null,null);e.exports=n.exports},182:function(e,t,s){s(169);var n=s(3)(null,s(185),"data-v-3e284d54",null);e.exports=n.exports},183:function(e,t,s){s(171);var n=s(3)(s(164),s(188),"data-v-78fffeee",null);e.exports=n.exports},184:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"offline-wrapper"},[s("div",{staticClass:"offline-inner"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-exclamation-circle"})]),e._v(" "),s("h1",[e._v("Hov!")]),e._v(" "),s("h3",[e._v("Du har mistet din internetforbindelse")]),e._v(" "),s("p",{staticClass:"description"},[e._v("Vi kunne ikke registrere en aktiv internetforbindelse i din browser. Applikationen kan derfor ikke indlæses. Prøv at tjekke din forbindelse og opdater siden igen.")]),e._v(" "),s("p",[s("a",{attrs:{href:"/"}},[s("button",{staticClass:"btn btn-primary"},[e._v("Genindlæs siden")])])])])])}]}},185:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"error-page-wrapper"},[s("div",{staticClass:"error-page-inner"},[s("h1",[e._v("404")]),e._v(" "),s("h3",[e._v("Ups! Der er sket en fejl ...")]),e._v(" "),s("p",[e._v("Vi ved ikke helt hvad der er sket, men vi kan desværre ikke vise denne side. Dette kan være fordi du har forsøgt at tilgå et dødt link eller fordi du ikke har adgang til denne side.")]),e._v(" "),s("router-link",{attrs:{tag:"a",to:{name:e.$route.name}}},[s("button",{staticClass:"btn btn-xs btn-primary"},[e._v("\n                Genindlæs siden\n            ")])]),e._v("\n        |\n        "),s("router-link",{attrs:{tag:"a",to:{name:"Index"}}},[s("button",{staticClass:"btn btn-xs btn-primary"},[e._v("\n                Gå til forsiden\n            ")])])],1)])},staticRenderFns:[]}},186:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isOnline?s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)]):s("offline")},staticRenderFns:[]}},187:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("layout")],1)},staticRenderFns:[]}},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Made with "),s("i",{staticClass:"fa fa-heart"}),e._v(" by "),s("a",{attrs:{target:"_blank",rel:"noopener",href:"https://deveo.dk"}},[e._v("Deveo")])])}]}},193:function(e,t){}},[161]);
//# sourceMappingURL=app.76d316b0c8ab70015f8a.js.map