import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    readStream.on('data', function(chunk) {
    process.stdout.write(chunk);
    }); 
    readStream.on('error', function() { 
        throw new Error ('FS operation failed')
    });
};
await read();
