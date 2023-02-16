function sumDistinctElements(set1, set2) {
    let distinctElements = [];
    let sum = 0;
    for (let i = 0; i < set1.length; i++) {
        if (!distinctElements.includes(set1[i])) {
            distinctElements.push(set1[i]);
            sum += set1[i];
        }
    }
    for (let i = 0; i < set2.length; i++) {
        if (!distinctElements.includes(set2[i])) {
            distinctElements.push(set2[i]);
            sum += set2[i];
        }
    }
    console.log(`Distinct elements: ${distinctElements}`);
    return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const sum = sumDistinctElements(set1, set2);
console.log(`Sum of distinct elements: ${sum}`);

        // problem 2
        function dotProduct(v1, v2) {
            let ps = 0;
            for (let i = 0; i < v1.length; i++) {
                ps += v1[i] * v2[i];
            }
            return ps;
        }
        
        function isOrthogonal(v1, v2) {
            const ps = dotProduct(v1, v2);
            if (ps === 0) {
                console.log(`Vectors [${v1}] and [${v2}] are orthogonal`);
                return true;
            } else {
                console.log(`Vectors [${v1}] and [${v2}] are NOT orthogonal`);
                return false;
            }
        }
        
        function arePairsOrthogonal(pairs) {
            for (let i = 0; i < pairs.length; i++) {
                const v1 = pairs[i][0];
                const v2 = pairs[i][1];
                isOrthogonal(v1, v2);
            }
        }
        
        // Example usage:
        const pairs = [[[1, 0], [0, 1]], [[1, 0], [1, 1]], [[1, 1], [2, 2]]];
        arePairsOrthogonal(pairs);
        