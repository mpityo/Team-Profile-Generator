const Manager = require('../lib/Manager');

test('check to see if manager is created', () => {
  const manager = new Manager('Linda', '12345', 'LindaMo@company.com', '8131234567');
  
  expect(manager.getName()).toBe('Linda');
  expect(manager.getId()).toBe('12345');
  expect(manager.getEmail()).toMatch(/@company.com/);
  expect(manager.getRole()).toBe('Manager');
  expect(manager.getNumber()).toBe('8131234567')
});