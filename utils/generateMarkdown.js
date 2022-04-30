// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {/* https://img.shields.io/badge/license-MIT-green */}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return ``; // temp
  }
  return ``;
}

function installSection(data) {
  if(data.confirmInstall) {
    return `
## Installation

${data.install}

## Usage

${data.usage}`;
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

## Description

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
