// Required files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { getRandomValues } = require("crypto");

const fullTeam = [];




// Manager questions

function managerPrompts(){ return inquirer.prompt([{
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
]).then(answers =>{
    fullTeam.push(
   new Manager(answers.officeNo,answers.name, answers.employeeID, answers.email)
    )
    
})} 

// Engineer questions

function engineerPrompts (){ return inquirer.prompt([{
    type: 'input',
    name: 'engineerName',
    message: "Enter the Engineer's name",
  },
  {
    type: 'input',
    name: 'engineerID',
    message: "Enter the Engineer's ID",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "Enter the Engineer's email",
    
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: "Enter the Engineer's Github Username",
    
  }]).then(answers =>{
    fullTeam.push(
   new Engineer(answers.engineerGithub,answers.engineerName, answers.engineerID, answers.engineerEmail)
    )
    
})}

// Intern questions
function internPrompts(){ return inquirer.prompt([{
    type: 'input',
    name: 'internName',
    message: "Enter the intern's Name",
    
    
  },
  {
    type: 'input',
    name: 'internID',
    message: "Enter the intern's ID",
    
    
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "Enter the intern's email",
    
    
  },
  {
    type: 'input',
    name: 'internSchool',
    message: "Enter the intern's school",
    
    
  }


]).then(answers =>{
    fullTeam.push(
   new Intern(answers.internSchool,answers.internName, answers.internID, answers.internEmail)
    )
    
})};

// Questions that determine which team member to add next

function otherPrompts(){

    inquirer.prompt(
        {
        type: "list",
        name: "addTeam",
        message: "Choose an option",
        choices: ["Add an Engineer", "Add an Intern", "Finish building team"]
        }).then(answers =>{

            if(answers.addTeam === "Add an Engineer") {
                return engineerPrompts()
                    .then(otherPrompts)
            }
            else if(answers.addTeam === "Add an Intern") {
                return internPrompts()
                    .then(otherPrompts)
            }
            console.log(fullTeam);
            buildPage();
            process.exit()
        })
};

// Function to build the page

function buildPage() {
    fs.writeFileSync(outputPath, render(fullTeam), "utf-8")
}

// Function to initialise the page

function init(){

    managerPrompts()
    .then(otherPrompts)

}

init()