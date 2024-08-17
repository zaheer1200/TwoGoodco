function scrolltrigger(){
  
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
}
scrolltrigger();

function pagefirst(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        duration:0.5,

    },"hello")
    gsap.from("#page1 #video1 video",{
        scale:0.8,
        duration:1,
        easr:Power3,
        scrollTrigger:{
            trigger:"#page1 #video1 video",
            scroller:"#main",
         
          start: "top 60%",
          end:"top 80%",

            pin:true,
            scrub:1,
        }
    },"hello1")
}


pagefirst();

function videobtn(){
    var btn = document.querySelector("#video1 #playvideo");
    var video = document.querySelector("#page1 #video1");
    video.addEventListener("mouseenter",function(){
        btn.style.opacity=1;
    })
    video.addEventListener("mouseleave",function(){
        btn.style.opacity=0;
    })
    video.addEventListener("mousemove",function(val){
        gsap.from(btn,{
              y:val.y-10+"px",
              x:val.x-10+"px",
              ease:"none",

        })
    })
}
videobtn();
function footer(){var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:"#footer",
    scroller:"#main",
    scrub:2,
    start:"top 70%",
    end:"top 60%"

  }
})
.from(".fleftright",{
  y:20,
  duration:1,
  opacity:0,
  delay:1,
  stagger:0.5,
})
.from("#fcenter img",{
 scale:0.6,
  duration:1,
  opacity:0,
 
},"hello")
.from("#centerbtm p",{
 y:20,
  duration:1,
  stagger:0.2,
  opacity:0,
 
},"hello")
.from("#lastpage p",{
 y:20,
  duration:1,
  delay:0.5,
  stagger:0.2,
  opacity:0,
 
},"hello1")
}
footer();
function navbar(){var tl3= gsap.timeline({
  scrollTrigger:{
    trigger:"#nav",
    scroller:"#main",
   
    start:"top -10%",
    end:"top -5%",
    scrub:3,
  }
})
.to("#navright a",{
  y:-20,
  opacity:0,
  ease:Power1,

})

}
navbar()

