// original name Player
declare class JsonPlayer extends BasePlayer {
    constructor(pid: any, playerName: any);
    CreateAccount(): void;
    SaveToDrive(): void;
    QuicksaveToDrive(): void;
    LoadFromDrive(): void;
    Save(): void;
    Load(): void;
}
