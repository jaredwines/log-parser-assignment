//Main

const logParser = require("./log-parser");

if (process.argv.length != 4)
{
    console.log("Incorrect number of arguments!\n\nCorrect Example: node log-parser.js [path-to-log-file] [path-to-.csv-file]")
    process.exit()
}

var pathToLogFile = process.argv[2];
var pathToCSVFile = process.argv[3];

logParser.parseLogFileToCSV(pathToLogFile, pathToCSVFile)
