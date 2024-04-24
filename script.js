function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
let counter = 0;

const timer = setInterval(function() {
    if (counter === 100) {
        clearInterval(timer); 
        gsap.to(".loading", {
            color: "#aeff00",
        })
        gsap.to(".loading", {
            delay: 1,
            y: "-100%",
            duration: 1,
            opacity: 0,
            display: "none"
        })
    } else {
        counter++; 
document.querySelector(".loading p").textContent = counter;

    }
}, 25); 




function CircleFollow(){
    window.addEventListener("mousemove", function(details){
        document.querySelector(".pointer").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
    })
}
function cards() {
  document.querySelector("#card1").addEventListener("mouseenter", function () {
    gsap.to(".ccc1", {
      opacity: 1,
      display: "block",
    });
    gsap.to("#card1", {
      height: "22vw",
    });
    gsap.to(".cardright1 svg", {
      rotate: 0,
      color: "#aeff00",
    });
  });
  document.querySelector("#card2").addEventListener("mouseenter", function () {
    gsap.to(".ccc2", {
      opacity: 1,
      display: "block",
    });
    gsap.to("#card2", {
      height: "22vw",
    });
    gsap.to(".cardright2 svg", {
      rotate: 0,
      color: "#aeff00",
    });
  });
  document.querySelector("#card3").addEventListener("mouseenter", function () {
    gsap.to(".ccc3", {
      opacity: 1,
      display: "block",
    });
    gsap.to("#card3", {
      height: "22vw",
    });
    gsap.to(".cardright3 svg", {
      rotate: 0,
      color: "#aeff00",
    });
  });
}

function projects() {
  document
    .querySelector(".project1")
    .addEventListener("mouseenter", function () {
      gsap.to(".pa1", {
        rotate: -45,
        color: "#aeff00",
      });
    });
  document
    .querySelector(".project1")
    .addEventListener("mouseleave", function () {
      gsap.to(".pa1", {
        rotate: 0,
        color: "#fff",
      });
    });
  document
    .querySelector(".project2")
    .addEventListener("mouseenter", function () {
      gsap.to(".pa2", {
        rotate: -45,
        color: "#aeff00",
      });
    });
  document
    .querySelector(".project2")
    .addEventListener("mouseleave", function () {
      gsap.to(".pa2", {
        rotate: 0,
        color: "#fff",
      });
    });
  document
    .querySelector(".project3")
    .addEventListener("mouseenter", function () {
      gsap.to(".pa3", {
        rotate: -45,
        color: "#aeff00",
      });
    });
  document
    .querySelector(".project3")
    .addEventListener("mouseleave", function () {
      gsap.to(".pa3", {
        rotate: 0,
        color: "#fff",
      });
    });
}

smoothScroll();
CircleFollow();
cards();
projects();
