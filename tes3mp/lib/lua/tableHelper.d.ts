/** @noSelfInFile **/

declare namespace tableHelper {
    // export function enum(inputTable: any): {} | any;
    export function getCount(inputTable: any): number;
    export function getArrayFromIndexes(inputTable: any): {} | any;
    export function getValueOverlap(firstTable: any, secondTable: any): {} | any;
    export function getTableFromCommaSplit(inputString: any): {} | any;
    export function concatenateTableIndexes(inputTable: any, delimiter: any): string;
    export function concatenateArrayValues(inputTable: any, startIndex: any, delimiter: any): string;
    export function concatenateFromIndex(inputTable: any, startIndex: any, delimiter: any): string;
    export function containsKeyValue(inputTable: any, keyToFind: any, valueToFind: any, checkNestedTables: any): boolean;
    export function containsKeyValuePairs(inputTable: any, keyValuePairsTable: any, checkNestedTables: any): boolean;
    export function containsValue(inputTable: any, valueToFind: any, checkNestedTables: any): boolean;
    export function containsCaseInsensitiveString(inputTable: any, stringToFind: any, checkNestedTables: any): boolean;
    export function insertValueIfMissing(inputTable: any, value: any): any;
    export function getAnyValue(inputTable: any): any;
    export function getUnusedNumericalIndex(inputTable: any): number;
    export function getIndexByPattern(inputTable: any, patternToFind: any): any;
    export function getIndexByNestedKeyValue(inputTable: any, keyToFind: any, valueToFind: any): any;
    export function getIndexByValue(inputTable: any, valueToFind: any): any;
    export function cleanNils(inputTable: any): any;
    export function removeValue(inputTable: any, valueToFind: any): any;
    export function replaceValue(inputTable: any, valueToFind: any, newValue: any): any;
    export function merge(mainTable: any, addedTable: any): any;
    export function insertValues(mainTable: any, addedTable: any): any;
    export function fixNumericalKeys(inputTable: any, fixZeroStart: any): any;
    export function usesNumericalKeys(inputTable: any): boolean;
    export function usesNumericalValues(inputTable: any): boolean;
    export function isEmpty(inputTable: any): boolean;
    export function isArray(inputTable: any): boolean;
    export function isEqualTo(firstTable: any, secondTable: any, ignoredKeys: any): boolean;
    export function shallowCopy(inputValue: any): any;
    export function getSimplePrintableTable(inputTable: any): string;
    export function getPrintableTable(inputTable: any, maxDepth: any, indentStr: any, indentLevel: any): any;
    export function print(inputTable: any, maxDepth: any, indentStr: any, indentLevel: any): any;
}