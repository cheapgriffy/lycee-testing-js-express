const { getFullName, isAdult, isStudentValid } = require('../src/utils/students');

test('full name check', () => {
    expect(getFullName({ firstName: 'John', lastName: 'Doe' })).toBe('John Doe');
    expect(getFullName({ firstName: 'John', lastName: 'Goob' })).toBe('John Goob');
    expect(getFullName({ firstName: 'Jane', lastName: 'Smith' })).toBe('Jane Smith');
});

test('is a adult', () => {
    expect(isAdult({age: 20})).toBe(true);
    expect(isAdult({age: 17})).toBe(false);
});

test('is valid', () => {
    expect(isStudentValid({ firstName: 'John', age: 20 })).toBe(false);
    expect(isStudentValid({ firstName: 'Jane', lastName: 'Smith', age: 17 })).toBe(true);
});