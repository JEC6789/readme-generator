const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./GO_HERE_FOR_GENERATED_README/README.md", fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
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
            type: "input",
            name: "credits",
            message: "Please enter other users or outside sources you would like to credit. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project credits!");
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
            type: "list",
            name: "license",
            message: "Select a license to use for your project.",
            choices: ["none", "Apache", "Boost", "BSD-2", "BSD-3", "CC0", "Eclipse", "GNU", "MIT", "Mozilla", "Unlicense"]
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
    ]).then(data => {
        return data;
    });
};

promptUser()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markdown => {
        return writeFile(markdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
});