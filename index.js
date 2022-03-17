// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licChoices = [
    '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
]
const [apache, mit, bsd] = licChoices

// TODO: Create an array of questions for user input



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([

            {
                type: 'input',
                message: 'Title of project',
                name: 'title',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter a valid project title.")
                    }; return true;
                }
            },

            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter your name!")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'Description of project',
                name: 'description',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter a valid project description.")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'installation instructions',
                name: 'installation',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter valid installation instructions.")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is the usage of your project?',
                name: 'usage',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter valid usage information.")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'Contributions',
                name: 'contribution',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter contributions. Or type N/A")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'Testing instructions',
                name: 'test',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter valid testing instructions.")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'What is your github username',
                name: 'username',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter a github username.")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'How can people contact you?',
                name: 'contact',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter a valid contact method.")
                    }; return true;
                }
            },
            {
                type: 'input',
                message: 'Enter a link to your deployed project',
                name: 'deployedLink',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter a deployed link.")
                    }; return true;
                }
            },
            {
                type: 'list',
                message: 'What license are you using?',
                name: 'license',
                choices: [apache, mit, bsd]
            },

        ])

        .then(({
            title,
            test,
            description,
            installation,
            usage,
            deployedLink,
            name,
            contact,
            contribution,
            license,
        }) => {
            const template =
                `# ${title}

${name}
        
${deployedLink}
        
${license}
        
## Table of Contents
        
* [About](#about)
        
* [Installation](#installation)
        
* [Usage](#usage)
        
* [Contribution](#contribution)
        
* [Tests](#tests)
        
* [Contact Me](#contact)
        
<hr>
        
## About
        
${description}
        
## Installation
        
${installation}
        
 ## Usage
        
${usage}

## Contribution

${contribution}
        
## Tests
        
${test}
        
## Questions
        
${contact}`;
            createNewFile(title, template)
        })



    // TODO: Create a function to write README file
    function createNewFile(fileName, template) {
        fs.writeFile('./dist/README.md', template, (err) => {
            err ? console.error(err) : console.log('success!')
        });
    }
}

// Function call to initialize app
init();
