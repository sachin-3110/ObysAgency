var count=0;
var collect= 0;
var vdc=document.querySelector("#vdoContainer")
var textanim=document.querySelector("#textanimation");
var main=document.querySelector("#mainchild")
var circle=document.querySelector("#circleImgcontainer")
var circle2=document.querySelector("#circle2Imgcontainer")
var fcd=document.querySelector("#fontchangediv")
var fc=document.querySelector("#fontchange")

var crsr= document.querySelector("#cursor")
function cursor(){
  document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
    
    x:dets.clientX,
    y:dets.clientY,
    opacity:1,
  })

})
  var cursr= document.querySelector("#cursor")
  Shery.makeMagnet("#leftPart div i,#leftPart div svg, #leftPart h3, #rightpart h3",{
  
});
}


function loaderfnc(){
    var tl= gsap.timeline()
    var counter=document.querySelector(".counter")
    var loader=document.querySelector("#loader");
let toggle = true;
 setInterval(() => {
      if (toggle) {
        gsap.to("#text div", {
          duration:0.3,
          opacity:0,
           css: {
            fontFamily: "Plain", 
          }
        });
      } else {
        gsap.to("#text div", {
          duration:0.3,
          opacity:1,
          css: {
            fontFamily: "Silk serif",
          }
        });
      }
      toggle = !toggle;
    }, 250);

tl.from("#loaderText section",{
    opacity:0,
    y:180,
})
tl.from("#loaderText #text h2, #text_change",{
    opacity:0,
    y:180,
    delay:0.4,
    duration:0.5,
    stagger:0.2,
})
tl.to("#loader",{
    delay:2,
    height:"0vh",
})
tl.from("#sambhalkr",{
  opacity:0,
})

tl.from("#animetext h3",{
  y:150,
  opacity:0,
  stagger:0.1,
})

tl.from("#chotaAnimation h2",{
  delay:1,
  y:-200,
  duration:1.5,
  opacity:0,
  repeat:-1,

})

gsap.to("#text-scroll",{
  translateX:"-100%",
  repeat:-1,
  duration:18,
  ease: "none",
})

gsap.from("#textscrollrev",{
  translateX:"-100%",
  repeat:-1,
  duration:18,
  ease: "none",
})

abcd();
function abcd(){ setInterval(function(){
    if(count<100){count++
        counter.textContent=count;
        count===100;}
},36)}
}

function textscrollup(){
  var hdivs=document.querySelectorAll("#hoverdiv")
  hdivs.forEach(function(hdiv) {
    hdiv.addEventListener("mouseenter", function() {
      // Use 'this' to refer to the current hoverdiv element
      gsap.to(this.querySelector("#text-up"), {
        translateY: "-50%",
        duration: 0.4
      });
    });
    
    hdiv.addEventListener("mouseleave", function() {
      // Use 'this' to refer to the current hoverdiv element
      gsap.to(this.querySelector("#text-up"), {
        translateY: "0%",
        duration: 0.4
      });
    });
  });
}



function locoanimation(){
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


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
cursor();
loaderfnc();
textscrollup();
// function sheryjs(){
  //   Shery.imageEffect("#img_container",{
//     style:5,
//     config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0386100386100385},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":4.33,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
//     gooey:true,
//   })
// }
// sheryjs()
function circleanimtion(){
  circle.addEventListener("mouseenter",function() {
    var tl=gsap.timeline()
    tl.to("#circleImgcontainer .ri-arrow-right-down-line",{
      rotate:45
    })
    tl.to("#circleImgcontainerinner",{
      height:"100%",
      width:"100%",
  
    })
    tl.from("#circleImgcontainerText",{
      width:"0%"
    })
    
  }
    
)
circle.addEventListener("mouseleave",function() {
    var tl2=gsap.timeline()
    tl2.to("#circleImgcontainerText",{
      width:"0%"
    })
    tl2.to("#circleImgcontainerinner",{
      height:"0%",
      width:"0%",
    })
    tl2.to("#circleImgcontainer .ri-arrow-right-down-line",{
      rotate:0
    })
  }
  
)

circle2.addEventListener("mouseenter",function() {
  var tl=gsap.timeline()
  tl.to("#circle2Imgcontainer .ri-arrow-right-down-line",{
    rotate:-45
  })
  tl.to("#circle2Imgcontainerinner",{
    height:"100%",
    width:"100%",
  })
  tl.from("#circle2ImgcontainerText",{
    width:"0%"
  })
  
}

)
circle2.addEventListener("mouseleave",function() {
  var tl2=gsap.timeline()
  tl2.to("#circle2Imgcontainer #circle2ImgcontainerText",{
    width:"0%"
  })
  tl2.to("#circle2Imgcontainerinner",{
    height:"0%",
    width:"0%",
  })
 
    tl2.to("#circle2Imgcontainer .ri-arrow-right-down-line",{
    })
      rotate:0
  }
    
)
}




circleanimtion();
textscrollup();
locoanimation();






