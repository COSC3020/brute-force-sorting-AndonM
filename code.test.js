const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array nat", function(arr) {
        let a1 = JSON.parse(JSON.stringify(arr));
        let a2 = JSON.parse(JSON.stringify(arr));
        let count = permutationSort(a1);
        return count >= 0 && JSON.stringify(a1) == JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });
jsc.assert(test);
