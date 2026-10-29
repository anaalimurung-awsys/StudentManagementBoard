/**
 * Importing from api.js
 */
import { getStudentsAPI, addStudentsAPI } from "./api.js";

const validEmailIn = /^[^\s@]+@[^\s@]+\.com$/i;;
const isValidEmail = (email) => validEmailIn.test(email);

let localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

/**
 * Function to dynamically create HTML table rows
 * @param {*} dataArray 
 * @returns ''
 */
const renderTable = (dataArray) => {
  studentTableBody.innerHTML = ""; 

  if (!dataArray || dataArray.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = "No student records found.";
    row.appendChild(cell);
    studentTableBody.appendChild(row);
    return;
  }

  dataArray.forEach((student, i) => {
    const row = document.createElement("tr");

    [i + 1, student.firstName, student.lastName, student.email].forEach(
      (value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      }
    );

    studentTableBody.appendChild(row);
  });
};

/**
 * Function to validate inputs.
 * @param {*} stud 
 * @returns ""
 */
const validateStudent = (stud) => {
  if(!stud.firstName || !stud.lastName || !stud.email) {
    return "All input fields must be filled out!"
  }

  if (!isValidEmail(stud.email)) return"Must be a valid email address";

  return "";
};

studentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // flush data during refresh

  const studentData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
  };

  const error = validateStudent(studentData);
  if (error){
    alert(error);
    return;
  } 

  addStudentsAPI(studentData);       // POST
  localStudents = getStudentsAPI(); 
  renderTable(localStudents);        

  studentForm.reset();
});

const initApp = () => {
  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

initApp();