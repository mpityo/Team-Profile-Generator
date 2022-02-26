const Employee = require('../lib/Employee');

test('check to see if employee is created', () => {
  const employee = new Employee('Linda', '12345', 'LindaMo@company.com');
  
  expect(employee.getName()).toBe('Linda');
  expect(employee.getId()).toBe('12345');
  expect(employee.getEmail()).toMatch(/@company.com/);
  expect(employee.getRole()).toBe('Employee');
});