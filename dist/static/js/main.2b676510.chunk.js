(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t){},181:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(83),o=a.n(i),s=a(56),c=a(23),r=a(4),m=a(5),d=a(7),u=a(6),h=a(8),p=a(3),b=a(84),v=a.n(b),f=a(39),E=a.n(f),k=E.a.initializeApp({apiKey:"AIzaSyDIaQIOtXTg-WyuytNgUMzaLWY_z6yUMA8",authDomain:"fir-lesson-cord-creator.firebaseapp.com",databaseURL:"https://fir-lesson-cord-creator.firebaseio.com",projectId:"fir-lesson-cord-creator",storageBucket:"fir-lesson-cord-creator.appspot.com",messagingSenderId:"998957371026"}),g=v.a.createClass(k.database()),y=E.a.auth(),O=(E.a.functions(),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Edit Link"),l.a.createElement("select",{className:"form-control",name:"which-id"},l.a.createElement("option",{value:""},"Select a link"),this.props.links.length>0?this.props.links.map(function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}):"no lists"),l.a.createElement("input",{type:"text",name:"edit-name",className:"form-control",placeholder:"Edit Name"}),l.a.createElement("input",{type:"text",name:"edit-url",className:"form-control",placeholder:"Edit URL"}),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.props.updateLink},"Edit Link"))}}]),t}(n.Component)),j=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Add Link"),l.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"name"}),l.a.createElement("input",{type:"text",name:"url",className:"form-control",placeholder:"url"}),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.props.addLink},"Add Link"))}}]),t}(n.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"list-group"},this.props.links.length>0?this.props.links.map(function(t,a){return a>=e.props.start&&a<=e.props.end&&t.name.toLowerCase().match(e.props.searchWhat)?l.a.createElement("a",{className:"list-group-item",key:a,"data-iteration":a,target:"_target",href:t.url},t.name):null}):"no lists")}}]),t}(n.Component);var N=function(e){var t=e.searchVal,a=e.site;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),window.location=t+document.getElementById(a).value}},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",id:a,placeholder:"Search "+a}),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{className:"btn btn-dark",type:"submit"}," ","Go ",l.a.createElement("i",{className:"icon-white icon-search"}))))))},S=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Delete Link"),l.a.createElement("select",{id:"deleteLink",className:"form-control"},l.a.createElement("option",null,"Select One"),this.props.links.length>0?this.props.links.map(function(e){return l.a.createElement("option",{key:e.id,value:e.name},e.name)}):"no lists"),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.props.deleteLink},"Delete Link"))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={autoSlide:!0,activeVideo:0,bestofYouTubeVids:[]},e.moveSlide=e.moveSlide.bind(Object(p.a)(Object(p.a)(e))),e.autoSlide=e.autoSlide.bind(Object(p.a)(Object(p.a)(e))),e.pauseSlide=e.pauseSlide.bind(Object(p.a)(Object(p.a)(e))),e.playSlide=e.playSlide.bind(Object(p.a)(Object(p.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"moveSlide",value:function(e){e<0&&(e=29),e>29&&(e=0),this.setState({activeVideo:e,autoSlide:!1})}},{key:"pauseSlide",value:function(){this.state.autoSlide;this.setState({autoSlide:!1})}},{key:"playSlide",value:function(){this.state.autoSlide;this.setState({autoSlide:!0})}},{key:"autoSlide",value:function(){var e=this;setInterval(function(t){var a=e.state.activeVideo+1;a<0&&(a=29),a>29&&(a=0),!0===e.state.autoSlide&&e.setState({activeVideo:a})},5e3)}},{key:"componentDidMount",value:function(){var e=this;fetch("https://mechanized-aesthetics.net/landingHome/bestOfYouTube.php").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,bestofYouTubeVids:t})},function(t){e.setState({isLoaded:!0,error:t})}),this.autoSlide()}},{key:"render",value:function(){var e=this,t=this.state.bestofYouTubeVids,a=this.state.activeVideo;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("ul",{className:"videoindexParent"},this.state.bestofYouTubeVids.map(function(t,n){return l.a.createElement("li",{"data-num":n,onClick:function(){return e.moveSlide(n)},className:a===n?"sliderIndex active":"sliderIndex"})}))),l.a.createElement("div",{className:"youTubeFrame col-md-12"},l.a.createElement("iframe",{className:"youTubeIframe animate slideInLeft",src:"https://www.youtube.com/embed/"+t[a],frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("small",null,"Carousel Controls")),l.a.createElement("div",{className:"btn-group col-md-12",role:"group"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.moveSlide(a-1)}},"Previous"),l.a.createElement("button",{type:"button",onClick:this.pauseSlide,className:"btn btn-secondary"},"Pause"),l.a.createElement("button",{type:"button",onClick:this.playSlide,className:"btn btn-secondary"},"Play"),l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.moveSlide(a+1)}},"Next")))}}]),t}(n.Component),L=a(38),M=a.n(L),z=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[{title:"Test",content:"writing text here"},{title:"Calendar",content:"<iframe src='https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;mode=MONTH&amp;height=600&amp;wkst=1&amp;bgcolor=%23cccccc&amp;src=aaronrs2002%40gmail.com&amp;color=%23333333&amp;src=%23contacts%40group.v.calendar.google.com&amp;color=%232F6309&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23691426&amp;ctz=America%2FPhoenix' id='calendarHere'/>"}];return l.a.createElement("div",null,l.a.createElement("div",{className:this.props.showModal?"modal fade show animated bounceInDown":"modal",style:this.props.showModal?{display:"block"}:{display:"none"},id:"genericModal"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"calendar"},e[this.props.modalContent].title),l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.props.closeModal},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"}),M()(e[this.props.modalContent].content)))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={feed:"",value:"USA"},a.getRssFeed=a.getRssFeed.bind(Object(p.a)(Object(p.a)(a))),a.change=a.change.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getRssFeed",value:function(e){var t=this;fetch("https://mechanized-aesthetics.net/landingHome/getrss.php?q="+e).then(function(e){return e.text()}).then(function(e){t.setState({isLoaded:!0,feed:e})},function(e){t.setState({isLoaded:!0,error:e})})}},{key:"componentDidMount",value:function(){this.getRssFeed(this.state.value)}},{key:"change",value:function(e){this.setState({value:e.target.value}),this.getRssFeed(e.target.value)}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{className:"form-control",id:"newsFeed",onChange:this.change,value:this.state.value},[{name:"USA"},{name:"Google"},{name:"FOX"},{name:"YAHOO"},{name:"eNews"}].map(function(e){return l.a.createElement("option",{key:e.name,value:e.name},e.name)})),l.a.createElement("div",{id:"newsResponse"},M()(this.state.feed)))}}]),t}(n.Component),x=a(29),q=a.n(x),U=(a(178),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={dateTimestamp:Date.now(),zipCode:a.props.zipCode},a.tick=a.tick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"tick",value:function(){var e=this.state.dateTimestamp+1,t=q()(e);this.setState({dateTimestamp:Date.now(),dateFormatted:t.tz(this.props.tz).format("dddd, MMMM Do YYYY, h:mm:ss A")})}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){q()(this.state.dateFormatted).toString();return l.a.createElement("div",{className:"centerTxt"},this.state.dateFormatted)}}]),t}(l.a.Component)),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={weatherLoaded:!1,theWeather:[],zipCode:"85260",timezone_id:"America/Phoenix"},a.grabWeather=a.grabWeather.bind(Object(p.a)(Object(p.a)(a))),a.submitZip=a.submitZip.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"grabWeather",value:function(e){var t=this;fetch("https://mechanized-aesthetics.net/landingHome/yahooWeather.php?zip="+e).then(function(e){return e.text()}).then(function(e){t.setState({weatherLoaded:!0,theWeather:JSON.parse(e)}),console.log("theWeather: "+JSON.stringify(t.state.theWeather)),console.log("timezone_id: "+t.state.theWeather.location.timezone_id),t.setState({timezone_id:t.state.theWeather.location.timezone_id})},function(e){t.setState({weatherLoaded:!0,error:e})})}},{key:"componentWillMount",value:function(){this.grabWeather("85260")}},{key:"submitZip",value:function(){var e=document.querySelector("#zipCode").value,t=new RegExp(/^\d{5}(-\d{4})?$/).test(e);console.log("zipCode match: "+t),e.length>=5&&!0===t?(this.setState({zipCode:e}),this.grabWeather(e),this.setState({zipCode:e}),console.log("zipCode: "+e),document.querySelector("#zipCode").value=""):console.log("Does not qualify as a zip code.")}},{key:"render",value:function(){return l.a.createElement("div",{className:"row paddBottom"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("ul",{className:"inline weather"},this.state.weatherLoaded?this.state.theWeather.forecasts.map(function(e,t){if(t<=6)return l.a.createElement("li",null,l.a.createElement("img",{src:"img/"+e.code+".png",className:"img-fluid"}),l.a.createElement("div",{className:"center"},e.day+" - "+e.text),l.a.createElement("div",{className:"center"},"High: "+e.high+" - Low: "+e.low))}):"no weather")),l.a.createElement("div",{className:"col-md-4 centerTxt"},this.state.weatherLoaded?this.state.theWeather.location.city+", "+this.state.theWeather.location.region+" "+this.state.zipCode:"no weather"),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search weather by US zip code",id:"zipCode"}),l.a.createElement("span",{className:"input-group-btn"},l.a.createElement("button",{className:"btn btn-secondary",onClick:this.submitZip,type:"button"},"Go",l.a.createElement("i",{className:"icon-white icon-search"}))))),l.a.createElement("div",{className:"col-md-4"},this.state.weatherLoaded?l.a.createElement(U,{tz:this.state.theWeather.location.timezone_id,zipCode:this.state.zipCode}):"no weather"))}}]),t}(n.Component),P=(a(181),a(55)),D=(a(182),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={email:""},a.submitSignUp=a.submitSignUp.bind(Object(p.a)(Object(p.a)(a))),a.logOut=a.logOut.bind(Object(p.a)(Object(p.a)(a))),a.submitLogin=a.submitLogin.bind(Object(p.a)(Object(p.a)(a))),a.changeUserStatus=a.changeUserStatus.bind(Object(p.a)(Object(p.a)(a))),a.addAdmin=a.addAdmin.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"changeUserStatus",value:function(){var e=this;this.props.toggleEditPanel(),y.onAuthStateChanged(function(t){t&&(console.log("user: "+JSON.stringify(t)),e.setState({email:t.email}))})}},{key:"submitSignUp",value:function(e){var t=this;e.preventDefault();var a=document.querySelector("input[name='signup-email']").value,n=document.querySelector("input[name='signup-password']").value;this.state.auth.createUserWithEmailAndPassword(a,n).then(function(e){document.querySelector("form#signup-form").reset(),t.changeUserStatus()})}},{key:"logOut",value:function(){var e=this;this.state.auth.signOut().then(function(){console.log("this user is signed out."),e.changeUserStatus()})}},{key:"submitLogin",value:function(e){var t=this;e.preventDefault();var a=document.querySelector("input[name='login-email']").value,n=document.querySelector("input[name='login-password']").value;y.signInWithEmailAndPassword(a,n).then(function(e){document.querySelector("form#login-form").reset(),t.changeUserStatus()})}},{key:"addAdmin",value:function(){var e=document.querySelector("#admin-email").value;P.functions().httpsCallable("addAdminRole")({email:e}).then(function(e){console.log("admin result: "+e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",null,"Sign up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{id:"signup-form",onSubmit:this.submitSignUp},l.a.createElement("input",{type:"text",placeholder:"email",className:"form-control",name:"signup-email"}),l.a.createElement("input",{type:"password",placeholder:"password",className:"form-control",name:"signup-password"}),l.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up")))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",null,"Login"),l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{id:"login-form",onSubmit:this.submitLogin},l.a.createElement("input",{type:"text",placeholder:"email",className:"form-control",name:"login-email"}),l.a.createElement("input",{type:"password",placeholder:"password",className:"form-control",name:"login-password"}),l.a.createElement("button",{className:"btn btn-primary btn-block"},"Login")))),this.state.email.length>0?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("input",{type:"text",className:"form-control",id:"admin-email"}),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.addAdmin},"Add Admin")),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("label",null,"Logout ",this.state.email),l.a.createElement("button",{className:"btn btn-danger btn-block",onClick:this.logOut},"Logout"))):null)}}]),t}(n.Component)),T=function(e){function t(e){var a,n;return Object(r.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state=(a={showModal:!1,links:{},searchWhat:""},Object(c.a)(a,"showModal",!1),Object(c.a)(a,"modalContent",0),Object(c.a)(a,"showEditPanel",!1),a),n.addLink=n.addLink.bind(Object(p.a)(Object(p.a)(n))),n.updateLink=n.updateLink.bind(Object(p.a)(Object(p.a)(n))),n.filterLinks=n.filterLinks.bind(Object(p.a)(Object(p.a)(n))),n.deleteLink=n.deleteLink.bind(Object(p.a)(Object(p.a)(n))),n.openModal=n.openModal.bind(Object(p.a)(Object(p.a)(n))),n.closeModal=n.closeModal.bind(Object(p.a)(Object(p.a)(n))),n.keyDown=n.keyDown.bind(Object(p.a)(Object(p.a)(n))),n.toggleEditPanel=n.toggleEditPanel.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.linksRef=g.syncState("links",{context:this,state:"links"})}},{key:"componentWillUnmount",value:function(){g.removeBinding(this.linksRef)}},{key:"addLink",value:function(){var e=Object(s.a)({},this.state.links),t=void 0===this.state.links.length?0:this.state.links.length;e[t]={id:t,name:document.querySelector("input[name='name']").value,url:document.querySelector("input[name='url']").value},this.setState({links:e}),document.querySelector("input[name='url']").value="",document.querySelector("input[name='name']").value=""}},{key:"updateLink",value:function(){var e=Object(s.a)({},this.state.links),t={id:document.querySelector("select[name='which-id']").value,name:document.querySelector("input[name='edit-name']").value,url:document.querySelector("input[name='edit-url']").value};e[t.id]=t,this.setState({links:e}),document.querySelector("input[name='edit-url']").value="",document.querySelector("input[name='edit-name']").value=""}},{key:"deleteLink",value:function(){var e=document.getElementById("deleteLink").value,t=this.state.links.filter(function(t){return t.name!=e});this.setState({links:t}),console.log("new links object: "+JSON.stringify(t))}},{key:"filterLinks",value:function(){this.setState(function(e){e.searchWhat=document.getElementById("filterLinks").value.toLowerCase()})}},{key:"openModal",value:function(e){this.setState({showModal:!0,modalContent:e})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"keyDown",value:function(e){27===e.keyCode&&this.setState({showModal:!1})}},{key:"toggleEditPanel",value:function(){!1===this.state.showEditPanel?(this.setState({showEditPanel:!0}),setTimeout(function(){window.scrollTo(0,2e3)},200)):this.setState({showEditPanel:!1})}},{key:"render",value:function(){var e=this;this.state.links;return l.a.createElement("div",{className:"container",onKeyDown:this.keyDown},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(A,null))),l.a.createElement("div",{className:"row well"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(N,{searchVal:"https://www.google.com/#q=",site:"Google"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-block",onClick:function(){return e.openModal(1)}},"Calendar")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(N,{searchVal:"https://www.youtube.com/results?search_query=",site:"YouTube"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 well"},l.a.createElement(w,{links:this.state.links,start:0,end:16,searchWhat:this.state.searchWhat})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("input",{type:"text",id:"filterLinks",className:"form-control",placeholder:"Search Links",onKeyUp:this.filterLinks}),l.a.createElement("div",null,l.a.createElement(C,null)),l.a.createElement(W,null)),l.a.createElement("div",{className:"col-md-4 well"},l.a.createElement(w,{links:this.state.links,start:17,end:33,searchWhat:this.state.searchWhat}))),l.a.createElement("div",{className:"row well"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(N,{searchVal:"https://www.rottentomatoes.com/search/?search=",site:"Rotten Tomatoes"})),l.a.createElement("div",{className:"col-md-4"}," ",l.a.createElement("button",{onClick:this.toggleEditPanel,className:"btn btn-block btn-secondary",id:"toggledEdit"},"Edit")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(N,{searchVal:"https://en.wikipedia.org/wiki/Special:Search/",site:"Wikipedia"}))),l.a.createElement(D,{toggleEditPanel:this.toggleEditPanel}),l.a.createElement("div",{className:this.state.showEditPanel?"row":"row hide"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(j,{links:this.state.links,addLink:this.addLink})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(O,{links:this.state.links,updateLink:this.updateLink})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement(S,{links:this.state.links,deleteLink:this.deleteLink}))),l.a.createElement(z,{modalContent:this.state.modalContent,showModal:this.state.showModal,closeModal:this.closeModal}),l.a.createElement("div",{onClick:this.closeModal,className:"modal-backdrop show",style:this.state.showModal?{display:"block"}:{display:"none"}}))}}]),t}(n.Component);a(183);o.a.render(l.a.createElement(T,null),document.getElementById("root"))},85:function(e,t,a){e.exports=a(184)}},[[85,1,2]]]);
//# sourceMappingURL=main.2b676510.chunk.js.map