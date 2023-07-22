let barContainer = document.querySelector(".barContainer");
let sidebar = document.querySelector(".links");
barContainer.addEventListener("click",function(){
    barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
});

function resume(){
  window.open("https://drive.google.com/file/d/1-1wek682K18Qu8P3GYuAeMdgVM-x0qRf/view?usp=sharing");
}
function close(){
  barContainer.classList.toggle("active");
    sidebar.classList.toggle("active");
}