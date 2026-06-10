const { isPresent, countAbsences, canTakeExam } = require('../src/utils/attendance');

test('check presence', () => {
    expect(isPresent('present')).toBe(true);
    expect(isPresent('absent')).toBe(false);
});

test('count absences', () => {
    expect(countAbsences(['present', 'absent', 'present'])).toBe(1);
    expect(countAbsences(['present', 'present', 'present'])).toBe(0);
});

test('can take exam', () => {
    expect(canTakeExam(2)).toBe(true);
    expect(canTakeExam(4)).toBe(false);
});