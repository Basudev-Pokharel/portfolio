//Hamburger menu my favourite
let hamMenu = document.getElementById("menu");
let hamMenuBtnOpen = document.getElementById("menu-open");
function hamshow() {
  hamMenu.classList.toggle("viewed-menu");
}
hamMenuBtnOpen.addEventListener("click", hamshow);

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
console.log(titleTopics);
