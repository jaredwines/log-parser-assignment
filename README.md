# Log-Parser-Assignment

Parses a log file into a CSV as while as get the device type, browser, country, and state.

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

Step 1: Install CLI version of log-parser-assignment.
```bash
npm install -g log-parser-assignment
```
Step 2: Run CLI log-parser-assignment. [pathToLogFile] is the absolute path to the log file. [pathToGeneratedCSVFile] is the absolute path for the generated CSV file.
```bash
log-parser-assignment [pathToLogFile] [pathToGeneratedCSVFile]
```