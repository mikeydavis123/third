document.getElementById("left").addEventListener("click",page);
function page(){
    document.getElementById("topimg").classList.toggle("page2")
}
document.getElementById("right").addEventListener("click",page2);
function page2(){
    document.getElementById("topimg").classList.toggle("page3")
}
document.getElementById("ham").addEventListener("click",nav);
function nav(){
    document.getElementById("ham").classList.toggle("cross");
   
    document.getElementById("nav").classList.toggle("back");
    document.getElementById("logo").classList.toggle("none");
    document.getElementById("navlinks").classList.toggle("flex");
    document.getElementById("layer").classList.toggle("active");
}
console.log("hi")