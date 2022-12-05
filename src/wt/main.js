import path from 'path';
import os from "os";
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const resultArr = [];
    const cpuNum = os.cpus().length
    for ( let i = 0; i < cpuNum; i++){
        const promise = new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'),{workerData:20+i});
        worker.on("message", function(msg){
            resolve({status:'resolved', data:msg});
        });
        worker.on("error", function(){
            resolve({status:'error', data:null});
        });
    });
    resultArr.push(promise);
    };
    const array = await Promise.allSettled(resultArr);
    for (const item of array)
        console.log(item.value);
};

await performCalculations();