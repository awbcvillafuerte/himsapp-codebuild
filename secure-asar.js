let fs = require('fs');
let path = require('path');
let recursive = require('recursive-readdir');
let rimraf = require('rimraf');
let asar = require('@electron/asar');
let javaScriptObfuscator = require('javascript-obfuscator');
const log = require("ololog").configure({});

function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
  
    return hrs + ':' + mins + ':' + secs + '.' + ms;
  }

// Set your time duration, resources folder, and ignore folders
const startTime = new Date().getTime();
const resourcesFolder = '/home/bitnami/builds/hims-app-dev-2/dist/win-unpacked/resources';
// Enter the directories to be ignored
const toIgnore = ["node_modules", "app"];

log.dim("-----------------------------------");
log.lightGray('\n Secure electron app \n');
log.lightGray('\n Unpacking archive \n');

asar.extractAll(resourcesFolder + '/app.asar', resourcesFolder + '/src');


recursive(resourcesFolder + '/src', toIgnore, function (err, files) {
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            const stat = fs.lstatSync(file)
            
            log.dim("----------------------------------------");
            log.lightGray('\n Checking file size ' + stat.size + ' - ' + file);     

            let contents = fs.readFileSync(file, 'utf8');
            log.dim("_-_-_-_-_-__-_-_-_-_-__-_-_-_-_-__-_-_-_-_-__-_-_-_-_-_");
            log.lightGray('\n Protecting ' + file);

            const obfuscatedCode = javaScriptObfuscator.obfuscate(contents, {
                compact: true,
                controlFlowFlattening: false,
                deadCodeInjection: false,
                debugProtection: false,
                // debugProtectionInterval: false,
                disableConsoleOutput: true,
                identifierNamesGenerator: 'hexadecimal',
                log: false,
                numbersToExpressions: false,
                renameGlobals: false,
                selfDefending: true,
                simplify: true,
                splitStrings: false,
                stringArray: true,
                stringArrayCallsTransform: false,
                stringArrayEncoding: [],
                stringArrayIndexShift: true,
                stringArrayRotate: true,
                stringArrayShuffle: true,
                stringArrayWrappersCount: 1,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 2,
                stringArrayWrappersType: 'variable',
                stringArrayThreshold: 0.75,
                unicodeEscapeSequence: false
            });
            fs.writeFileSync(file, obfuscatedCode.getObfuscatedCode());     
        }
    });
    
    log.dim("----------------------------------------");
    log.lightRed('Deleting app.asar');

    fs.unlinkSync(resourcesFolder + '/app.asar');
    log.dim("----------------------------------------");
    log.lightGray('Packing asar archive');
    
    asar.createPackage(resourcesFolder + '/src', resourcesFolder + '/app.asar', (callback) => {
    }).then(()=> {
            if (err) {
                throw err;
              }
            
            log.lightGray('Created new secure asar archive');
            log.dim("-----------------------------------");
            log.lightRed('Deleting src directory');
            console.log('Reminders --- uncomment the code below to see the contents of the src file')
          
            // delete src file ///
            rimraf(resourcesFolder + '/src', function () {
                 if (err) {
                       throw err;
               }
               log.dim("--------------- Done! Finished removing source files. --------------------");
            });
           // delete src file ///
    })

    const endTime = new Date().getTime();
    const durationTime = endTime-startTime
    console.log('Time elapsed in securing files', msToTime(durationTime))
});
