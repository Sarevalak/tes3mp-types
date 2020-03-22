/** @noSelfInFile **/

declare namespace customCommandHooks {
    export const commands: {
        commands: {[command: string]: (...args: any[]) => any}
    };
    export function registerCommand(cmd: any, callback: any): any;
    export function removeCommand(cmd: any): any;
    export function getCallback(cmd: any): any;
    export function validator(eventStatus: any, pid: any, message: any): any;
}
