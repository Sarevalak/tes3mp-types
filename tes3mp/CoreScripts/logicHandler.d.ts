/** @noSelfInFile **/

declare const Players: { [key: string]: BasePlayer; };
declare const LoadedCells: { [cellDescription: string]: BaseCell};
declare const RecordStores: {
    spell: JsonRecordStore;
    potion: JsonRecordStore;
    enchantment: JsonRecordStore;
    armor: JsonRecordStore;
    book: JsonRecordStore;
    clothing: JsonRecordStore;
    weapo: JsonRecordStore;
    miscellaneous: JsonRecordStore;
    creature: JsonRecordStore;
    npc: JsonRecordStore;
};
declare const WorldInstance: BaseWorld;
declare const ObjectLoops: {[key: string]: any};
declare const Menus: {[name: string]: any};

declare namespace logicHandler {
    export function InitializeWorld(): any;
    export function CheckPlayerValidity(pid: any, targetPid: any): boolean;
    export function GetChatName(pid: any): string;
    export function GetLowestPingPid(pidArray: any): any;
    export function IsNameAllowed(inputName: any): boolean;
    export function IsPlayerNameLoggedIn(newName: any): boolean;
    export function IsPlayerAllowedConsole(pid: any): boolean;
    export function GetPlayerByName(targetName: any): any;
    export function BanPlayer(pid: any, targetName: any): any;
    export function UnbanPlayer(pid: any, targetName: any): any;
    export function TeleportToPlayer(pid: any, originPid: any, targetPid: any): any;
    export function GetConnectedPlayerCount(): number;
    export function GetLoadedCellCount(): any;
    export function GetLoadedRegionCount(): number;
    export function PrintPlayerPosition(pid: any, targetPid: any): any;
    export function PushPlayerList(pls: any): any;
    export function AuthCheck(pid: any): boolean;
    export function DoesPacketOriginRequireLoadedCell(packetOrigin: any): boolean;
    export function IsPacketFromConsole(packetOrigin: any): boolean;
    export function SendConfigCollisionOverrides(pid: any, forEveryone: any): any;
    export function CreateObjectAtLocation(cellDescription: any, location: any, refId: string, packetType: any): string;
    export function CreateObjectAtPlayer(pid: any, refId: string, packetType: any): string;
    export function DeleteObject(pid: any, objectCellDescription: any, objectUniqueIndex: any, forEveryone: any): any;
    export function DeleteObjectForPlayer(pid: any, objectCellDescription: any, objectUniqueIndex: any): any;
    export function DeleteObjectForEveryone(objectCellDescription: any, objectUniqueIndex: any): any;
    export function ActivateObjectForPlayer(pid: any, objectCellDescription: any, objectUniqueIndex: any): any;
    export function RunConsoleCommandOnPlayer(pid: any, consoleCommand: any, forEveryone: any): any;
    export function RunConsoleCommandOnObjects(pid: any, consoleCommand: any, cellDescription: any, objectUniqueIndexes: any, forEveryone: any): any;
    export function RunConsoleCommandOnObject(pid: any, consoleCommand: any, cellDescription: any, objectUniqueIndex: any, forEveryone: any): any;
    export function IsGeneratedRecord(recordId: any): boolean;
    export function GetRecordStoreByRecordId(recordId: any): any;
    export function ExchangeGeneratedRecords(pid: any, otherPidsArray: any): any;
    export function GetCellContainingActor(actorUniqueIndex: any): any;
    export function SetAIForActor(cell: any, actorUniqueIndex: any, action: any, targetPid: any, targetUniqueIndex: any, posX: any, posY: any, posZ: any, distance: any, duration: any, shouldRepeat: any): any;
    export function IsCellLoaded(cellDescription: any): boolean;
    export function SetCellAuthority(pid: any, cellDescription: any): any;
    export function LoadRecordStore(storeType: any): any;
    export function LoadCell(cellDescription: any): any;
    export function LoadCellForPlayer(pid: any, cellDescription: any): any;
    export function UnloadCell(cellDescription: any): any;
    export function UnloadCellForPlayer(pid: any, cellDescription: any): any;
    export function LoadRegionForPlayer(pid: any, regionName: any, isTeleported: any): any;
    export function UnloadRegionForPlayer(pid: any, regionName: any): any;
}
