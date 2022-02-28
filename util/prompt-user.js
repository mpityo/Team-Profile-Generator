const inquirer = require("inquirer");
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const addMember = (teamData = [], role = "Manager") => {
    let roleInfo = "";
    if (role === "Engineer") {
        roleInfo = "Github username";
    } else if (role === "Intern") {
        roleInfo = "school name";
    } else if (role === "Manager") {
        roleInfo = "office number";
    }

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the " + role + "?",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's name!");
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID of the " + role + "?",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's ID number!");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the " + role + "'s email?",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team member's ID!");
                }
            }
        },
        {
            type: "input",
            name: "secondaryInfo",
            message: "What is the " + role + "'s " + roleInfo + "?",
            validate: (secondaryInfoInput) => {
                if (secondaryInfoInput) {
                    return true;
                } else {
                    console.log("Please enter a valid " + roleInfo + "!");
                }
            }
        },
        {
            type: "list",
            name: "addMember",
            message: "Would you like to add an engineer or intern to the team?",
            choices: ["Engineer", "Intern", "Complete team"],
        },
    ]).then((results) => {
        const { name, id, email, secondaryInfo } = results;
        if (role === "Manager") {
            teamData.push(new Manager(name, id, email, secondaryInfo));
        } else if (role === "Engineer") {
            teamData.push(new Engineer(name, id, email, secondaryInfo));
        } else if (role === "Intern") {
            teamData.push(new Intern(name, id, email, secondaryInfo));
        }

        if (results.addMember != "Complete team") {
            return addMember(teamData, results.addMember);
        } else {
            return teamData;
        }
    });
}

module.exports = { addMember }