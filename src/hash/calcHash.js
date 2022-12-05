import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileBuffer = await fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer); 
    const hex = hashSum.digest('hex');
    console.log(hex);
};
await calculateHash();