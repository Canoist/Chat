const chalk = require("chalk");

const log = console.log;
const bold = chalk.bold;
const underline = chalk.underline;
const logCyan = (data) => log(chalk.cyan(data + " "));
const logBgCyan = (data) => log(chalk.bgCyan(data + " "));
const logRed = (data) => log(chalk.red(data + " "));
const logBgRed = (data) => log(chalk.bgRed(data + " "));
const logGreen = (data) => log(chalk.green(data + " "));
const logBgGreen = (data) => log(chalk.bgGreen(data + " "));
const logYellow = (data) => log(chalk.yellow(data + " "));
const logBgYellow = (data) => log(chalk.bgYellow(data + " "));
const logBlue = (data) => log(chalk.blue(data + " "));
const logBgBlue = (data) => log(chalk.bgBlue(data + " "));
const logMagenta = (data) => log(chalk.magenta(data + " "));
const logBgMagenta = (data) => log(chalk.bgMagenta(data + " "));
const logBgWhite = (data) => log(chalk.bgWhite(data + " "));
const logBgBlack = (data) => log(chalk.bgBlack(data + " "));

module.exports = {
    bold,
    underline,
    logBgCyan,
    logCyan,
    logRed,
    logBgRed,
    logGreen,
    logBgGreen,
    logYellow,
    logBgYellow,
    logBlue,
    logBgBlue,
    logMagenta,
    logBgMagenta,
    logBgWhite,
    logBgBlack,
};
