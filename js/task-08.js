const form = document.querySelector(".login-form");
form.addEventListener("submit", setSubmit);

function setSubmit(event) {
  event.preventDefault();
  const formElem = event.currentTarget.elements;
  const mail = formElem.email.value;
  const password = formElem.password.value;
  if (mail.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }

//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }
