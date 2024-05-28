const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');

const buildDir = path.join(__dirname, 'public/underwriting');

function getAllJsFiles(dir, files_) {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (let i in files) {
        const name = path.join(dir, files[i]);
        if (fs.statSync(name).isDirectory()) {
            getAllJsFiles(name, files_);
        } else if (name.endsWith('.js')) {
            files_.push(name);
        }
    }
    return files_;
}

function uglifyFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const result = UglifyJS.minify(fileContent, {
        mangle: {
            toplevel: true,
            properties: {
                regex: /^_/ // Mangle all property names that start with an underscore
            }
        },
        compress: {
            passes: 3, // Apply multiple passes to compress the code further
            drop_console: true,
            pure_funcs: ['console.log'], // Remove specific functions
            keep_fargs: false, // Drop unused function arguments
            keep_fnames: false // Mangle function names
        },
        output: {
            beautify: false,
            comments: false // Remove all comments
        }
    });

    if (result.error) {
        console.error(`Error uglifying file ${filePath}:`, result.error);
        return;
    }

    fs.writeFileSync(filePath, result.code, 'utf8');
    console.log(`Uglified ${filePath}`);
}

function main() {
    const jsFiles = getAllJsFiles(buildDir);
    jsFiles.forEach(uglifyFile);
}

main();
