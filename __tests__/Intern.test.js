const { Intern } = require('../lib/Intern');

test('Creates Intern', () => {
    const employee = new Intern('Carl Mark', 111, 'carl@mark.com', 'RU');

    expect(employee.name).toBe("Carl Mark");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checks intern class methods', () => {
    const employee = new Intern('Carl Mark', 111, 'carl@mark.com', 'RU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})