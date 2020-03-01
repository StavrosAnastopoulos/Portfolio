(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,t,n){"use strict";var a,r,o,i,c,l=n(7),u=n(9),s=n(8),m=(n(30),n(2)),b=new(a=function e(){Object(u.a)(this,e),this.id=Math.random(),Object(l.a)(this,"colorMain",r,this),Object(l.a)(this,"colorBackground",o,this),Object(l.a)(this,"colorLink",i,this),Object(l.a)(this,"colorText",c,this)},r=Object(s.a)(a.prototype,"colorMain",[m.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"#282c34"}}),o=Object(s.a)(a.prototype,"colorBackground",[m.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"#f4fdff"}}),i=Object(s.a)(a.prototype,"colorLink",[m.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"#61dafb"}}),c=Object(s.a)(a.prototype,"colorText",[m.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"black"}}),a);t.a=b},22:function(e,t,n){"use strict";var a,r,o,i,c=n(7),l=n(9),u=n(8),s=(n(30),n(2)),m=new(a=function e(){Object(l.a)(this,e),Object(c.a)(this,"component",r,this),Object(c.a)(this,"isOpen",o,this),Object(c.a)(this,"hasBackdrop",i,this)},r=Object(u.a)(a.prototype,"component",[s.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=Object(u.a)(a.prototype,"isOpen",[s.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=Object(u.a)(a.prototype,"hasBackdrop",[s.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a);t.a=m},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),r=n.n(a),o=n(11),i={home:r.a.createElement(o.f,null),code:r.a.createElement(o.a,null),github:r.a.createElement(o.e,null),linkedin:r.a.createElement(o.g,null),mail:r.a.createElement(o.c,null),expand:r.a.createElement(o.d,null),colapse:r.a.createElement(o.b,null)}},34:function(e,t,n){e.exports=n(50)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a,r=n(1),o=n.n(r),i=n(16),c=n.n(i),l=(n(39),n(14)),u=n(33),s=n(9),m=n(18),b=n(20),p=n(19),h=n(21),f=n(13),d=n(0),v=(n(40),function(e){function t(){return Object(s.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(d.b.Provider,{value:{color:this.props.color,className:"global-class-name"}},o.a.createElement("div",{className:"nav-item"},this.props.icon))}}]),t}(o.a.Component)),O=n(27),j=(n(41),Object(f.a)(a=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).internalLink=function(e){return o.a.createElement(l.b,{to:e.route},o.a.createElement(v,e))},n.externalLink=function(e){return o.a.createElement("a",{href:e.route},o.a.createElement(v,e))},n.list=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2?arguments[2]:void 0;return o.a.createElement("ul",{key:a},e.map((function(e){var a={icon:O.a[e.icon],route:e.route,color:n.props.theme.colorLink},r=t?n.internalLink(a):n.externalLink(a);return o.a.createElement("ol",{key:e.route},r)})))},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t={backgroundColor:this.props.theme.colorMain};return o.a.createElement("div",{className:"navbar-desktop",style:t},Object.entries(this.props.navigations).map((function(t,n){var a=Object(u.a)(t,2),r=a[0],o=a[1];return e.list(o,"internal"===r,"nav-menu-".concat(n))})))}}]),t}(o.a.Component))||a),E=n(10),g=(n(47),n(17)),k=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,53))})),y=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,54))})),w=Object(f.a)((function(){var e=g.a.colorBackground;return o.a.createElement("div",{className:"desktop-pages",style:{backgroundColor:e}},o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/",component:k}),o.a.createElement(E.a,{path:"/projects",component:y}))))})),z=n(22),x=(n(48),Object(f.a)((function(){var e=z.a.component,t=z.a.isOpen,n=z.a.hasBackdrop;return o.a.createElement("div",null,t?o.a.createElement("div",{className:n?"backdrop":""},o.a.createElement("div",{className:"modal"},e)):null)}))),B=(n(49),{internal:[{icon:"home",route:""},{icon:"code",route:"projects"}],external:[{icon:"github",route:"https://github.com/StavrosAnastopoulos"},{icon:"linkedin",route:"https://gr.linkedin.com/in/stavrosanastopoulos"},{icon:"mail",route:"mailto:anastopoulos.stavros@gmail.com"}]});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement((function(){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement(j,{theme:g.a,navigations:B}),o.a.createElement(w,null)),o.a.createElement(x,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.fb8b3c93.chunk.js.map