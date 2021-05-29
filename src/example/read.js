(async () => {
    const csvUtil = require('../util/csv');

    const rows = await csvUtil.read('test.csv');

    console.log(rows);
})();