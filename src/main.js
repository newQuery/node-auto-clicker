import robot from 'robotjs'
import {GlobalKeyboardListener} from "node-global-key-listener";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("../config.json")

console.log("[AUTOCLICKER] Bienvenue jeune aventurier");
console.log("[AUTOCLICKER] Pour mettre à jour les raccourcis, modifie le fichier config.json");
console.log("[AUTOCLICKER] Start: S | Pause: P | Stop: T");

const v = new GlobalKeyboardListener();

let interval;

v.addListener(function (e, down) {
    if(e.state.toLocaleLowerCase() === 'down' && e.name.toLocaleLowerCase() === config.startKey.toLocaleLowerCase()) {
        console.log('[AUTOCLICKER] Starting autoclicker');
        interval = setInterval(() => robot.mouseClick("right"), 1);
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