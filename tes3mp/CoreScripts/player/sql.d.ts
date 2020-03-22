/** @noSelfInFile **/

// original name Player
declare class SQLPlayer extends BasePlayer {
    constructor(pid: any, playerName: any);
    CreateAccount(): void;
    SaveToDrive(): void;
    LoadFromDrive(): void;
    GetDatabaseId(): any;
}
