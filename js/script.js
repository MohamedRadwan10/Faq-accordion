let plus = document.querySelectorAll(".item .icons .plus");
let minus = document.querySelectorAll(".item .icons .minus");
let answer = document.querySelectorAll(".item .text .answer");

plus.forEach(function (plusElement) {
  plusElement.addEventListener("click", function () {
    let correspondingAnswer = plusElement
      .closest(".item")
      .querySelector(".text .answer");
    let correspondingMinus = plusElement
      .closest(".item")
      .querySelector(".icons .minus");

    correspondingAnswer.style.display = "block";
    correspondingMinus.style.display = "block";
    plusElement.style.display = "none";
  });
});

minus.forEach(function (minusElement) {
  minusElement.addEventListener("click", function () {
    let correspondingAnswer = minusElement
      .closest(".item")
      .querySelector(".text .answer");
    let correspondingPlus = minusElement
      .closest(".item")
      .querySelector(".icons .plus");

    correspondingAnswer.style.display = "none";
    minusElement.style.display = "none";
    correspondingPlus.style.display = "block";
  });
});
