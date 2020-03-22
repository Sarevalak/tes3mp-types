/** @noSelfInFile **/

declare namespace inventoryHelper {
    export function containsItem(inventory: Inventory, refId: string, charge?: number, enchantmentCharge?: any, soul?: any): boolean;
    export function getItemIndex(inventory: Inventory, refId: string, charge?: number, enchantmentCharge?: any, soul?: any): any;
    export function getItemIndexes(inventory: Inventory, refId: string): {} | any;
    export function addItem(inventory: Inventory, refId: string, count: number, charge: number, enchantmentcharge: number, soul: any): any;
    export function compareClosenessToItem(idealItem: Inventory, comparedItem: any, otherItem: any): boolean;
    export function removeClosestItem(inventory: Inventory, refId: string, count: number, charge: number, enchantmentcharge: number, soul: any): any;
    export function removeExactItem(inventory: Inventory, refId: string, count: number, charge: number, enchantmentcharge: number, soul: any): any;
    export function removeItem(inventory: Inventory, refId: string, count: number, charge: number, enchantmentcharge: number, soul: any): any;
}
