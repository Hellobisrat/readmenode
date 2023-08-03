const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "what is title of the project ?",
  },
  {
    type: "input",
    name: "description",
    message: "what is description of the project ?",
  },
  {
    type: "input",
    name: "installation",
    message: "what is installation instruction ?",
  },
  {
    type: "input",
    name: "usage",
    message: "what is usage information of the project ?",
  },
  {
    type: "checkbox",
    name: "licence",
    message: "what is licence of the project ?",
    choices: ["MIT", "APACHE2.0", "MPI2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "contribution",
    message: "what is the contribution guide line ?",
  },
  {
    type: "input",
    name: "test",
    message: "what is the test type ?",
  },
  {
    type: "input",
    name: "email",
    message: "enter your email address ?",
  },
  {
    type: "input",
    name: "profile",
    message: "what is your Github profile ?",
  },
];

inquirer.prompt(questions).then((response) => {
  const readme = getReadme(response);
  fs.writeFile("readme.md", readme, (err) => {
    ;
    if (err) {
      console.error(err);
    } else {
      console.log("read me sucessfully writen");
    }
  });
});

const getReadme = (response) => {
  return `

# ${response.title}

# Table of Content
- [description](#description)
- [installation](#installation)
- [usage](#usage)
- [licenses](#licenses)
- [contribution](#contribution)
- [test](#test)
- [profile](#profile)




## description:
${response.description}
  
## installation:
${response.installation}
 
## usage:
${response.usage}
   
## licence:
${response.licence}
   
## contribution:
${response.contribution}
   
## test:
${response.test}
   
## email:
${response.email}

   
## profile:
${response.profile}
`;
};
