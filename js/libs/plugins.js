// --------------------------slider

/*
 * jQuery RefineSlide plugin v0.4.1
 * http://github.com/alexdunphy/refineslide
 * Requires: jQuery v1.8+
 * MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
;(function(f,e,a){var g={maxWidth:800,transition:"cubeV",customTransitions:[],fallback3d:"sliceV",perspective:1000,useThumbs:true,useArrows:false,thumbMargin:3,autoPlay:false,delay:5000,transitionDuration:800,startSlide:0,keyNav:true,captionWidth:50,arrowTemplate:'<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>',onInit:function(){},onChange:function(){},afterChange:function(){}};function b(i,h){this.$slider=f(i).addClass("rs-slider");this.settings=f.extend({},g,h);this.$slides=this.$slider.find("> li");this.totalSlides=this.$slides.length;this.cssTransitions=c.cssTransitions();this.cssTransforms3d=c.cssTransforms3d();this.currentPlace=this.settings.startSlide;this.$currentSlide=this.$slides.eq(this.currentPlace);this.inProgress=false;this.$sliderWrap=this.$slider.wrap('<div class="rs-wrap" />').parent();this.$sliderBG=this.$slider.wrap('<div class="rs-slide-bg" />').parent();this.settings.slider=this;this.init()}b.prototype={cycling:null,$slideImages:null,init:function(){this.settings.onInit();this.captions();if(this.settings.transition==="custom"){this.nextAnimIndex=-1}if(this.settings.useArrows){this.setArrows()}if(this.settings.keyNav){this.setKeys()}for(var h=0;h<this.totalSlides;h++){this.$slides.eq(h).addClass("rs-slide-"+h)}if(this.settings.autoPlay){this.setAutoPlay();this.$slider.on({mouseenter:f.proxy(function(){if(this.cycling!==null){clearTimeout(this.cycling)}},this),mouseleave:f.proxy(this.setAutoPlay,this)})}this.$slideImages=this.$slides.find("img:eq(0)").addClass("rs-slide-image");this.setup()},setup:function(){this.$sliderWrap.css("width",this.settings.maxWidth);if(this.settings.useThumbs){this.setThumbs()}this.$currentSlide.css({opacity:1,"z-index":2})},setArrows:function(){var h=this;this.$sliderWrap.append(this.settings.arrowTemplate);f(".rs-next",this.$sliderWrap).on("click",function(i){i.preventDefault();h.next()});f(".rs-prev",this.$sliderWrap).on("click",function(i){i.preventDefault();h.prev()})},next:function(){if(this.settings.transition==="custom"){this.nextAnimIndex++}if(this.currentPlace===this.totalSlides-1){this.transition(0,true)}else{this.transition(this.currentPlace+1,true)}},prev:function(){if(this.settings.transition==="custom"){this.nextAnimIndex--}if(this.currentPlace==0){this.transition(this.totalSlides-1,false)}else{this.transition(this.currentPlace-1,false)}},setKeys:function(){var h=this;f(a).on("keydown",function(i){if(i.keyCode===39){h.next()}else{if(i.keyCode===37){h.prev()}}})},setAutoPlay:function(){var h=this;this.cycling=setTimeout(function(){h.next()},this.settings.delay)},setThumbs:function(){var k=this,j=(100-((this.totalSlides-1)*this.settings.thumbMargin))/this.totalSlides+"%";this.$thumbWrap=f('<div class="rs-thumb-wrap" />').appendTo(this.$sliderWrap);for(var h=0;h<this.totalSlides;h++){var l=f("<a />").css({width:j,marginLeft:this.settings.thumbMargin+"%"}).attr("href","#").data("rs-num",h);this.$slideImages.eq(h).clone().removeAttr("style").appendTo(this.$thumbWrap).wrap(l)}this.$thumbWrapLinks=this.$thumbWrap.find("a");this.$thumbWrap.children().last().css("margin-right",-10);this.$thumbWrapLinks.eq(this.settings.startSlide).addClass("active");this.$thumbWrap.on("click","a",function(i){i.preventDefault();k.transition(parseInt(f(this).data("rs-num")))})},captions:function(){var i=this,h=this.$slides.find(".rs-caption");h.css({width:i.settings.captionWidth+"%",opacity:0});this.$currentSlide.find(".rs-caption").css("opacity",1);h.each(function(){f(this).css({transition:"opacity "+i.settings.transitionDuration+"ms linear",backfaceVisibility:"hidden"})})},transition:function(i,h){if(!this.inProgress){if(i!==this.currentPlace){if(typeof h==="undefined"){h=i>this.currentPlace?true:false}if(this.settings.useThumbs){this.$thumbWrapLinks.eq(this.currentPlace).removeClass("active");this.$thumbWrapLinks.eq(i).addClass("active")}this.$nextSlide=this.$slides.eq(i);this.currentPlace=i;this.settings.onChange();new d(this,this.settings.transition,h)}}}};function d(i,k,h){this.RS=i;this.RS.inProgress=true;this.forward=h;this.transition=k;if(this.transition==="custom"){this.customAnims=this.RS.settings.customTransitions;this.isCustomTransition=true}if(this.transition==="custom"){var j=this;f.each(this.customAnims,function(l,m){if(f.inArray(m,j.anims)===-1){j.customAnims.splice(l,1)}})}this.fallback3d=this.RS.settings.fallback3d;this.init()}d.prototype={fallback:"fade",anims:["cubeH","cubeV","fade","sliceH","sliceV","slideH","slideV","scale","blockScale","kaleidoscope","fan","blindH","blindV"],customAnims:[],init:function(){this[this.transition]()},before:function(j){var h=this;this.RS.$currentSlide.css("z-index",2);this.RS.$nextSlide.css({opacity:1,"z-index":1});if(this.RS.cssTransitions){this.RS.$currentSlide.find(".rs-caption").css("opacity",0);this.RS.$nextSlide.find(".rs-caption").css("opacity",1)}else{this.RS.$currentSlide.find(".rs-caption").animate({opacity:0},h.RS.settings.transitionDuration);this.RS.$nextSlide.find(".rs-caption").animate({opacity:1},h.RS.settings.transitionDuration)}if(typeof this.setup==="function"){var i=this.setup();setTimeout(function(){j(i)},20)}else{this.execute()}if(this.RS.cssTransitions){f(this.listenTo).one("webkitTransitionEnd transitionend otransitionend oTransitionEnd mstransitionend",f.proxy(this.after,this))}},after:function(){this.RS.$sliderBG.removeAttr("style");this.RS.$slider.removeAttr("style");this.RS.$currentSlide.removeAttr("style");this.RS.$nextSlide.removeAttr("style");this.RS.$currentSlide.css({zIndex:1,opacity:0});this.RS.$nextSlide.css({zIndex:2,opacity:1});if(typeof this.reset==="function"){this.reset()}if(this.RS.settings.autoPlay){clearTimeout(this.RS.cycling);this.RS.setAutoPlay()}this.RS.$currentSlide=this.RS.$nextSlide;this.RS.inProgress=false;this.RS.settings.afterChange()},fade:function(){var h=this;if(this.RS.cssTransitions){this.setup=function(){h.listenTo=h.RS.$currentSlide;h.RS.$currentSlide.css("transition","opacity "+h.RS.settings.transitionDuration+"ms linear")};this.execute=function(){h.RS.$currentSlide.css("opacity",0)}}else{this.execute=function(){h.RS.$currentSlide.animate({opacity:0},h.RS.settings.transitionDuration,function(){h.after()})}}this.before(f.proxy(this.execute,this))},cube:function(o,i,h,n,m,k,j){if(!this.RS.cssTransitions||!this.RS.cssTransforms3d){return this[this["fallback3d"]]()}var l=this;this.setup=function(){l.listenTo=l.RS.$slider;this.RS.$sliderBG.css("perspective",1000);l.RS.$currentSlide.css({transform:"translateZ("+o+"px)",backfaceVisibility:"hidden"});l.RS.$nextSlide.css({opacity:1,backfaceVisibility:"hidden",transform:"translateY("+h+"px) translateX("+i+"px) rotateY("+m+"deg) rotateX("+n+"deg)"});l.RS.$slider.css({transform:"translateZ(-"+o+"px)",transformStyle:"preserve-3d"})};this.execute=function(){l.RS.$slider.css({transition:"all "+l.RS.settings.transitionDuration+"ms ease-in-out",transform:"translateZ(-"+o+"px) rotateX("+k+"deg) rotateY("+j+"deg)"})};this.before(f.proxy(this.execute,this))},cubeH:function(){var h=f(this.RS.$slides).width()/2;if(this.forward){this.cube(h,h,0,0,90,0,-90)}else{this.cube(h,-h,0,0,-90,0,90)}},cubeV:function(){var h=f(this.RS.$slides).height()/2;if(this.forward){this.cube(h,0,-h,90,0,-90,0)}else{this.cube(h,0,h,-90,0,90,0)}},grid:function(m,l,k,i,h,n,o){if(!this.RS.cssTransitions){return this[this["fallback"]]()}var j=this;this.setup=function(){var v=(j.RS.settings.transitionDuration)/(m+l);function u(K,R,O,L,J,P,Q,N,I){var M=(N+I)*v;return f('<div class="rs-gridlet" />').css({width:K,height:R,top:O,left:L,backgroundImage:"url("+J+")",backgroundPosition:"-"+L+"px -"+O+"px",backgroundSize:P+"px "+Q+"px",transition:"all "+j.RS.settings.transitionDuration+"ms ease-in-out "+M+"ms",transform:"none"})}j.$img=j.RS.$currentSlide.find("img.rs-slide-image");j.$grid=f("<div />").addClass("rs-grid");j.RS.$currentSlide.prepend(j.$grid);var w=j.$img.width(),F=j.$img.height(),q=j.$img.attr("src"),H=Math.floor(w/m),s=Math.floor(F/l),A=w-(m*H),x=Math.ceil(A/m),B=F-(l*s),r=Math.ceil(B/l),G=0;i=i==="auto"?w:i;i=i==="min-auto"?-w:i;h=h==="auto"?F:h;h=h==="min-auto"?-F:h;for(var E=0;E<m;E++){var t=0,z=H;if(A>0){var y=A>=x?x:A;z+=y;A-=y}for(var D=0;D<l;D++){var C=s,p=B;if(p>0){y=p>=r?r:B;C+=y;p-=y}j.$grid.append(u(z,C,t,G,q,w,F,E,D));t+=C}G+=z}j.listenTo=j.$grid.children().last();j.$grid.show();j.$img.css("opacity",0);j.$grid.children().first().addClass("rs-top-left");j.$grid.children().last().addClass("rs-bottom-right");j.$grid.children().eq(l-1).addClass("rs-bottom-left");j.$grid.children().eq(-l).addClass("rs-top-right")};this.execute=function(){j.$grid.children().css({opacity:o,transform:"rotate("+k+"deg) translateX("+i+"px) translateY("+h+"px) scale("+n+")"})};this.before(f.proxy(this.execute,this));this.reset=function(){j.$img.css("opacity",1);j.$grid.remove()}},sliceH:function(){this.grid(1,8,0,"min-auto",0,1,0)},sliceV:function(){this.grid(10,1,0,0,"auto",1,0)},slideV:function(){var h=this.forward?"min-auto":"auto";this.grid(1,1,0,0,h,1,1)},slideH:function(){var h=this.forward?"min-auto":"auto";this.grid(1,1,0,h,0,1,1)},scale:function(){this.grid(1,1,0,0,0,1.5,0)},blockScale:function(){this.grid(8,6,0,0,0,0.6,0)},kaleidoscope:function(){this.grid(10,8,0,0,0,1,0)},fan:function(){this.grid(1,10,45,100,0,1,0)},blindV:function(){this.grid(1,8,0,0,0,0.7,0)},blindH:function(){this.grid(10,1,0,0,0,0.7,0)},random:function(){this[this.anims[Math.floor(Math.random()*this.anims.length)]]()},custom:function(){if(this.RS.nextAnimIndex<0){this.RS.nextAnimIndex=this.customAnims.length-1}if(this.RS.nextAnimIndex===this.customAnims.length){this.RS.nextAnimIndex=0}this[this.customAnims[this.RS.nextAnimIndex]]()}};var c={browserVendors:["","-webkit-","-moz-","-ms-","-o-","-khtml-"],domPrefixes:["","Webkit","Moz","ms","O","Khtml"],testDom:function(j){var h=this.domPrefixes.length;while(h--){if(typeof a.body.style[this.domPrefixes[h]+j]!=="undefined"){return true}}return false},cssTransitions:function(){if(typeof e.Modernizr!=="undefined"&&Modernizr.csstransitions!=="undefined"){return Modernizr.csstransitions}return this.testDom("Transition")},cssTransforms3d:function(){if(typeof e.Modernizr!=="undefined"&&Modernizr.csstransforms3d!=="undefined"){return Modernizr.csstransforms3d}if(typeof a.body.style.perspectiveProperty!=="undefined"){return true}return this.testDom("Perspective")}};f.fn.refineSlide=function(h){return this.each(function(){if(!f.data(this,"refineSlide")){f.data(this,"refineSlide",new b(this,h))}})}})(window.jQuery,window,window.document);


// -------------zoom

// -------------carousel

// -------------fancybox

// ---------------quick view