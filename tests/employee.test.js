const Employee = require('../lib/employee');

const employee = new Employee('Dat Nguyen', 1234, 'dtnguy@gmail.com');

test('test name', () => {
    expect(employee.getName() === 'Dat Nguyen');
})

test('test id', () => {
    expect(employee.getId() === 1234);
})

test('test email', () => {
    expect(employee.getEmail() === 'dtnguy@gmail.com');
})

test('test role', () => {
    expect(employee.getRole() === 'Employee');
})