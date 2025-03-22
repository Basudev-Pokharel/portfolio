let hamMenu = document.getElementById("menu"),
  hamMenuBtnOpen = document.getElementById("menu-open");
function hamshow() {
  hamMenu.classList.toggle("viewed-menu");
}
hamMenuBtnOpen.addEventListener("click", hamshow);
let themeButton = document.querySelector(".theme-Change"),
  innerTextThemeChange = document.querySelector(".theme-Change label");
themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme"),
    document.documentElement.classList.contains("dark-theme")
      ? setTimeout(() => {
          innerTextThemeChange.innerHTML =
            '<i class="fa-regular fa-lightbulb"></i>';
        }, 200)
      : setTimeout(() => {
          innerTextThemeChange.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }, 200);
});
let typeBox = document.getElementById("typeBox"),
  typeList = ["Developer", "Designer", "Student", "Tech Enthusiast"];
function typingEffect(e, t) {
  let o = 0,
    n = 0,
    l = !1;
  setInterval(() => {
    l
      ? (t.innerText = t.innerText.slice(0, t.innerText.length - 1))
      : ((t.textContent += e[n][o]), o++),
      o == typeList[n].length && (l = !0),
      "" == t.innerText && ((l = !1), n++, (o = 0)),
      n == typeList.length && (n = 0);
  }, 200);
}
typingEffect(typeList, typeBox);
let explainedTopics = document.querySelectorAll(".explaination"),
  titleTopics = document.querySelectorAll(".title");
titleTopics.forEach((e) => {
  e.addEventListener("click", () => {
    for (e of titleTopics) e.classList.remove("activee");
    let t = Array.from(titleTopics).indexOf(event.target);
    for (explain of (event.target.classList.add("activee"), explainedTopics))
      explain.classList.remove("show-info");
    explainedTopics[t].classList.add("show-info");
  });
});
let modalCont = document.querySelector(".modal"),
  MoreMe = document.querySelector("#MoreMe"),
  lessMe = document.querySelector("#close-modal");
MoreMe.addEventListener("click", () => {
  modalCont.style.display = "block";
}),
  lessMe.addEventListener("click", () => {
    modalCont.style.display = "none";
  });
let showMore = document.querySelector("#service-show"),
  showMoreContent = document.querySelectorAll(".show-more");
showMore.addEventListener("click", () => {
  (showMore.innerText =
    "Show More" === showMore.innerText ? "Show Less" : "Show More"),
    showMoreContent.forEach((e) => {
      e.classList.toggle("block-show-more");
    });
});
let progresBarWidth = document.querySelectorAll(".progress-bar-percent"),
  progressBarPercentValue = document.querySelectorAll(".progress-percent");
progressBarPercentValue.forEach((e, t) => {
  progresBarWidth[t].style.width = `${e.innerText}`;
});
let scrollBox = document.querySelector(".scroll-box");
window.addEventListener("scroll", () => {
  let e = document.documentElement.clientHeight,
    t = document.documentElement.scrollHeight,
    o = Math.ceil((100 * scrollY) / (t - e));
  (scrollBox.style.background = `conic-gradient(\n    var(--button--icon-hightlight-color) ${o}%,\n    var(--secondary-text-color) ${o}%\n  )`),
    scrollBox.addEventListener("click", () => {
      scroll(0, 0);
    }),
    scrollY >= 150
      ? (scrollBox.style.display = "flex")
      : (scrollBox.style.display = "none");
});
