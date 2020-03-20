import './../lib/lua/jsonInterface';
import './color';
import './config';

// tableHelper = require("tableHelper");
// require("time");
import './logicHandler';
import './customEventHooks';
import './customCommandHooks';
import './eventHandler';
import './guiHelper';
import './animHelper';
import './speechHelper';
import './menuHelper';

declare const Database: Database;
declare const Player: new<T extends BasePlayer>(...args: any[]) => T;
declare const Cell: new<T extends BaseCell>(...args: any[]) => T;
declare const RecordStore: new<T extends BaseRecordStore>(...args: any[]) => T;
declare const World: new<T extends BaseWorld>(...args: any[]) => T;
declare const clientDataFiles: {[key: string]: any};
declare const speechCollections: {[key: string]: any};
declare let hourCounter: number;
declare let updateTimerId: number;
declare const banList: {
    playerNames: string[];
    ipAddresses: string[];
};
declare function LoadBanList(): void;
declare function SaveBanList(): void;
declare function OnServerInit(): void;
declare function OnServerPostInit(): void;
declare function OnServerExit(errorState: any): void;
declare function OnServerScriptCrash(errorMessage: any): void;
declare function LoadDataFileList(filename: any): void;
declare function OnRequestDataFileList(): void;
declare function OnRequestPluginList(): void;
declare function OnPlayerConnect(pid: any): void;
declare function OnLoginTimeExpiration(pid: any): void;
declare function OnPlayerDisconnect(pid: any): void;
declare function OnPlayerResurrect(pid: any): void;
declare function OnPlayerSendMessage(pid: any, message: any): void;
declare function OnObjectLoopTimeExpiration(loopIndex: any): void;
declare function OnDeathTimeExpiration(pid: any): void;
declare function OnPlayerDeath(pid: any): void;
declare function OnPlayerAttribute(pid: any): void;
declare function OnPlayerSkill(pid: any): void;
declare function OnPlayerLevel(pid: any): void;
declare function OnPlayerShapeshift(pid: any): void;
declare function OnPlayerCellChange(pid: any): void;
declare function OnPlayerEquipment(pid: any): void;
declare function OnPlayerInventory(pid: any): void;
declare function OnPlayerSpellbook(pid: any): void;
declare function OnPlayerQuickKeys(pid: any): void;
declare function OnPlayerJournal(pid: any): void;
declare function OnPlayerFaction(pid: any): void;
declare function OnPlayerTopic(pid: any): void;
declare function OnPlayerBounty(pid: any): void;
declare function OnPlayerReputation(pid: any): void;
declare function OnPlayerBook(pid: any): void;
declare function OnPlayerItemUse(pid: any): void;
declare function OnPlayerMiscellaneous(pid: any): void;
declare function OnPlayerEndCharGen(pid: any): void;
declare function OnCellLoad(pid: any, cellDescription: any): void;
declare function OnCellUnload(pid: any, cellDescription: any): void;
declare function OnCellDeletion(cellDescription: any): void;
declare function OnActorList(pid: any, cellDescription: any): void;
declare function OnActorEquipment(pid: any, cellDescription: any): void;
declare function OnActorAI(pid: any, cellDescription: any): void;
declare function OnActorDeath(pid: any, cellDescription: any): void;
declare function OnActorCellChange(pid: any, cellDescription: any): void;
declare function OnObjectActivate(pid: any, cellDescription: any): void;
declare function OnObjectPlace(pid: any, cellDescription: any): void;
declare function OnObjectSpawn(pid: any, cellDescription: any): void;
declare function OnObjectDelete(pid: any, cellDescription: any): void;
declare function OnObjectLock(pid: any, cellDescription: any): void;
declare function OnObjectTrap(pid: any, cellDescription: any): void;
declare function OnObjectScale(pid: any, cellDescription: any): void;
declare function OnObjectState(pid: any, cellDescription: any): void;
declare function OnDoorState(pid: any, cellDescription: any): void;
declare function OnContainer(pid: any, cellDescription: any): void;
declare function OnVideoPlay(pid: any): void;
declare function OnRecordDynamic(pid: any): void;
declare function OnWorldKillCount(pid: any): void;
declare function OnWorldMap(pid: any): void;
declare function OnWorldWeather(pid: any): void;
declare function OnGUIAction(pid: any, idGui: any, data: any): void;
declare function OnMpNumIncrement(currentMpNum: any): void;
