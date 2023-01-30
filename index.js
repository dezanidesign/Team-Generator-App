// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { getRandomValues } = require("crypto");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

class Employee{

    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    };

    getName(){
        
    };

    getId(){
        
    };

    getEmail(){
        
    };

    getRole(){
        return "Employee";
    }

};

let hakim = new Employee("Hakim", 001, "hakimzani@gmail.com");

class Manager extends Employee{

    constructor(officeNumber, name, id, email){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }
};

class Engineer extends Employee{

    constructor(github, name, id, email){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
       
    };

    getRole(){
        return "Engineer"
    }
};

class Intern extends Employee{

    constructor(school, name, id, email){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
            
    }

    getRole(){
        return "Intern"
    }
};

inquirer.prompt([{
    type:"input" ,
    name:"name" ,
    message:"Enter the Team Manager's name" ,
},
{
    type:"input" ,
    name:"employeeID" ,
    message:"Enter the Team Manager's employee ID" ,
},
{
    type:"input" ,
    name:"email" ,
    message:"Enter the Team Manager's email address" ,
},
{
    type:"input" ,
    name:"officeNo" ,
    message:"Enter the Team Manager's office number" ,
},
{
    type:"list" ,
    name:"addTeam" ,
    message:"Choose an option" ,
    choices:["Add an Engineer", "Add an Intern", "Finish building team"]
},
// Engineer questions
{
    type: 'input',
    name: 'engineerName',
    message: "Enter the Engineer's name",
    when: function(answers) {
      return answers.addTeam === "Add an Engineer";
    },
  },
  {
    type: 'input',
    name: 'engineerID',
    message: "Enter the Engineer's ID",
    when: function(answers) {
      return answers.addTeam === "Add an Engineer";
    },
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "Enter the Engineer's email",
    when: function(answers) {
      return answers.addTeam === "Add an Engineer";
    },
    
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: "Enter the Engineer's Github Username",
    when: function(answers) {
      return answers.addTeam === "Add an Engineer";
    },
    
  },

// Intern questions
{
    type: 'input',
    name: 'internName',
    message: "Enter the intern's Name",
    when: function(answers) {
      return answers.addTeam === "Add an Intern";
    },
    
  },
  {
    type: 'input',
    name: 'internID',
    message: "Enter the intern's ID",
    when: function(answers) {
      return answers.addTeam === "Add an Intern";
    },
    
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "Enter the intern's email",
    when: function(answers) {
      return answers.addTeam === "Add an Intern";
    },
    
  },
  {
    type: 'input',
    name: 'internSchool',
    message: "Enter the intern's school",
    when: function(answers) {
      return answers.addTeam === "Add an Intern";
    },
    
  },


]).then(answers =>{
    console.log(answers.name);
})