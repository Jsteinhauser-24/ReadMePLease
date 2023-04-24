// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const { writeFile}= require('fs').promises;
// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
        type:'Input',
        name:'Title',
        message:'What is the Name of the Project?'
    }, 
    {
        type:'Input',
        name:'Description',
        message:'How would you Describe your Project?'
    },
    {
        type:'Input',
        name:'Installation',
        message:'What is the installation process for this Application?'
    },
    {
        type:'Input',
        name:'Usage',
        message:'How does your application work?'
    },
    {
        type:'Input',
        name:'Credits',
        message:'Who contributed or helped in this Project?'
    },
    {
        type:'Input',
        name:'Tests',
        message:'How do you run tests?'
    },
])
};

// TODO: Create a function to write README file
const writeToFile = ({Title, Description, Installation, Usage, Credits, Tests, license})=>
    `## ${Title}
## TABLE OF CONTENTS
    Description
    Installation
    Usage
    Credits
    Tests
## DESCRIPTION
${Description}
## INSTALLATION
${Installation}
## USAGE
${Usage}
## CREDITS
${Credits}
## TESTS
${Tests}
## LICENSE
${license}
## QUESTIONS
https://github.com/Jsteinhauser-24
Any further questions Email me at Steinhauserjames3@gmail.com`

// TODO: Create a function to initialize app
function init() { 
    questions()
    .then((answers) => writeFile('README.md', writeToFile(answers)))
    .then(() => console.log('success'))
}

// Function call to initialize app
init();
