/** @noSelfInFile **/

declare namespace speechHelper {
    export function GetSpeechPathFromCollection(speechCollectionTable: any, speechType: any, speechIndex: any, gender: any): string;
    export function GetSpeechPath(pid: any, speechInput: any, speechIndex: any): string;
    export function GetPrintableValidListForSpeechCollection(speechCollectionTable: any, gender: any, collectionPrefix: any): {} | any;
    export function GetPrintableValidListForPid(pid: any): any;
    export function PlaySpeech(pid: any, speechInput: any, speechIndex: any): boolean;
}
