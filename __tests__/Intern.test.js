const Intern = require('../lib/Intern');

test('check to see if intern is created', () => {
  const intern = new Intern('Linda', '12345', 'LindaMo@company.com', 'USF');
  
  expect(intern.getName()).toBe('Linda');
  expect(intern.getId()).toBe('12345');
  expect(intern.getEmail()).toMatch(/@company.com/);
  expect(intern.getRole()).toBe('Intern');
  expect(intern.getSchool()).toBe('USF');
});