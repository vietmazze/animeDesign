(this.webpackJsonpanime_design=this.webpackJsonpanime_design||[]).push([[0],{133:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(25),r=t.n(c),i=t(5),o=t(20),s=t(3),m=t(2),A=t(60),E=function(e){var a=e.task.state,t=Object(A.a)(),l=t.getCollapseProps,c=t.getToggleProps,r=t.isOpen;return n.a.createElement("div",{className:"block"+("invisible"===a?"unhidden md:hidden":"unhidden")},n.a.createElement("button",Object.assign({},c(),{className:"flex items-center "}),r?n.a.createElement(s.a,{icon:m.c,size:"2x",className:"fontawesome "}):n.a.createElement(s.a,{icon:m.c,size:"2x",className:"fontawesome"})),n.a.createElement("section",l(),n.a.createElement("ul",{className:" py-3 text-white"},n.a.createElement("li",null,n.a.createElement("a",{href:"/home"},"Shows")),n.a.createElement("li",null,n.a.createElement("a",{href:"/home"},"News")),n.a.createElement("li",null,n.a.createElement("a",{href:"/home"},"Manga")),n.a.createElement("li",null,n.a.createElement("a",{href:"/home"},"Forums")))))},u=t(6),g=t(8),d=t.n(g),f=t(21),h=t.n(f),p={"Content-Type":"application/json"},b=function(){return{type:"SET_LOADING"}},w=function(e){return{type:"LOGIN_ENABLE",payload:e}},B=t(62),x=t.n(B),N=Object(u.b)((function(e){return{alerts:e.alerts}}))((function(e){var a=e.alerts;return a.length>0&&a.map((function(e){return n.a.createElement("div",{className:"bg-".concat(e.type),key:e.id},e.msg)}))})),C=t(63),v=t.n(C);var y=function(){return n.a.createElement("div",null,n.a.createElement("img",{className:"display:block m-auto w-12",src:v.a}))},I=Object(u.b)((function(e){return{anime:e.anime,auth:e.auth}}),{setLoginEnable:w,setRegisterEnable:function(e){return{type:"REGISTER_ENABLE",payload:e}},getLogin:function(e){return function(a){var t;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,d.a.awrap(h.a.post("http://localhost:5000/api/auth",e,{headers:p}));case 3:t=l.sent,a({type:"LOGIN_SUCCESS",payload:t.data}),l.next=11;break;case 7:l.prev=7,l.t0=l.catch(0),a({type:"LOGIN_FAIL",payload:l.t0.response.data.msg}),console.log(l.t0.response.data.msg);case 11:case"end":return l.stop()}}),null,null,[[0,7]])}},getRegister:function(e){return function(a){var t;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,d.a.awrap(h.a.post("http://localhost:5000/api/users",e,{headers:p}));case 3:t=l.sent,a({type:"REGISTER_SUCCESS",payload:t.data}),l.next=10;break;case 7:l.prev=7,l.t0=l.catch(0),a({type:"REGISTER_FAIL",payload:l.t0.response.data.msg});case 10:case"end":return l.stop()}}),null,null,[[0,7]])}},setAlert:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(l){var n;return d.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:n=x.a.v4(),l({type:"SET_ALERT",payload:{msg:e,type:a,id:n}}),setTimeout((function(){return l({type:"REMOVE_ALERT",payload:n})}),t);case 3:case"end":return c.stop()}}))}},setLoading:b})((function(e){var a=e.auth,t=a.loginToken,c=a.isAuthenticated,r=a.loginFail,i=(a.registerFail,e.anime),o=i.loading,A=i.login,E=i.register,u=e.setLoginEnable,g=e.setRegisterEnable,d=e.getLogin,f=e.getRegister,h=e.setAlert,p=e.setLoading,b=function(){o=!1,E=!1,u(A=!1),g(E)};Object(l.useEffect)((function(){"Invalid Credentials"===r&&h(r,"red-500")}),[r,c,o]);var w,B;return!0===A?w=n.a.createElement("div",{id:"modal-wrapper",className:"login block w-full  fixed z-10 top-0 left-0  w-full h-full overflow-auto bg-black "},n.a.createElement("div",{className:"popup_inner"},n.a.createElement("button",{className:"fa-layers fa-fw absolute right-0",onClick:b},n.a.createElement(s.a,{icon:m.i,size:"2x",color:"red",transform:"down-2"})),n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p(),""===e.target[0].value||""===e.target[1].value)h("Please fill in all fields","red-500");else{var a={email:e.target[0].value,password:e.target[1].value};d(a),b()}},action:"",className:"flex flex-col items-center content-center h-full text-center"},n.a.createElement("h1",{className:"text-5xl text-red-500 font-bold"},"Member Login"),o?n.a.createElement(y,null):n.a.createElement(N,null),n.a.createElement("input",{className:"py-2 px-4 w-full bg-gray-300 border border-solid border-black",type:"email",placeholder:"Email",name:"email"}),n.a.createElement("input",{className:"py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black ",type:"password",placeholder:"Password",name:"password"}),n.a.createElement("a",{className:"text-red-500 py-3",href:""}," ","Forgot your password?"),n.a.createElement("button",{type:"submit",className:" mt-5 border border-solid border-red-500  bg-red-500 rounded py-2 px-4 "},"Sign In"),n.a.createElement("h4",{className:"text-white"},"Not a member yet?"),n.a.createElement("button",{onClick:function(e){e.preventDefault(),u(!A),g(!E)},className:"text-red-500",href:""},"Signup")))):console.log("Login is not active"),!0===E?(B=n.a.createElement("div",{id:"modal-wrapper",className:"login block w-full  fixed z-10 top-0 left-0  w-full h-full overflow-auto bg-black "},n.a.createElement("div",{className:"popup_inner"},n.a.createElement("button",{className:"fa-layers fa-fw absolute right-0",onClick:b},n.a.createElement(s.a,{icon:m.i,size:"2x",color:"red",transform:"down-2"})),n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===e.target[0].value||""===e.target[1].value)h("Please fill in all fields","red-500");else{var a={name:e.target[0].value,email:e.target[1].value,password:e.target[2].value};f(a),b()}},action:"",className:"flex flex-col items-center content-center h-full text-center"},n.a.createElement("h1",{className:"text-5xl text-red-500 font-bold"},"Register"),n.a.createElement(N,null),n.a.createElement("input",{className:"py-2 px-4 w-full bg-gray-300 border border-solid border-black",type:"text",placeholder:"Username",name:"username"}),n.a.createElement("input",{className:"py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black",type:"email",placeholder:"Email",name:"email"}),n.a.createElement("input",{className:"py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black ",type:"password",placeholder:"Password",name:"password"}),n.a.createElement("input",{className:"py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black ",type:"password",placeholder:"Password Confirmation",name:"password2"}),n.a.createElement("button",{type:"submit",className:" mt-5 border border-solid border-red-500  bg-red-500 rounded py-2 px-4 "},"Register"),n.a.createElement("button",{onClick:function(e){e.preventDefault(),g(!E),u(!A)},className:"text-red-500",href:""},"Back to Login")))),console.log("activeregister"),console.log(t)):console.log("Register no active"),n.a.createElement("div",null,n.a.createElement(N,null)," ",w," ",B)})),Q=Object(u.b)((function(e){return{anime:e.anime}}),{setLoginEnable:w})((function(e){var a=e.anime,t=(a.animes,a.login),c=e.setLoginEnable;return Object(l.useEffect)((function(){console.log(t)}),[]),n.a.createElement("nav",{className:" bg-black justify-between  flex-wrap py-3  "},n.a.createElement("div",{className:"container mx-auto "},n.a.createElement("div",{className:"relative flex object-center "},n.a.createElement(E,{task:{state:"invisible"}}),n.a.createElement("ul",{className:"relative flex object-center text-lg invisible md:visible "},n.a.createElement("li",{className:" text-white"},n.a.createElement(i.b,{className:" text-color",to:"/"},"Home")),n.a.createElement("li",{className:"pl-4 text-white hover:text-gray-500"},n.a.createElement(i.b,{to:"/watch"},"Watch")),n.a.createElement("li",{className:"pl-4 text-white hover:text-gray-500"},n.a.createElement(i.b,{to:"/contact"},"Contact")),n.a.createElement("li",{className:"pl-4 text-white hover:text-gray-500"},n.a.createElement(i.b,{to:"/about"},"About"))),n.a.createElement("ul",{className:" text-lg ml-auto "},n.a.createElement("li",{className:"px-4 text-white"},n.a.createElement("button",{onClick:function(){c(!t)},className:""},n.a.createElement(s.a,{icon:m.j}),n.a.createElement("h3",{className:" pl-2 hidden md:inline hover:text-gray-500"},"Login")))))))})),F=t(19),G=t(65),k=t(66),S=t(15),j={loading:!1,error:null,animes:null,airing:null,login:!1,loginToken:{},register:!1},D={loginToken:{},loginFail:{},isAuthenticated:!1,registerFail:{},alerts:{}},R=t(75),U=[],Y=Object(F.combineReducers)({anime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ANIME":return Object(S.a)({},e,{animes:a.payload,loading:!1});case"GET_AIRING":return Object(S.a)({},e,{airing:a.payload,loading:!1});case"SET_LOADING":return Object(S.a)({},e,{loading:!0});case"ANIME_ERROR":return console.error(a.payload),Object(S.a)({},e,{error:a.payload,loading:!1});case"LOGIN_ENABLE":return Object(S.a)({},e,{login:a.payload});case"REGISTER_ENABLE":return Object(S.a)({},e,{register:a.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_SUCCESS":return localStorage.setItem("token",a.payload.token),Object(S.a)({},e,{loginToken:a.payload.token,isAuthenticated:!0});case"LOGIN_FAIL":return localStorage.removeItem("token"),Object(S.a)({},e,{loginToken:null,isAuthenticated:!1,loginFail:a.payload});case"REGISTER_SUCCESS":return localStorage.setItem("token",a.payload.token),Object(S.a)({},e,{loginToken:a.payload.token,isAuthenticated:!0});case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(S.a)({},e,{loginToken:null,isAuthenticated:!1,registerFail:a.payload});default:return e}},alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_ALERT":return[].concat(Object(R.a)(e),[a.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==a.payload}));default:return e}}}),M=[k.a],O=Object(F.createStore)(Y,{},Object(G.composeWithDevTools)(F.applyMiddleware.apply(void 0,M))),H=(t(110),t(111),t(74)),L=t(67),J=t.n(L),K=t(68),T=t.n(K),W=t(69),Z=t.n(W),P=t(70),q=t.n(P),V=Object(u.b)((function(e){return{anime:e.anime}}),{getAiring:function(){return function(e){var a;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(),t.next=4,d.a.awrap(h.a.get("https://api.jikan.moe/v3/top/anime/1/airing"));case 4:a=t.sent,e({type:"GET_ANIME",payload:a.data.top}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:"ANIME_ERROR",payload:t.t0.message});case 11:case"end":return t.stop()}}),null,null,[[0,8]])}}})((function(e){var a=e.anime,t=a.animes,c=a.loading,r=e.getAiring;Object(l.useEffect)((function(){r()}),[]);var i=[{img:J.a,title:"Boruto: Naruto Next Generations"},{img:T.a,title:"One Punch Man"},{img:Z.a,title:"Kimetsu no Yaiba"},{img:q.a,title:"Black Clover"}];return c||null===t?n.a.createElement("h4",null,"Loading"):n.a.createElement("div",null,c||0!==t.length?n.a.createElement(H.a,{height:260},i.map((function(e){return n.a.createElement("div",null,n.a.createElement("img",{src:e.img,alt:"",className:" w-full"}))}))):n.a.createElement("p",null,"Test failed"))})),z=t(13),X=function(e){var a=e.label,t=e.onClick,l="btn inline-block py-2 pr-2  hover:text-blue-800 font-semibold w-full";return e.activeTab===a&&(l+=" text-white"),n.a.createElement("li",{className:"-mb-px mr-1",onClick:function(){t(a)}},n.a.createElement("button",{className:l},a," "))},_=function(e){var a=e.anime;return n.a.createElement("div",{className:"flex flex-col relative  text-white w-auto  h-auto"},n.a.createElement("h1",{className:"text-3xl text-color"},a[0].title," "),n.a.createElement("div",{className:"border-0 bg-gray-500 font-thin text-sm mb-2"},"Episode 11/12"),n.a.createElement("div",{className:" text-base mb-2 h-12"},n.a.createElement("p",{className:"font-hairline text-wrap h-full break-normal truncate"},a[0].description," ")),n.a.createElement("div",{className:"font-bold text-base mb-2 "},n.a.createElement("p",null,"Scores: ",a[0].score),n.a.createElement("p",null,"Status: ",a[0].status," "),n.a.createElement("p",null," Date aired: ",a[0].date_air),n.a.createElement("p",null,"Genre: ",a[0].genre," ")),n.a.createElement("div",{className:"  w-full bg-theme-color text-center h-8  "},n.a.createElement("button",{className:"text-lg"}," WATCH NOW!")))},$=t(72),ee=t.n($),ae=function(e){var a=e.tab,t=e.anime,c=e.activeTab;return n.a.createElement("div",{className:""},a.map((function(e){if(e.label===c)return n.a.createElement(l.Fragment,null,"Recent"===c?n.a.createElement("p",null," Recent"):n.a.createElement("div",{className:"flex flex-row flex-wrap justify-around "},t.slice(0,8).map((function(e){return n.a.createElement("div",{className:"px-2 py-2 mb-4 h-325 w-250 "},n.a.createElement("div",{className:"  "},n.a.createElement(i.b,{to:"/watch/".concat(e.title)},n.a.createElement("img",{src:e.image_url,alt:"",className:"h-237 w-full","data-tip":!0,"data-for":"overridePosition"}))),n.a.createElement("div",{className:" text-wrap title-text object-contain w-full text-center "},n.a.createElement(i.b,{to:"/watch/".concat(e.title),className:""},e.title)),n.a.createElement(ee.a,{id:"overridePosition",overridePosition:function(e,a,t,l){var n=e.left,c=e.top,r=document.documentElement;return n=Math.min(r.clientWidth-l.clientWidth,n),c=Math.min(r.clientHeight-l.clientHeight,c),n=Math.max(0,n),{top:c=Math.max(0,c),left:n}},getContent:function(){return n.a.createElement(_,{anime:t})}}))}))))})))},te=function(){var e=Object(l.useState)("Popular"),a=Object(z.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)([]),i=Object(z.a)(r,2),o=i[0],s=i[1],m=Object(l.useState)(!1),A=Object(z.a)(m,2),E=A[0],u=A[1],g=Object(l.useState)([{label:"Popular",id:1,children:"this is recent tab"},{label:"New",id:2,children:"this is recent tab"},{label:"Recent",id:3,children:"this is recent tab"}]),f=Object(z.a)(g,2),p=f[0],b=(f[1],function(e){c(e),w()}),w=function(){var e;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),a.next=3,d.a.awrap(h.a.get("https://api.jikan.moe/v3/top/anime/1/airing"));case 3:e=a.sent,s(e.data.top),u(!1);case 6:case"end":return a.stop()}}))};Object(l.useEffect)((function(){w()}),[]);return n.a.createElement("div",{className:"tabs px-4 py-4 mt-4 h-full border border-gray-500 "},n.a.createElement("div",{className:" flex border-b "},n.a.createElement("h2",{className:"pr-4 py-2 font-semibold text-color "},"RECENTLY UPDATED"),n.a.createElement("ul",{className:"flex border-b "},p.map((function(e){return n.a.createElement(X,{onClick:b,activeTab:t,label:e.label,key:e.label})})))),n.a.createElement("div",null,E||0!==o.length?n.a.createElement(ae,{tab:p,anime:o,activeTab:t}):n.a.createElement("p",null,"Test failed")))},le=function(){return n.a.createElement("div",null,n.a.createElement(V,null),n.a.createElement(te,null))},ne=function(e){var a,t=e.tab,c=e.anime,r=e.activeTab;return a="Week"===r?n.a.createElement("h1",{className:"text-white"}," Week"):"Month"===r?n.a.createElement("h1",{className:"text-white"}," Month "):n.a.createElement("div",{className:"flex flex-row flex-wrap "},c.map((function(e){return n.a.createElement("div",{className:"flex flex-row items-center border-b border-gray-700 h-30   w-64 ml-2 text-white",key:e.id},n.a.createElement("div",{className:"border border-solid border-gray-500  px-3 "},n.a.createElement("i",{className:"  "},e.id)),n.a.createElement("div",{className:" h-20 w-12 ml-2 "},n.a.createElement(i.b,{to:"/watch/".concat(e.title)}," ",n.a.createElement("img",{className:"object-cover h-full w-full",src:e.image_url,alt:""}))),n.a.createElement("div",{className:"   ml-3 w-40 font-Roboto font-style: italic"},n.a.createElement(i.b,{to:"/watch/".concat(e.title)},n.a.createElement("h2",null,e.title)),n.a.createElement("div",{className:"flex row text-xs "},n.a.createElement("span",{className:"pr-2"},n.a.createElement(s.a,{icon:m.d})," ",e.view),n.a.createElement("span",null,n.a.createElement(s.a,{icon:m.e})," ",e.favorited))))}))),n.a.createElement("div",null,t.map((function(e){if(e.label===r)return n.a.createElement(l.Fragment,null,a)})))},ce=function(e){var a=e.anime;return n.a.createElement("div",{className:"h-40 w-full "},n.a.createElement("div",{className:"  relative  h-full  bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url(https://static.akacdn.ru/files/images/2019/08/f66b30a5672beef7ae6654d540390544.jpg-w650-h350)"}},n.a.createElement("div",{className:"absolute bottom-1/2 left-3/5 opacity-75"},n.a.createElement(i.b,{className:"",to:"/watch/".concat(a[0].title)},n.a.createElement(s.a,{icon:m.g,size:"3x"}))),n.a.createElement("div",{className:"absolute bottom-0 text-white px-2"},n.a.createElement(i.b,{className:" text-white",to:"/watch/".concat(a[0].title)},a[0].title),n.a.createElement("div",{className:" flex row text-xs   "},n.a.createElement("span",{className:"pr-2"},n.a.createElement(s.a,{icon:m.d})," ",a[0].view),n.a.createElement("span",null,n.a.createElement(s.a,{icon:m.e})," ",a[0].favorited)))))},re=function(){var e=Object(l.useState)("Day"),a=Object(z.a)(e,2),t=a[0],c=a[1],r=[{label:"Day",id:1,children:"this is recent tab"},{label:"Week",id:2,children:"this is recent tab"},{label:"Month",id:3,children:"this is recent tab"}],i=[{id:2,title:"One Piece",image_url:"https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",url:"https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",view:124321,favorited:500},{id:3,title:"Dr. Stone",image_url:"https://cdn.myanimelist.net/images/anime/1613/102576.jpg?s=44aa2af9cfc2523f9feb07d2b13d4196",url:"https://myanimelist.net/anime/38691/Dr_Stone",view:33211,favorited:500},{id:4,title:"Fate/Grand Order: Zettai Majuu Sensen Babylonia",image_url:"https://cdn.myanimelist.net/images/anime/1194/103420.jpg?s=ab22c4cdf9f5805eee017284ef956772",url:"https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",view:99992,favorited:500},{id:5,title:"Mugen no Juunin: Immortal",image_url:"https://cdn.myanimelist.net/images/anime/1263/102516.jpg?s=b7ea90d71a23ab91720f2e03cbd67225",url:"https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",view:1241,favorited:500},{id:6,title:"Ani ni Tsukeru Kusuri wa Nai! 3",image_url:"https://cdn.myanimelist.net/images/anime/1756/103441.jpg?s=87077ad9646a34e21c01cfb1bf160cd0",url:"https://myanimelist.net/anime/39959/Ani_ni_Tsukeru_Kusuri_wa_Nai_3",view:12351,favorited:500}],o=function(e){c(e)};return n.a.createElement("div",{className:"tabs px-4 mt-2 h-full  "},n.a.createElement("div",{className:" flex flex-col  "},n.a.createElement("ul",{className:"flex flex-row "},n.a.createElement("h2",{className:"pr-4 py-2 font-semibold text-color "},"TOP ANIME"),r.map((function(e){return n.a.createElement(X,{onClick:o,activeTab:t,label:e.label,key:e.label})}))),n.a.createElement(ce,{tab:r,anime:i,activeTab:t}),n.a.createElement(ne,{tab:r,anime:i,activeTab:t})))},ie=t(12),oe=function(){return n.a.createElement("div",{className:"pt-5 mt-2 border-t-8 border-gray-600 font-Roboto"},n.a.createElement("div",{className:"md:flex flex-row"},n.a.createElement("ul",{className:"hidden md:block w-1/5"},n.a.createElement("li",{className:"text-color"},"HELP"),n.a.createElement("li",null," ",n.a.createElement(i.b,{to:"/"},"Contact")," "),n.a.createElement("li",null," ",n.a.createElement(i.b,{to:"/"},"FAQ")),n.a.createElement("li",null," ",n.a.createElement(i.b,{to:"/"},"Request"))),n.a.createElement("ul",{className:" hidden md:block w-1/5"},n.a.createElement("li",{className:"text-color"},"HELP"),n.a.createElement("li",null," ",n.a.createElement(i.b,{to:"/"},"Newest")," "),n.a.createElement("li",null," ",n.a.createElement(i.b,{to:"/"},"Recently Updated")),n.a.createElement("li",null," ",n.a.createElement(i.b,{to:"/"},"Ongoing"))),n.a.createElement("div",{className:"md:w-2/5"},n.a.createElement("ul",null,n.a.createElement("li",{className:"text-3xl text-center"},"ANIME WEBSITE"),n.a.createElement("li",{className:"flex flex-row  justify-center "},n.a.createElement("button",{className:"fa-layers fa-fw rounded-sm bg-red-500 items-center mr-3"},n.a.createElement(s.a,{icon:ie.b,size:"1x",color:"black"})),n.a.createElement("button",{className:"fa-layers fa-fw rounded-sm bg-blue-500 mr-3 "},n.a.createElement(s.a,{icon:ie.a,size:"1x",color:"black"})),n.a.createElement("button",{className:"fa-layers fa-fw rounded-sm bg-blue-500  "},n.a.createElement(s.a,{icon:ie.c,size:"1x",color:"black"}))),n.a.createElement("li",{className:"text-sm  text-center pt-2"}," ","Copyright @anime.com. All Rights Reserved"),n.a.createElement("div",{className:"text-xs text-center pt-2 "},"Disclaimer: This site does not store any files on its server. All Contents are providided by non affliated third parties"))),n.a.createElement("div",{className:"w-1/5"})))},se=Object(u.b)((function(e){return{anime:e.anime}}))((function(e){var a=e.anime;a.animes,a.loading,a.login;return n.a.createElement("div",{id:"anime",className:"container mx-auto mt-1 mb-5"},n.a.createElement("div",{className:"md:flex"},n.a.createElement("div",{className:"md:w-3/5 lg:w-8/12"},n.a.createElement(le,null)),n.a.createElement("div",{className:"  md:w-2/5 lg:w-4/12 pl-2 border border-gray-500"},n.a.createElement(re,null))),n.a.createElement(oe,null))})),me=function(){return n.a.createElement(u.a,{store:O},n.a.createElement(l.Fragment,null,n.a.createElement(I,null),n.a.createElement(Q,null),n.a.createElement("div",{className:""},n.a.createElement(se,null))))},Ae=t(73),Ee=t.n(Ae),ue=function(){var e=Object(l.useState)("rgb(51, 51, 51)"),a=Object(z.a)(e,2),t=a[0],c=a[1],r=function(e){console.log(e.target.id),c("red")};return n.a.createElement("div",{className:"",style:{backgroundColor:t}},n.a.createElement("div",{className:"flex  "},n.a.createElement("div",{className:"w-full  "},n.a.createElement("div",{className:"player-wrapper"},n.a.createElement(Ee.a,{className:"react-player",url:"https://www.youtube.com/watch?v=LMTGQqUUyzk",width:"100%",height:"100%",controls:"true"})),n.a.createElement("div",{className:"flex flex-row "},n.a.createElement("button",{className:" py-2 m-2",id:"autoplay",onClick:r},n.a.createElement("span",{className:"pr-1"},n.a.createElement(s.a,{icon:m.h,size:"xs"})),"Auto Play"),n.a.createElement("button",{className:" py-2 m-2",id:"autonext",onClick:r},n.a.createElement("span",{className:"pr-1"},n.a.createElement(s.a,{icon:m.h,size:"xs"})),"Auto Next"),n.a.createElement("button",{className:" py-2 m-2",id:"lightoff",onClick:r},n.a.createElement("span",{className:"pr-1"},n.a.createElement(s.a,{icon:m.f,size:"xs"})),"Light Off"),n.a.createElement("button",{className:" py-2 m-2",id:"bookmark",onClick:r},n.a.createElement("span",{className:"pr-1"},n.a.createElement(s.a,{icon:m.f,size:"xs"})," ")," ","Bookmark")))))},ge=function(e){e.comments;var a,t=Object(l.useState)(!0),c=Object(z.a)(t,2),r=c[0],i=(c[1],Object(l.useState)(!1)),o=Object(z.a)(i,2),A=o[0],E=o[1];return!0===A?a=n.a.createElement("div",{className:"w-11/12 m-4"},n.a.createElement("input",{type:"text",className:"h-24 w-full",placeholder:"Join the discussion..."}),n.a.createElement("button",{className:"bg-blue-500 text-white py-2 px-4 flex  ml-auto m-4"},"Submit")):console.log("empty"),n.a.createElement("div",{className:"flex justify-start "},n.a.createElement("div",{className:"w-full lg:w-9/12 "},n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("div",{className:"lg:w-5 m-4 "},n.a.createElement("span",{className:"fa-layers fa-fw "},n.a.createElement(s.a,{icon:m.j,size:"3x",color:"white",transform:"down-4"}))),n.a.createElement("div",{className:"w-11/12 m-4"},n.a.createElement("input",{type:"text",className:"h-24 w-full",placeholder:"Join the discussion..."}),n.a.createElement("h1",null,"LOG IN WITH"),n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("button",{className:"fa-layers fa-fw rounded-full bg-red-300 items-center justify-center mr-3"},n.a.createElement(s.a,{icon:ie.b,size:"1x",color:"black"})),n.a.createElement("button",{className:"fa-layers fa-fw rounded-full bg-blue-300 mr-3"},n.a.createElement(s.a,{icon:ie.a,size:"1x",color:"black"})),n.a.createElement("button",{className:"fa-layers fa-fw rounded-full bg-blue-300 "},n.a.createElement(s.a,{icon:ie.c,size:"1x",color:"black"})),n.a.createElement("button",{className:"bg-blue-500 text-white  px-4 flex  ml-auto "},"Submit")))),n.a.createElement("div",null,r?n.a.createElement("div",null,n.a.createElement("div",{className:"flex flex-row"},n.a.createElement("div",{className:"lg:w-5 m-4 "},n.a.createElement("span",{className:"fa-layers fa-fw "},n.a.createElement(s.a,{icon:m.j,size:"3x",color:"white",transform:"down-4"}))),n.a.createElement("div",{className:"w-11/12 m-4"},n.a.createElement("div",{className:"flex flex-col"},n.a.createElement("h3",null," Username"),n.a.createElement("p",null,"Some comment")),n.a.createElement("div",{className:"flex flex-row "},n.a.createElement("button",{className:"fa-layers fa-fw hover:opacity-25"},n.a.createElement(s.a,{icon:m.b,size:"xs",color:"white",transform:"down-4"})),n.a.createElement("button",{className:"fa-layers fa-fw hover:opacity-25"},n.a.createElement(s.a,{icon:m.a,size:"xs",color:"white",transform:"down-4"})),n.a.createElement("button",{className:"hover:opacity-25 text-white pl-2",onClick:function(){E(!A)}},"Reply")),a))):n.a.createElement("div",null," Be the first to comment ... "))))},de=function(){return n.a.createElement("div",{className:"container mx-auto mt-1 mb-5"},n.a.createElement(ue,null),n.a.createElement(ge,null),n.a.createElement(oe,null))},fe=function(){return n.a.createElement(u.a,{store:O},n.a.createElement(l.Fragment,null,n.a.createElement(I,null),n.a.createElement(Q,null),n.a.createElement("div",{className:""},n.a.createElement(de,null))))},he=function(){return n.a.createElement("h1",null,"Not found")},pe=(t(133),n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:me}),n.a.createElement(o.a,{path:"/watch/:id",component:fe}),n.a.createElement(o.a,{component:he})))));r.a.render(pe,document.getElementById("root"))},63:function(e,a){e.exports="data:image/gif;base64,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"},67:function(e,a,t){e.exports=t.p+"static/media/anime1.97cf663c.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/anime2.98fcaf83.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/anime3.41655a9f.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/anime4.7b700a2a.jpg"},77:function(e,a,t){e.exports=t(134)}},[[77,1,2]]]);
//# sourceMappingURL=main.8b375015.chunk.js.map