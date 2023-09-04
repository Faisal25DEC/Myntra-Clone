var btn = document.querySelector("#country-filt");
var a = 1;


btn.addEventListener("click", function () {
  if (a == 0) {
    // document.querySelector("#list1").style = "Overflow: hidden";
    document.querySelector("#not-visible").style = "visibility: hidden";
    document.querySelector("#country-button").style = "transform: rotate(0deg)";
    a = 1;
  } else {
    // document.querySelector("#list1").style = "Overflow: visible";

    document.querySelector("#not-visible").style = "visibility: visible";
    document.querySelector("#country-button").style =
      "transform: rotate(180deg)";
    a = 0;
  }

  // (document.querySelector("button").style ="transform: rotate(0deg)")
});
