let locoScroll; //

function loco(){
  gsap.registerPlugin(ScrollTrigger);

  // Locomotive Scroll 초기화
  locoScroll = new LocomotiveScroll({ 
    el: document.querySelector("#smooth-wrapper"),
    smooth: true
  });

  // ScrollTrigger와 동기화
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#smooth-wrapper", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#smooth-wrapper").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

document.addEventListener('DOMContentLoaded', () => {
  loco(); // ✅ locoScroll이 정의됨
  page1();
  page2Ani();
  page3Ani();
  page4Ani();
  page5Ani();


  window.addEventListener("load", function () {
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
  
    // main 높이가 전체 화면보다 짧을 경우 footer 포함해서 최소 높이 보장
    const neededHeight = window.innerHeight + footer.offsetHeight;
    if (main.scrollHeight < neededHeight) {
      main.style.minHeight = `${neededHeight}px`;
    }
  
    // locoScroll 업데이트
    setTimeout(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
    }, 500);
  });
 
});




const crsr = document.querySelector(".cursor");
const smoothWrapper = document.querySelector("#smooth-wrapper");
const h4 = document.querySelectorAll("#nav h4")

smoothWrapper.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
})
function page1(){
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    duration:2,
    ease: "power4.out",
    skewY: 9,
    stagger: {
      amount:  0.2
    }
  })
  gsap.from("#page1 h2", {
    y: 100,
    opacity: 0,
    duration:2,
    delay:0.5,
    ease: "power4.out",
    skewY: 9,
    stagger: {
      amount:  0.2
    }
  })
  gsap.from("#page1 video", {
    y: 100,
    opacity: 0,
    duration:2,
    delay:0.5,
  })

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger:"#page1 h1",
      scroller: "#smooth-wrapper",
      markers:false,
      start: "top 10%",
      end: "bottom 10%",
      scrub:5
    }
  })

  tl.to("#page1 h1",{
    x:-140,
  },"p1")
  tl.to("#page1 h2",{
    x:140,
  },"p1")
  tl.to("#page1 video", {
    width: "95%"
  },"p1")

}
   
function page2Ani(){
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger:"#page2 h1",
      scroller: "#smooth-wrapper",
      markers: false,
      start: "top 10%",
      end: "bottom 50%",
      scrub:1
    }
  })
  tl2.to("#main", {
    backgroundColor : "white"
  },)
tl2.from("#page2 h1", {
  y: 200,
  opacity: 0,
  ease: "power2s.out",
  skewY: 7,
  stagger: {
    amount: 0.8
  }
})
tl2.from(".page2-left", {
  x: -100,
  ease: "power2.out", 
  duration: 3,        
  opacity: 0,
}, "page2Position");

tl2.from(".page2-right", {
  x: 100,
  ease: "power2.out", 
  duration: 3,        
  opacity: 0,
}, "page2Position");

tl2.to(".divider", {
  width: "100%",
  ease: "power2.out",
})
}

function page3Ani(){
  var tl3 = gsap.timeline({
    scrollTrigger : {
      trigger :"#page3 h1",
      scroller: "#smooth-wrapper",
      markers:false,
      start : "top 50%",
      end :"bottom 0%",
      scrub: 1,
    }
  })

  tl3.from("#page3 h1", {
    y: 200,
    opacity: 0,
    ease: "power2s.out",
    skewY: 7,
    stagger: {
      amount: 0.8
    }
  })
  
 
}

function page4Ani(){
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger:"#page4 h1",
      scroller: "#smooth-wrapper",
      markers: false,
      start: "top 10%",
      end: "bottom 60%",
      scrub:3
    }
  })

  tl4.to("#main", {
    backgroundColor : "black"
  },)


}
function page5Ani(){
  const boxs = document.querySelectorAll('.box'); // 첫 번째 .box 요소 선택
  boxs.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    const att = elem.getAttribute("data-image")
    crsr.style.width = "300px",
    crsr.style.height = "250px"
    crsr.style.borderRadius = "30px",
    crsr.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave", function(){
    elem.style.backgroundColor = "transparent"
    const att = elem.getAttribute("data-image")
    crsr.style.width = "20px",
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%",
    crsr.style.backgroundImage = `none`
  })
})
}

