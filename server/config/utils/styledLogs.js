const chalk = require("chalk");

const log = console.log;
const bold = chalk.bold;
const underline = chalk.underline;
const logCyan = (data, ...rest) => log(chalk.cyan(`${data} ${rest} `));
const logBgCyan = (data, ...rest) => log(chalk.bgCyan(`${data} ${rest} `));
const logRed = (data, ...rest) => log(chalk.red(`${data} ${rest} `));
const logBgRed = (data, ...rest) => log(chalk.bgRed(`${data} ${rest} `));
const logGreen = (data, ...rest) => log(chalk.green(`${data} ${rest} `));
const logBgGreen = (data, ...rest) => log(chalk.bgGreen(`${data} ${rest} `));
const logYellow = (data, ...rest) => log(chalk.yellow(`${data} ${rest} `));
const logBgYellow = (data, ...rest) => log(chalk.bgYellow(`${data} ${rest} `));
const logBlue = (data, ...rest) => log(chalk.blue(`${data} ${rest} `));
const logBgBlue = (data, ...rest) => log(chalk.bgBlue(`${data} ${rest} `));
const logMagenta = (data, ...rest) => log(chalk.magenta(`${data} ${rest} `));
const logBgMagenta = (data, ...rest) =>
    log(chalk.bgMagenta(`${data} ${rest} `));
const logBgWhite = (data, ...rest) => log(chalk.bgWhite(`${data} ${rest} `));
const logBgBlack = (data, ...rest) => log(chalk.bgBlack(`${data} ${rest} `));

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
