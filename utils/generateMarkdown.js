// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if ( license == 'Mozzilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }  
    if (license == 'unlicensed') {
    return ''
  }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return 'https://www.apache.org/licenses/LICENSE-2.0.txt'
  }
   if (license == 'MIT') {
    return 'https://www.mit.edu/~amini/LICENSE.md'
   }
  if (license == 'Mozzilla') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/'
  }
  if (license == 'unlicensed') {
    return ''
  }
}
//decided to not use the renderlicensespace function
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.Title} ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [DESCRIPTION](#description)
  - [INSTALLATION](#installation)
  - [USAGE](#usage)
  - [CREDITS](#credits)
  - [TESTS](#tests)
  - [LICENSE](#license)
  - [QUESTIONS](#questions) 

## DESCRIPTION
${data.Description}
## INSTALLATION
${data.Installation}
## USAGE
${data.Usage}
## CREDITS
${data.Credits}
## TESTS
${data.Tests}
## LICENSE
${renderLicenseLink(data.license)}
## QUESTIONS
https://github.com/Jsteinhauser-24
Any further questions Email me at Steinhauserjames3@gmail.com`
}
module.exports = generateMarkdown;
