const Intern = require('../lib/intern');

const intern = new Intern('Dat Nguyen', 1234, 'dtnguy@gmail.com', 'UCI')

test('test school', () => {
    expect(intern.getSchool() === 'UCI');
})

test('test role', () => {
    expect(intern.getRole() === 'Intern');
})