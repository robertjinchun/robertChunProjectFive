(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.27d3a59d.svg"},21:function(e,a,t){e.exports=t(56)},26:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),i=(t(26),t(2)),s=t(3),o=t(5),u=t(4),g=t(6),m=t(19),b=t.n(m),h=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleClickForBlueBin=function(e){e.preventDefault(),t.props.onhandleBlueBinClicked(e.target.onClick)},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleClickForBlueBin},"BlueBin"))}}]),a}(n.Component),p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleClickForGarbageBin=function(e){e.preventDefault(),t.props.onhandleGarbageBinClicked(e.target.onClick)},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.handleClickForGarbageBin},"Garbage"))}}]),a}(n.Component),d=t(7),B=t.n(d),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).handleClickForItems=function(e,a){a.preventDefault(),t.props.mass.ButtonGarbageBin?B()(r.a.createElement("div",{className:"sweet"},r.a.createElement("p",{className:"sweetTitle"},t.props.mass.garbageCategoriesGarbage[e].title),r.a.createElement("p",{className:"sweetCategory"},t.props.mass.garbageCategoriesGarbage[e].category),r.a.createElement("p",{className:"sweetKey"},t.props.mass.garbageCategoriesGarbage[e].keywords))):B()(r.a.createElement("div",{className:"sweet"},r.a.createElement("p",{className:"sweetTitle"},t.props.mass.garbageCategoriesBlueBin[e].title),r.a.createElement("p",{className:"sweetCategory"},t.props.mass.garbageCategoriesBlueBin[e].category),r.a.createElement("p",{className:"sweetKey"},t.props.mass.garbageCategoriesBlueBin[e].keywords)))},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=[];return!0===this.props.mass.ButtonblueBin?a=this.props.mass.garbageCategoriesBlueBin:!0===this.props.mass.ButtonGarbageBin&&(a=this.props.mass.garbageCategoriesGarbage),r.a.createElement("ul",null,a.map(function(a,t){return r.a.createElement("button",{key:t,tabIndex:"0",onClick:e.handleClickForItems.bind(e,t)},a.title)}))}}]),a}(n.Component),C=t(20),f=t.n(C),v=(t(55),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(u.a)(a).call(this))).categorySorter=function(e,a){var t=/blue.bin/gi,n=/garbage/gi,r=/blue.bin|\(|\)/gi,l=/garbage|\(|\)/gi,c=[];return e.map(function(e,i){return"blueBin"===a&&t.exec(e.category)&&(e.title=e.title.replace(r,""),c.push(e)),"garbage"===a&&n.exec(e.category)&&(e.title=e.title.replace(l,""),c.push(e)),c}),c},e.handleBlueBinClicked=function(a){e.setState({ButtonblueBin:!0,ButtonGarbageBin:!1,blueBinClicked:a})},e.handleGarbageBinClicked=function(a){e.setState({ButtonblueBin:!1,ButtonGarbageBin:!0,garbageBinClicked:a})},e.state={isLoading:!0,ButtonblueBin:!1,ButtonGarbageBin:!1,UserInputString:"",garbageCategoriesAll:[],garbageCategoriesBlueBin:[],garbageCategoriesGarbage:[],garbageListToShow:[]},e}return Object(g.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f()({url:"https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=250",method:"GET",headers:{UserAgent:"PostmanRuntime/7.13.0",Accept:"*/*",CacheControl:"no-cache",PostmanToken:"3855ce5c-03a7-46ba-89df-cee728c768ba,341124e0-2a2b-47e3-bd63-b44d7ce86e3b",acceptencoding:"gzip, deflate",cachecontrol:"no-cache"}}).then(function(a){a=a.data,e.setState({garbageCategoriesAll:a,garbageCategoriesBlueBin:e.categorySorter(a,"blueBin"),garbageCategoriesGarbage:e.categorySorter(a,"garbage"),isLoading:!1})}).catch(function(e){B()(r.a.createElement("div",{className:"sweet"},r.a.createElement("p",{className:"sweetTitle"},"Please Refresh the Page")))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isLoading?r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"})):r.a.createElement("div",{className:"body wrapper"},r.a.createElement("header",{className:""},r.a.createElement("div",{className:"mainTitle"},r.a.createElement("h2",null,"REDUCE"),r.a.createElement("h2",null,"REUSE"),r.a.createElement("h1",null,"RECYCLE")),r.a.createElement("div",{className:"underlay"},r.a.createElement("div",{className:"quoteBox1"},r.a.createElement("blockquote",null,r.a.createElement("h3",null,"The Earth is a fine place and worth fighting for."),r.a.createElement("h4",null,"-Ernest Hemingway"))),r.a.createElement("div",{className:"quoteBox2"},r.a.createElement("blockquote",null,r.a.createElement("h3",null,"The greatest threat to our planet is the belief that someone else will save it."),r.a.createElement("h4",null,"-Robert Swan"))))),r.a.createElement("div",{className:"categorySelector"},r.a.createElement(h,{className:"blueButton",mass:this.state,onhandleBlueBinClicked:this.handleBlueBinClicked}),r.a.createElement(p,{className:"garbageButton",mass:this.state,onhandleGarbageBinClicked:this.handleGarbageBinClicked})),r.a.createElement("div",null,r.a.createElement(E,{mass:this.state}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.f2e3f4cd.chunk.js.map