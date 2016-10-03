/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        this.getElementsByTagName("div")[1].classList.toggle("moveout");
        this.nextElementSibling.getElementsByTagName("div")[0].classList.toggle("movein")

    }
}

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



  (function(d) {
    var config = {
      kitId: 'tqd0nyi',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

// FLICKITY
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      imagesLoaded: true,
      lazyLoad: true,
      wrapAround: true,
    });


// NAV function

function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
