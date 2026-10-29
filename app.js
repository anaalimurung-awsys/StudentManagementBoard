// app.js
import { getStudentsAPI, addStudentsAPI } from "./api.js";

let localStudents = [];

const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");


// Builds the table rows from an array of students
const renderTable = (dataArray) => {
  studentTableBody.innerHTML = ""; // clear old rows first

  // Empty state
  if (!dataArray || dataArray.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = "No student records found.";
    row.appendChild(cell);
    studentTableBody.appendChild(row);
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");

    [index + 1, student.firstName, student.lastName, student.email].forEach(
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
  event.preventDefault(); // stop the page from reloading

  const studentData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
  };

  // Client-side validation
  if (!studentData.firstName || !studentData.lastName || !studentData.email) {
    alert("All input fields must be filled out.");
    return;
  }

  addStudentsAPI(studentData);       // POST
  localStudents = getStudentsAPI();  // re-fetch the updated list
  renderTable(localStudents);        // refresh the table

  studentForm.reset();               // clear all input fields
});

const initApp = () => {
  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

initApp();