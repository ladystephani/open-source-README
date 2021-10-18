const fs = require("fs");
const inquirer = require("inquirer");
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
      type: "checkbox",
      choices: [
        "HTML",
        "CSS",
        "JavaScript",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
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
      choices: ["MIT", "Placeholder"],
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
promptUser().then((userEnteredData) => {
  // write the file
  fs.writeFile("./README.md", generateMd(userEnteredData), (err) => {
    if (err) throw err;
    console.log("File creating...Please check directory.");
  });
});
