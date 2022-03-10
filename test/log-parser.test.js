const assert = require('assert');
const logParser = require("../log-parser");
const fs = require('fs');
var stringSimilarity = require("string-similarity");

describe("Log Parser", () => {
    before(() => {
        logParser.parseLogFileToCSV('test/gobankingrates.com.access.test.log', 'test/output.csv')
    });
        
    // We can add nested blocks for tests
    describe( "Compare output to Answer.", () => {
        
        it("Is the output file the same as the answer file.", () => {
            var testResults = false;
            const outputFile = fs.readFileSync('test/output.csv').toString;
            const AnswerFile = fs.readFileSync('test/answer.csv').toString;

            if (outputFile === AnswerFile) {
                testResults = true;
            }
            assert.equal(testResults, true)
        });

    });
});
