/**
 * Initializes api.js.
 */

let lastId = 0;
const generateId = () => {
    const currId = Date.now();
    lastId = currId > lastId ? currId : lastId + 1;
    return lastId;
}

/**
 * Mock database.
 * An array that stores objects
 */
export let mockStudentDB = [/*{
        id: Date.now(),
        firstName: 'Leslie',
        lastName: 'Andrews',
        email: 'leslie.andrews@example.com'
    },
    {
        id: Date.now() + 1,
        firstName: 'Emma',
        lastName: 'Baumgarten',
        email: 'emma.baumgarten@example.com'
    }*/
];

/**
 * Function to get the items in database.
 * @returns mockStudentDB
 */
export function getStudentsAPI(){
    return mockStudentDB;
};

/**
 * Function to add new data.
 * @param {*} newStudentData 
 * @returns studentData
 */
export function addStudentsAPI(newStudentData){
    const studentData = {
        id: generateId(),
        ...newStudentData
    };

    mockStudentDB.push(studentData);

    return studentData;
}