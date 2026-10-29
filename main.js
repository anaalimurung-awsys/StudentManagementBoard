/**
 * Main class.
 * Importing api.js
 */
import { getStudentsAPI, addStudentsAPI } from "./api.js";

// EXERCISE 1 TEST CASES
// TEST CASE 1
console.log("Initial DB State: ", getStudentsAPI());

// TEST CASE 2
const newStudent = addStudentsAPI({
  firstName: "Light",
  lastName: "Yagami",
  email: "light.yagami@example.com",
});

console.log("Returned Saved Object:", newStudent);

// TEST CASE 3
console.log("Updated DB State:", getStudentsAPI());