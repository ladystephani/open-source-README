const generateMd = (userEnteredData) => {
  return `# ${userEnteredData.projectName}
## Description
${userEnteredData.description}
## How to install
${userEnteredData.installment}
## Technologies used
${userEnteredData.technology}
## License
${userEnteredData.license}
## Created by:
Name: ${userEnteredData.author}  

[Link to GitHub](https://github.com/${userEnteredData.github})
`;
};
module.exports = generateMd;
