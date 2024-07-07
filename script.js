var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")

body.addEventListener("mousemove", function (dets) {
    cursor.style.top = dets.y + "px"
    cursor.style.left = dets.x + "px"
})
var content = document.querySelector(".content .text")
content.addEventListener("mouseenter", function () {
    cursor.style.scale = 2
    cursor.style.mixBlendMode = "difference"
})
content.addEventListener("mouseleave", function () {
    cursor.style.scale = 1
})
const t2 = gsap.timeline({repeat: -1})
t2.from(".buttons .a",{
    y:10,
    // delay:2,
    duration:2,
    opacity:0
})
t2.from(".buttons .b",{
    y:10,
    // delay:3,
    duration:1,
    opacity:0
})
t2.from(".buttons .c",{
    y:10,
    // delay:4,
    duration:1,
    opacity:0
})
t2.from(".buttons .d",{
    y:10,
    // delay:5,
    duration:1,
    opacity:0
})
t2.from(".buttons .e",{
    y:10,
    // delay:6,
    duration:1,
    opacity:0
})
// gsap.from(h1s,{
//     y:20,
//     opacity:0,
//     delay:1,
//     duration:2,
// }) 
const tl = gsap.timeline({repeat: -1})
tl.from("#h1s", {
    opacity: 0,
    y: 50,
    //   opacity:1,
    duration: 2,
    // delay: 1,
});
tl.from("#h3s", {
    opacity: 0,
    y: 50,
    //   opacity:1,
    duration: 2,
    // delay: 1,
});
tl.from("#post1", {
    x: 50,
    // delay: 1,
    duration: 2,
    opacity: 0,
})
tl.from("#post2", {
    x: 100,
    // delay: 1,
    duration: 2,
    opacity: 0,
})
tl.from("#post3", {
    x: 150,
    // delay: 1,
    duration: 2,
    opacity: 0,
})
tl.repeatDelay(1);
var instagram =document.querySelector(".instagram")
var overlay=document.querySelector(".over")
var kuchbhi2 =document.querySelector("#kuchbhi2")
var back=document.querySelector(".backbutton")
let flag=0
kuchbhi2.addEventListener("click",function(){
 if(flag==0){
        instagram.style.opacity=0
        overlay.style.display="initial"
        flag=1
    }
    
    
})
back.addEventListener("click",function(){
    if(flag==1){
        overlay.style.display="none"
    instagram.style.opacity=1
    flag=0
    }
})




