const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const page = require('../src/page-template.js');

const manager1 = new Manager("Sasha", "1", "sasham@company.com", "1");
const manager2 = new Manager("Matt", "4", "mpityo@company.com", "2");
const engineer = new Engineer("Sara", "2", "saraw@company.com", "swilson");
const intern = new Intern("Arlene", "3", "aphoenixistheinterntoday@company.com", "University Of Central Florida");

test('check to see if webpage comes back with required elements', () => {
    const profileData = [manager1, manager2, engineer, intern];
    expect(page(profileData)).toMatch(/mpityo@company.com/, /swilson/, /sasha/, /3/);
});