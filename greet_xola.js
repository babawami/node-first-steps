const chalk = require('chalk');
const figlet = require('figlet');
// const log = console.log;
//import the greet module that is in the current folder
const greet = require('./greet');
const styledMessage = chalk.blue.bgRed.bold(greet('Xola'));
figlet(greet('Xola'), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
// log(figGreet);
