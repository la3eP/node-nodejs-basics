import path from 'path';
import { release, version } from 'os';
import { createServer }from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
const jsonA = JSON.parse(
await readFile(new URL('./files/a.json', import.meta.url))
);
const jsonB = JSON.parse(
    await readFile(new URL('./files/b.json', import.meta.url))
);

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = jsonA;
} else {
    unknownObject = jsonB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

