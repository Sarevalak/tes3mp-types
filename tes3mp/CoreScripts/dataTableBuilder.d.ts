
declare interface AIData {
    action: enumerations.ai;
    posX: number;
    posY: number;
    posZ: number;
    distance: number;
    duration: number;
    shouldRepeat: boolean;
    targetPlayer?: string;
    targetUniqueIndex?: string;
}

declare namespace dataTableBuilder {
    export function BuildAIData(targetPid: any, targetUniqueIndex: any, action: any, posX: any, posY: any, posZ: any, distance: any, duration: any, shouldRepeat: any): AIData;
}
