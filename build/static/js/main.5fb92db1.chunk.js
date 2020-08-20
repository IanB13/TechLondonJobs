(this.webpackJsonphi=this.webpackJsonphi||[]).push([[0],{118:function(e,t,n){e.exports=n(255)},127:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=n(24),i=(n(127),n(128),n(16)),s=n.n(i),u=n(35),m=n(99),b=n.n(m);var d={getJobLinks:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("/api","/joblinks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},h=n(261),p=function(e){var t=e.link,n=null;switch(e.linkType){case"Live":n="check circle outline";break;default:n="times circle outline"}return r.a.createElement(h.a.Item,{style:{lineHeight:"1.6em"}},r.a.createElement(h.a.Icon,{name:n}),r.a.createElement(h.a.Content,{style:{lineHeight:"1.6em"}},r.a.createElement("details",null,r.a.createElement("summary",null,t.jobTitle),r.a.createElement("a",{href:t.url},"Link to Job Website ")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://tech.london/discovery/jobs/".concat(t.jobID)},"Link to Tech London Website "))))},f=function(e){var t=e.Links,n=e.linkType,a=null;switch(n){case"Live":a={borderColor:"green"};break;default:a={borderColor:"red"}}return 0!==t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:a},n," Job Links"),r.a.createElement("p",{className:"jobsNum"},"Total Jobs: ",t.length),r.a.createElement(h.a,null,t.map((function(e){return r.a.createElement(p,{link:e,linkType:n,key:e._id})})))):r.a.createElement("div",null,r.a.createElement("h2",{style:a},n," Job Links"),r.a.createElement("div",null,"...loading"))},E=function(e){var t=e.totalJobs;return r.a.createElement("div",{className:"summary"},r.a.createElement("h1",null,"Tech.London Job Search "),r.a.createElement("p",{className:"jobsNum"},"Total Jobs: ",t||"...loading"),"This web app uses puppeteer to web scrape ",r.a.createElement("a",{href:"https://tech.london/discovery/jobs"},"Tech.London")," and find jobs that are still available. Jobs were checked using Puppeteer, and said to be dead if the console has any HTTP server errors in the 400 - 599 range. This method is ",r.a.createElement("b",null,"not 100% accurate ")," but works for the majority of cases. Check out the code ",r.a.createElement("a",{href:"https://github.com/IanB13/TechLondonJobs"},"here"),".")},v=function(e){var t=e.jobPostings,n=t.filter((function(e){return!1===e.deadLink})),a=t.filter((function(e){return!0===e.deadLink})),c=t.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{totalJobs:c}),r.a.createElement("div",null,r.a.createElement(f,{Links:n,linkType:"Live"})),r.a.createElement("div",null,r.a.createElement(f,{Links:a,linkType:"Dead"})))};var k=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getJobLinks();case 2:n=e.sent,t({type:"INIT_JOBPOSTINGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(l.c)((function(e){return e.jobPostings}));return r.a.createElement("div",{className:"App container"},r.a.createElement(v,{jobPostings:t}))},g=n(13),j=n(107),y=n(108),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_JOBPOSTINGS":var n=t.data;return console.log("job posting in reducer"),console.log(n),n;default:return e}},L=Object(g.combineReducers)({jobPostings:T}),J=Object(g.createStore)(L,Object(y.composeWithDevTools)(Object(g.applyMiddleware)(j.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:J},r.a.createElement(k,null)),","),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.5fb92db1.chunk.js.map