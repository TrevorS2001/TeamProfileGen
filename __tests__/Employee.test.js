const Employee = require('../lib/Employee');

test('Create employee', () => {
  const employee = new Employee('Carl Mark', 111, 'carl@mark.com');

  expect(employee.name).toBe("Carl Mark");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})

test('Check employee class methods', () => {
  const employee = new Employee('Carl Mark', 111, 'carl@mark.com');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');
})