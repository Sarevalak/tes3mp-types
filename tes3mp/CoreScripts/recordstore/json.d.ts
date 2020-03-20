// original name RecordStore
declare class JsonRecordStore extends BaseRecordStore {
    constructor(storeType: any);
    CreateEntry(): void;
    SaveToDrive(): void;
    QuicksaveToDrive(): void;
    LoadFromDrive(): void;
    Save(): void;
    Load(): void;
}

