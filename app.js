/**
 * Importing from api.js
 */
import { getStudentsAPI, addStudentsAPI } from "./api.js";

let localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

// 
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

studentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // flush data during refresh

  const studentData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
  };


  if (!studentData.firstName || !studentData.lastName || !studentData.email) {
    alert("All input fields must be filled out.");
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