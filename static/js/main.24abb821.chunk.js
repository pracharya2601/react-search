(this["webpackJsonp04-search-from-api"]=this["webpackJsonp04-search-from-api"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),s=a(2),o=a.n(s),l=a(8),u=a(3),m=a(4),d=a(6),p=a(5),v=a(7),f=a.n(v),h=f.a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID z0VW4ezBPsQ21nAAInfy0a4Rwr0NZkScu4lUfqbvV1o"}}),b=(a(42),function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return console.log(e),r.a.createElement(b,{key:e.id.videoId,onVideoSelect:a,video:e})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)},E=function(e){var t=e.video;if(!t)return r.a.createElement("div",null);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"video player",src:a,allow:"accelerometer; autoplay;",allowFullScreen:!0})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term),e.props.search(e.state.term),e.props.onVideoSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search something"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component),y=(a(43),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:""},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.span)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(r.a.Component)),w=function(e){var t=e.images.map((function(e){return r.a.createElement(y,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},k=function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui horizontal label"},e.meanin.meta.id),r.a.createElement("div",{className:"ui red horizontal label"},e.meanin.fl),e.meanin.shortdef)},N=function(e){var t=e.meanin,a=e.onSelectWord;return r.a.createElement("p",{onClick:function(){return a(t)},className:"ui label",style:{margin:"1vh",cursor:"pointer"}},t)},j=function(e){var t=e.meanings,a=e.onSelectWord,n=t.map((function(e){return"string"==typeof e?r.a.createElement(N,{onSelectWord:a,key:e,meanin:e}):r.a.createElement(k,{onSelectWord:a,key:e.meta.id,meanin:e})}));return r.a.createElement("div",{className:"ui divided selection list"},n)},O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:[],data:[],videos:[],selectedVideo:null,selectedWord:""},e.onSearchSubmit=function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onTermSubmit=function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://www.googleapis.com/youtube/v3/search",{params:{part:"snippet",maxResults:5,key:"AIzaSyBz2wlIOVNJPLEe4LUJklvz7Ky2GdVAKM0",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.forDictSearch=function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://www.dictionaryapi.com/api/v3/references/sd4/json/".concat(a),{params:{key:"b4a49481-5cde-45ef-b572-6b39bde9b856"}});case 2:n=t.sent,e.setState({data:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onSelectWord=function(t){e.forDictSearch(t),e.onTermSubmit(t),e.onSearchSubmit(t)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("trending united states")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"2vh"}},r.a.createElement(g,{onSubmit:this.onSearchSubmit,search:this.forDictSearch,onVideoSubmit:this.onTermSubmit,onSelectWord:this.state.selectedWord}),r.a.createElement(j,{meanings:this.state.data,onSelectWord:this.onSelectWord}),r.a.createElement(w,{images:this.state.images}),r.a.createElement("br",null),r.a.createElement(E,{video:this.state.selectedVideo}),r.a.createElement(S,{onVideoSelect:this.onVideoSelect,videos:this.state.videos}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.24abb821.chunk.js.map