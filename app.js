const fs = require("fs");

const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

// template literal
const generateMd = (userName, githubName) => {
  return `# Project-name-placeholder
## Description
desc placeholder variable
## How to install
installment placeholder
## Invite to collaborate
An invitation text placeholder
## License
This application is open source.
## Created by:
  Name: ${userName}
  GitHub: ![https://github.com/${githubName}]
`;
};
//console.log(generateMd(name, github));

//writeFile
fs.writeFile("./README.md", generateMd(name, github), (err) => {
  if (err) throw err;
  console.log("File creating...Please check directory.");
});
