/** @noSelfInFile **/

declare interface RecordStoreRecords {
    [refId: string]: any;
}

declare interface RecordStoreData {
    general: {
        currentGeneratedNum: number;
    };
    permanentRecords: RecordStoreRecords;
    generatedRecords: RecordStoreRecords;
    recordLinks: {};
    unlinkedRecordsToCheck: {};
}

declare class BaseRecordStore {
    defaultData: RecordStoreData;
    data: RecordStoreData;
    storeType: string;
    constructor(storeType: any);
    HasEntry(): any;
    EnsureDataStructure(): void;
    GetCurrentGeneratedNum(): any;
    SetCurrentGeneratedNum(currentGeneratedNum: any): void;
    IncrementGeneratedNum(): any;
    GenerateRecordId(): string;
    DeleteUnlinkedRecords(): void;
    DeleteGeneratedRecord(recordId: any): void;
    HasLinks(recordId: any): boolean;
    AddLinkToRecord(recordId: any, otherRecordId: any, otherStoreType: any): void;
    RemoveLinkToRecord(recordId: any, otherRecordId: any, otherStoreType: any): void;
    AddLinkToCell(recordId: any, cell: any): void;
    RemoveLinkToCell(recordId: any, cell: any): void;
    AddLinkToPlayer(recordId: any, player: any): void;
    RemoveLinkToPlayer(recordId: any, player: any): void;
    LoadGeneratedRecords(pid: any, recordList: any, idArray: any, forEveryone: any): void;
    LoadRecords(pid: any, recordList: any, idArray: any, forEveryone: any): void;
    GetMatchingRecordId(comparedRecord: any, recordList: any, idArray: any, ignoredKeys: any): any;
    SaveGeneratedEnchantedItems(pid: any): {};
    SaveGeneratedEnchantments(pid: any): {};
    SaveGeneratedPotions(pid: any): {};
    SaveGeneratedSpells(pid: any): {};
}
