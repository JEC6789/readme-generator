// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license: ${license}](https://img.shields.io/badge/license-${license}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache":
      return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
    case "Boost":
      return `[Boost Software License 1.0](https://www.boost.org/users/license.html)`;
    case "BSD-2":
      return `the BSD 2-Clause License`;
    case "BSD-3":
      return `the BSD 3-Clause License`;
    case "CC0":
      return `the [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) license`;
    case "Eclipse":
      return `[Eclipse Public License 2.0](https://www.eclipse.org/legal/epl-2.0/)`;
    case "GNU":
      return `[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case "MIT":
      return `the MIT License`;
    case "Mozilla":
      return `[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
    case "Unlicense":
      return `[The Unlicense](https://unlicense.org/)`;
    default:
      return `the ${license} license`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `## License

` + renderLicenseBadge(license) + `

This repository falls under ` + renderLicenseLink(license) + `. More information may be available on this repository's "LICENSE" page.`;
  }
  return ``;
}

function installSection(data) {
  if(data.confirmInstall) {
    return `
## Installation

${data.install}

## Usage

${data.usage}
`;
  } else {
    return ``;
  }
}

function installSectionLink(data) {
  if(data.confirmInstall) {
    return `
- [Installation](#installation)
- [Usage](#usage)`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return console.log(`# ${data.title}

${data.desc}

## Table of Contents
` + installSectionLink(data) + `
- [Credits](#credits)
- [License](#license)
` + installSection(data) + `
## Credits

${data.credits}

` + renderLicenseSection(data.license));
}

module.exports = generateMarkdown;
