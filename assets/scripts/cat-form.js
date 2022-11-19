document.querySelector(".button").onclick = (event) => {
  // event.preventDefault();
  document.querySelector(".errorMax").innerHTML = "";
  let catName = document.getElementById("catName").value;

  if (catName.length > 10) {
    document.querySelector(
      ".errorMax"
    ).innerHTML = `Maxlength of "Cat's name" field should be not more than 10`;
  }
};
