(this.webpackJsonphi=this.webpackJsonphi||[]).push([[0],{109:function(e,t,n){e.exports=n(246)},132:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),i=n(100),o=n(51),u=n.n(o),s=n(90),m=n(91),h=n.n(m);var d={getJobLinks:function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("/api","/joblinks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},f=(n(132),n(133),n(253)),p=function(e){var t=e.link,n=null;switch(e.linkType){case"Live":n="check circle outline";break;default:n="times circle outline"}return r.a.createElement(f.a.Item,null,r.a.createElement(f.a.Icon,{name:n}),r.a.createElement(f.a.Content,null,r.a.createElement("details",null,r.a.createElement("summary",null,t.jobTitle),r.a.createElement("a",{href:t.url},"Link to Job Website ")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://tech.london/discovery/jobs/".concat(t.jobID)},"Link to Tech London Website "))))},k=function(e){var t=e.Links,n=e.linkType;return console.log(t),0!==t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n),r.a.createElement(f.a,null,t.map((function(e){return r.a.createElement(p,{link:e,linkType:n,key:e._id})})))):r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("div",null,"...loading"))},E=function(){return r.a.createElement("div",{className:"summary"},"This web app uses puppeteer to web scrape ",r.a.createElement("a",{href:"https://tech.london/discovery/jobs"},"Tech.London")," and find jobs that are still available. Jobs were checked by following the page url and check if the console has any HTTP server errors in the 400 or 500s range. This method is not 100% accurate but works for the majority of cases. Check out the code here")};var b=function(){var e=Object(a.useState)([{loading:!0}]),t=Object(i.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)((function(){d.getJobLinks().then((function(e){l(e)}))}),[]);var c=n.filter((function(e){return!1===e.deadLink})),o=n.filter((function(e){return!0===e.deadLink}));return r.a.createElement("div",{className:"App container"},r.a.createElement(E,null),r.a.createElement("div",null,r.a.createElement(k,{Links:c,linkType:"Live"})),r.a.createElement("div",null,r.a.createElement(k,{Links:o,linkType:"Dead"})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.65b19462.chunk.js.map