// button click submit
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// form validation -> success and failure states
let textInput = document.getElementById("textInput");
let phoneInput = document.getElementById("phoneInput");
let emailInput = document.getElementById("emailInput");
let dateInput = document.getElementById("dateInput");
let msgName = document.querySelector(".errName");
let msgNo = document.querySelector(".errNo");
let msgE = document.querySelector(".errEmail");
let msgD = document.querySelector(".errDate");

let formValidation = () => {
  if (textInput.value === "") {
    msgName.innerHTML = "Enter employee's name";
  } else if (phoneInput.value === "") {
    msgNo.innerHTML = "Enter employee's phone number";
  } else if (emailInput.value === "") {
    msgE.innerHTML = "Enter a valid email";
  } else if (dateInput.value === "") {
    msgD.innerHTML = "Select employment date";
  } else {
    console.log("success");
    msgName.innerHTML = "";
    msgNo.innerHTML = "";
    msgE.innerHTML = "";
    msgD.innerHTML = "";
  }
};
