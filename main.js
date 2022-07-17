let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let phoneInput = document.getElementById("phoneInput");
let emailInput = document.getElementById("emailInput");
let dateInput = document.getElementById("dateInput");
let msgName = document.querySelector(".errName");
let msgNo = document.querySelector(".errNo");
let msgE = document.querySelector(".errEmail");
let msgD = document.querySelector(".errDate");
let employee = document.querySelector(".list-container");
let total = document.querySelector(".total");
let clickAway = document.getElementById("clickAway");

// add event listener(submit) to form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// form validation -> success and failure states
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
    acceptData();
    // to close to add button on click-> line 38-42
    clickAway.setAttribute("data-bs-dismiss", "modal");
    clickAway.click();

    (() => {
      clickAway.setAttribute("data-bs-dismiss", "");
    })();
  }
};

// to clear error message on input field click
let clearError = () => {
  msgName.innerHTML = "";
  msgNo.innerHTML = "";
  msgE.innerHTML = "";
  msgD.innerHTML = "";
};

// to accept and store data
let data = [];
let acceptData = () => {
  data.push({
    name: textInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    date: dateInput.value,
  });

  //  to push data to local storage
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  addEmployee();
};

// add employee and display on screen
let addEmployee = () => {
  employee.innerHTML = "";
  data.map((item, index) => {
    return (employee.innerHTML += `
    <div class="list" id=${index}>
      <h4>${item.name}</h4>
      <p>${item.phone}</p>
      <p>${item.email}</p>
      <p>${item.date}</p>
    <div class="icons">
      <i onClick="editEmployee(this)"  data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
      <i onClick="deleteEmployee(this);addEmployee()" class="fa-solid fa-trash-can"></i>
    </div>
  </div>
    `);
  });

  resetForm();
};

// reset form after adding new employee
let resetForm = () => {
  textInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
  dateInput.value = "";
};

// to delete employee on click
let deleteEmployee = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
};

// to edit employee details on click
let editEmployee = (e) => {
  let selectedEmployee = e.parentElement.parentElement;
  textInput.value = selectedEmployee.children[0].innerHTML;
  phoneInput.value = selectedEmployee.children[1].innerHTML;
  emailInput.value = selectedEmployee.children[2].innerHTML;
  dateInput.value = selectedEmployee.children[3].innerHTML;

  // selectedEmployee.remove();
  deleteEmployee(e);
};

// to retrieve and display data from local storage
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  addEmployee();
  console.log(data);
})();

// total number of employees
total.innerHTML = `Total Number of Employees: ${data.length}`;
