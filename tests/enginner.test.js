const Engineer = require('../lib/engineer');

const engineer = new Engineer('Dat Nguyen', 1234, 'dtnguy@gmail.com', 'DatN')

test('test github', () => {
    expect(engineer.getGithub() === 'DatN');
})

test('test role', () => {
    expect(engineer.getRole() === 'Manager');
})