const Employee = require("./Employee");

const engineerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "Engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "Engineer's github?"
    }

]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

	getRole() {
		return 'Engineer';
	}
	getGithub() {
		return this.github;
	}

}

module.exports = { Engineer, engineerQuestionsArr };