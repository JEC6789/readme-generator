function contribsSection(data) {
  if(data.confirmContribs) {
    return `
## Contributing

${data.contribs}
`;
  } else {
    return ``;
  }
}

function renderLicenseBadge(license) {
  return `![license: ${license}](https://img.shields.io/badge/license-${license}-green)`;
}

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

function licenseSection(license) {
  if(license !== "none") {
    return `
## License
` + renderLicenseBadge(license) + `

This repository falls under ` + renderLicenseLink(license) + `. More information may be available on this repository's "LICENSE" page.
`;
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

function licenseSectionLink(license) {
  if(license !== "none") {
    return `- [License](#license)`;
  } else {
    return ``;
  }
}

function contribsSectionLink(confirm) {
  if(confirm) {
    return `
- [Contributing](#contributing)`;
  } else {
    return ``;
  }
}

function installSectionLink(confirm) {
  if(confirm) {
    return `
- [Installation](#installation)
- [Usage](#usage)`;
  } else {
    return ``;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${data.desc}

## Table of Contents
` + installSectionLink(data.confirmInstall) + `
- [Credits](#credits)
` + licenseSectionLink(data.license) + contribsSectionLink(data.confirmContribs) + `
- [Tests](#tests)
- [Questions](#questions)` + installSection(data) + `
## Credits

${data.credits}
` + licenseSection(data.license) + contribsSection(data) + `
## Tests

${data.testcases}

## Questions

If you have any questions that [${data.username}](https://github.com/${data.username}) can answer that aren't answered here, feel free to email them at [${data.email}](mailto:${data.email}).`;
}

module.exports = generateMarkdown;
