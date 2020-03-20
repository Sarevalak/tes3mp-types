// original name Cell
declare class JsonCell extends BaseCell {
    constructor(cellDescription: any);
    CreateEntry(): void;
    SaveToDrive(): void;
    QuicksaveToDrive(): void;
    LoadFromDrive(): void;
    Save(): void;
    Load(): void;
}
