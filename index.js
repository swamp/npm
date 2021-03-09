/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Peter Bjorklund. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const path = require('path');
const child_process = require('child_process');

function platform_path_to_executable(executableName) {
    const rootDirectory = path.dirname(require.main.filename);
    console.log(`swamp compiler: script file directory is ${rootDirectory}`);

    const platform = process.platform;
    console.log(`swamp compiler: detected platform is ${platform}`);

    const platformBin = path.join(rootDirectory, "resources", platform)
    console.log(`swamp compiler: platform specific bin/ directory is ${platformBin}`);

    const swampExecutable = path.join(platformBin, executableName)

    return swampExecutable;
}

module.exports.platform_path_to_executable = platform_path_to_executable;

function run_script(command, args, callback) {
    var child = child_process.spawn(command, args);
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function(data) {
        process.stdout.write(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function(data) {
        process.stderr.write(data);
    });

    child.on('close', function(code) {
        callback(code);
    });
}

module.exports.run_script = run_script;
