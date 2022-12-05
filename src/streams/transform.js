import { Transform } from 'stream';

const transform = async () => {
     const revers = new Transform({
        transform(chunk, _, callback) {
            const ref = chunk.toString().split('').reverse().join('');
            callback(null, ref); 
        }
     });
     process.stdin.pipe(revers).pipe(process.stdout);
};

await transform();