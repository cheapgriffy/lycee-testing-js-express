function getFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}

function isAdult(student) {
    return student.age >= 18;
}

function isStudentValid(student) {
    return Boolean(student.firstName && student.lastName && student.age);
}

module.exports = {
    getFullName,
    isAdult,
    isStudentValid
};