const parseArgs = () => {
    const line = process.argv.slice(2);
    const strArr = [];
    const pair = line.reduce((acc, value, index) => {
        if (index % 2 === 0) {
            acc.push(line.slice(index, index +2));
        } return acc;
    }, []);
    pair.forEach((item) => {
        const [key, value] = item;
        const keyDone = key.replace('--', '');
        strArr.push(`${keyDone} is ${value}`);
    });
    console.log(strArr.join(', '));
};

parseArgs();