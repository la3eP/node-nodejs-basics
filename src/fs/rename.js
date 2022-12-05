import fs from 'fs';

const sourcePatch = "./src/fs/files/wrongFilename.txt";
const destPatch = "./src/fs/files/properFilename.md";
const errorMsg = "FS operation failed";

const rename = async () => {
    // Write your code here 
    fs.access(sourcePatch, (err) => {  //Checking if file exist
        if (err) {
            throw new Error(errorMsg);
          }
        fs.access(destPatch, (err) => {  //Checking if file md does not exist
            if (err) { 
                fs.rename(sourcePatch, destPatch, () => {  //Renaming
                  });
                return;
            }
            throw new Error(errorMsg);
        });
    });
};

await rename();