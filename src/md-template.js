const generateMd = (userEnteredData) => {
  return `# Project-name-placeholder
## Description
desc placeholder variable
## How to install
installment placeholder
## Technologies used
tech names
## Invite to contribute
An invitation text placeholder
## License
This application is open source.
## Created by:
Name: ${userEnteredData.author}
Link to GitHub: ![https://github.com/${userEnteredData.github}]
`;
};
module.exports = generateMd;
