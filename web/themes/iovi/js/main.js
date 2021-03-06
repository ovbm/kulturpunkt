Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    //Accordion & Scroll To Active Accordion
    (function($) {

      var allPanels = $('#accordion > .views-infinite-scroll-content-wrapper > .event_detail');
      var allHeaders = $('#accordion > .views-infinite-scroll-content-wrapper > .event_header');

      $('#accordion > .views-infinite-scroll-content-wrapper > .accordion').once().click(function() {
          $this = $(this);
          $target =  $this.next();

          if(!$this.hasClass('headeractive')){
            allHeaders.removeClass('headeractive');
            allHeaders.removeAttr("id");
            $this.addClass('headeractive');
            $this.attr("id","scrolltop");
            /*$('html, body').animate({
                  scrollTop: $("#scrolltop").offset().top
                }, 1000);*/
          };

          if(!$target.hasClass('active')){
             allPanels.removeClass('active');
             allPanels.removeAttr("id");
             $target.attr("id","scrolltop");
             $target.addClass('active');
          } else {
            $target.removeClass('active');
          }
        return false;
      });

      //FLICKITY
      var galleryElems = document.querySelectorAll('.main-carousel');

      for ( var i=0, len = galleryElems.length; i < len; i++ ) {
        var galleryElem = galleryElems[i];
        new Flickity( galleryElem, {
      // options...
      cellAlign: 'left',
      contain: true,
      imagesLoaded: true,
      wrapAround: true,
      lazyLoad:1,
      adaptiveHeight: true
      });
      }

      jQuery(document).ready(function(){
        // Target your .container, .wrapper, .post, etc.
        jQuery(".welcomevideo").fitVids();
      });

    })(jQuery);
  }
};

// Overlay


//Toggel INFO Nav
(function($){
  $(document).ready(function() {
    $('#myTopnav').hide();
    $('#nav-toggle, #menu-nav-toggle').click(function() {
      $('#block-mainnavigation').slideToggle();
      $('#myTopnav').delay(200).animate({
          opacity:"toggle"
        },600);
    });
  });

  $( "#nav-toggle, #menu-nav-toggle" ).click(function() {
    $('#nav-toggle').toggleClass( "active" );
  });

})(jQuery);

//Accordion & Scroll To Active Accordion
(function($) {

  var allPanels = $('#accordion > .event_detail');
  var allHeaders = $('#accordion > .event_header');

  $('#accordion > .accordion').click(function() {
      $this = $(this);
      $target =  $this.next();

      if(!$this.hasClass('headeractive')){
        allHeaders.removeClass('headeractive');
        allHeaders.removeAttr("id");
        $this.addClass('headeractive');
        $this.attr("id","scrolltop");
        $('html, body').animate({
              scrollTop: $("#scrolltop").offset().top
            }, 1000);
      };

      if(!$target.hasClass('active')){
         allPanels.removeClass('active');
         allPanels.removeAttr("id");
         $target.attr("id","scrolltop");
         $target.addClass('active');
      }

    return false;
  });

})(jQuery);


//Flickity
/*
(function($) {
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  imagesLoaded: true,
  lazyLoad: true,
  wrapAround: true,
  setGallerySize:false,
  percentPosition:true
});
})(jQuery); */


// Full Width and height canvas;
(function() {
    var canvas = document.getElementById('myCanvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here
            var canvas = document.getElementById('myCanvas');
                  var context = canvas.getContext('2d');
                  var radius = canvas.height / 3;
                  var centerX = canvas.width / 2 - radius;
                  var centerY = canvas.height / 2 + radius;
                  var arcCenterX = centerX + radius;
                  var arcCenterY = centerY - radius;
                  context.beginPath();
                  context.moveTo(centerX,centerY);
                  context.lineTo(centerX,radius);
                  context.arc(arcCenterX, arcCenterY, radius, 1 * Math.PI, 0.5 * Math.PI, false);
                  context.lineTo(centerX,centerY)
                  context.fillStyle = '#E94C4F';
                  context.fill();
    }
})();


//typekit

(function(d) {
  var config = {
    kitId: 'tqd0nyi',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// Newsletter

function loadjQuery(e,t){var n=document.createElement("script");n.setAttribute("src",e);n.onload=t;n.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded")t()};document.getElementsByTagName("head")[0].appendChild(n)}function main(){
var $cr=jQuery.noConflict();var old_src;$cr(document).ready(function(){$cr(".cr_form").submit(function(){$cr(this).find('.clever_form_error').removeClass('clever_form_error');$cr(this).find('.clever_form_note').remove();$cr(this).find(".musthave").find('input, textarea').each(function(){if(jQuery.trim($cr(this).val())==""||($cr(this).is(':checkbox'))||($cr(this).is(':radio'))){if($cr(this).is(':checkbox')||($cr(this).is(':radio'))){if(!$cr(this).parent().find(":checked").is(":checked")){$cr(this).parent().addClass('clever_form_error')}}else{$cr(this).addClass('clever_form_error')}}});if($cr(this).attr("action").search(document.domain)>0&&$cr(".cr_form").attr("action").search("wcs")>0){var cr_email=$cr(this).find('input[name=email]');var unsub=false;if($cr("input['name=cr_subunsubscribe'][value='false']").length){if($cr("input['name=cr_subunsubscribe'][value='false']").is(":checked")){unsub=true}}if(cr_email.val()&&!unsub){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_email")+$cr(this).find('input[name=email]').val(),success:function(data){if(data){cr_email.addClass('clever_form_error').before("<div class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}var cr_captcha=$cr(this).find('input[name=captcha]');if(cr_captcha.val()){$cr.ajax({type:"GET",url:$cr(".cr_form").attr("action").replace("wcs","check_captcha")+$cr(this).find('input[name=captcha]').val(),success:function(data){if(data){cr_captcha.addClass('clever_form_error').after("<div style='display:block' class='clever_form_note cr_font'>"+data+"</div>");return false}},async:false})}}if($cr(this).find('.clever_form_error').length){return false}return true});$cr('input[class*="cr_number"]').change(function(){if(isNaN($cr(this).val())){$cr(this).val(1)}if($cr(this).attr("min")){if(($cr(this).val()*1)<($cr(this).attr("min")*1)){$cr(this).val($cr(this).attr("min"))}}if($cr(this).attr("max")){if(($cr(this).val()*1)>($cr(this).attr("max")*1)){$cr(this).val($cr(this).attr("max"))}}});old_src=$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src");if($cr("div[rel='captcha'] img:not(.captcha2_reload)").length!=0){captcha_reload()}});function captcha_reload(){var timestamp=new Date().getTime();$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src","");$cr("div[rel='captcha'] img:not(.captcha2_reload)").attr("src",old_src+"?t="+timestamp);return false}

}
if(typeof jQuery==="undefined"){loadjQuery("//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",main)}else{main()}


// Overlay toggleNav
(function($) {
  $('.overlay-toggle').click(function() {
      $('.overlay').toggleClass('open');
    });
  })(jQuery);

// lazyLoad
(function($) {
  $(function() {
      $(".lazy").recliner({
          attrib: "data-src", // selector for attribute containing the media src
          throttle: 300,      // millisecond interval at which to process events
          threshold: 100,     // scroll distance from element before its loaded
          live: true          // auto bind lazy loading to ajax loaded elements
      });
  });
})(jQuery);
/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();
