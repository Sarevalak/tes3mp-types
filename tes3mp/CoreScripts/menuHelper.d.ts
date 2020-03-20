declare interface MenuCondition {
    conditionType: string;
}

declare interface MenuItemCondition extends MenuCondition {
    conditionType: "item";
    refIds: string[];
    count: number;
}

declare interface MenuAttributeCondition extends MenuCondition {
    conditionType: "attribute";
    attributeName: string;
    attributeValue: number;
}

declare interface MenuSkillCondition extends MenuCondition {
    conditionType: "skill";
    skillName: string;
    skillValue: number;
}

declare interface MenuStaffRankCondition extends MenuCondition {
    conditionType: "staffRank";
    rankValue: number;
}

declare interface MenuPlayerFunctionCondition extends MenuCondition {
    conditionType: "playerFunction";
    functionName: string;
    arguments: any;
}

/** this definition is not completely done */
declare namespace menuHelper {
    export namespace conditions {
        export function requireItem(inputRefIds: any, inputcount: number): MenuItemCondition;
        export function requireAttribute(inputName: any, inputValue: any): MenuAttributeCondition;
        export function requireSkill(inputName: any, inputValue: any): MenuSkillCondition;
        export function requireStaffRank(inputValue: any): MenuStaffRankCondition;
        export function requirePlayerFunction(inputFunctionName: any, inputArguments: any): MenuPlayerFunctionCondition;
        export function requireAdminRank(inputValue: any): MenuStaffRankCondition;
    }
    export const effects: any;
    export const destinations: any;
    export const variables: any;
    export function CheckCondition(pid: any, condition: any): boolean;
    export function CheckConditionTable(pid: any, conditions: any): boolean;
    export function ProcessVariables(pid: any, inputTable: any): {} | any;
    export function ProcessEffects(pid: any, effects: any): any;
    export function GetButtonDestination(pid: any, buttonPressed: any): any;
    export function GetDisplayedButtons(pid: any, menuIndex: any): {} | any;
    export function DisplayMenu(pid: any, menuIndex: any): any;
}
