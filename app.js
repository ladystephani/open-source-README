const inquirer = require("inquirer");
const fs = require("fs");

const generateMd = require("./src/md-template");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Describe your project: (Required)",
      name: "description",
    },
    {
      type: "input",
      message: "Explain how to install your project: (Required)",
      name: "installment",
    },
    {
      type: "checkbox",
      choices: [
        " HTML",
        " CSS",
        " JavaScript",
        " ES6",
        " jQuery",
        " Bootstrap",
        " Node.js",
      ],
      message: "What languages or technologies did you use in this project?",
      name: "technology",
    },
    {
      type: "confirm",
      message:
        "Would you like to set up a section as an invitation for contributors?",
      name: "confirmContributors",
      default: false,
    },
    {
      type: "input",
      message:
        "Write some text to explain to contributors what steps they should follow to join the project:",
      name: "invitation",
      when: ({ confirmContributors }) => {
        if (confirmContributors) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "checkbox",
      choices: [
        " MIT",
        " PostgreSQL License",
        " Open Software License 3.0",
        " Mozilla Public License 2.0",
      ],
      message: "Which licenses do you intend to have for this project?",
      name: "license",
    },
    {
      type: "input",
      message: "Who is the author of your project?",
      name: "author",
    },
    {
      type: "input",
      message: "Please enter your GitHub username:",
      name: "github",
    },
  ]);
};

// must add () when calling prompUser() inquirer function
promptUser().then((data) => {
  // write the file
  fs.writeFile("./README.md", generateMd(data), (err) => {
    if (err) throw err;
    console.log("File creating...Please check directory.");
    //console.log(`${data.projectName}`);
  });
});
