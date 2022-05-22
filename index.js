const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

// constructor classes
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');
// store team member objects
const employeesArr = []

const init = () => { managerQuestions() }
// prompts manager questions
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(( response ) => {
        response = new Manager(response.name, response.id, response.email, response.officeNumber)
        employeesArr.push(response);
        return employeePrompt();
    })
}
// prompts engineer questions
const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(( response ) => {
        response = new Engineer(response.name, response.id, response.email, response.github)
        employeesArr.push(response);
        return employeePrompt();
    })
}
// prompts intern questions
const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(( response ) => {
        response = new Intern(response.name, response.id, response.email, response.school)
        employeesArr.push(response);
        return employeePrompt();
    })
}
// handles prompts
const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "Add Team Member?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            let html = template(employeesArr)
            console.log('...');
            writeFile(html);
        }
    })
}

init();