import robot from 'robotjs';
import {GlobalKeyboardListener} from "node-global-key-listener";
import { createRequire } from "module";
import chalk from 'chalk';

const require = createRequire(import.meta.url);
const config = require("../config.json");
const log = console.log;

log(`
${chalk.green.bold('NodeJS Autoclicker')}

Configuration in ${chalk.italic.underline('./config.json')}

${chalk.bold('Current configuration')}
Start:                           ${chalk.bold(config.startKey.toUpperCase())}
Pause:                           ${chalk.bold(config.pauseKey.toUpperCase())}
Stop (exit process):             ${chalk.bold(config.stopKey.toUpperCase())}
Milliseconds between each click: ${chalk.bold(config.millisecondsBetweenEachClick)}
`);

const v = new GlobalKeyboardListener();

let interval;

await v.addListener(function (e, down) {
    const isCtrlActive = (down["LEFT CTRL"] || down["RIGHT CTRL"])

    if(config.isCtrlActive && isCtrlActive !== true) {
        return;
    }

    if(
        e.state.toLocaleLowerCase() === 'down'
        && e.name.toLocaleLowerCase() === config.startKey.toLocaleLowerCase()
    ) {
        interval = setInterval(() => robot.mouseClick(config.mouseButton), config.millisecondsBetweenEachClick);
    }

    if(
        e.state.toLocaleLowerCase() === 'down'
        && e.name.toLocaleLowerCase() === config.stopKey.toLocaleLowerCase()
    ) {
        clearInterval(interval);
        process.exit();
    }

    if(
        e.state.toLocaleLowerCase() === 'down'
        && e.name.toLocaleLowerCase() === config.pauseKey.toLocaleLowerCase()
    ) {
        clearInterval(interval);
    }
});
