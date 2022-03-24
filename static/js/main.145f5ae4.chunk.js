(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){},172:function(e,t,n){e.exports=n(270)},177:function(e,t,n){},200:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(64),c=n.n(o),s=(n(177),n(25)),i=n.n(s),l=n(53),u=n(21),m=n(30),h=n(24),d=n(22),f=n(23),p=(n(132),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={collapsed:!0},n.handleClick=function(){n.setState({collapsed:!n.state.collapsed})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return r.a.createElement("div",{className:"event"},r.a.createElement("h2",{className:"summary"},e.summary),r.a.createElement("p",{className:"start-date"},e.start.dateTime," (",e.start.timeZone,")"),r.a.createElement("p",{className:"location"},"@",e.summary," | ",e.location),r.a.createElement("button",{className:"".concat(t?"show":"hide","-details"),onClick:this.handleClick},t?"Show Details":"Hide Details"),!t&&r.a.createElement("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show")},r.a.createElement("h3",null,"About the event:"),r.a.createElement("a",{href:e.htmlLink,rel:"noreferrer",target:"_blank"},"See details on Google Calendar"),r.a.createElement("p",{className:"event-description"},e.description)))}}]),t}(a.Component)),v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).color="blue",n}return Object(f.a)(t,e),t}(v),b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).color="red",n}return Object(f.a)(t,e),t}(v),w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).color="#ff5e00",n}return Object(f.a)(t,e),t}(v),E=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},navigator.onLine?r.a.createElement(w,{text:""}):r.a.createElement(w,{text:"You are offline! The displayed event list has been loaded from a previous visit and may not be up to date."}),e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))}))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({showSuggestions:!0});var a=n.props.locations.filter(function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1});if(0!==a.length)return n.setState({query:t,suggestions:a,infoText:""});n.setState({query:t,infoText:"We could not locate that city. Please try another city"})},n.handleItemClicked=function(e){n.setState({query:e,showSuggestions:!1}),n.props.updateEvents(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(g,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),r.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)}),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32,errorText:""},n.handleInputChanged=function(e){var t=e.target.value;t<=0||t>32?n.setState({numberOfEvents:"",errorText:"Enter number between 1 and 32"}):n.setState({numberOfEvents:t,errorText:""}),n.props.updateNumberOfEvents(e.target.value)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("input",{type:"number",className:"numberOfEvents",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(b,{text:this.state.errorText}))}}]),t}(a.Component),O=n(281),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],j=n(126),x=n.n(j),T=n(67),N=n.n(T),C=function(e){var t=e.map(function(e){return e.location});return Object(O.a)(new Set(t))},W=function(){var e=Object(l.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then(function(e){return e.json()}).catch(function(e){return e.json()});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://65mg3zgm9a.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then(function(e){return e.json()}).catch(function(e){return e});case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(i.a.mark(function e(){var t,n,a,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,L();case 11:if(!(n=e.sent)){e.next=21;break}return A(),a="https://65mg3zgm9a.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=17,x.a.get(a);case 17:return(r=e.sent).data&&(o=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(i.a.mark(function e(){var t,n,a,r,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,x.a.get("https://65mg3zgm9a.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();n(200);var M=function(e){return e.showWelcomeScreen?r.a.createElement("div",{className:"WelcomeScreen"},r.a.createElement("div",{className:"WelcomeWrapper"},r.a.createElement("h1",null,"Welcome to the Meet app"),r.a.createElement("h3",null,"Log in to see upcoming events for full stack web developers around the world!"),r.a.createElement("br",null),r.a.createElement("div",{className:"button_cont",align:"center"},r.a.createElement("div",{class:"google-btn"},r.a.createElement("div",{class:"google-icon-wrapper"},r.a.createElement("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})),r.a.createElement("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement("a",{href:"https://kblackston23.github.io/Meet-App/privacy.html",rel:"nofollow noopener"},"Privacy policy "))):null},D=n(355),J=n(360),q=n(361),R=n(267),U=n(268),B=n(353),_=n(354),z=n(18),F=n(364),G=n(163),H=n(107),P=n(111),Y=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(z.a)(n,2),c=o[0],s=o[1];Object(a.useEffect)(function(){s(function(){return["React","JavaScript","Node","jQuery","AngularJS"].map(function(e){var n=t.filter(function(t){return t.summary.split(" ").includes(e)}).length;return{name:e,value:n}})})},[t]);var i=["#800000","#ff3300","#ff5500","#ff7733","#ff9933"];return r.a.createElement(D.a,{height:400},r.a.createElement(F.a,null,r.a.createElement(G.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,outerRadius:80,dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}},c.map(function(e,t){return r.a.createElement(H.a,{key:"cell-".concat(t),fill:i[t%i.length]})})),r.a.createElement(P.a,{verticalAlign:"bottom",align:"center"})))},K=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],locations:[],numberOfEvents:32,showWelcomeScreen:void 0},n.updateEvents=function(e){I().then(function(t){var a="all"===e?t:t.filter(function(t){return t.location===e}),r=n.state.numberOfEvents;n.mounted&&n.setState({events:a.slice(0,r),currentLocation:e})})},n.updateNumberOfEvents=function(e){var t=n.state.currentLocation;n.setState({numberOfEvents:e}),n.updateEvents(t,e)},n.getData=function(){var e=n.state,t=e.locations,a=e.events;return t.map(function(e){var t=a.filter(function(t){return t.location===e}).length;return{city:e.split(", ").shift(),number:t}})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n,a,r,o=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,W(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&I().then(function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:C(e)})});case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?r.a.createElement("div",{className:"App"}):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Welcome to the Meet App!"),r.a.createElement("h3",null,"Search a city below to find events!"),r.a.createElement("br",null),r.a.createElement(y,{locations:this.state.locations,updateEvents:this.updateEvents}),r.a.createElement(k,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),r.a.createElement("div",{className:"data-vis-wrapper"},r.a.createElement(Y,{events:this.state.events}),r.a.createElement(D.a,{height:400},r.a.createElement(J.a,{margin:{top:20,right:20,bottom:10,left:10}},r.a.createElement(q.a,{strokeDasharray:"3 3"}),r.a.createElement(R.a,{type:"category",dataKey:"city",name:"city"}),r.a.createElement(U.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),r.a.createElement(B.a,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(_.a,{data:this.getData(),fill:"#ff6600"})))),r.a.createElement(E,{events:this.state.events,numberOfEvents:this.state.numberOfEvents}),r.a.createElement(M,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){L()}}))}}]),t}(a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Q=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,362)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})};n(269).config("0648c36de05b4b49ba6dc1552be0465c").install(),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Meet-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Meet-App","/service-worker.js");V?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):X(t,e)})}}(),Q()}},[[172,3,2]]]);
//# sourceMappingURL=main.145f5ae4.chunk.js.map