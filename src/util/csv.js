/* Read the csv */
const fs = require('fs');
const CSVParser = require('csv-parser');
const fastCSV = require('fast-csv');
module.exports = {
    read: async (filename) => {
        let rows = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filename)
                .pipe(CSVParser())
                .on('data', (data) => {
                    rows.push(data);
                })
                .on('end', () => {
                    resolve(rows);
                });
        });
    },
    write: async (rows, outputFilename) => {
        return new Promise((resolve, reject) => {
            const writeStream = fs.createWriteStream(outputFilename);
            fastCSV.write(rows, {
                    headers: true
                })
                .pipe(writeStream)
                .on('end', () => {
                    resolve();
                });
        });

    }
}