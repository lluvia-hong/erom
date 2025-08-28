let img_slide = document.querySelector(".img_slide");
let index = 1;
let imgNum = document.querySelectorAll(".inner_flex .img").length;
// let step = 100 / imgNum;
let step = 100;
let presentPage = document.querySelector(".presentPage");
let totalPage = document.querySelector(".totalPage");
let stateLine = document.querySelector(".stateLine");
let totalPageNum = imgNum-2

function showImage() {
  img_slide.style.transform = `translateX(-${step * index}%)`;
  // presentPage.innerHTML = `0${index} | 0${totalPageNum}`;

  if(index <= totalPageNum) {
    // 페이지숫자와 상태바가 6번째까지 나와서 if사용함
    // toString().padStart(2,"0") => 자동으로 0을 붙여 줌(2자리)
    presentPage.innerHTML = index.toString().padStart(2,"0");
    totalPage.innerHTML = totalPageNum.toString().padStart(2,"0");
    const percent = (index / totalPageNum) * 100;
    stateLine.style.width = `${percent}%`;
  }
}
function nextBtn() {
  if(index >= imgNum -1) return;
  index++;
  showImage();
}
function preBtn() {
  if(index <= 0) return;
  index--;
  showImage();
}
showImage();

function imgLoop() {
  if(index === imgNum -1) {
    img_slide.style.transition = "none";
    index = 1;
    showImage();
    img_slide.offsetWidth;
    img_slide.style.transition = "1s";

  }else if(index === 0) {
    img_slide.style.transition = "none";
    index = imgNum - 2;
    showImage();
    img_slide.offsetWidth;
    img_slide.style.transition = "1s";
  }
}

let slideInterval = setInterval(nextBtn, 3000);
// 자동으로 nextBtn쪽으로 실행하도록 함수 실행을 변수에 저장하고
window.addEventListener("click", () => {
  clearInterval(slideInterval);
  // click 시에 멈춤
})

//footer dropdown
// function toggleDropdown() {
//   document.querySelector("toggleDropdown").classList.toggle("show")
// }
// footer dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".familyDropdown");
    const toggleBtn = dropdown.querySelector(".toggleDropdown");

    toggleBtn.addEventListener("click", function () {
      dropdown.classList.toggle("active");
    });
  });