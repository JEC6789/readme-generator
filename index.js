// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your project? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "desc",
        message: "Please enter a description of your project. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your project description!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmInstall",
        message: "Is this a project that has to be installed by the user?",
        default: true
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions for your project.",
        when: ({confirmInstall}) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project.",
        when: ({confirmInstall}) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContribs",
        message: "Do you want other users to contribute to your project?",
        default: false
    },
    {
        type: "input",
        name: "contribs",
        message: "Please enter the contribution guidelines for your project.",
        when: ({confirmContribs}) => {
            if (confirmContribs) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "testcases",
        message: "Please enter some test cases for your project.",
        when: ({confirmInstall}) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license to use for your project.",
        choices: ["none"] // I don't know anything about licensing
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
