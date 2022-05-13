const { Manager } = require('../lib/Manager');

test('Creates Manager', () => {
    const employee = new Manager('Carl Mark', 111, 'carl@mark.com', 459);

    expect(employee.name).toBe("Carl Mark");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('Checks manager class methods', () => {
    const employee = new Manager('Carl Mark', 111, 'carl@mark.com', 459);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})