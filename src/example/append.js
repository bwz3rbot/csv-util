(async () => {
    await require('fs/promises').writeFile('appendrows.csv', 'col1,col2,col3\n', 'utf-8');
    const csv = require('../util/csv');

    for (let i = 0; i < 5; i++) {
        await csv.append({
            col1: `data1-${i}`,
            col2: `data2-${i}`,
            col3: `data3-${i}`
        }, 'appendrows.csv');
    }

})();