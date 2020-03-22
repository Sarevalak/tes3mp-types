/** @noSelfInFile **/

declare interface config {
    gameMode: string;
    loginTime: number;
    difficulty: number;
    defaultTimeTable: {
        year: number;
        month: number;
        day: number;
        hour: number;
        daysPassed: number;
        dayTimeScale: number;
        nightTimeScale: number;
    };
    chatWindowInstructions: any;
    passTimeWhenEmpty: any;
    nightStartHour: number;
    nightEndHour: number;
    allowConsole: any;
    allowBedRest: any;
    allowWildernessRest: any;
    allowWait: any;
    shareJournal: any;
    shareFactionRanks: any;
    shareFactionExpulsion: any;
    shareFactionReputation: any;
    shareTopics: any;
    shareBounty: any;
    shareReputation: any;
    shareMapExploration: any;
    shareVideos: any;
    defaultSpawnCell: string;
    defaultSpawnPos: number[];
    defaultSpawnRot: number[];
    defaultRespawnCell: string;
    defaultRespawnPos: number[];
    defaultRespawnRot: number[];
    respawnAtImperialShrine: any;
    respawnAtTribunalTemple: any;
    maxAttributeValue: number;
    maxSpeedValue: number;
    maxSkillValue: number;
    maxAcrobaticsValue: number;
    bannedEquipmentItems: string[];
    playersRespawn: any;
    deathTime: number;
    deathPenaltyJailDays: number;
    bountyResetOnDeath: any;
    bountyDeathPenalty: any;
    allowSuicideCommand: any;
    allowFixmeCommand: any;
    fixmeInterval: number;
    rankColors: {
        serverOwner: any;
        admin: any;
        moderator: any;
    };
    customMenuIds: {
        menuHelper: number;
        confiscate: number;
        recordPrint: number;
    };
    menuHelperFiles: string[];
    pingDifferenceRequiredForAuthority: number;
    enforcedLogLevel: any;
    physicsFramerate: number;
    allowOnContainerForUnloadedCells: any;
    enablePlayerCollision: any;
    enableActorCollision: any;
    enablePlacedObjectCollision: any;
    enforcedCollisionRefIds: string[];
    useActorCollisionForPlacedObjects: any;
    disallowedDeleteRefIds: string[];
    disallowedCreateRefIds: {};
    disallowedLockRefIds: {};
    disallowedTrapRefIds: {};
    disallowedStateRefIds: {};
    maximumObjectScale: number;
    generatedRecordIdPrefix: string;
    recordStoreLoadOrder: string[];
    enchantableRecordTypes: string[];
    carriableRecordTypes: string[];
    validRecordSettings: {
        armor: string[];
        book: string[];
        clothing: string[];
        creature: string[];
        enchantment: string[];
        miscellaneous: string[];
        npc: string[];
        potion: string[];
        spell: string[];
        weapon: string[];
    };
    requiredRecordSettings: {
        armor: string[];
        book: string[];
        clothing: string[];
        creature: string[];
        enchantment: {};
        miscellaneous: string[];
        npc: string[];
        potion: string[];
        spell: string[];
        weapon: string[];
    };
    numericalRecordSettings: string[];
    booleanRecordSettings: string[];
    minMaxRecordSettings: string[];
    cellPacketTypes: string[];
    enforceDataFiles: any;
    ignoreScriptErrors: any;
    databaseType: string;
    databasePath: any;
    disallowedNameStrings: string[];
    playerKeyOrder: string[];
    cellKeyOrder: string[];
    recordstoreKeyOrder: string[];
    worldKeyOrder: string[];
}
