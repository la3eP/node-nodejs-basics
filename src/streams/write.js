import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    process.stdin.pipe(writeStream);
};

await write();