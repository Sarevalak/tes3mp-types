/** @noSelfInFile **/

declare interface InventoryItem {
    refId: string;
    count: number;
    charge: number;
    enchantmentCharge: number;
    soul: string;
}

declare interface Inventory {
    [index: string]: InventoryItem | null
}

declare interface PlayerData {
    login: {
        name: string;
        password: string;
    };
    settings: {
        staffRank: number;
        difficulty: string;
        consoleAllowed: string;
        bedRestAllowed: string;
        wildernessRestAllowed: string;
        waitAllowed: string;
        enforcedLogLevel: string;
        physicsFramerate: string;
    };
    character: {
        race: string;
        head: string;
        hair: string;
        gender: number;
        class: string;
        birthsign: string;
    };
    location: {
        cell: string;
        regionName: string;
        posX: number;
        posY: number;
        posZ: number;
        rotX: number;
        rotZ: number;
    };
    stats: {
        level: number;
        levelProgress: number;
        healthBase: number;
        healthCurrent: number;
        magickaBase: number;
        magickaCurrent: number;
        fatigueBase: number;
        fatigueCurrent: number;
    };
    fame: {
        bounty: number;
        reputation: number;
    },
    miscellaneous: {
        markLocation: {
            cell: string;
            posX: number;
            posY: number;
            posZ: number;
            rotX: number;
            rotZ: number;
        };
        selectedSpell: string;
    };
    customClass: any;
    attributes: {
        [attributeName: string]: {
            base: number,
            damage: number,
            skillIncrease: number
        }
    },
    skills: {
        [skillName: string]: {
            base: number,
            damage: number,
            progress: number
        }
    },
    equipment: Inventory;
    inventory: Inventory;
    spellbook: any;
    quickKeys: any;
    shapeshift: any;
    journal: any;
    factionRanks: any;
    factionExpulsion: any;
    factionReputation: any;
    topics: any;
    books: any;
    mapExplored: any;
    ipAddresses: any;
    recordLinks: {[storeType: string]: any};
    customVariables: any;
}

declare class BasePlayer {
    dbPid: any;
    data: PlayerData;
    initTimestamp: number;
    accountName: string;
    pid: string;
    loggedIn: boolean;
    isNewlyRegistered: boolean;
    loginTimerId: number;
    hasAccount: boolean | any;
    cellsLoaded: {};
    summons: {};
    generatedRecordsReceived: {};
    unresolvedEnchantments: {};
    hasFinishedInitialTeleportation: boolean;
        
    constructor(pid: any, playerName: any);
    Destroy(): void;
    Kick(): void;
    Register(password: any): void;
    FinishLogin(): void;
    EndCharGen(): void;
    IsLoggedIn(): any;
    IsServerStaff(): boolean;
    IsServerOwner(): boolean;
    IsAdmin(): boolean;
    IsModerator(): boolean;
    AddLinkToRecord(storeType: any, recordId: any): void;
    RemoveLinkToRecord(storeType: any, recordId: any): void;
    GetHealthCurrent(): any;
    SetHealthCurrent(health: any): void;
    GetHealthBase(): any;
    SetHealthBase(health: any): void;
    HasAccount(): any;
    Message(message: any): void;
    CreateAccount(): void;
    SaveToDrive(): void;
    LoadFromDrive(): void;
    SaveLogin(): void;
    SaveIpAddress(): void;
    ProcessDeath(): void;
    Resurrect(): void;
    DeleteSummons(): void;
    LoadCharacter(): void;
    SaveCharacter(): void;
    LoadClass(): void;
    SaveClass(): void;
    LoadStatsDynamic(): void;
    SaveStatsDynamic(): void;
    LoadAttributes(): void;
    SaveAttributes(): void;
    LoadSkills(): void;
    SaveSkills(): void;
    LoadLevel(): void;
    SaveLevel(): void;
    LoadShapeshift(): void;
    SaveShapeshift(): void;
    LoadCell(): void;
    SaveCell(): void;
    LoadEquipment(): void;
    SaveEquipment(): void;
    CleanInventory(): void;
    LoadItemChanges(itemArray: any, inventoryAction: any): void;
    LoadInventory(): void;
    SaveInventory(): void;
    CleanSpellbook(): void;
    LoadSpellbook(): void;
    SaveSpellbook(): void;
    LoadQuickKeys(): void;
    SaveQuickKeys(): void;
    LoadJournal(): void;
    SaveJournal(): void;
    LoadFactionRanks(): void;
    SaveFactionRanks(): void;
    LoadFactionExpulsion(): void;
    SaveFactionExpulsion(): void;
    LoadFactionReputation(): void;
    SaveFactionReputation(): void;
    LoadTopics(): void;
    SaveTopics(): void;
    LoadBounty(): void;
    SaveBounty(): void;
    LoadReputation(): void;
    SaveReputation(): void;
    LoadMap(): void;
    LoadBooks(): void;
    AddBooks(): void;
    LoadMarkLocation(): void;
    SaveMarkLocation(): void;
    LoadSelectedSpell(): void;
    SaveSelectedSpell(): void;
    GetDifficulty(): any;
    GetConsoleAllowed(): any;
    GetBedRestAllowed(): any;
    GetWildernessRestAllowed(): any;
    GetWaitAllowed(): any;
    GetEnforcedLogLevel(): any;
    GetPhysicsFramerate(): any;
    SetDifficulty(difficulty: any): void;
    SetEnforcedLogLevel(enforcedLogLevel: any): void;
    SetPhysicsFramerate(physicsFramerate: any): void;
    SetConsoleAllowed(state: any): void;
    SetBedRestAllowed(state: any): void;
    SetWildernessRestAllowed(state: any): void;
    SetWaitAllowed(state: any): void;
    SetWerewolfState(state: any): void;
    SetScale(scale: any): void;
    SetConfiscationState(state: any): void;
    LoadSettings(): void;
    LoadSpecialStates(): void;
    AddCellLoaded(cellDescription: any): void;
    RemoveCellLoaded(cellDescription: any): void;
}
