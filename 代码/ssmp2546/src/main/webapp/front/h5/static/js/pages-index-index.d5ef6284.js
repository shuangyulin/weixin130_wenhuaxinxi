(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(i,t,e){"use strict";var a=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac4d"),e("8a81"),e("ac6a"),e("96cf");var n=a(e("3b8d"));e("651d");var r=a(e("b704")),o={components:{uniIcons:r.default},data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],xinwenzixunlist:[],homewenhuazhanshilist:[],homewenzhangxinxilist:[],news:[]}},onShow:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(){var t,e,a,n,r,o,s,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=[],i.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=i.sent,a=!0,n=!1,r=void 0,i.prev=7,o=e.data.list[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)c=s.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&t.push({img:c.value});i.next=15;break;case 11:i.prev=11,i.t0=i["catch"](7),n=!0,r=i.t0;case 15:i.prev=15,i.prev=16,a||null==o.return||o.return();case 18:if(i.prev=18,!n){i.next=21;break}throw r;case 21:return i.finish(18);case 22:return i.finish(15);case 23:return t&&(this.swiperList=t),i.next=26,this.$api.recommend("xinwenzixun",1,4);case 26:return e=i.sent,this.xinwenzixunlist=e.data.list,i.next=30,this.$api.list("wenhuazhanshi",{page:1,limit:6});case 30:return e=i.sent,this.homewenhuazhanshilist=e.data.list,i.next=34,this.$api.list("wenzhangxinxi",{page:1,limit:6});case 34:e=i.sent,this.homewenzhangxinxilist=e.data.list;case 36:case"end":return i.stop()}}),i,this,[[7,11,15,23],[16,,18,22]])})));function t(){return i.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(i){},onNewsDetailTap:function(i){this.$utils.jump("../news-detail/news-detail?id=".concat(i))},onDetailTap:function(i,t){this.$utils.jump("../".concat(i,"/detail?id=").concat(t))},onPageTap:function(i){uni.navigateTo({url:"../".concat(i,"/list"),fail:function(){uni.switchTab({url:"../".concat(i,"/list")})}})}}};t.default=o},1156:function(i,t,e){"use strict";var a,n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"headerb"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:i.autoplaySwiper,circular:!1,"indicator-active-color":"rgba(255, 255, 0, 1)","indicator-color":"rgba(255, 153, 0, 1)",duration:1e3,interval:i.intervalSwiper,vertical:!1}},i._l(i.swiperList,(function(t,a){return e("v-uni-swiper-item",{key:a,on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSwiperTap(t)}}},[e("v-uni-image",{attrs:{mode:"aspectFill",src:t.img}})],1)})),1)],1)],1),e("v-uni-view",{staticClass:"pl15 col3",staticStyle:{padding:"0 12px","box-sizing":"border-box"},style:{backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",color:"#FFF",borderRadius:"20rpx",textAlign:"left",borderWidth:"2rpx",fontSize:"32rpx",lineHeight:"72rpx",borderStyle:"solid"}},[i._v("新闻资讯推荐")]),e("v-uni-view",{staticClass:"uni-product-list",class:"",style:{borderRadius:"40rpx",backgroundColor:"rgba(255, 255, 0, 0)"}},i._l(i.xinwenzixunlist,(function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product",style:{borderRadius:"40rpx",backgroundColor:"rgba(255, 153, 0, 0.14)"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onDetailTap("xinwenzixun",t.id)}}},[e("v-uni-view",{staticClass:"uni-product-title",style:{fontSize:"28rpx",lineHeight:"36rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v(i._s(t.xinwenbiaoti))]),e("v-uni-view",{staticClass:"image-view",style:{borderRadius:"300rpx",height:"300rpx"}},[e("v-uni-image",{staticClass:"uni-product-image",style:{borderRadius:"300rpx",height:"300rpx"},attrs:{mode:"aspectFill",src:t.tupian?t.tupian.split(",")[0]:""}})],1)],1)})),1),i._e(),e("v-uni-view",{staticClass:"pl15 col3 header-title",staticStyle:{padding:"0 12px","box-sizing":"border-box"},style:{backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",color:"#FFF",borderRadius:"20rpx",borderWidth:"2rpx",fontSize:"32rpx",lineHeight:"72rpx",borderStyle:"solid"}},[e("v-uni-view",{staticClass:"left",style:{fontSize:"32rpx",color:"#FFF"}},[i._v("文化展示")]),e("v-uni-view",{staticClass:"right-content",style:{fontSize:"32rpx",color:"#FFF"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onPageTap("wenhuazhanshi")}}},[i._v("查看更多")])],1),e("v-uni-view",{staticClass:"uni-product-list",class:"active",style:{borderRadius:0,backgroundColor:"#efefef"}},i._l(i.homewenhuazhanshilist,(function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product",style:{borderRadius:"40rpx",backgroundColor:"rgba(255, 153, 0, 0.14)"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onDetailTap("wenhuazhanshi",t.id)}}},[e("v-uni-view",{staticClass:"uni-product-title",style:{fontSize:"28rpx",lineHeight:"56rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v(i._s(t.biaoti))]),e("v-uni-view",{staticClass:"image-view",style:{borderRadius:"300rpx",height:"320rpx"}},[e("v-uni-image",{staticClass:"uni-product-image",style:{borderRadius:"300rpx",height:"320rpx"},attrs:{mode:"aspectFill",src:t.fengmian?t.fengmian.split(",")[0]:""}})],1)],1)})),1),i._e(),e("v-uni-view",{staticClass:"pl15 col3 header-title",staticStyle:{padding:"0 12px","box-sizing":"border-box"},style:{backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",color:"#FFF",borderRadius:"20rpx",borderWidth:"2rpx",fontSize:"32rpx",lineHeight:"72rpx",borderStyle:"solid"}},[e("v-uni-view",{staticClass:"left",style:{fontSize:"32rpx",color:"#FFF"}},[i._v("文章信息")]),e("v-uni-view",{staticClass:"right-content",style:{fontSize:"32rpx",color:"#FFF"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onPageTap("wenzhangxinxi")}}},[i._v("查看更多")])],1),e("v-uni-view",{staticClass:"uni-product-list",class:"active",style:{borderRadius:0,backgroundColor:"#efefef"}},i._l(i.homewenzhangxinxilist,(function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product",style:{borderRadius:"40rpx",backgroundColor:"rgba(255, 153, 0, 0.14)"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onDetailTap("wenzhangxinxi",t.id)}}},[e("v-uni-view",{staticClass:"uni-product-title",style:{fontSize:"28rpx",lineHeight:"56rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v(i._s(t.wenzhangbiaoti))]),e("v-uni-view",{staticClass:"image-view",style:{borderRadius:"300rpx",height:"320rpx"}},[e("v-uni-image",{staticClass:"uni-product-image",style:{borderRadius:"300rpx",height:"320rpx"},attrs:{mode:"aspectFill",src:t.tupian?t.tupian.split(",")[0]:""}})],1)],1)})),1),i._e()],1)},r=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}))},3288:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'uni-page-body[data-v-7af82cc8]{background:#f8f8f8}.uni-padding-wrap[data-v-7af82cc8]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-view[data-v-7af82cc8]{font-family:"\\5FAE\\8F6F\\96C5\\9ED1";font-size:%?30?%}.header[data-v-7af82cc8]{background:#eee;padding:0 0 %?300?% 0;margin-bottom:%?20?%;position:relative}.ssbox[data-v-7af82cc8]{background:hsla(0,0%,100%,.35);width:%?530?%;border-radius:%?60?%;padding:%?10?% %?15?%;box-sizing:border-box}.ss_input[data-v-7af82cc8]{border:none;width:%?450?%;font-size:%?30?%;color:#fff;background:none;height:%?45?%;line-break:%?45?%}.headerb[data-v-7af82cc8]{position:absolute;left:0;width:100%;box-sizing:border-box}.headerb uni-image[data-v-7af82cc8]{width:100%;position:relative;z-index:10}.headerb .swiper[data-v-7af82cc8]{height:%?300?%}.swiper[data-v-7af82cc8] .uni-swiper-dot{width:%?16?%;height:%?16?%;broder-radius:50%}.notice[data-v-7af82cc8]{position:relative;z-index:5;padding:0 %?50?%}.noticem[data-v-7af82cc8]{background:#fff;padding:%?55?% %?30?% %?15?%;border-radius:%?10?%;margin-top:%?-45?%}.noticer[data-v-7af82cc8]{width:%?480?%;height:%?50?%}.noticer .swiper-item[data-v-7af82cc8]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;height:%?50?%;line-height:%?50?%;font-size:%?24?%}.list[data-v-7af82cc8]{padding:%?20?% %?20?% %?20?%}.listm[data-v-7af82cc8]{background:#fff;border-radius:%?15?%;box-shadow:0 0 %?2?% rgba(0,0,0,.1);margin-bottom:%?20?%;padding:%?30?%}.listmpic[data-v-7af82cc8]{border-radius:%?10?%;width:%?166?%;margin-right:%?20?%}.listmr[data-v-7af82cc8]{\n\t/* width: 460upx; */display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n\n\n\n\n\n\n\n\n\n.uni-product-list[data-v-7af82cc8]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:0;padding:0 %?14?%;box-sizing:border-box}.uni-product-list.active[data-v-7af82cc8]{padding:0 %?12?%}.uni-product[data-v-7af82cc8]{padding:%?10?%;margin:%?10?%;width:%?341?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fff}.uni-product-list.active .uni-product[data-v-7af82cc8]{width:%?222?%}.image-view[data-v-7af82cc8]{height:%?321?%;width:%?321?%;\n\t/* margin: 12upx 0; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.uni-product-list.active .image-view[data-v-7af82cc8]{height:%?202?%;width:%?202?%;overflow:hidden}.uni-product-image[data-v-7af82cc8]{height:100%;width:100%;margin:0 auto;display:block}.uni-product-title[data-v-7af82cc8]{width:100%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1}.uni-product-price[data-v-7af82cc8]{width:100%;margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original[data-v-7af82cc8]{color:#e80080}.uni-product-price-favour[data-v-7af82cc8]{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip[data-v-7af82cc8]{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}.header-title[data-v-7af82cc8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?40?%}body.?%PAGE?%[data-v-7af82cc8]{background:#f8f8f8}',""]),i.exports=t},"7d2b":function(i,t,e){"use strict";var a=e("bd70"),n=e.n(a);n.a},8069:function(i,t,e){"use strict";e.r(t);var a=e("0d9b"),n=e.n(a);for(var r in a)"default"!==r&&function(i){e.d(t,i,(function(){return a[i]}))}(r);t["default"]=n.a},bd70:function(i,t,e){var a=e("3288");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("54625e8b",a,!0,{sourceMap:!1,shadowMode:!1})},f75a:function(i,t,e){"use strict";e.r(t);var a=e("1156"),n=e("8069");for(var r in n)"default"!==r&&function(i){e.d(t,i,(function(){return n[i]}))}(r);e("7d2b");var o,s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"7af82cc8",null,!1,a["a"],o);t["default"]=c.exports}}]);