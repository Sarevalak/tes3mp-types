/** @noSelfInFile **/

declare namespace patterns {
    export const invalidFileCharacters = "[<>:\"/\\|*?]";
    export const commaSplit = "%s*([^,]+)";
    export const periodSplit = "%s*([^%.]+)";
    export const exteriorCell = "(%-?%d+), ?(%-?%d+)$";
    export const item = "(.+), (%d+), (%-?%d+)$";
    export const coordinates = "(%-?%d+%.?%d*), (%-?%d+%.?%d*), (%-?%d+%.?%d*)$";
}
