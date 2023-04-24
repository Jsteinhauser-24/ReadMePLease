// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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
    {
        type:'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['Apache', 'MIT', 'Mozzilla', 'unlicensed']
    }
])
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { 
    questions()
    .then((data) => writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('success'))
}

// Function call to initialize app
init();
