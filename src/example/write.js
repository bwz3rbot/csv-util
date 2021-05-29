(async () => {

    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push({
            columnNumber: i,
            ref: 'test'
        });
    }

    await require('./util/csv').write(rows, 'test.csv');
})();