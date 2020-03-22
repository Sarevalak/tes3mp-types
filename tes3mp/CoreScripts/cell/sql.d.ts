/** @noSelfInFile **/

// original name Cell
declare class SQLCell extends BaseCell {
    constructor(cellDescription: any);
    CreateEntry(): void;
    SaveToDrive(): void;
    LoadFromDrive(): void;
}
