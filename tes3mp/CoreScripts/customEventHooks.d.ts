/** @noSelfInFile **/

declare namespace customEventHooks {
    export const validators: {[event: string]: (...args: any[]) => any};
    export const handlers: {[event: string]: (...args: any[]) => any};
    export function makeEventStatus(validDefaultHandler: any, validCustomHandlers: any): {
        validDefaultHandler: any;
        validCustomHandlers: any;
    };
    export function updateEventStatus(oldStatus: any, newStatus: any): any;
    export function registerValidator(event: any, callback: any): any;
    export function registerHandler(event: any, callback: any): any;
    export function triggerValidators(event: any, args: any): {
        validDefaultHandler: any;
        validCustomHandlers: any;
    };
    export function triggerHandlers(event: any, eventStatus: any, args: any): any;
}
