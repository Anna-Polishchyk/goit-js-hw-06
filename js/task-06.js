const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(inputElem.dataset.length)) {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  } else {
    inputElem.classList.add("invalid");
    inputElem.classList.remove("valid");
  }
});

// const inputRef = document.querySelector("#validation-input");
// const inputRefLength = inputRef.getAttribute("data-length");

// inputRef.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const isValid = event.currentTarget.value.length === Number(inputRefLength);

//   if (isValid) {
//     event.currentTarget.classList.add("valid");
//     event.currentTarget.classList.remove("invalid");
//   } else {
//     event.currentTarget.classList.remove("valid");
//     event.currentTarget.classList.add("invalid");
//   }
// }
