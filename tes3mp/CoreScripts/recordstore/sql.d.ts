/** @noSelfInFile **/

// original name RecordStore
declare class SQLRecordStore extends BaseRecordStore {
    constructor(storeType: any);
    CreateEntry(): void;
    SaveToDrive(): void;
    LoadFromDrive(): void;
}

