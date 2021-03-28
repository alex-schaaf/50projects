const article = document.getElementById("container")
const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("nav-list")

let rotated = false


function rotate() {
  console.log("click")
  if (rotated) {
    article.style.transform = "rotate(0deg)"
    article.style.transformOrigin = "0% 0%"
    hamburger.style.transform = "rotate(0deg)"
    hamburger.style.transformOrigin = "0% 0%"
    navList.style.transform = "translate(-200px, 0)"
    rotated = false
  } else {
    article.style.transform = "rotate(-15deg)"
    article.style.transformOrigin = "0% 0%"
    hamburger.style.transform = "rotate(-90deg)"
    hamburger.style.transformOrigin = "center center"
    navList.style.transform = "translate(200px, 0)"
    rotated = true
  }
}