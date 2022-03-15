/**
 * Parses a log file into a CSV as while as gets the device type, brower, country, and state
 * @param pathToLogFile the absolute path to the log file
 * @param pathToCSVFile the absolute path for the generated CSV file
 */
const parseLogFileToCSV = function (pathToLogFile, pathToCSVFile){
    const uAParser = require('ua-parser-js');
    const parser = new uAParser();
    const nReadlines = require('n-readlines');
    const broadbandLines = new nReadlines(pathToLogFile);
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
        path: pathToCSVFile,
        header: [
            { id: 'iPAddress', title: 'IP Address' },
            { id: 'date', title: 'Date' },
            { id: 'request', title: 'Request' },
            { id: 'htmlCode', title: 'HTTP Status Code' },
            { id: 'code', title: 'Code' },
            { id: 'uRL', title: 'URL' },
            { id: 'userAgent', title: 'User Agent' },
            { id: 'country', title: 'Country' },
            { id: 'state', title: 'State' },
            { id: 'deviceType', title: 'Device Type' },
            { id: 'browers', title: 'Browers' }
        ]
    });
    const fs = require('fs');
    const path = require('path');
    const Reader = require('@maxmind/geoip2-node').Reader;
    var geoLite2Path = path.join(__dirname, '.', 'GeoLite2-City.mmdb');
    const dbBuffer = fs.readFileSync(geoLite2Path);
    const reader = Reader.openBuffer(dbBuffer);



    let line;
    let logEntrys = [];

    while (line = broadbandLines.next()) {

        const logEntryValues = line.toString().split('"');
        const dateAndIP = logEntryValues[0].toString().split(' - - ');
        const code = logEntryValues[2].toString().split(' ');

        parser.setUA(logEntryValues[5]);
        var result = parser.getResult();

        var city = reader.city(dateAndIP[0]);

        let logEntry = {
            iPAddress: dateAndIP[0] != undefined ? dateAndIP[0] : 'undefined',
            date: dateAndIP[1] != undefined ? dateAndIP[1] : 'undefined',
            request: logEntryValues[1] != undefined ? logEntryValues[1] : 'undefined',
            htmlCode: code[1] != undefined ? code[1] : 'undefined',
            code: code[2] != undefined ? code[2] : 'undefined',
            uRL: logEntryValues[3] != `-` ? logEntryValues[3] : 'undefined',
            userAgent: logEntryValues[5] != undefined ? logEntryValues[5] : 'undefined',
            country: city.country != undefined ? city.country.names.en : 'undefined',
            state: city.subdivisions != undefined ? city.subdivisions[0].names.en : 'undefined',
            deviceType: result.device.type != undefined ? result.device.type : 'undefined',
            browers: result.browser.name != undefined ? result.browser.name : 'undefined',
        };
        logEntrys.push(logEntry)
    }

    csvWriter.writeRecords(logEntrys)
        .then(() => {
            console.log('The log file has been successfully parsed!\nThe file is located at ' + pathToCSVFile + '.');
        });
}

module.exports ={
    parseLogFileToCSV
}