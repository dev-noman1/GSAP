var path = `M 41 150 Q 250 150 1310 150`
var finalPath = `M 41 150 Q 250 150 1310 150`


const string = document.querySelector(".string");

string.addEventListener("mousemove", function (dets) {
    path = `M 41 150 Q ${dets.x} ${dets.y} 1310 150`;

    gsap.to(".string svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", (dets) => {
    gsap.to(".string svg path", {
        attr: { d: finalPath },
        duration: 0.9,
        ease: "elastic.out(1,0.25)",
    })
})