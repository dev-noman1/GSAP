const body = document.querySelector("body")
const cursor = document.querySelector(".cursor");
const imgCon = document.querySelector("main");
const overlay = document.querySelector("main .overlay");


body.addEventListener("mousemove", (dets)=> {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
    })
})

imgCon.addEventListener("mousemove", (dets)=>{
    cursor.innerHTML = "click me"

    gsap.to(cursor, {
        scale: 4,
        opacity: 0.3,
        fontSize: 5,
    })
})

imgCon.addEventListener("mouseleave", (dets)=>{
    cursor.innerHTML = ""

    gsap.to(cursor, {
        scale: 1,
        opacity: 1,
    })
})


