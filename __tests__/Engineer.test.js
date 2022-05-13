const Engineer = require('../lib/Engineer');

test('Creates Engineer', () => {
  const employee = new Engineer('Carl Mark', 111, 'carl@mark.com', 'carl-mark');

  expect(employee.name).toBe("Carl Mark");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
})

test('Checks engineer class methods', () => {
  const employee = new Engineer('Carl Mark', 111, 'carl@mark.com', 'carl-mark');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})