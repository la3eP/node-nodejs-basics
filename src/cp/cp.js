import { spawn } from 'child_process';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
export const spawnChildProcess = async (args) => {
  const node = spawn('node', [path.join(__dirname, 'files', 'script.js'), args]);

  process.stdin.pipe(node.stdin);
  node.stdout.on('data', (data) => {
    console.log(data.toString());
  });
  node.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  node.stdout.on('error', (error) => {
    console.log(`error: ${error.message}`);
  });
  node.stdout.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
spawnChildProcess();