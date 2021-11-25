# CSV Util

Using is simple.

To read a csv, simply require the module and await read.

```javascript
(async () => {
    const csvUtil = require('../util/csv');

    const rows = await csvUtil.read('test.csv');

    console.log(rows);
})();
```

To write rows, create an array of objects with keys named after the columns and call csv.write

```javascript
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
```

To append rows on an already made csv, call csv.append.

```javascript
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
```