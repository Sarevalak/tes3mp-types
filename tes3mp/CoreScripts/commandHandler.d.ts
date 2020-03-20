declare namespace commandHandler {
    export function ProcessCommand(pid: any, cmd: any): boolean;
    export function StoreRecord(pid: any, cmd: any): any;
    export function CreateRecord(pid: any, cmd: any): any;
}
