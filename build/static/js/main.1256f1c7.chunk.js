(this["webpackJsonpquick-react"]=this["webpackJsonpquick-react"]||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),o=n.n(a),u=(n(20),n(9)),s=n.n(u),i=n(14),l=n(4),f=n(6),d=(n(8),n(5)),m={F:"Fall",W:"Winter",S:"Spring"},p=["M","Tu","W","Th","F"],h=function(e){return m[e.id.charAt(0)]},b=function(e,t){return c=e.days,a=t.days,p.some((function(e){return c.includes(e)&&a.includes(e)}))&&(n=e.hours,r=t.hours,Math.max(n.start,r.start)<Math.min(n.end,r.end));var n,r,c,a},O=function(e,t){return t.some((function(t){return e!==t&&((n=e)!==(r=t)&&h(n)===h(r)&&b(n,r));var n,r}))},v=function(e){var t,n=e.course,r=e.state;return c.a.createElement(d.a,{color:(t=r.selected.includes(n),t?"success":null),onClick:function(){return r.toggle(n)},disabled:O(n,r.selected)},h(n)," CS ",function(e){return e.id.slice(1,4)}(n),": ",n.title)},j={F:"Fall",W:"Winter",S:"Spring"},w=function(e){var t=e.state;return c.a.createElement(d.a.Group,{hasAddons:!0},Object.values(j).map((function(e){return c.a.createElement(d.a,{key:e,color:(n=e===t.term,n?"success":null),onClick:function(){return t.setTerm(e)}},e);var n})))},g=function(e){var t=e.courses,n=Object(r.useState)("Fall"),a=Object(f.a)(n,2),o=a[0],u=a[1],s=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1];return[n,function(e){c(n.includes(e)?n.filter((function(t){return t!==e})):[e].concat(n))}]}(),i=Object(f.a)(s,2),l=i[0],m=i[1],p=t.filter((function(e){return o===function(e){return j[e.id.charAt(0)]}(e)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{state:{term:o,setTerm:u}}),c.a.createElement(d.a.Group,null,p.map((function(e){return c.a.createElement(v,{key:e.id,course:e,state:{selected:l,toggle:m}})}))))};n(24),n(26);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var E=/^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/,k=function(e){var t=e.title;return c.a.createElement(d.c,null,t||"[loading...]")},S=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},function(e){var t=E.exec(e)||[],n=Object(f.a)(t,6),r=n[0],c=n[1],a=n[2],o=n[3],u=n[4],s=n[5];return r?{days:c,hours:{start:60*a+1*o,end:60*u+1*s}}:{}}(e.meets))},F=function(e){return{title:e.title,courses:e.courses.map(S)}},P=function(){var e=Object(r.useState)({title:"",courses:[]}),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cs.northwestern.edu/academics/courses/394/data/cs-courses.php");case 2:if((t=e.sent).ok){e.next=5;break}throw t;case 5:return e.next=7,t.json();case 7:n=e.sent,a(F(n));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(d.b,null,c.a.createElement(k,{title:n.title}),c.a.createElement(g,{courses:n.courses}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1256f1c7.chunk.js.map