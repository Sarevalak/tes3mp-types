declare namespace packetBuilder {
    export function AddPlayerInventoryItemChange(pid: any, item: any): any;
    export function AddObjectDelete(uniqueIndex: any, objectData: any): any;
    export function AddObjectPlace(uniqueIndex: any, objectData: any): any;
    export function AddObjectSpawn(uniqueIndex: any, objectData: any): any;
    export function AddObjectLock(uniqueIndex: any, objectData: any): any;
    export function AddObjectTrap(uniqueIndex: any, objectData: any): any;
    export function AddObjectScale(uniqueIndex: any, objectData: any): any;
    export function AddObjectState(uniqueIndex: any, objectData: any): any;
    export function AddDoorState(uniqueIndex: any, objectData: any): any;
    export function AddAIActor(actorUniqueIndex: any, targetPid: any, aiData: any): any;
    export function AddEffectToRecord(effect: any): any;
    export function AddBodyPartToRecord(part: any): any;
    export function AddInventoryItemToRecord(item: any): any;
    export function AddRecordByType(id: any, record: any, storeType: any): any;
    export function AddArmorRecord(id: any, record: any): any;
    export function AddBookRecord(id: any, record: any): any;
    export function AddClothingRecord(id: any, record: any): any;
    export function AddCreatureRecord(id: any, record: any): any;
    export function AddEnchantmentRecord(id: any, record: any): any;
    export function AddMiscellaneousRecord(id: any, record: any): any;
    export function AddNpcRecord(id: any, record: any): any;
    export function AddPotionRecord(id: any, record: any): any;
    export function AddSpellRecord(id: any, record: any): any;
    export function AddWeaponRecord(id: any, record: any): any;
}
