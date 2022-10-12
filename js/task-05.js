// const inputRef = document.querySelector('font-size-control');
// const TextRef = document.querySelector('#Text')

// TextRef.style.fontSize = `${inputRef.value}px`;
// console.log(spanTextRef.style.fontSize);

// inputRef.addEventListener('input', (event) => {
//     console.log(`${event.currentTarget.value}px`)
//     spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
// })

const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  }
}