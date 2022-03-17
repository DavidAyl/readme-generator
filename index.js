// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
    }) => {
        const template =
`# ${title}

${name}
        
${deployedLink}
        
        
        
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
        
## Contact
        
${contact}`;
        createNewFile(title, template)
    })



// TODO: Create a function to write README file
function createNewFile(fileName, template) {
    fs.writeFile('./dist/README.md', template, (err) => {
        err ? console.error(err) : console.log('success!')
    });
}


// TODO: Create a function to initialize app
function init() {
    console.log('node.js')
}

// Function call to initialize app
init();
