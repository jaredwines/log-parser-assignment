# Log-Parser-Assignment

Parses a log file into a CSV as while as gets the device type, browser, country, and state.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install log-parser-assignment.

```bash
npm install log-parser-assignment
```

## Usage

```javascript
const logParser = require('log-parser-assignment');
logParser.parseLogFileToCSV(pathToLogFile, pathToCSVFile)
```

## Command Line Usage
```bash
npm install -g log-parser-assignment

log-parser-assignment pathToLogFile pathToGeneratedCSVFile
```