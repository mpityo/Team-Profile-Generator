const Manager = require('./Manager.js');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const manager1 = new Manager("Sasha", "1", "sasham@company.com", "1");
const manager2 = new Manager("Matt", "4", "mpityo@company.com", "2");
const engineer = new Engineer("Sara", "2", "saraw@company.com", "swilson");
const intern = new Intern("Arlene", "3", "aphoenixistheinterntoday@company.com", "University Of Central Florida");

module.exports = [manager1, manager2, engineer, intern];