const compiler = require('./index.js')

const swampExecutable = compiler.platform_path_to_executable('swamp');

var args = process.argv.slice(2);

const child = compiler.run_script(swampExecutable, args, (exitCode) => {
    process.exit(exitCode)
});
