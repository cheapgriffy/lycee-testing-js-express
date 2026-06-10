function isPresent(status) {
    return status === 'present';
}

function countAbsences(attendances) {
    return attendances.filter(status => status === 'absent').length;
}

function canTakeExam(absences) {
    return absences <= 3;
}

module.exports = {
    isPresent,
    countAbsences,
    canTakeExam
};