import robot from 'robotjs'
import {GlobalKeyboardListener} from "node-global-key-listener";
import { createRequire } from "module";
import chalk from 'chalk';

const require = createRequire(import.meta.url);
const config = require("../config.json")
const log = console.log;

log(`
${chalk.green.bold('NodeJS Autoclicker')}

Configuration in ${chalk.italic.underline('./config.json')}

${chalk.bold('Default hotkeys')}
Start:               ${chalk.bold('S')}
Pause:               ${chalk.bold('P')}
Stop (exit process): ${chalk.bold('T')}
`);

const v = new GlobalKeyboardListener();

let interval;

v.addListener(function (e, down) {
    if(e.state.toLocaleLowerCase() === 'down' && e.name.toLocaleLowerCase() === config.startKey.toLocaleLowerCase()) {
        console.log('[AUTOCLICKER] Starting autoclicker');
        interval = setInterval(() => robot.mouseClick(config.mouseButton), config.millisecondsBetweenEachClick);
    }

    if(e.state.toLocaleLowerCase() === 'down' && e.name.toLocaleLowerCase() === config.stopKey.toLocaleLowerCase()) {
        console.log("[AUTOCLICKER] Stopping and exit process");
        clearInterval(interval)
        process.exit()
    }

    if(e.state.toLocaleLowerCase() === 'down' && e.name.toLocaleLowerCase() === config.pauseKey.toLocaleLowerCase()) {
        console.log("[AUTOCLICKER] Pausing autoclick");
        clearInterval(interval)
    }
});
