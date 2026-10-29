/**
 * Main class.
 * Importing api.js
 */
import { getStudentsAPI, addStudentsAPI } from "./api.js";

// EXERCISE 1 TEST CASES
// TEST CASE 1
console.log("==== EXERCISE ONE ====");
console.log("TEST CASE 1");
console.log("Initial DB State: ", getStudentsAPI());

// TEST CASE 2
console.log("TEST CASE 2");
const newStudent = addStudentsAPI({
  firstName: "Ken",
  lastName: "Kaneki",
  email: "ken.kaneki@example.com",
});

const newStudent2 = addStudentsAPI({
  firstName: "Suzuya",
  lastName: "Juuzou",
  email: "rei.suzuya@example.com",
});

console.log("TEST CASE 2");
console.log("Returned Saved Object:", newStudent, newStudent2);

// TEST CASE 3
console.log("TEST CASE 3");
console.log("Updated DB State:", getStudentsAPI());