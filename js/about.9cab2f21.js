(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d83":function(t,e,i){"use strict";i("8036")},"17b3":function(t,e,i){},"79b4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PageIntro",{attrs:{configs:{ContentData:t.ScenicSpotData,contentIntro:{name:"台灣的景點你想搜尋哪一個呢？",content:["夕陽餘暉中的101令人眩目，","想知道台灣哪裡還有美麗的地方嗎？","快利用上面的搜尋區塊搜尋吧！"],imageURL:"./image/building01.jpg"}}}})},a=[],o=(i("d81d"),i("c680")),s=i("2ef0"),r={components:{PageIntro:o["a"]},computed:{ScenicSpotData:function(){var t=this,e=Object(s["cloneDeep"])(this.$store.state.scenicSpot);return void 0!==e?(e.map((function(e){e.ScenicSpotName&&(t.$set(e,"Name",e.ScenicSpotName),t.$set(e,"ID",e.ScenicSpotID))})),e):[]}}},c=r,l=i("2877"),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},8036:function(t,e,i){},c680:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CategoryItem"),0!==t.Content.length?i("v-container",{attrs:{fluid:""}},[i("subTitle",{attrs:{title:"符合項目如以下"}}),i("v-row",{staticClass:"fixedFormat"},[i("IntroduceBox",{attrs:{data:t.visiblePages}})],1),i("v-row",{staticClass:"pagenation-top d-flex justify-center"},[i("Pagenation",{attrs:{pageLength:t.PageLength,visible:10},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1):i("v-container",{attrs:{fluid:""}},[i("subTitle",{attrs:{title:t.contenText.name}}),i("v-row",{staticClass:"justify-center"},[i("v-col",{attrs:{cols:12,sm:8,md:8,xs:12}},[i("div",{staticClass:"coverwithtext"},[i("div",{staticClass:"coverImg"},[i("img",{attrs:{src:t.contenText.imageURL}})]),i("div",{staticClass:"covertext"},t._l(t.contenText.content,(function(e){return i("span",{key:e},[t._v(t._s(e)),i("br")])})),0)])])],1)],1)],1)},a=[],o=(i("fb6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Dialog",{attrs:{width:t.DialogWidth,maxWidth:t.DialogWidth,minWidth:280},scopedSlots:t._u([{key:"cardText",fn:function(){return[i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"dialogItem d-flex"},[i("v-col",{staticClass:"dialogMd",attrs:{cols:12,sm:12,md:7,xs:12}},[t.dialogitem.Picture.PictureUrl1?i("div",{staticClass:"dialogImg"},[i("img",{attrs:{src:t.dialogitem.Picture.PictureUrl1,alt:t.dialogitem.Picture.PictureDescription1}})]):i("div",{staticClass:"\n                dialogImg\n                withoutPicture\n                d-flex\n                justify-center\n                align-center\n              ",class:t.seasonTopic},[t._v(" No Picture ")])]),i("v-col",{attrs:{cols:12,sm:12,md:5,xs:12}},[i("div",{staticClass:"dialogdesc"},[i("ul",[i("li",[i("div",{staticClass:"dialog_title"},[t._v(" "+t._s(t.dialogitem.Name)+" ")])]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-clock-outline")]),i("p",[t._v(t._s(t.dialogitem.OpenTime))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-phone")]),i("p",[t._v(t._s(t.dialogitem.Phone))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-map-marker")]),i("p",[t._v(t._s(t.dialogitem.Address))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-car-back")]),i("p",[t._v(t._s(t.dialogitem.MapUrl))])],1)])])])])],1),i("v-row",{staticClass:"dialoglongdesc"},[i("v-col",{attrs:{cols:12}},[i("div",{staticClass:"long_desc"},[t._v(" "+t._s(t.dialogitem.Description)+" ")])])],1)],1),i("v-container",{staticClass:"mt-6 dialog_r",attrs:{fluid:""}},[i("v-row",[i("subTitle",{attrs:{title:t.title[0].text,titleEn:t.title[0].value}})],1),i("IntroduceBoxWithBtn",{attrs:{dialogData:t.upData},scopedSlots:t._u([{key:"boxContext",fn:function(){return[i("div",{ref:"reuseBracketTop",staticClass:"d-flex reuse_container_dialog",style:{left:t.moveTop+"px"}},[i("InsideBox",{attrs:{Data:t.upData},on:{clickItem:t.openDialog}})],1)]},proxy:!0},{key:"boxAction",fn:function(){return[0!==t.upData.length?i("div",{staticClass:"r_btn",on:{click:t.handleMoveTop}},[i("v-icon",{attrs:{color:"#dfe5f0",size:"96px"}},[t._v("mdi-chevron-right ")])],1):t._e()]},proxy:!0}])})],1),i("v-container",{staticClass:"mt-6 dialog_r",attrs:{fluid:""}},[i("v-row",[i("subTitle",{attrs:{title:t.title[1].text,titleEn:t.title[1].value}})],1),i("IntroduceBoxWithBtn",{attrs:{dialogData:t.bottomData},scopedSlots:t._u([{key:"boxContext",fn:function(){return[i("div",{ref:"reuseBracket",staticClass:"d-flex reuse_container_dialog",style:{left:t.moveBottom+"px"}},[i("InsideBox",{attrs:{Data:t.bottomData},on:{clickItem:t.openDialog}})],1)]},proxy:!0},{key:"boxAction",fn:function(){return[0!==t.bottomData.length?i("div",{staticClass:"r_btn",on:{click:t.handleMove}},[i("v-icon",{attrs:{color:"#dfe5f0",size:"96px"}},[t._v("mdi-chevron-right ")])],1):t._e()]},proxy:!0}])})],1)]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}}),i("div",{staticClass:"reuse_container reuse_container_FixedFormat"},t._l(t.data,(function(e){return i("div",{key:e.ID,staticClass:"reuse_box",on:{click:function(i){return t.openDialog(e)}}},[e.Picture.PictureUrl1?i("div",{staticClass:"reuse_top"},[i("img",{attrs:{src:e.Picture.PictureUrl1,alt:e.Picture.PictureDescription1}})]):i("div",{staticClass:"reuse_top withoutPicture d-flex justify-center align-center",class:t.seasonTopic},[t._v(" No Picture ")]),i("div",{staticClass:"reuse_bottom"},[i("ul",[i("li",[i("div",{staticClass:"resue_bottom_title"},[t._v(" "+t._s(t.maxLength(e.Name,10))+" ")])]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-clock-outline")]),i("p",[t._v(t._s(t.maxLength(e.OpenTime,11)))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-phone")]),i("p",[t._v(t._s(t.maxLength(e.Phone,15)))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-map-marker")]),i("p",[t._v(t._s(t.maxLength(e.Address,10)))])],1)])])])])})),0)],1)}),s=[],r=i("1da1"),c=i("5530"),l=(i("96cf"),i("b0c0"),i("4de4"),i("d3b7"),i("99af"),i("d81d"),i("b680"),i("2ef0")),u=i("bc3a"),d=i.n(u),h=i("00a3"),v=i("25a9"),p=i("a28b"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{staticClass:"mobile_dialogBox"},[i("div",{staticClass:"dialogBox"},[i("div",{staticClass:"reuseCoat",style:{width:t.dialogItemWidth*t.dialogData.length+"vw"}},[t._t("boxContext")],2),t._t("boxAction",(function(){return[i("div",{staticClass:"r_btn",on:{click:t.handleV}},[i("v-icon",{staticClass:"rightBTN",attrs:{color:"#dfe5f0",size:"112px"}},[t._v("mdi-chevron-right ")])],1)]}))],2)])},g=[],f={mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},computed:{content:function(){return this.data},dialogItemWidth:function(){var t=null;return t=this.windowSize<=625?68:37.7,t}},props:{dialogData:{type:Array}},data:function(){return{lengthspace:null,movespace:0,windowSize:window.innerWidth}},methods:{onResize:function(){this.windowSize=window.innerWidth},maxLength:function(t,e){var i=null;return void 0!==t&&e&&(i=t.length>e?t.slice(0,e+1)+"...":t),i},handleV:function(){var t=this,e=t.$refs.reuseBracketTop.clientWidth;this.movespace>1675-e&&(this.movespace-=850)}}},x=f,b=i("2877"),w=i("6544"),_=i.n(w),S=i("132d"),y=i("0fd9"),C=Object(b["a"])(x,m,g,!1,null,null,null),D=C.exports;_()(C,{VIcon:S["a"],VRow:y["a"]});var $=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex insideBoxDialog"},t._l(t.Data,(function(e){return i("div",{key:e.ID,staticClass:"reuse_box_dialog",on:{click:function(i){return t.$emit("clickItem",e)}}},[e.Picture.PictureUrl1?i("div",{staticClass:"reuse_top_dialog"},[i("img",{attrs:{src:e.Picture.PictureUrl1,alt:e.Picture.PictureDescription1}})]):i("div",{staticClass:"\n        reuse_top_dialog\n        withoutPicture\n        d-flex\n        justify-center\n        align-center\n      ",class:t.seasonTopic},[t._v(" No Picture ")]),i("div",{staticClass:"reuse_bottom_dialog"},[i("ul",[i("li",[i("div",{staticClass:"reuse_bottom_title_dialog"},[t._v(" "+t._s(t.maxLength(e.Name,10))+" ")])]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-clock-outline")]),i("p",[t._v(t._s(t.maxLength(e.OpenTime,11)))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-phone")]),i("p",[t._v(t._s(t.maxLength(e.Phone,15)))])],1)]),i("li",[i("div",{staticClass:"d-flex flex-grows"},[i("v-icon",{attrs:{size:"20px",color:"#173565"}},[t._v("mdi-map-marker")]),i("p",[t._v(t._s(t.maxLength(e.Address,10)))])],1)])])])])})),0)},T=[],I={props:{Data:{type:Array}},computed:{selectSeasonTopic:function(){return this.$store.state.topic},seasonTopic:function(){var t;return"Summer"===this.selectSeasonTopic&&(t={Summer:!0}),"Spring"===this.selectSeasonTopic&&(t={Spring:!0}),"Autumn"===this.selectSeasonTopic&&(t={Autumn:!0}),"Winter"===this.selectSeasonTopic&&(t={Winter:!0}),t}},methods:{maxLength:function(t,e){var i=null;return void 0!==t&&e&&(i=t.length>e?t.slice(0,e+1)+"...":t),i}}},P=I,z=Object(b["a"])(P,$,T,!1,null,null,null),L=z.exports;_()(z,{VIcon:S["a"]});var A={name:"IntroduceBox",components:{subTitle:p["a"],IntroduceBoxWithBtn:D,InsideBox:L},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},computed:{title:function(){var t=this.$route.name,e=this.shuffleArray(v["a"]);return e=e.filter((function(e){return e.value!==t})),e},DialogWidth:function(){return this.windowSize>1440?1440:1240},upData:function(){return"Hotel"===this.title[0].value?this.relateHotel:"Restaurant"===this.title[0].value?this.relateFood:"Activity"===this.title[0].value?this.relateActicity:"ScenicSpot"===this.title[0].value&&this.relateSpot},bottomData:function(){return"Hotel"===this.title[1].value?this.relateHotel:"Restaurant"===this.title[1].value?this.relateFood:"Activity"===this.title[1].value?this.relateActicity:"ScenicSpot"===this.title[1].value&&this.relateSpot},selectSeasonTopic:function(){return this.$store.state.topic},seasonTopic:function(){var t;return"Summer"===this.selectSeasonTopic&&(t={Summer:!0}),"Spring"===this.selectSeasonTopic&&(t={Spring:!0}),"Autumn"===this.selectSeasonTopic&&(t={Autumn:!0}),"Winter"===this.selectSeasonTopic&&(t={Winter:!0}),t}},props:{data:{require:!0,type:Array}},data:function(){return{dialog:!1,dialogitem:{},relateActicity:[],relateSpot:[],relateFood:[],relateHotel:[],moveTop:0,moveBottom:0,relateData:[],windowSize:window.innerWidth}},methods:{examinate:function(t){t()},openDialog:function(t){this.dialogitem=Object(c["a"])({},t),this.dialog=!0,this.moveTop=0,this.moveBottom=0,this.gettingOther(t)},maxLength:function(t,e){var i=null;return void 0!==t&&e&&(i=t.length>e?t.slice(0,e+1)+"...":t),i},gettingOther:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,d.a.all([d.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$spatialFilter=nearby(".concat(t.Position.PositionLat,",").concat(t.Position.PositionLon,",300)&$format=JSON"),{headers:h["a"].GetAuthorizationHeader()}),d.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/?$spatialFilter=nearby(".concat(t.Position.PositionLat,",").concat(t.Position.PositionLon,",300)&$format=JSON"),{headers:h["a"].GetAuthorizationHeader()}),d.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/?$spatialFilter=nearby(".concat(t.Position.PositionLat,",").concat(t.Position.PositionLon,",300)&$format=JSON"),{headers:h["a"].GetAuthorizationHeader()}),d.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/?$spatialFilter=nearby(".concat(t.Position.PositionLat,",").concat(t.Position.PositionLon,",300)&$format=JSON"),{headers:h["a"].GetAuthorizationHeader()})]).then(d.a.spread((function(t,i,n,a){0!==a.data.length&&(a.data.map((function(t){t.HotelName&&(e.$set(t,"Name",t.HotelName),e.$set(t,"ID",t.HotelID))})),e.relateHotel=Object(l["cloneDeep"])(a.data)),0!==n.data.length&&(n.data.map((function(t){t.ActivityName&&(e.$set(t,"Name",t.ActivityName),e.$set(t,"ID",t.ActivityID))})),e.relateActicity=Object(l["cloneDeep"])(n.data)),0!==i.data.length&&(i.data.map((function(t){t.RestaurantName&&(e.$set(t,"Name",t.RestaurantName),e.$set(t,"ID",t.RestaurantID))})),e.relateFood=Object(l["cloneDeep"])(i.data)),0!==t.data.length&&(t.data.map((function(t){t.ScenicSpotName&&(e.$set(t,"Name",t.ScenicSpotName),e.$set(t,"ID",t.ScenicSpotID))})),e.relateSpot=Object(l["cloneDeep"])(t.data))}))).catch((function(t){console.log("error",t)}));case 2:case"end":return i.stop()}}),i)})))()},shuffleArray:function(t){var e,i=t.length;while(0!=i){e=Math.floor(Math.random()*i),i--;var n=[t[e],t[i]];t[i]=n[0],t[e]=n[1]}return t},handleMoveTop:function(){var t=this,e=t.$refs.reuseBracketTop.clientWidth,i=this.windowSize/100,n=70*i,a=40*i,o=2*a,s=418.05*this.upData.length,r=836.1;this.windowSize<375&&this.moveTop>=-e+n&&(this.moveTop=(this.moveTop-=n).toFixed(1)),this.windowSize>=375&&this.windowSize<=625&&this.moveTop>=-e+n&&(this.moveTop=(this.moveTop-=n).toFixed(1)),this.windowSize>625&&this.windowSize<=1280&&this.moveTop>=-e+o&&(this.moveTop=(this.moveTop-=a).toFixed(1)),this.windowSize>1280&&this.windowSize<=1920&&this.moveTop>=-s+r&&(this.moveTop=(this.moveTop-=418.05).toFixed(1))},handleMove:function(){var t=this,e=t.$refs.reuseBracket.clientWidth,i=this.windowSize/100,n=70*i,a=40*i,o=2*a,s=418.05*this.bottomData.length,r=836.1;this.windowSize<375&&this.moveBottom>=-e+n&&(this.moveBottom=(this.moveBottom-=n).toFixed(1)),this.windowSize>=375&&this.windowSize<=625&&this.moveBottom>=-e+n&&(this.moveBottom=(this.moveBottom-=n).toFixed(1)),this.windowSize>625&&this.windowSize<1440&&this.moveBottom>=-e+o&&(this.moveBottom=(this.moveBottom-=a).toFixed(1)),this.windowSize>1280&&this.windowSize<=1920&&this.moveBottom>=-s+r&&(this.moveBottom=(this.moveBottom-=418.05).toFixed(1))},onResize:function(){this.windowSize=window.innerWidth}}},N=A,O=(i("0d83"),i("62ad")),k=i("a523"),B=Object(b["a"])(N,o,s,!1,null,"1140d070",null),j=B.exports;_()(B,{VCol:O["a"],VContainer:k["a"],VIcon:S["a"],VRow:y["a"]});var R=i("ad82"),W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-pagination",{class:t.seasonTopic,attrs:{"total-visible":t.visible,length:t.pageLength,circle:""},model:{value:t.initPage,callback:function(e){t.initPage=e},expression:"initPage"}})],1)},H=[],F=(i("a9e3"),{name:"Pagination",props:{value:{type:Number||String,default:1},pageLength:{type:Number||String,default:4},visible:{type:Number||String,default:4}},computed:{initPage:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},selectSeasonTopic:function(){return this.$store.state.topic},seasonTopic:function(){var t;return"Summer"===this.selectSeasonTopic&&(t={Summer:!0}),"Spring"===this.selectSeasonTopic&&(t={Spring:!0}),"Autumn"===this.selectSeasonTopic&&(t={Autumn:!0}),"Winter"===this.selectSeasonTopic&&(t={Winter:!0}),t}},data:function(){return{}}}),E=F,M=i("2909"),V=(i("25f0"),i("17b3"),i("9d26")),U=i("dc22"),J=i("a9ad"),G=i("de2c"),q=i("7560"),K=i("58df"),Q=Object(K["a"])(J["a"],Object(G["a"])({onVisible:["init"]}),q["a"]).extend({name:"v-pagination",directives:{Resize:U["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(c["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),a=this.length-n+1+i;if(this.value>n&&this.value<a){var o=1,s=this.length,r=this.value-n+2,c=this.value+n-2-i,l=r-1===o+1?2:"...",u=c+1===s-1?c+1:"...";return[1,l].concat(Object(M["a"])(this.range(r,c)),[u,this.length])}if(this.value===n){var d=this.value+n-1-i;return[].concat(Object(M["a"])(this.range(1,d)),["...",this.length])}if(this.value===a){var h=this.value-n+1;return[1,"..."].concat(Object(M["a"])(this.range(h,this.length)))}return[].concat(Object(M["a"])(this.range(1,n)),["..."],Object(M["a"])(this.range(a,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":a},on:i?{}:{click:n}},[t(V["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary"),a=e===this.value,o=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(o,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),X=Object(b["a"])(E,W,H,!1,null,null,null),Y=X.exports;_()(X,{VContainer:k["a"],VPagination:Q});var Z={name:"Hotels",components:{Pagenation:Y,IntroduceBox:j,subTitle:p["a"],CategoryItem:R["a"]},props:{configs:{type:Object,require:!0}},watch:{Content:{immediate:!0,deep:!0,handler:function(t){t&&(this.page=1)}}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},computed:{Content:function(){var t=Object(l["cloneDeep"])(this.configs.ContentData);return void 0!==t?t:[]},PageLength:function(){var t=null;return 0!==this.Content.length&&(t=this.windowSize<=625?Math.ceil(this.Content.length/5):Math.ceil(this.Content.length/20)),t},visiblePages:function(){var t=null;return 0===this.Content.length&&void 0===this.Content||(t=this.windowSize<=625?this.Content.slice(5*(this.page-1),5*this.page):this.Content.slice(20*(this.page-1),20*this.page)),t},contenText:function(){var t=Object.assign({},this.configs.contentIntro);return t}},data:function(){return{page:1,windowSize:window.innerWidth}},methods:{onResize:function(){this.windowSize=window.innerWidth}}},tt=Z,et=Object(b["a"])(tt,n,a,!1,null,null,null);e["a"]=et.exports;_()(et,{VCol:O["a"],VContainer:k["a"],VRow:y["a"]})},dcf5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PageIntro",{attrs:{configs:{ContentData:t.Activity,contentIntro:{name:"台灣的活動你想參加哪一個呢？",content:["假日走在台灣街頭到處是參加活動的人群，","想知道台灣哪裡有令人興奮的活動嗎？","快利用上面的搜尋區塊搜尋吧！"],imageURL:"./image/Activity01.jpg"}}}})},a=[],o=(i("d81d"),i("c680")),s=i("2ef0"),r={components:{PageIntro:o["a"]},computed:{Activity:function(){var t=this,e=Object(s["cloneDeep"])(this.$store.state.activity);return void 0!==e?(e.map((function(e){e.ActivityName&&(t.$set(e,"Name",e.ActivityName),t.$set(e,"ID",e.ActivityID))})),e):[]}}},c=r,l=i("2877"),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},e0f9:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PageIntro",{attrs:{configs:{ContentData:t.Hotel,contentIntro:{name:"台灣的你想住哪裡呢？",content:["在疲憊的一天後好好休息是最理想的，","想知道台灣有哪些不錯的飯店嗎？","快利用上面的搜尋區塊搜尋吧！"],imageURL:"./image/Hotel01.jpg"}}}})},a=[],o=(i("d81d"),i("c680")),s=i("2ef0"),r={components:{PageIntro:o["a"]},computed:{Hotel:function(){var t=this,e=Object(s["cloneDeep"])(this.$store.state.hotels);return void 0!==e?(e.map((function(e){e.HotelName&&(t.$set(e,"Name",e.HotelName),t.$set(e,"ID",e.HotelID))})),e):[]}}},c=r,l=i("2877"),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},f76e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PageIntro",{attrs:{configs:{ContentData:t.Restaurant,contentIntro:{name:"台灣的美食你想搜尋哪一個呢？",content:["走在台灣街頭都是撲鼻而來的香氣，","想知道哪裡還有令人食指大動的餐廳嗎？","快利用上面的搜尋區塊搜尋吧！"],imageURL:"./image/Food01.jpg"}}}})},a=[],o=(i("d81d"),i("c680")),s=i("2ef0"),r={components:{PageIntro:o["a"]},computed:{Restaurant:function(){var t=this,e=Object(s["cloneDeep"])(this.$store.state.restaurant);return void 0!==e?(e.map((function(e){e.RestaurantName&&(t.$set(e,"Name",e.RestaurantName),t.$set(e,"ID",e.RestaurantID))})),e):[]}}},c=r,l=i("2877"),u=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.9cab2f21.js.map