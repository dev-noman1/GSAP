
var sequence = gsap.timeline();

sequence.from("nav h2", {
    y: 20,
    opacity: 0,
    duration: 0.3,
    delay: 0.1,
});
sequence.from("li", {
    y: -20,
    opacity: 0,
    duration: 0.3,
    stagger: -0.2,
    scale: 1.5,
});



const ballSequence = gsap.timeline(
    { paused: true }
);

document.querySelector(".Toggle").addEventListener("click", () => {
    if (ballSequence.reversed() || ballSequence.paused()) {
        ballSequence.play();
    } else {
        ballSequence.reverse();
    }
});

ballSequence
    .to(".ball-row-1", {
        y: 200,
        rotate: 360
    }, "<")
    .to(".ball-row-2", {
        rotate: 360,
    }, "<")
    .to(".ball-row-3", {
        y: -200,
        rotate: 360,
    }, "<")
    .to(".Toggle", {
        zIndex: 1,
    })
    .to(".ball-col-4", {
        x: -300
    })
    .to(".ball-col-1", {
        x: 300,
    })
    .to(".ball-col-2", {
        x: 100
    })
    .to(".ball-col-3", {
        x: -100
    })





