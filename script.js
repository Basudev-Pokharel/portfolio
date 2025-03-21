//Hamburger menu my favourite
let hamMenu = document.getElementById("menu");
let hamMenuBtnOpen = document.getElementById("menu-open");
function hamshow() {
  hamMenu.classList.toggle("viewed-menu");
}
hamMenuBtnOpen.addEventListener("click", hamshow);

//ThemeChange Begins from here
let themeButton = document.querySelector(".theme-Change");
let innerTextThemeChange = document.querySelector(".theme-Change label");

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  if (document.documentElement.classList.contains("dark-theme")) {
    innerTextThemeChange.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
  } else {
    innerTextThemeChange.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
//Typing effect begins from here
let typeBox = document.getElementById("typeBox");
let typeList = ["Developer", "Designer", "Student", "Tech Enthusiast"];
typingEffect(typeList, typeBox);
function typingEffect(typingList, element) {
  //Declaring function to use in another place as well
  let wordIndex = 0;
  let typeIndex = 0;
  let goReverse = false;
  setInterval(() => {
    if (!goReverse) {
      element.textContent += typingList[typeIndex][wordIndex];
      wordIndex++;
    } else {
      element.innerText = element.innerText.slice(
        0,
        element.innerText.length - 1
      );
    }

    if (wordIndex == typeList[typeIndex].length) {
      goReverse = true;
    }
    if (element.innerText == "") {
      goReverse = false;
      typeIndex++;
      wordIndex = 0;
    }
    if (typeIndex == typeList.length) {
      typeIndex = 0;
    }
  }, 200);
}

//About me section starts from here
let explainedTopics = document.querySelectorAll(".explaination");
let titleTopics = document.querySelectorAll(".title");
titleTopics.forEach((title) => {
  title.addEventListener("click", () => {
    for (title of titleTopics) {
      title.classList.remove("activee");
    }
    let buttonNo = Array.from(titleTopics).indexOf(event.target);
    event.target.classList.add("activee");
    for (explain of explainedTopics) {
      explain.classList.remove("show-info");
    }
    explainedTopics[buttonNo].classList.add("show-info");
  });
});
//Services more starts from here
let showMore = document.querySelector("#service-show");
let showMoreContent = document.querySelectorAll(".show-more");
showMore.addEventListener("click", () => {
  showMoreContent.forEach((char) => {
    char.classList.toggle("block-show-more");
  });
});

//Progress bar start from here
let progresBarWidth = document.querySelectorAll(".progress-bar-percent");
let progressBarPercentValue = document.querySelectorAll(".progress-percent");
progressBarPercentValue.forEach((char, Idx) => {
  progresBarWidth[Idx].style.width = `${char.innerText}`;
});

// Scroll-Top_TOP button Starts from here
let scrollBox = document.querySelector(".scroll-box");
window.addEventListener("scroll", () => {
  let screenheight = document.documentElement.clientHeight;
  let scrollableheight = document.documentElement.scrollHeight;
  let scrollPercentage = Math.ceil(
    (scrollY * 100) / (scrollableheight - screenheight)
  );
  scrollBox.style.background = `conic-gradient(
    var(--button--icon-hightlight-color) ${scrollPercentage}%,
    var(--secondary-text-color) ${scrollPercentage}%
  )`;
  scrollBox.addEventListener("click", () => {
    scroll(0, 0);
  });

  if (scrollY >= 150) {
    scrollBox.style.display = "flex";
  } else {
    scrollBox.style.display = "none";
  }
});
