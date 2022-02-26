const Engineer = require('../lib/Engineer');

test('check to see if engineer is created', () => {
  const engineer = new Engineer('Linda', '12345', 'LindaMo@company.com', 'lindahub');
  
  expect(engineer.getName()).toBe('Linda');
  expect(engineer.getId()).toBe('12345');
  expect(engineer.getEmail()).toMatch(/@company.com/);
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getGithub()).toBe('lindahub');
});