export let mockStudentDB = [{
        id: Date.now(),
        firstName: 'placeholder',
        lastName: 'placeholder',
        email: 'place@holder.com'
    },
    {
        id: Date.now() + 1,
        firstName: 'holderplace',
        lastName: 'holderplace',
        email: 'holder@place.com'
    }
];

export function getStudentAPI(){
    return mockStudentDB;
};

export function addStudentsAPI(newStudentData){
    const studentData = {
        id: Date.now,
        ...newStudentData
    };

    mockStudentDB.push(studentData);

    return studentData;
}

