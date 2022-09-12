const Manager = require('../lib/manager');

const manager = new Manager('Dat Nguyen', 1234, 'dtnguy@gmail.com', 25)

test('test officeNumber', () => {
    expect(manager.getOfficeNumber() === 25);
})

test('test role', () => {
    expect(manager.getRole() === 'Manager');
})