(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},3:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnails:"video_item_thumbnails__38zQE",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},30:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",img:"search_header_img__3WZdH",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},49:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),c=a.n(n),s=a(20),r=a.n(s),o=(a(30),a(10)),l=a(5),u=a.n(l),d=a(3),p=a.n(d),_=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,c="list"===e.display?p.a.list:p.a.grid;return Object(i.jsx)("li",{className:"".concat(p.a.container," ").concat(c),onClick:function(){return n(t)},children:Object(i.jsxs)("div",{className:p.a.video,children:[Object(i.jsx)("img",{src:a.thumbnails.medium.url,alt:"video thumbnail",className:p.a.thumbnails}),Object(i.jsxs)("div",{className:p.a.metadata,children:[Object(i.jsx)("p",{className:p.a.title,children:a.title}),Object(i.jsx)("p",{className:p.a.channel,children:a.channelTitle})]})]})})})),h=a(21),m=a.n(h),j=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(i.jsx)("ul",{className:m.a.videos,children:t.map((function(e){return Object(i.jsx)(_,{video:e,onVideoClick:a,display:n},e.id)}))})},b=a(4),v=a.n(b),O=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),c=function(){var e=a.current.value;t(e)};return Object(i.jsxs)("header",{className:v.a.header,children:[Object(i.jsxs)("div",{className:v.a.logo,children:[Object(i.jsx)("img",{className:v.a.img,src:"./images/logo.png",alt:"logo"}),Object(i.jsx)("h1",{className:v.a.title,children:"Youtube"})]}),Object(i.jsx)("input",{ref:a,className:v.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(i.jsx)("button",{className:v.a.button,type:"submit",onClick:function(){c()},children:Object(i.jsx)("img",{className:v.a.buttonImg,src:"./images/search.png",alt:"search"})})]})})),f=a(7),x=a.n(f),g=function(e){var t=e.video,a=e.video.snippet;return Object(i.jsxs)("section",{className:x.a.detail,children:[Object(i.jsx)("iframe",{className:x.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"405",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(i.jsx)("h2",{children:a.title}),Object(i.jsx)("h3",{children:a.channelTitle}),Object(i.jsx)("pre",{className:x.a.description,children:a.description})]})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),p=d[0],_=d[1],h=Object(n.useCallback)((function(e){_(null),t.search(e).then((function(e){return r(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[t]),Object(i.jsxs)("div",{className:u.a.app,children:[Object(i.jsx)(O,{onSearch:h}),Object(i.jsxs)("section",{className:u.a.content,children:[p&&Object(i.jsx)("div",{className:u.a.detail,children:Object(i.jsx)(g,{video:p})}),Object(i.jsx)("div",{className:u.a.list,children:Object(i.jsx)(j,{videos:s,onVideoClick:function(e){_(e)},display:p?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),S=a(9),C=a(22),I=a(23),P=a(24),E=a.n(P),R=new(function(){function e(t){Object(C.a)(this,e),this.youtube=E.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:t}})}return Object(I.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",chart:"mostPopular",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyCjf3_ieJxYfxWEr8XwpbSWjTgoPySj6Hs");r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(y,{youtube:R})}),document.getElementById("root"))},5:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},7:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[49,1,2]]]);
//# sourceMappingURL=main.2923c374.chunk.js.map