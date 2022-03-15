const assert = require('assert');
const logParser = require("../log-parser");
const fs = require('fs');

const pathToOutput = 'test/output.csv'
const pathToLog = 'test/gobankingrates.com.access.test.log'

describe("Log Parser", () => {
    before(() => {
        logParser.parseLogFileToCSV(pathToLog, pathToOutput)
    });
        
    // We can add nested blocks for tests
    describe( "Compare output to Answer.", () => {
        
        it("Is the output file the same as the answer file.", () => {
            var testResults = false;
            const outputFile = fs.readFileSync(pathToOutput).toString;
            const AnswerFile = fs.readFileSync(pathToLog).toString;

            if (outputFile === AnswerFile) {
                testResults = true;
            }
            assert.equal(testResults, true)
        });

    });
    
    after(() => {
        fs.unlinkSync(pathToOutput)
    });
});
