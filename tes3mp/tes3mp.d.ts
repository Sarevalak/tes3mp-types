declare namespace tes3mp {
    // ActorFunctions

    /**
    *  Use the last actor list received by the server as the one being read.
    *
    * @return void
    */
    export function ReadReceivedActorList(): void;

    /**
    *  Use the temporary actor list stored for a cell as the one being read.
    *
    * This type of actor list is used to store actor positions and dynamic stats and is deleted
    * when the cell is unloaded.
    *
    * @param cellDescription The description of the cell whose actor list should be read.
    * @return void
    */
    export function ReadCellActorList(cellDescription: string): void;

    /**
    *  Clear the data from the actor list stored on the server.
    *
    * @return void
    */
    export function ClearActorList(): void;

    /**
    *  Set the pid attached to the ActorList.
    *
    * @param pid The player ID to whom the actor list should be attached.
    * @return void
    */
    export function SetActorListPid(pid: number): void;

    /**
    *  Take the contents of the read-only actor list last received by the
    *        server from a player and move its contents to the stored object list
    *        that can be sent by the server.
    *
    * @return void
    */
    export function CopyReceivedActorListToStore(): void;

    /**
    *  Get the number of indexes in the read actor list.
    *
    * @return The number of indexes.
    */
    export function GetActorListSize(): number;

    /**
    *  Get the action type used in the read actor list.
    *
    * @return The action type (0 for SET, 1 for ADD, 2 for REMOVE, 3 for REQUEST).
    */
    export function GetActorListAction(): number;

    /**
    *  Get the cell description of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The cell description.
    */
    export function GetActorCell(index: number): string;

    /**
    *  Get the refId of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The refId.
    */
    export function GetActorRefId(index: number): string;

    /**
    *  Get the refNum of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The refNum.
    */
    export function GetActorRefNum(index: number): number;

    /**
    *  Get the mpNum of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The mpNum.
    */
    export function GetActorMpNum(index: number): number;

    /**
    *  Get the X position of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The X position.
    */
    export function GetActorPosX(index: number): number;

    /**
    *  Get the Y position of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The Y position.
    */
    export function GetActorPosY(index: number): number;

    /**
    *  Get the Z position of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The Z position.
    */
    export function GetActorPosZ(index: number): number;

    /**
    *  Get the X rotation of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The X rotation.
    */
    export function GetActorRotX(index: number): number;

    /**
    *  Get the Y rotation of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The Y rotation.
    */
    export function GetActorRotY(index: number): number;

    /**
    *  Get the Z rotation of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The Z rotation.
    */
    export function GetActorRotZ(index: number): number;

    /**
    *  Get the base health of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The base health.
    */
    export function GetActorHealthBase(index: number): number;

    /**
    *  Get the current health of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The current health.
    */
    export function GetActorHealthCurrent(index: number): number;

    /**
    *  Get the modified health of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The modified health.
    */
    export function GetActorHealthModified(index: number): number;

    /**
    *  Get the base magicka of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The base magicka.
    */
    export function GetActorMagickaBase(index: number): number;

    /**
    *  Get the current magicka of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The current magicka.
    */
    export function GetActorMagickaCurrent(index: number): number;

    /**
    *  Get the modified magicka of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The modified magicka.
    */
    export function GetActorMagickaModified(index: number): number;

    /**
    *  Get the base fatigue of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The base fatigue.
    */
    export function GetActorFatigueBase(index: number): number;

    /**
    *  Get the current fatigue of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The current fatigue.
    */
    export function GetActorFatigueCurrent(index: number): number;

    /**
    *  Get the modified fatigue of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The modified fatigue.
    */
    export function GetActorFatigueModified(index: number): number;

    /**
    *  Get the refId of the item in a certain slot of the equipment of the actor at a
    * certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @param slot The slot of the equipment item.
    * @return The refId.
    */
    export function GetActorEquipmentItemRefId(index: number, slot: number): string;

    /**
    *  Get the count of the item in a certain slot of the equipment of the actor at a
    * certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @param slot The slot of the equipment item.
    * @return The item count.
    */
    export function GetActorEquipmentItemCount(index: number, slot: number): number;

    /**
    *  Get the charge of the item in a certain slot of the equipment of the actor at a
    * certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @param slot The slot of the equipment item.
    * @return The charge.
    */
    export function GetActorEquipmentItemCharge(index: number, slot: number): number;

    /**
    *  Get the enchantment charge of the item in a certain slot of the equipment of the actor at a
    * certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @param slot The slot of the equipment item.
    * @return The enchantment charge.
    */
    export function GetActorEquipmentItemEnchantmentCharge(index: number, slot: number): number;

    /**
    *  Check whether the killer of the actor at a certain index in the read actor list is a player.
    *
    * @param index The index of the actor.
    * @return Whether the actor was killed by a player.
    */
    export function DoesActorHavePlayerKiller(index: number): boolean;

    /**
    *  Get the player ID of the killer of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The player ID of the killer.
    */
    export function GetActorKillerPid(index: number): number;

    /**
    *  Get the refId of the actor killer of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The refId of the killer.
    */
    export function GetActorKillerRefId(index: number): string;

    /**
    *  Get the refNum of the actor killer of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The refNum of the killer.
    */
    export function GetActorKillerRefNum(index: number): number;

    /**
    *  Get the mpNum of the actor killer of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The mpNum of the killer.
    */
    export function GetActorKillerMpNum(index: number): number;

    /**
    *  Get the name of the actor killer of the actor at a certain index in the read actor list.
    *
    * @param index The index of the actor.
    * @return The name of the killer.
    */
    export function GetActorKillerName(index: number): string;

    /**
    *  Check whether there is any positional data for the actor at a certain index in
    * the read actor list.
    *
    * This is only useful when reading the actor list data recorded for a particular cell.
    *
    * @param index The index of the actor.
    * @return Whether the read actor list contains positional data.
    */
    export function DoesActorHavePosition(index: number): boolean;

    /**
    *  Check whether there is any dynamic stats data for the actor at a certain index in
    * the read actor list.
    *
    * This is only useful when reading the actor list data recorded for a particular cell.
    *
    * @param index The index of the actor.
    * @return Whether the read actor list contains dynamic stats data.
    */
    export function DoesActorHaveStatsDynamic(index: number): boolean;

    /**
    *  Set the cell of the temporary actor list stored on the server.
    *
    * The cell is determined to be an exterior cell if it fits the pattern of a number followed
    * by a comma followed by another number.
    *
    * @param cellDescription The description of the cell.
    * @return void
    */
    export function SetActorListCell(cellDescription: string): void;

    /**
    *  Set the action type of the temporary actor list stored on the server.
    *
    * @param action The action type (0 for SET, 1 for ADD, 2 for REMOVE, 3 for REQUEST).
    * @return void
    */
    export function SetActorListAction(action: number): void;

    /**
    *  Set the cell of the temporary actor stored on the server.
    *
    * Used for ActorCellChange packets, where a specific actor's cell now differs from that of the
    * actor list.
    *
    * The cell is determined to be an exterior cell if it fits the pattern of a number followed
    * by a comma followed by another number.
    *
    * @param cellDescription The description of the cell.
    * @return void
    */
    export function SetActorCell(cellDescription: string): void;

    /**
    *  Set the refId of the temporary actor stored on the server.
    *
    * @param refId The refId.
    * @return void
    */
    export function SetActorRefId(refId: string): void;

    /**
    *  Set the refNum of the temporary actor stored on the server.
    *
    * @param refNum The refNum.
    * @return void
    */
    export function SetActorRefNum(refNum: number): void;

    /**
    *  Set the mpNum of the temporary actor stored on the server.
    *
    * @param mpNum The mpNum.
    * @return void
    */
    export function SetActorMpNum(mpNum: number): void;

    /**
    *  Set the position of the temporary actor stored on the server.
    *
    * @param x The X position.
    * @param y The Y position.
    * @param z The Z position.
    * @return void
    */
    export function SetActorPosition(x: number, y: number, z: number): void;

    /**
    *  Set the rotation of the temporary actor stored on the server.
    *
    * @param x The X rotation.
    * @param y The Y rotation.
    * @param z The Z rotation.
    * @return void
    */
    export function SetActorRotation(x: number, y: number, z: number): void;

    /**
    *  Set the base health of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorHealthBase(value: number): void;

    /**
    *  Set the current health of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorHealthCurrent(value: number): void;

    /**
    *  Set the modified health of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorHealthModified(value: number): void;

    /**
    *  Set the base magicka of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorMagickaBase(value: number): void;

    /**
    *  Set the current magicka of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorMagickaCurrent(value: number): void;

    /**
    *  Set the modified magicka of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorMagickaModified(value: number): void;

    /**
    *  Set the base fatigue of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorFatigueBase(value: number): void;

    /**
    *  Set the current fatigue of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorFatigueCurrent(value: number): void;

    /**
    *  Set the modified fatigue of the temporary actor stored on the server.
    *
    * @param value The new value.
    * @return void
    */
    export function SetActorFatigueModified(value: number): void;

    /**
    *  Set the sound of the temporary actor stored on the server.
    *
    * @param sound The sound.
    * @return void
    */
    export function SetActorSound(sound: string): void;

    /**
    *  Set the AI action of the temporary actor stored on the server.
    *
    * @param action The new action.
    * @return void
    */
    export function SetActorAIAction(action: number): void;

    /**
    *  Set a player as the AI target of the temporary actor stored on the server.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SetActorAITargetToPlayer(pid: number): void;

    /**
    *  Set another object as the AI target of the temporary actor stored on the server.
    *
    * @param refNum The refNum of the target object.
    * @param mpNum The mpNum of the target object.
    * @return void
    */
    export function SetActorAITargetToObject(refNum: number, mpNum: number): void;

    /**
    *  Set the coordinates for the AI package associated with the current AI action.
    *
    * @param x The X coordinate.
    * @param y The Y coordinate.
    * @param z The Z coordinate.
    * @return void
    */
    export function SetActorAICoordinates(x: number, y: number, z: number): void;

    /**
    *  Set the distance of the AI package associated with the current AI action.
    *
    * @param duration The distance of the package.
    * @return void
    */
    export function SetActorAIDistance(distance: number): void;

    /**
    *  Set the duration of the AI package associated with the current AI action.
    *
    * @param duration The duration of the package.
    * @return void
    */
    export function SetActorAIDuration(duration: number): void;

    /**
    *  Set whether the current AI package should be repeated.
    *
    * Note: This only has an effect on the WANDER package.
    *
    * @param shouldRepeat Whether the package should be repeated.
    * @return void
    */
    export function SetActorAIRepetition(shouldRepeat: boolean): void;

    /**
    *  Equip an item in a certain slot of the equipment of the temporary actor stored
    * on the server.
    *
    * @param slot The equipment slot.
    * @param refId The refId of the item.
    * @param count The count of the item.
    * @param charge The charge of the item.
    * @param enchantmentCharge The enchantment charge of the item.
    * @return void
    */
    export function EquipActorItem(slot: number, refId: string, count: number, charge: number, enchantmentCharge: number): void;

    /**
    *  Unequip the item in a certain slot of the equipment of the temporary actor stored
    * on the server.
    *
    * @param slot The equipment slot.
    * @return void
    */
    export function UnequipActorItem(slot: number): void;

    /**
    *  Add a copy of the server's temporary actor to the server's temporary actor list.
    *
    * In the process, the server's temporary actor will automatically be cleared so a new
    * one can be set up.
    *
    * @return void
    */
    export function AddActor(): void;

    /**
    *  Send an ActorList packet.
    *
    * It is sent only to the player for whom the current actor list was initialized.
    *
    * @return void
    */
    export function SendActorList(): void;

    /**
    *  Send an ActorAuthority packet.
    *
    * The player for whom the current actor list was initialized is recorded in the server memory
    * as the new actor authority for the actor list's cell.
    *
    * The packet is sent to that player as well as all other players who have the cell loaded.
    *
    * @return void
    */
    export function SendActorAuthority(): void;

    /**
    *  Send an ActorPosition packet.
    *
    * @param sendToOtherVisitors Whether this packet should be sent to cell visitors other
    *                            than the player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    *
    * @return void
    */
    export function SendActorPosition(sendToOtherVisitors: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ActorStatsDynamic packet.
    *
    * @param sendToOtherVisitors Whether this packet should be sent to cell visitors other
    *                            than the player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    *
    * @return void
    */
    export function SendActorStatsDynamic(sendToOtherVisitors: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ActorEquipment packet.
    *
    * @param sendToOtherVisitors Whether this packet should be sent to cell visitors other
    *                            than the player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    *
    * @return void
    */
    export function SendActorEquipment(sendToOtherVisitors: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ActorSpeech packet.
    *
    * @param sendToOtherVisitors Whether this packet should be sent to cell visitors other
    *                            than the player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendActorSpeech(sendToOtherVisitors: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ActorAI packet.
    *
    * @param sendToOtherVisitors Whether this packet should be sent to cell visitors other
    *                            than the player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendActorAI(sendToOtherVisitors: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ActorCellChange packet.
    *
    * @param sendToOtherVisitors Whether this packet should be sent to cell visitors other
    *                            than the player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    *
    * @return void
    */
    export function SendActorCellChange(sendToOtherVisitors: boolean, skipAttachedPlayer: boolean): void;

    // BookFunctions

    /**
     *  Clear the last recorded book changes for a player.
     *
     * This is used to initialize the sending of new PlayerBook packets.
     *
     * @param pid The player ID whose book changes should be used.
     * @return void
     */
    export function ClearBookChanges(pid: number): void;

    /**
    *  Get the number of indexes in a player's latest book changes.
    *
    * @param pid The player ID whose book changes should be used.
    * @return The number of indexes.
    */
    export function GetBookChangesSize(pid: number): number;

    /**
    *  Add a new book to the book changes for a player.
    *
    * @param pid The player ID whose book changes should be used.
    * @param bookId The bookId of the book.
    * @return void
    */
    export function AddBook(pid: number, bookId: string): void;

    /**
    *  Get the bookId at a certain index in a player's latest book changes.
    *
    * @param pid The player ID whose book changes should be used.
    * @param index The index of the book.
    * @return The bookId.
    */
    export function GetBookId(pid: number, index: number): string;

    /**
    *  Send a PlayerBook packet with a player's recorded book changes.
    *
    * @param pid The player ID whose book changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendBookChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // CellFunctions

    /**
     *  Get the number of indexes in a player's latest cell state changes.
     *
     * @param pid The player ID whose cell state changes should be used.
     * @return The number of indexes.
     */
    export function GetCellStateChangesSize(pid: number): number;

    /**
    *  Get the cell state type at a certain index in a player's latest cell state changes.
    *
    * @param pid The player ID whose cell state changes should be used.
    * @param index The index of the cell state.
    * @return The cell state type (0 for LOAD, 1 for UNLOAD).
    */
    export function GetCellStateType(pid: number, index: number): number;

    /**
    *  Get the cell description at a certain index in a player's latest cell state changes.
    *
    * @param pid The player ID whose cell state changes should be used.
    * @param index The index of the cell state.
    * @return The cell description.
    */
    export function GetCellStateDescription(pid: number, index: number): string;

    /**
    *  Get the cell description of a player's cell.
    *
    * @param pid The player ID.
    * @return The cell description.
    */
    export function GetCell(pid: number): string;

    /**
    *  Get the X coordinate of the player's exterior cell.
    *
    * @param pid The player ID.
    * @return The X coordinate of the cell.
    */
    export function GetExteriorX(pid: number): number;

    /**
    *  Get the Y coordinate of the player's exterior cell.
    *
    * @param pid The player ID.
    * @return The Y coordinate of the cell.
    */
    export function GetExteriorY(pid: number): number;

    /**
    *  Check whether the player is in an exterior cell or not.
    *
    * @param pid The player ID.
    * @return Whether the player is in an exterior cell.
    */
    export function IsInExterior(pid: number): boolean;

    /**
    *  Get the region of the player's exterior cell.
    *
    * A blank value will be returned if the player is in an interior.
    *
    * @param pid The player ID.
    * @return The region.
    */
    export function GetRegion(pid: number): string;

    /**
    *  Check whether the player's last cell change has involved a region change.
    *
    * @param pid The player ID.
    * @return Whether the player has changed their region.
    */
    export function IsChangingRegion(pid: number): boolean;

    /**
    *  Set the cell of a player.
    *
    * This changes the cell recorded for that player in the server memory, but does not by itself
    * send a packet.
    *
    * The cell is determined to be an exterior cell if it fits the pattern of a number followed
    * by a comma followed by another number.
    *
    * @param pid The player ID.
    * @param cellDescription The cell description.
    * @return void
    */
    export function SetCell(pid: number, cellDescription: string): void;

    /**
    *  Set the cell of a player to an exterior cell.
    *
    * This changes the cell recorded for that player in the server memory, but does not by itself
    * send a packet.
    *
    * @param pid The player ID.
    * @param x The X coordinate of the cell.
    * @param y The Y coordinate of the cell.
    * @return void
    */
    export function SetExteriorCell(pid: number, x: number, y: number): void;

    /**
    *  Send a PlayerCellChange packet about a player.
    *
    * It is only sent to the affected player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendCell(pid: number): void;

    // CharClassFunctions

    /**
     *  Get the default class used by a player.
     *
     * @param pid The player ID.
     * @return The ID of the default class.
     */
    export function GetDefaultClass(pid: number): string;

    /**
    *  Get the name of the custom class used by a player.
    *
    * @param pid The player ID.
    * @return The name of the custom class.
    */
    export function GetClassName(pid: number): string;

    /**
    *  Get the description of the custom class used by a player.
    *
    * @param pid The player ID.
    * @return The description of the custom class.
    */
    export function GetClassDesc(pid: number): string;

    /**
    *  Get the ID of one of the two major attributes of a custom class used by a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the major attribute (0 or 1).
    * @return The ID of the major attribute.
    */
    export function GetClassMajorAttribute(pid: number, slot: number): number;

    /**
    *  Get the specialization ID of the custom class used by a player.
    *
    * @param pid The player ID.
    * @return The specialization ID of the custom class (0 for Combat, 1 for Magic, 2 for Stealth).
    */
    export function GetClassSpecialization(pid: number): number;

    /**
    *  Get the ID of one of the five major skills of a custom class used by a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the major skill (0 to 4).
    * @return The ID of the major skill.
    */
    export function GetClassMajorSkill(pid: number, slot: number): number;

    /**
    *  Get the ID of one of the five minor skills of a custom class used by a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the minor skill (0 to 4).
    * @return The ID of the minor skill.
    */
    export function GetClassMinorSkill(pid: number, slot: number): number;

    /**
    *  Check whether the player is using a default class instead of a custom one.
    *
    * @param pid The player ID.
    * @return Whether the player is using a default class.
    */
    export function IsClassDefault(pid: number): number;

    /**
    *  Set the default class used by a player.
    *
    * If this is left blank, the custom class data set for the player will be used instead.
    *
    * @param pid The player ID.
    * @param id The ID of the default class.
    * @return void
    */
    export function SetDefaultClass(pid: number, id: string): void;

    /**
    *  Set the name of the custom class used by a player.
    *
    * @param pid The player ID.
    * @param name The name of the custom class.
    * @return void
    */
    export function SetClassName(pid: number, name: string): void;

    /**
    *  Set the description of the custom class used by a player.
    *
    * @param pid The player ID.
    * @param desc The description of the custom class.
    * @return void
    */
    export function SetClassDesc(pid: number, desc: string): void;

    /**
    *  Set the ID of one of the two major attributes of the custom class used by a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the major attribute (0 or 1).
    * @param attrId The ID to use for the attribute.
    * @return void
    */
    export function SetClassMajorAttribute(pid: number, slot: number, attrId: number): void;

    /**
    *  Set the specialization of the custom class used by a player.
    *
    * @param pid The player ID.
    * @param spec The specialization ID to use (0 for Combat, 1 for Magic, 2 for Stealth).
    * @return void
    */
    export function SetClassSpecialization(pid: number, spec: number): void;

    /**
    *  Set the ID of one of the five major skills of the custom class used by a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the major skill (0 to 4).
    * @param skillId The ID to use for the skill.
    * @return void
    */
    export function SetClassMajorSkill(pid: number, slot: number, skillId: number): void;

    /**
    *  Set the ID of one of the five minor skills of the custom class used by a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the minor skill (0 to 4).
    * @param skillId The ID to use for the skill.
    * @return void
    */
    export function SetClassMinorSkill(pid: number, slot: number, skillId: number): void;

    /**
    *  Send a PlayerCharClass packet about a player.
    *
    * It is only sent to the affected player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendClass(pid: number): void;

    // ChatFunctions

    /**
    *  Send a message to a certain player.
    *
    * @param pid The player ID.
    * @param message The contents of the message.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendMessage(pid: number, message: string, sendToOtherPlayers?: boolean, skipAttachedPlayer?: boolean): void;

    /**
    *  Remove all messages from chat for a certain player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function CleanChatForPid(pid: number): void;

    /**
    *  Remove all messages from chat for everyone on the server.
    *
    * @return void
    */
    export function CleanChat(): void;

    // DialogueFunctions

    /**
    *  Clear the last recorded topic changes for a player.
    *
    * This is used to initialize the sending of new PlayerTopic packets.
    *
    * @param pid The player ID whose topic changes should be used.
    * @return void
    */
    export function ClearTopicChanges(pid: number): void;

    /**
    *  Get the number of indexes in a player's latest topic changes.
    *
    * @param pid The player ID whose topic changes should be used.
    * @return The number of indexes.
    */
    export function GetTopicChangesSize(pid: number): number;

    /**
    *  Add a new topic to the topic changes for a player.
    *
    * @param pid The player ID whose topic changes should be used.
    * @param topicId The topicId of the topic.
    * @return void
    */
    export function AddTopic(pid: number, topicId: string): void;

    /**
    *  Get the topicId at a certain index in a player's latest topic changes.
    *
    * @param pid The player ID whose topic changes should be used.
    * @param index The index of the topic.
    * @return The topicId.
    */
    export function GetTopicId(pid: number, index: number): string;

    /**
    *  Send a PlayerTopic packet with a player's recorded topic changes.
    *
    * @param pid The player ID whose topic changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendTopicChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Play a certain animation on a player's character by sending a PlayerAnimation
    *        packet.
    *
    * @param pid The player ID of the character playing the animation.
    * @param groupname The groupname of the animation.
    * @param mode The mode of the animation.
    * @param count The number of times the animation should be played.
    * @param Whether: boolean the animation should persist or not.
    * @return void
    */
    export function PlayAnimation(pid: number, groupname: string, mode: number, count: number, persist: boolean): void;

    /**
    *  Play a certain sound for a player as spoken by their character by sending
    *        a PlayerSpeech packet.
    *
    * @param pid The player ID of the character playing the sound.
    * @param sound The path of the sound file.
    * @return void
    */
    export function PlaySpeech(pid: number, sound: string): void;

    // FactionFunctions

    /**
     *  Clear the last recorded faction changes for a player.
     *
     * This is used to initialize the sending of new PlayerFaction packets.
     *
     * @param pid The player ID whose faction changes should be used.
     * @return void
     */
    export function ClearFactionChanges(pid: number): void;

    /**
    *  Get the number of indexes in a player's latest faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @return The number of indexes.
    */
    export function GetFactionChangesSize(pid: number): number;

    /**
    *  Get the action type used in a player's latest faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @return The action type (0 for RANK, 1 for EXPULSION, 2 for REPUTATION).
    */
    export function GetFactionChangesAction(pid: number): number;

    /**
    *  Get the factionId at a certain index in a player's latest faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @param index The index of the faction.
    * @return The factionId.
    */
    export function GetFactionId(pid: number, index: number): string;

    /**
    *  Get the rank at a certain index in a player's latest faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @param index The index of the faction.
    * @return The rank.
    */
    export function GetFactionRank(pid: number, index: number): number;

    /**
    *  Get the expulsion state at a certain index in a player's latest faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @param index The index of the faction.
    * @return The expulsion state.
    */
    export function GetFactionExpulsionState(pid: number, index: number): boolean;

    /**
    *  Get the reputation at a certain index in a player's latest faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @param index The index of the faction.
    * @return The reputation.
    */
    export function GetFactionReputation(pid: number, index: number): number;

    /**
    *  Set the action type in a player's faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @param action The action (0 for RANK, 1 for EXPULSION, 2 for REPUTATION).
    * @return void
    */
    export function SetFactionChangesAction(pid: number, action: number): void;

    /**
    *  Set the factionId of the temporary faction stored on the server.
    *
    * @param factionId The factionId.
    * @return void
    */
    export function SetFactionId(factionId: string): void;

    /**
    *  Set the rank of the temporary faction stored on the server.
    *
    * @param rank The rank.
    * @return void
    */
    export function SetFactionRank(rank: number): void;

    /**
    *  Set the expulsion state of the temporary faction stored on the server.
    *
    * @param expulsionState The expulsion state.
    * @return void
    */
    export function SetFactionExpulsionState(expulsionState: boolean): void;

    /**
    *  Set the reputation of the temporary faction stored on the server.
    *
    * @param reputation The reputation.
    * @return void
    */
    export function SetFactionReputation(reputation: number): void;

    /**
    *  Add the server's temporary faction to the faction changes for a player.
    *
    * In the process, the server's temporary faction will automatically be cleared so a new one
    * can be set up.
    *
    * @param pid The player ID whose faction changes should be used.
    * @return void
    */
    export function AddFaction(pid: number): void;

    /**
    *  Send a PlayerFaction packet with a player's recorded faction changes.
    *
    * @param pid The player ID whose faction changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendFactionChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // GUIFunctions

    /**
    *  Display a simple messagebox at the bottom of the screen that vanishes
    *        after a few seconds.
    *
    * Note for C++ programmers: do not rename into MessageBox so as to not conflict
    * with WINAPI's MessageBox.
    *
    * @param pid The player ID for whom the messagebox should appear.
    * @param id The numerical ID of the messagebox.
    * @param label The text in the messagebox.
    * @return void
    */
    export function _MessageBox(pid: number, id: number, label: string): void;
    export function MessageBox(pid: number, id: number, label: string): void;

    /**
    *  Display an interactive messagebox at the center of the screen that
    *        vanishes only when one of its buttons is clicked.
    *
    * @param pid The player ID for whom the messagebox should appear.
    * @param id The numerical ID of the messagebox.
    * @param label The text in the messagebox.
    * @param buttons The captions of the buttons, separated by semicolons (e.g. "Yes;No;Maybe").
    * @return void
    */
    export function CustomMessageBox(pid: number, id: number, label: string, buttons: string): void;

    /**
    *  Display an input dialog at the center of the screen.
    *
    * @param pid The player ID for whom the input dialog should appear.
    * @param id The numerical ID of the input dialog.
    * @param label The text at the top of the input dialog.
    * @param note The text at the bottom of the input dialog.
    * @return void
    */
    export function InputDialog(pid: number, id: number, label: string, note: string): void;

    /**
    *  Display a password dialog at the center of the screen.
    *
    * Although similar to an input dialog, the password dialog replaces all
    * input characters with asterisks.
    *
    * @param pid The player ID for whom the password dialog should appear.
    * @param id The numerical ID of the password dialog.
    * @param label The text at the top of the password dialog.
    * @param note The text at the bottom of the password dialog.
    * @return void
    */
    export function PasswordDialog(pid: number, id: number, label: string, note: string): void;

    /**
    *  Display a listbox at the center of the screen where each item takes up
    *        a row and is selectable, with the listbox only vanishing once the Ok button
    *        is pressed.
    *
    * @param pid The player ID for whom the listbox should appear.
    * @param id The numerical ID of the listbox.
    * @param label The text at the top of the listbox.
    * @param items The items in the listbox, separated by newlines (e.g. "Item 1\nItem 2").
    * @return void
    */
    export function ListBox(pid: number, id: number, label: string, items: string): void;

    /**
    *  Clear the last recorded quick key changes for a player.
    *
    * This is used to initialize the sending of new PlayerQuickKeys packets.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @return void
    */
    export function ClearQuickKeyChanges(pid: number): void;

    /**
    *  Get the number of indexes in a player's latest quick key changes.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @return The number of indexes.
    */
    export function GetQuickKeyChangesSize(pid: number): number;

    /**
    *  Add a new quick key to the quick key changes for a player.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @param slot The slot to be used.
    * @param slot The type of the quick key (0 for ITEM, 1 for ITEM_MAGIC, 2 for MAGIC, 3 for UNASSIGNED).
    * @param itemId The itemId of the item.
    * @return void
    */
    export function AddQuickKey(pid: number, slot: number, type: number, itemId: string): void;

    /**
    *  Get the slot of the quick key at a certain index in a player's latest quick key changes.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @param index The index of the quick key in the quick key changes vector.
    * @return The slot.
    */
    export function GetQuickKeySlot(pid: number, index: number): number;

    /**
    *  Get the type of the quick key at a certain index in a player's latest quick key changes.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @param index The index of the quick key in the quick key changes vector.
    * @return The quick key type.
    */
    export function GetQuickKeyType(pid: number, index: number): number;

    /**
    *  Get the itemId at a certain index in a player's latest quick key changes.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @param index The index of the quick key in the quick key changes vector.
    * @return The itemId.
    */
    export function GetQuickKeyItemId(pid: number, index: number): string;

    /**
    *  Send a PlayerQuickKeys packet with a player's recorded quick key changes.
    *
    * @param pid The player ID whose quick key changes should be used.
    * @return void
    */
    export function SendQuickKeyChanges(pid: number): void;

    //state 0 - disallow, 1 - allow

    /**
    *  Determine whether a player can see the map marker of another player.
    *
    * Note: This currently has no effect, and is just an unimplemented stub.
    *
    * @param targetPid The player ID whose map marker should be hidden or revealed.
    * @param affectedPid The player ID for whom the map marker will be hidden or revealed.
    * @param state The state of the map marker (false to hide, true to reveal).
    * @return void
    */
    export function SetMapVisibility(targetPid: number, affectedPid: number, state: number): void;

    /**
    *  Determine whether a player's map marker can be seen by all other players.
    *
    * Note: This currently has no effect, and is just an unimplemented stub.
    *
    * @param targetPid The player ID whose map marker should be hidden or revealed.
    * @param state The state of the map marker (false to hide, true to reveal).
    * @return void
    */
    export function SetMapVisibilityAll(targetPid: number, state: number): void;

    // ItemFunctions

    /**
     *  Clear the last recorded inventory changes for a player.
     *
     * This is used to initialize the sending of new PlayerInventory packets.
     *
     * @param pid The player ID whose inventory changes should be used.
     * @return void
     */
    export function ClearInventoryChanges(pid: number): void;

    /**
    *  Get the number of slots used for equipment.
    *
    * The number is 19 before any dehardcoding is done in OpenMW.
    *
    * @return The number of slots.
    */
    export function GetEquipmentSize(): number;

    /**
    *  Get the number of indexes in a player's latest inventory changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @return The number of indexes.
    */
    export function GetInventoryChangesSize(pid: number): number;

    /**
    *  Get the action type used in a player's latest inventory changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @return The action type (0 for SET, 1 for ADD, 2 for REMOVE).
    */
    export function GetInventoryChangesAction(pid: number): number;

    /**
    *  Set the action type in a player's inventory changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param action The action (0 for SET, 1 for ADD, 2 for REMOVE).
    * @return void
    */
    export function SetInventoryChangesAction(pid: number, action: number): void;

    /**
    *  Equip an item in a certain slot of the equipment of a player.
    *
    * @param pid The player ID.
    * @param slot The equipment slot.
    * @param refId The refId of the item.
    * @param count The count of the item.
    * @param charge The charge of the item.
    * @param enchantmentCharge The enchantment charge of the item.
    * @return void
    */
    export function EquipItem(pid: number, slot: number, refId: string, count: number, charge: number,
        enchantmentCharge: number): void;

    /**
    *  Unequip the item in a certain slot of the equipment of a player.
    *
    * @param pid The player ID.
    * @param slot The equipment slot.
    * @return void
    */
    export function UnequipItem(pid: number, slot: number): void;

    /**
    *  Add an item change to a player's inventory changes.
    *
    * @param pid The player ID.
    * @param refId The refId of the item.
    * @param count The count of the item.
    * @param charge The charge of the item.
    * @param enchantmentCharge The enchantment charge of the item.
    * @param soul The soul of the item.
    * @return void
    */
    export function AddItemChange(pid: number, refId: string, count: number, charge: number,
        enchantmentCharge: number, soul: string): void;

    /**
    *  Check whether a player has equipped an item with a certain refId in any slot.
    *
    * @param pid The player ID.
    * @param refId The refId of the item.
    * @return Whether the player has the item equipped.
    */
    export function HasItemEquipped(pid: number, refId: string): boolean;

    /**
    *  Get the refId of the item in a certain slot of the equipment of a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the equipment item.
    * @return The refId.
    */
    export function GetEquipmentItemRefId(pid: number, slot: number): string;

    /**
    *  Get the count of the item in a certain slot of the equipment of a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the equipment item.
    * @return The item count.
    */
    export function GetEquipmentItemCount(pid: number, slot: number): number;

    /**
    *  Get the charge of the item in a certain slot of the equipment of a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the equipment item.
    * @return The charge.
    */
    export function GetEquipmentItemCharge(pid: number, slot: number): number;

    /**
    *  Get the enchantment charge of the item in a certain slot of the equipment of
    *        a player.
    *
    * @param pid The player ID.
    * @param slot The slot of the equipment item.
    * @return The enchantment charge.
    */
    export function GetEquipmentItemEnchantmentCharge(pid: number, slot: number): number;

    /**
    *  Get the refId of the item at a certain index in a player's latest inventory
    *        changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param index The index of the inventory item.
    * @return The refId.
    */
    export function GetInventoryItemRefId(pid: number, index: number): string;

    /**
    *  Get the count of the item at a certain index in a player's latest inventory
    *        changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param index The index of the inventory item.
    * @return The item count.
    */
    export function GetInventoryItemCount(pid: number, index: number): number;

    /**
    *  Get the charge of the item at a certain index in a player's latest inventory
    *        changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param index The index of the inventory item.
    * @return The charge.
    */
    export function GetInventoryItemCharge(pid: number, index: number): number;

    /**
    *  Get the enchantment charge of the item at a certain index in a player's
    *        latest inventory changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param index The index of the inventory item.
    * @return The enchantment charge.
    */
    export function GetInventoryItemEnchantmentCharge(pid: number, index: number): number;

    /**
    *  Get the soul of the item at a certain index in a player's latest inventory
    *        changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param index The index of the inventory item.
    * @return The soul.
    */
    export function GetInventoryItemSoul(pid: number, index: number): string;

    /**
    *  Get the refId of the item last used by a player.
    *
    * @param pid The player ID.
    * @return The refId.
    */
    export function GetUsedItemRefId(pid: number): string;

    /**
    *  Get the count of the item last used by a player.
    *
    * @param pid The player ID.
    * @return The item count.
    */
    export function GetUsedItemCount(pid: number): number;

    /**
    *  Get the charge of the item last used by a player.
    *
    * @param pid The player ID.
    * @return The charge.
    */
    export function GetUsedItemCharge(pid: number): number;

    /**
    *  Get the enchantment charge of the item last used by a player.
    *
    * @param pid The player ID.
    * @return The enchantment charge.
    */
    export function GetUsedItemEnchantmentCharge(pid: number): number;

    /**
    *  Get the soul of the item last used by a player.
    *
    * @param pid The player ID.
    * @return The soul.
    */
    export function GetUsedItemSoul(pid: number): string;

    /**
    *  Send a PlayerEquipment packet with a player's equipment.
    *
    * It is always sent to all players.
    *
    * @param pid The player ID whose equipment should be sent.
    * @return void
    */
    export function SendEquipment(pid: number): void;

    /**
    *  Send a PlayerInventory packet with a player's recorded inventory changes.
    *
    * @param pid The player ID whose inventory changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendInventoryChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a PlayerItemUse causing a player to use their recorded usedItem.
    *
    * @param pid The player ID affected.
    * @return void
    */
    export function SendItemUse(pid: number): void;

    // MechanicsFunctions

    /**
    *  Get the type of a PlayerMiscellaneous packet.
    *
    * @param pid The player ID.
    * @return The type.
    */
    export function GetMiscellaneousChangeType(pid: number): number;

    /**
    *  Get the cell description of a player's Mark cell.
    *
    * @param pid The player ID.
    * @return The cell description.
    */
    export function GetMarkCell(pid: number): string;

    /**
    *  Get the X position of a player's Mark.
    *
    * @param pid The player ID.
    * @return The X position.
    */
    export function GetMarkPosX(pid: number): number;

    /**
    *  Get the Y position of a player's Mark.
    *
    * @param pid The player ID.
    * @return The Y position.
    */
    export function GetMarkPosY(pid: number): number;

    /**
    *  Get the Z position of a player's Mark.
    *
    * @param pid The player ID.
    * @return The Z position.
    */
    export function GetMarkPosZ(pid: number): number;

    /**
    *  Get the X rotation of a player's Mark.
    *
    * @param pid The player ID.
    * @return The X rotation.
    */
    export function GetMarkRotX(pid: number): number;

    /**
    *  Get the Z rotation of a player's Mark.
    *
    * @param pid The player ID.
    * @return The X rotation.
    */
    export function GetMarkRotZ(pid: number): number;

    /**
    *  Get the ID of a player's selected spell.
    *
    * @param pid The player ID.
    * @return The spell ID.
    */
    export function GetSelectedSpellId(pid: number): string;

    /**
    *  Check whether the killer of a certain player is also a player.
    *
    * @param pid The player ID of the killed player.
    * @return Whether the player was killed by another player.
    */
    export function DoesPlayerHavePlayerKiller(pid: number): boolean;

    /**
    *  Get the player ID of the killer of a certain player.
    *
    * @param pid The player ID of the killed player.
    * @return The player ID of the killer.
    */
    export function GetPlayerKillerPid(pid: number): number;

    /**
    *  Get the refId of the actor killer of a certain player.
    *
    * @param pid The player ID of the killed player.
    * @return The refId of the killer.
    */
    export function GetPlayerKillerRefId(pid: number): string;

    /**
    *  Get the refNum of the actor killer of a certain player.
    *
    * @param pid The player ID of the killed player.
    * @return The refNum of the killer.
    */
    export function GetPlayerKillerRefNum(pid: number): number;

    /**
    *  Get the mpNum of the actor killer of a certain player.
    *
    * @param pid The player ID of the killed player.
    * @return The mpNum of the killer.
    */
    export function GetPlayerKillerMpNum(pid: number): number;

    /**
    *  Get the name of the actor killer of a certain player.
    *
    * @param pid The player ID of the killed player.
    * @return The name of the killer.
    */
    export function GetPlayerKillerName(pid: number): string;

    /**
    *  Get the draw state of a player (0 for nothing, 1 for drawn weapon,
    *        2 for drawn spell).
    *
    * @param pid The player ID.
    * @return The draw state.
    */
    export function GetDrawState(pid: number): number;

    /**
    *  Get the sneak state of a player.
    *
    * @param pid The player ID.
    * @return Whether the player is sneaking.
    */
    export function GetSneakState(pid: number): boolean;

    /**
    *  Set the Mark cell of a player.
    *
    * This changes the Mark cell recorded for that player in the server memory, but does not by itself
    * send a packet.
    *
    * The cell is determined to be an exterior cell if it fits the pattern of a number followed
    * by a comma followed by another number.
    *
    * @param pid The player ID.
    * @param cellDescription The cell description.
    * @return void
    */
    export function SetMarkCell(pid: number, cellDescription: string): void;

    /**
    *  Set the Mark position of a player.
    *
    * This changes the Mark positional coordinates recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param x The X position.
    * @param y The Y position.
    * @param z The Z position.
    * @return void
    */
    export function SetMarkPos(pid: number, x: number, y: number, z: number): void;

    /**
    *  Set the Mark rotation of a player.
    *
    * This changes the Mark positional coordinates recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param x The X rotation.
    * @param z The Z rotation.
    * @return void
    */
    export function SetMarkRot(pid: number, x: number, z: number): void;

    /**
    *  Set the ID of a player's selected spell.
    *
    * This changes the spell ID recorded for that player in the server memory, but does not by itself
    * send a packet.
    *
    * @param pid The player ID.
    * @param spellId The spell ID.
    * @return void
    */
    export function SetSelectedSpellId(pid: number, spellId: string): void;

    /**
    *  Send a PlayerMiscellaneous packet with a Mark location to a player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendMarkLocation(pid: number): void;

    /**
    *  Send a PlayerMiscellaneous packet with a selected spell ID to a player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendSelectedSpell(pid: number): void;

    /**
    *  Send a PlayerJail packet about a player.
    *
    * This is similar to the player being jailed by a guard, but provides extra parameters for
    * increased flexibility.
    *
    * It is only sent to the player being jailed, as the other players will be informed of the
    * jailing's actual consequences via other packets sent by the affected client.
    *
    * @param pid The player ID.
    * @param jailDays The number of days to spend jailed, where each day affects one skill point.
    * @param ignoreJailTeleportation Whether the player being teleported to the nearest jail
    *                                marker should be overridden.
    * @param ignoreJailSkillIncrease Whether the player's Sneak and Security skills should be
    *                                prevented from increasing as a result of the jailing,
    *                                overriding default behavior.
    * @param jailProgressText The text that should be displayed while jailed.
    * @param jailEndText The text that should be displayed once the jailing period is over.
    * @return void
    */
    export function Jail(pid: number, jailDays: number, ignoreJailTeleportation: boolean, ignoreJailSkillIncreases: boolean,
        jailProgressText: string, jailEndText: string): void;

    /**
    *  Send a PlayerResurrect packet about a player.
    *
    * This sends the packet to all players connected to the server.
    *
    * @param pid The player ID.
    * @param type The type of resurrection (0 for REGULAR, 1 for IMPERIAL_SHRINE,
    *             2 for TRIBUNAL_TEMPLE).
    * @return void
    */
    export function Resurrect(pid: number, type: number): void;

    // MiscellaneousFunctions

    /**
    *  Get the last player ID currently connected to the server.
    *
    * Every player receives a unique numerical index known as their player ID upon joining the
    * server.
    *
    * @return The player ID.
    */
    export function GetLastPlayerId(): number;

    /**
    *  Get the current (latest) mpNum generated by the server.
    *
    * Every object that did not exist in an .ESM or .ESP data file and has instead been placed or
    * spawned through a server-sent packet has a numerical index known as its mpNum.
    *
    * When ObjectPlace and ObjectSpawn packets are received from players, their objects lack mpNums,
    * so the server assigns them some based on incrementing the server's current mpNum, with the
    * operation's final mpNum becoming the server's new current mpNum.
    *
    * @return The mpNum.
    */
    export function GetCurrentMpNum(): number;

    /**
    *  Set the current (latest) mpNum generated by the server.
    *
    * When restarting a server, it is important to revert to the previous current (latest) mpNum
    * as stored in the server's data, so as to avoid starting over from 0 and ending up assigning
    * duplicate mpNums to objects.
    *
    * @param mpNum The number that should be used as the new current mpNum.
    * @return void
    */
    export function SetCurrentMpNum(mpNum: number): void;

    // StatsFunctions

    /**
    *  Get the number of attributes.
    *
    * The number is 8 before any dehardcoding is done in OpenMW.
    *
    * @return The number of attributes.
    */
    export function GetAttributeCount(): number;

    /**
    *  Get the number of skills.
    *
    * The number is 27 before any dehardcoding is done in OpenMW.
    *
    * @return The number of skills.
    */
    export function GetSkillCount(): number;

    /**
    *  Get the numerical ID of an attribute with a certain name.
    *
    * If an invalid name is used, the ID returned is -1
    *
    * @param name The name of the attribute.
    * @return The ID of the attribute.
    */
    export function GetAttributeId(name: string): number;

    /**
    *  Get the numerical ID of a skill with a certain name.
    *
    * If an invalid name is used, the ID returned is -1
    *
    * @param name The name of the skill.
    * @return The ID of the skill.
    */
    export function GetSkillId(name: string): number;

    /**
    *  Get the name of the attribute with a certain numerical ID.
    *
    * If an invalid ID is used, "invalid" is returned.
    *
    * @param attributeId The ID of the attribute.
    * @return The name of the attribute.
    */
    export function GetAttributeName(attributeId: number): string;

    /**
    *  Get the name of the skill with a certain numerical ID.
    *
    * If an invalid ID is used, "invalid" is returned.
    *
    * @param skillId The ID of the skill.
    * @return The name of the skill.
    */
    export function GetSkillName(skillId: number): string;

    /**
    *  Get the name of a player.
    *
    * @param pid The player ID.
    * @return The name of the player.
    */
    export function GetName(pid: number): string;

    /**
    *  Get the race of a player.
    *
    * @param pid The player ID.
    * @return The race of the player.
    */
    export function GetRace(pid: number): string;

    /**
    *  Get the head mesh used by a player.
    *
    * @param pid The player ID.
    * @return The head mesh of the player.
    */
    export function GetHead(pid: number): string;

    /**
    *  Get the hairstyle mesh used by a player.
    *
    * @param pid The player ID.
    * @return The hairstyle mesh of the player.
    */
    export function GetHairstyle(pid: number): string;

    /**
    *  Check whether a player is male or not.
    *
    * @param pid The player ID.
    * @return Whether the player is male.
    */
    export function GetIsMale(pid: number): number;

    /**
    *  Get the birthsign of a player.
    *
    * @param pid The player ID.
    * @return The birthsign of the player.
    */
    export function GetBirthsign(pid: number): string;

    /**
    *  Get the character level of a player.
    *
    * @param pid The player ID.
    * @return The level of the player.
    */
    export function GetLevel(pid: number): number;

    /**
    *  Get the player's progress to their next character level.
    *
    * @param pid The player ID.
    * @return The level progress.
    */
    export function GetLevelProgress(pid: number): number;

    /**
    *  Get the base health of the player.
    *
    * @param pid The player ID.
    * @return The base health.
    */
    export function GetHealthBase(pid: number): number;

    /**
    *  Get the current health of the player.
    *
    * @param pid The player ID.
    * @return The current health.
    */
    export function GetHealthCurrent(pid: number): number;

    /**
    *  Get the base magicka of the player.
    *
    * @param pid The player ID.
    * @return The base magicka.
    */
    export function GetMagickaBase(pid: number): number;

    /**
    *  Get the current magicka of the player.
    *
    * @param pid The player ID.
    * @return The current magicka.
    */
    export function GetMagickaCurrent(pid: number): number;

    /**
    *  Get the base fatigue of the player.
    *
    * @param pid The player ID.
    * @return The base fatigue.
    */
    export function GetFatigueBase(pid: number): number;

    /**
    *  Get the current fatigue of the player.
    *
    * @param pid The player ID.
    * @return The current fatigue.
    */
    export function GetFatigueCurrent(pid: number): number;

    /**
    *  Get the base value of a player's attribute.
    *
    * @param pid The player ID.
    * @param attributeId The attribute ID.
    * @return The base value of the attribute.
    */
    export function GetAttributeBase(pid: number, attributeId: number): number;

    /**
    *  Get the modifier value of a player's attribute.
    *
    * @param pid The player ID.
    * @param attributeId The attribute ID.
    * @return The modifier value of the attribute.
    */
    export function GetAttributeModifier(pid: number, attributeId: number): number;

    /**
    *  Get the amount of damage (as caused through the Damage Attribute effect)
    *        to a player's attribute.
    *
    * @param pid The player ID.
    * @param attributeId The attribute ID.
    * @return The amount of damage to the attribute.
    */
    export function GetAttributeDamage(pid: number, attributeId: number): number;

    /**
    *  Get the base value of a player's skill.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @return The base value of the skill.
    */
    export function GetSkillBase(pid: number, skillId: number): number;

    /**
    *  Get the modifier value of a player's skill.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @return The modifier value of the skill.
    */
    export function GetSkillModifier(pid: number, skillId: number): number;

    /**
    *  Get the amount of damage (as caused through the Damage Skill effect)
    *        to a player's skill.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @return The amount of damage to the skill.
    */
    export function GetSkillDamage(pid: number, skillId: number): number;

    /**
    *  Get the progress the player has made towards increasing a certain skill by 1.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @return The skill progress.
    */
    export function GetSkillProgress(pid: number, skillId: number): number;

    /**
    *  Get the bonus applied to a certain attribute at the next level up as a result
    *        of associated skill increases.
    *
    * Although confusing, the term "skill increase" for this is taken from OpenMW itself.
    *
    * @param pid The player ID.
    * @param skillId The attribute ID.
    * @return The increase in the attribute caused by skills.
    */
    export function GetSkillIncrease(pid: number, attributeId: number): number;

    /**
    *  Get the bounty of the player.
    *
    * @param pid The player ID.
    * @return The bounty.
    */
    export function GetBounty(pid: number): number;

    /**
    *  Set the name of a player.
    *
    * @param pid The player ID.
    * @param name The new name of the player.
    * @return void
    */
    export function SetName(pid: number, name: string): void;

    /**
    *  Set the race of a player.
    *
    * @param pid The player ID.
    * @param race The new race of the player.
    * @return void
    */
    export function SetRace(pid: number, race: string): void;

    /**
    *  Set the head mesh used by a player.
    *
    * @param pid The player ID.
    * @param head The new head mesh of the player.
    * @return void
    */
    export function SetHead(pid: number, head: string): void;

    /**
    *  Set the hairstyle mesh used by a player.
    *
    * @param pid The player ID.
    * @param hairstyle The new hairstyle mesh of the player.
    * @return void
    */
    export function SetHairstyle(pid: number, hairstyle: string): void;

    /**
    *  Set whether a player is male or not.
    *
    * @param pid The player ID.
    * @param state Whether the player is male.
    * @return void
    */
    export function SetIsMale(pid: number, state: number): void;

    /**
    *  Set the birthsign of a player.
    *
    * @param pid The player ID.
    * @param name The new birthsign of the player.
    * @return void
    */
    export function SetBirthsign(pid: number, name: string): void;

    /**
    *  Set whether the player's stats should be reset based on their
    *        current race as the result of a PlayerBaseInfo packet.
    *
    * This changes the resetState for that player in the server memory, but does not by itself
    * send a packet.
    *
    * @param pid The player ID.
    * @param resetStats The stat reset state.
    * @return void
    */
    export function SetResetStats(pid: number, resetStats: boolean): void;

    /**
    *  Set the character level of a player.
    *
    * @param pid The player ID.
    * @param value The new level of the player.
    * @return void
    */
    export function SetLevel(pid: number, value: number): void;

    /**
    *  Set the player's progress to their next character level.
    *
    * @param pid The player ID.
    * @param value The new level progress of the player.
    * @return void
    */
    export function SetLevelProgress(pid: number, value: number): void;

    /**
    *  Set the base health of a player.
    *
    * @param pid The player ID.
    * @param name The new base health of the player.
    * @return void
    */
    export function SetHealthBase(pid: number, value: number): void;

    /**
    *  Set the current health of a player.
    *
    * @param pid The player ID.
    * @param name The new current health of the player.
    * @return void
    */
    export function SetHealthCurrent(pid: number, value: number): void;

    /**
    *  Set the base magicka of a player.
    *
    * @param pid The player ID.
    * @param name The new base magicka of the player.
    * @return void
    */
    export function SetMagickaBase(pid: number, value: number): void;

    /**
    *  Set the current magicka of a player.
    *
    * @param pid The player ID.
    * @param name The new current magicka of the player.
    * @return void
    */
    export function SetMagickaCurrent(pid: number, value: number): void;

    /**
    *  Set the base fatigue of a player.
    *
    * @param pid The player ID.
    * @param name The new base fatigue of the player.
    * @return void
    */
    export function SetFatigueBase(pid: number, value: number): void;

    /**
    *  Set the current fatigue of a player.
    *
    * @param pid The player ID.
    * @param name The new current fatigue of the player.
    * @return void
    */
    export function SetFatigueCurrent(pid: number, value: number): void;

    /**
    *  Set the base value of a player's attribute.
    *
    * @param pid The player ID.
    * @param attributeId The attribute ID.
    * @param value The new base value of the player's attribute.
    * @return void
    */
    export function SetAttributeBase(pid: number, attributeId: number, value: number): void;

    /**
    *  Clear the modifier value of a player's attribute.
    *
    * There's no way to set a modifier to a specific value because it can come from
    * multiple different sources, but clearing it is a straightforward process that
    * dispels associated effects on a client and, if necessary, unequips associated
    * items.
    *
    * @param pid The player ID.
    * @param attributeId The attribute ID.
    * @return void
    */
    export function ClearAttributeModifier(pid: number, attributeId: number): void;

    /**
    *  Set the amount of damage (as caused through the Damage Attribute effect) to
    *        a player's attribute.
    *
    * @param pid The player ID.
    * @param attributeId The attribute ID.
    * @param value The amount of damage to the player's attribute.
    * @return void
    */
    export function SetAttributeDamage(pid: number, attributeId: number, value: number): void;

    /**
    *  Set the base value of a player's skill.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @param value The new base value of the player's skill.
    * @return void
    */
    export function SetSkillBase(pid: number, skillId: number, value: number): void;

    /**
    *  Clear the modifier value of a player's skill.
    *
    * There's no way to set a modifier to a specific value because it can come from
    * multiple different sources, but clearing it is a straightforward process that
    * dispels associated effects on a client and, if necessary, unequips associated
    * items.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @return void
    */
    export function ClearSkillModifier(pid: number, skillId: number): void;

    /**
    *  Set the amount of damage (as caused through the Damage Skill effect) to
    *        a player's skill.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @param value The amount of damage to the player's skill.
    * @return void
    */
    export function SetSkillDamage(pid: number, skillId: number, value: number): void;

    /**
    *  Set the progress the player has made towards increasing a certain skill by 1.
    *
    * @param pid The player ID.
    * @param skillId The skill ID.
    * @param value The progress value.
    * @return void
    */
    export function SetSkillProgress(pid: number, skillId: number, value: number): void;

    /**
    *  Set the bonus applied to a certain attribute at the next level up as a result
    *        of associated skill increases.
    *
    * Although confusing, the term "skill increase" for this is taken from OpenMW itself.
    *
    * @param pid The player ID.
    * @param skillId The attribute ID.
    * @param value The increase in the attribute caused by skills.
    * @return void
    */
    export function SetSkillIncrease(pid: number, attributeId: number, value: number): void;

    /**
    *  Set the bounty of a player.
    *
    * @param pid The player ID.
    * @param value The new bounty.
    * @return void
    */
    export function SetBounty(pid: number, value: number): void;

    /**
    *  Set the current and ending stages of character generation for a player.
    *
    * This is used to repeat part of character generation or to only go through part of it.
    *
    * @param pid The player ID.
    * @param currentStage The new current stage.
    * @param endStage The new ending stage.
    * @return void
    */
    export function SetCharGenStage(pid: number, currentStage: number, endStage: number): void;

    /**
    *  Send a PlayerBaseInfo packet with a player's name, race, head mesh,
    *        hairstyle mesh, birthsign and stat reset state.
    *
    * It is always sent to all players.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendBaseInfo(pid: number): void;

    /**
    *  Send a PlayerStatsDynamic packet with a player's dynamic stats (health,
    *        magicka and fatigue).
    *
    * It is always sent to all players.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendStatsDynamic(pid: number): void;

    /**
    *  Send a PlayerAttribute packet with a player's attributes and bonuses
    *        to those attributes at the next level up (the latter being called
    *        "skill increases" as in OpenMW).
    *
    * It is always sent to all players.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendAttributes(pid: number): void;

    /**
    *  Send a PlayerSkill packet with a player's skills.
    *
    * It is always sent to all players.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendSkills(pid: number): void;

    /**
    *  Send a PlayerLevel packet with a player's character level and
    *        progress towards the next level up
    *
    * It is always sent to all players.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendLevel(pid: number): void;

    /**
    *  Send a PlayerBounty packet with a player's bounty.
    *
    * It is always sent to all players.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendBounty(pid: number): void;

    // WorldstateFunctions

    /*
    * static mwmp::BaseWorldstate *readWorldstate;
    * static mwmp::BaseWorldstate writeWorldstate;
    */

    /**
    *  Use the last worldstate received by the server as the one being read.
    *
    * @return void
    */
    export function ReadReceivedWorldstate(): void;

    /**
    *  Take the contents of the read-only worldstate last received by the
    *        server from a player and move its contents to the stored worldstate
    *        that can be sent by the server.
    *
    * @return void
    */
    export function CopyReceivedWorldstateToStore(): void;

    /**
    *  Clear the map changes for the write-only worldstate.
    *
    * This is used to initialize the sending of new WorldMap packets.
    *
    * @return void
    */
    export function ClearMapChanges(): void;

    /**
    *  Get the number of indexes in the read worldstate's map changes.
    *
    * @return The number of indexes.
    */
    export function GetMapChangesSize(): number;

    /**
    *  Get the weather region in the read worldstate.
    *
    * @return The weather region.
    */
    export function GetWeatherRegion(): string;

    /**
    *  Get the current weather in the read worldstate.
    *
    * @return The current weather.
    */
    export function GetWeatherCurrent(): number;

    /**
    *  Get the next weather in the read worldstate.
    *
    * @return The next weather.
    */
    export function GetWeatherNext(): number;

    /**
    *  Get the queued weather in the read worldstate.
    *
    * @return The queued weather.
    */
    export function GetWeatherQueued(): number;

    /**
    *  Get the transition factor of the weather in the read worldstate.
    *
    * @return The transition factor of the weather.
    */
    export function GetWeatherTransitionFactor(): number;

    /**
    *  Get the X coordinate of the cell corresponding to the map tile at a certain index in
    *        the read worldstate's map tiles.
    *
    * @param index The index of the map tile.
    * @return The X coordinate of the cell.
    */
    export function GetMapTileCellX(index: number): number;

    /**
    *  Get the Y coordinate of the cell corresponding to the map tile at a certain index in
    *        the read worldstate's map tiles.
    *
    * @param index The index of the map tile.
    * @return The Y coordinate of the cell.
    */
    export function GetMapTileCellY(index: number): number;

    /**
    *  Set the region affected by the next WorldRegionAuthority packet sent.
    *
    * @param region The region.
    * @return void
    */
    export function SetAuthorityRegion(authorityRegion: string): void;

    /**
    *  Set the weather region in the write-only worldstate stored on the server.
    *
    * @param region The region.
    * @return void
    */
    export function SetWeatherRegion(region: string): void;

    /**
    *  Set the weather forcing state in the write-only worldstate stored on the server.
    *
    * Players who receive a packet with forced weather will switch to that weather immediately.
    *
    * @param forceState The weather forcing state.
    * @return void
    */
    export function SetWeatherForceState(forceState: boolean): void;

    /**
    *  Set the current weather in the write-only worldstate stored on the server.
    *
    * @param currentWeather The current weather.
    * @return void
    */
    export function SetWeatherCurrent(currentWeather: number): void;

    /**
    *  Set the next weather in the write-only worldstate stored on the server.
    *
    * @param nextWeather The next weather.
    * @return void
    */
    export function SetWeatherNext(nextWeather: number): void;

    /**
    *  Set the queued weather in the write-only worldstate stored on the server.
    *
    * @param queuedWeather The queued weather.
    * @return void
    */
    export function SetWeatherQueued(queuedWeather: number): void;

    /**
    *  Set the transition factor for the weather in the write-only worldstate stored on the server.
    *
    * @param transitionFactor The transition factor.
    * @return void
    */
    export function SetWeatherTransitionFactor(transitionFactor: number): void;

    /**
    *  Set the world's hour in the write-only worldstate stored on the server.
    *
    * @param hour The hour.
    * @return void
    */
    export function SetHour(hour: number): void;

    /**
    *  Set the world's day in the write-only worldstate stored on the server.
    *
    * @param day The day.
    * @return void
    */
    export function SetDay(day: number): void;

    /**
    *  Set the world's month in the write-only worldstate stored on the server.
    *
    * @param month The month.
    * @return void
    */
    export function SetMonth(month: number): void;

    /**
    *  Set the world's year in the write-only worldstate stored on the server.
    *
    * @param year The year.
    * @return void
    */
    export function SetYear(year: number): void;

    /**
    *  Set the world's days passed in the write-only worldstate stored on the server.
    *
    * @param daysPassed The days passed.
    * @return void
    */
    export function SetDaysPassed(daysPassed: number): void;

    /**
    *  Set the world's time scale in the write-only worldstate stored on the server.
    *
    * @param pid The player ID.
    * @param timeScale The time scale.
    * @return void
    */
    export function SetTimeScale(timeScale: number): void;

    /**
    *  Set the collision state for other players in the write-only worldstate stored
    *        on the server.
    *
    * @param state The collision state.
    * @return void
    */
    export function SetPlayerCollisionState(state: boolean): void;

    /**
    *  Set the collision state for actors in the write-only worldstate stored on the
    *        server.
    *
    * @param state The collision state.
    * @return void
    */
    export function SetActorCollisionState(state: boolean): void;

    /**
    *  Set the collision state for placed objects in the write-only worldstate stored
    *        on the server.
    *
    * @param state The collision state.
    * @return void
    */
    export function SetPlacedObjectCollisionState(state: boolean): void;

    /**
    *  Whether placed objects with collision turned on should use actor collision, i.e.
    *        whether they should be slippery and prevent players from standing on them.
    *
    * @param useActorCollision Whether to use actor collision.
    * @return void
    */
    export function UseActorCollisionForPlacedObjects(useActorCollision: boolean): void;

    /**
    *  Add a refId to the list of refIds for which collision should be enforced
    *        irrespective of other settings.
    *
    * @param refId The refId.
    * @return void
    */
    export function AddEnforcedCollisionRefId(refId: string): void;

    /**
    *  Clear the list of refIdsd for which collision should be enforced irrespective
    *        of other settings.
    *
    * @return void
    */
    export function ClearEnforcedCollisionRefIds(): void;

    /**
    *  Save the .png image data of the map tile at a certain index in the read worldstate's
    *        map changes.
    *
    * @param index The index of the map tile.
    * @param filePath The file path of the resulting file.
    * @return void
    */
    export function SaveMapTileImageFile(index: number, filePath: string): void;

    /**
    *  Load a .png file as the image data for a map tile and add it to the write-only worldstate
    *        stored on the server.
    *
    * @param cellX The X coordinate of the cell corresponding to the map tile.
    * @param cellY The Y coordinate of the cell corresponding to the map tile.
    * @param filePath The file path of the loaded file.
    * @return void
    */
    export function LoadMapTileImageFile(cellX: number, cellY: number, filePath: string): void;

    /**
    *  Send a WorldRegionAuthority packet establishing a certain player as the only one who
    *        should process certain region-specific events (such as weather changes).
    *
    * It is always sent to all players.
    *
    * @param pid The player ID attached to the packet.
    * @return void
    */
    export function SendWorldRegionAuthority(pid: number): void;

    /**
    *  Send a WorldMap packet with the current set of map changes in the write-only
    *        worldstate.
    *
    * @param pid The player ID attached to the packet.
    * @param broadcast Whether this packet should be sent only to the attached player
    *                  or to all players on the server.
    * @return void
    */
    export function SendWorldMap(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a WorldTime packet with the current time and time scale in the write-only
    *        worldstate.
    *
    * @param pid The player ID attached to the packet.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendWorldTime(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a WorldWeather packet with the current weather in the write-only worldstate.
    *
    * @param pid The player ID attached to the packet.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendWorldWeather(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a WorldCollisionOverride packet with the current collision overrides in
    *        the write-only worldstate.
    *
    * @param pid The player ID attached to the packet.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendWorldCollisionOverride(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // ObjectFunctions

    /**
    *  Use the last object list received by the server as the one being read.
    *
    * @return void
    */
    export function ReadReceivedObjectList(): void;

    /**
    *  Clear the data from the object list stored on the server.
    *
    * @return void
    */
    export function ClearObjectList(): void;

    /**
    *  Set the pid attached to the ObjectList.
    *
    * @param pid The player ID to whom the object list should be attached.
    * @return void
    */
    export function SetObjectListPid(pid: number): void;

    /**
    *  Take the contents of the read-only object list last received by the
    *        server from a player and move its contents to the stored object list
    *        that can be sent by the server.
    *
    * @return void
    */
    export function CopyReceivedObjectListToStore(): void;

    /**
    *  Get the number of indexes in the read object list.
    *
    * @return The number of indexes.
    */
    export function GetObjectListSize(): number;

    /**
    *  Get the origin of the read object list.
    *
    * @return The origin (0 for CLIENT_GAMEPLAY, 1 for CLIENT_CONSOLE, 2 for
    * CLIENT_DIALOGUE, 3 for CLIENT_SCRIPT_LOCAL, 4 for CLIENT_SCRIPT_GLOBAL,
    * 5 for SERVER_SCRIPT).
    */
    export function GetObjectListOrigin(): number;

    /**
    *  Get the client script that the read object list originated from.
    *
    * Note: This is not yet implemented.
    *
    * @return The ID of the client script.
    */
    export function GetObjectListClientScript(): string;

    /**
    *  Get the action type used in the read object list.
    *
    * @return The action type (0 for SET, 1 for ADD, 2 for REMOVE, 3 for REQUEST).
    */
    export function GetObjectListAction(): number;

    /**
    *  Get the container subaction type used in the read object list.
    *
    * @return The action type (0 for NONE, 1 for DRAG, 2 for DROP, 3 for TAKE_ALL).
    */
    export function GetObjectListContainerSubAction(): number;

    /**
    *  Check whether the object at a certain index in the read object list is a
    * player.
    *
    * Note: Although most player data and events are dealt with in Player packets,
    *       object activation is general enough for players themselves to be included
    *       as objects in ObjectActivate packets.
    *
    * @param index The index of the object.
    * @return Whether the object is a player.
    */
    export function IsObjectPlayer(index: number): boolean;

    /**
    *  Get the player ID of the object at a certain index in the read object list,
    * only valid if the object is a player.
    *
    * Note: Currently, players can only be objects in ObjectActivate and ConsoleCommand
    *       packets.
    *
    * @param index The index of the object.
    * @return The player ID of the object.
    */
    export function GetObjectPid(index: number): number;

    /**
    *  Get the refId of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The refId.
    */
    export function GetObjectRefId(index: number): string;

    /**
    *  Get the refNum of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The refNum.
    */
    export function GetObjectRefNum(index: number): number;

    /**
    *  Get the mpNum of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The mpNum.
    */
    export function GetObjectMpNum(index: number): number;

    /**
    *  Get the count of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The object count.
    */
    export function GetObjectCount(index: number): number;

    /**
    *  Get the charge of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The charge.
    */
    export function GetObjectCharge(index: number): number;

    /**
    *  Get the enchantment charge of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The enchantment charge.
    */
    export function GetObjectEnchantmentCharge(index: number): number;

    /**
    *  Get the soul of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The soul.
    */
    export function GetObjectSoul(index: number): string;

    /**
    *  Get the gold value of the object at a certain index in the read object list.
    *
    * This is used solely to get the gold value of gold. It is not used for other objects.
    *
    * @param index The index of the object.
    * @return The gold value.
    */
    export function GetObjectGoldValue(index: number): number;

    /**
    *  Get the object scale of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The object scale.
    */
    export function GetObjectScale(index: number): number;

    /**
    *  Get the object state of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The object state.
    */
    export function GetObjectState(index: number): boolean;

    /**
    *  Get the door state of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The door state.
    */
    export function GetObjectDoorState(index: number): number;

    /**
    *  Get the lock level of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The lock level.
    */
    export function GetObjectLockLevel(index: number): number;

    /**
    *  Check whether the object at a certain index in the read object list has been
    * activated by a player.
    *
    * @param index The index of the object.
    * @return Whether the object has been activated by a player.
    */
    export function DoesObjectHavePlayerActivating(index: number): boolean;

    /**
    *  Get the player ID of the player activating the object at a certain index in the
    * read object list.
    *
    * @param index The index of the object.
    * @return The player ID of the activating player.
    */
    export function GetObjectActivatingPid(index: number): number;

    /**
    *  Get the refId of the actor activating the object at a certain index in the read
    * object list.
    *
    * @param index The index of the object.
    * @return The refId of the activating actor.
    */
    export function GetObjectActivatingRefId(index: number): string;

    /**
    *  Get the refNum of the actor activating the object at a certain index in the read
    * object list.
    *
    * @param index The index of the object.
    * @return The refNum of the activating actor.
    */
    export function GetObjectActivatingRefNum(index: number): number;

    /**
    *  Get the mpNum of the actor activating the object at a certain index in the read
    * object list.
    *
    * @param index The index of the object.
    * @return The mpNum of the activating actor.
    */
    export function GetObjectActivatingMpNum(index: number): number;

    /**
    *  Get the name of the actor activating the object at a certain index in the read
    * object list.
    *
    * @param index The index of the object.
    * @return The name of the activating actor.
    */
    export function GetObjectActivatingName(index: number): string;

    /**
    *  Check whether the object at a certain index in the read object list is a
    * summon.
    *
    * Only living actors can be summoned.
    *
    * @return The summon state.
    */
    export function GetObjectSummonState(index: number): boolean;

    /**
    *  Get the summon duration of the object at a certain index in the read object list.
    *
    * Note: Returns -1 if indefinite.
    *
    * @param index The index of the object.
    * @return The summon duration.
    */
    export function GetObjectSummonDuration(index: number): number;

    /**
    *  Check whether the object at a certain index in the read object list has a player
    * as its summoner.
    *
    * Only living actors can be summoned.
    *
    * @param index The index of the object.
    * @return Whether a player is the summoner of the object.
    */
    export function DoesObjectHavePlayerSummoner(index: number): boolean;

    /**
    *  Get the player ID of the summoner of the object at a certain index in the read object
    * list.
    *
    * @param index The index of the object.
    * @return The player ID of the summoner.
    */
    export function GetObjectSummonerPid(index: number): number;

    /**
    *  Get the refId of the actor summoner of the object at a certain index in the read object
    * list.
    *
    * @param index The index of the object.
    * @return The refId of the summoner.
    */
    export function GetObjectSummonerRefId(index: number): string;

    /**
    *  Get the refNum of the actor summoner of the object at a certain index in the read object
    * list.
    *
    * @param index The index of the object.
    * @return The refNum of the summoner.
    */
    export function GetObjectSummonerRefNum(index: number): number;

    /**
    *  Get the mpNum of the actor summoner of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The mpNum of the summoner.
    */
    export function GetObjectSummonerMpNum(index: number): number;

    /**
    *  Get the X position of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The X position.
    */
    export function GetObjectPosX(index: number): number;

    /**
    *  Get the Y position of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The Y position.
    */
    export function GetObjectPosY(index: number): number;

    /**
    *  Get the Z position at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The Z position.
    */
    export function GetObjectPosZ(index: number): number;

    /**
    *  Get the X rotation of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The X rotation.
    */
    export function GetObjectRotX(index: number): number;

    /**
    *  Get the Y rotation of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The Y rotation.
    */
    export function GetObjectRotY(index: number): number;

    /**
    *  Get the Z rotation of the object at a certain index in the read object list.
    *
    * @param index The index of the object.
    * @return The Z rotation.
    */
    export function GetObjectRotZ(index: number): number;

    /**
    *  Get the videoFilename of the object at a certain index in the read object list.
    *
    * @return The videoFilename.
    */
    export function GetVideoFilename(index: number): string;

    /**
    *  Get the number of container item indexes of the object at a certain index in the
    * read object list.
    *
    * @param index The index of the object.
    * @return The number of container item indexes.
    */
    export function GetContainerChangesSize(objectIndex: number): number;

    /**
    *  Get the refId of the container item at a certain itemIndex in the container changes
    * of the object at a certain objectIndex in the read object list.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @return The refId.
    */
    export function GetContainerItemRefId(objectIndex: number, itemIndex: number): string;

    /**
    *  Get the item count of the container item at a certain itemIndex in the container
    * changes of the object at a certain objectIndex in the read object list.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @return The item count.
    */
    export function GetContainerItemCount(objectIndex: number, itemIndex: number): number;

    /**
    *  Get the charge of the container item at a certain itemIndex in the container changes
    * of the object at a certain objectIndex in the read object list.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @return The charge.
    */
    export function GetContainerItemCharge(objectIndex: number, itemIndex: number): number;

    /**
    *  Get the enchantment charge of the container item at a certain itemIndex in the container changes
    * of the object at a certain objectIndex in the read object list.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @return The enchantment charge.
    */
    export function GetContainerItemEnchantmentCharge(objectIndex: number, itemIndex: number): number;

    /**
    *  Get the soul of the container item at a certain itemIndex in the container changes
    * of the object at a certain objectIndex in the read object list.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @return The soul.
    */
    export function GetContainerItemSoul(objectIndex: number, itemIndex: number): string;

    /**
    *  Get the action count of the container item at a certain itemIndex in the container
    * changes of the object at a certain objectIndex in the read object list.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @return The action count.
    */
    export function GetContainerItemActionCount(objectIndex: number, itemIndex: number): number;

    /**
    *  Check whether the object at a certain index in the read object list has a container.
    * 
    * Note: Only ObjectLists from ObjectPlace packets contain this information. Objects from
    *       received ObjectSpawn packets can always be assumed to have a container.
    *
    * @param index The index of the object.
    * @return Whether the object has a container.
    */
    export function DoesObjectHaveContainer(index: number): boolean;

    /**
    *  Set the cell of the temporary object list stored on the server.
    *
    * The cell is determined to be an exterior cell if it fits the pattern of a number followed
    * by a comma followed by another number.
    *
    * @param cellDescription The description of the cell.
    * @return void
    */
    export function SetObjectListCell(cellDescription: string): void;

    /**
    *  Set the action type of the temporary object list stored on the server.
    *
    * @param action The action type (0 for SET, 1 for ADD, 2 for REMOVE, 3 for REQUEST).
    * @return void
    */
    export function SetObjectListAction(action: number): void;

    /**
    *  Set the console command of the temporary object list stored on the server.
    *
    * When sent, the command will run once on every object added to the object list. If no objects
    * have been added, it will run once without any object reference.
    *
    * @param consoleCommand The console command.
    * @return void
    */
    export function SetObjectListConsoleCommand(consoleCommand: string): void;

    /**
    *  Set the refId of the temporary object stored on the server.
    *
    * @param refId The refId.
    * @return void
    */
    export function SetObjectRefId(refId: string): void;

    /**
    *  Set the refNum of the temporary object stored on the server.
    *
    * Every object loaded from .ESM and .ESP data files has a unique refNum which needs to be
    * retained to refer to it in packets.
    * 
    * On the other hand, objects placed or spawned via the server should always have a refNum
    * of 0.
    *
    * @param refNum The refNum.
    * @return void
    */
    export function SetObjectRefNum(refNum: number): void;

    /**
    *  Set the mpNum of the temporary object stored on the server.
    *
    * Every object placed or spawned via the server is assigned an mpNum by incrementing the last
    * mpNum stored on the server. Scripts should take care to ensure that mpNums are kept unique
    * for these objects.
    * 
    * Objects loaded from .ESM and .ESP data files should always have an mpNum of 0, because they
    * have unique refNumes instead.
    *
    * @param mpNum The mpNum.
    * @return void
    */
    export function SetObjectMpNum(mpNum: number): void;

    /**
    *  Set the object count of the temporary object stored on the server.
    *
    * This determines the quantity of an object, with the exception of gold.
    *
    * @param count The object count.
    * @return void
    */
    export function SetObjectCount(count: number): void;

    /**
    *  Set the charge of the temporary object stored on the server.
    *
    * Object durabilities are set through this value.
    *
    * @param charge The charge.
    * @return void
    */
    export function SetObjectCharge(charge: number): void;

    /**
    *  Set the enchantment charge of the temporary object stored on the server.
    *
    * Object durabilities are set through this value.
    *
    * @param charge The enchantment charge.
    * @return void
    */
    export function SetObjectEnchantmentCharge(enchantmentCharge: number): void;

    /**
    *  Set the soul of the temporary object stored on the server.
    *
    * @param refId The soul.
    * @return void
    */
    export function SetObjectSoul(soul: string): void;

    /**
    *  Set the gold value of the temporary object stored on the server.
    *
    * This is used solely to set the gold value for gold. It has no effect on other objects.
    *
    * @param goldValue The gold value.
    * @return void
    */
    export function SetObjectGoldValue(goldValue: number): void;

    /**
    *  Set the scale of the temporary object stored on the server.
    *
    * Objects are smaller or larger than their default size based on their scale.
    *
    * @param scale The scale.
    * @return void
    */
    export function SetObjectScale(scale: number): void;

    /**
    *  Set the object state of the temporary object stored on the server.
    *
    * Objects are enabled or disabled based on their object state.
    *
    * @param objectState The object state.
    * @return void
    */
    export function SetObjectState(objectState: boolean): void;

    /**
    *  Set the lock level of the temporary object stored on the server.
    *
    * @param lockLevel The lock level.
    * @return void
    */
    export function SetObjectLockLevel(lockLevel: number): void;

    /**
    *  Set the summon duration of the temporary object stored on the server.
    *
    * @param summonDuration The summon duration.
    * @return void
    */
    export function SetObjectSummonDuration(summonDuration: number): void;

    /**
    *  Set the disarm state of the temporary object stored on the server.
    *
    * @param disarmState The disarmState.
    * @return void
    */
    export function SetObjectDisarmState(disarmState: boolean): void;

    /**
    *  Set the summon state of the temporary object stored on the server.
    *
    * This only affects living actors and determines whether they are summons of another
    * living actor.
    *
    * @param summonState The summon state.
    * @return void
    */
    export function SetObjectSummonState(summonState: boolean): void;

    /**
    *  Set the position of the temporary object stored on the server.
    *
    * @param x The X position.
    * @param y The Y position.
    * @param z The Z position.
    * @return void
    */
    export function SetObjectPosition(x: number, y: number, z: number): void;

    /**
    *  Set the rotation of the temporary object stored on the server.
    *
    * @param x The X rotation.
    * @param y The Y rotation.
    * @param z The Z rotation.
    * @return void
    */
    export function SetObjectRotation(x: number, y: number, z: number): void;

    /**
    *  Set the player ID of the player activating the temporary object stored on the
    *        server. Currently only used for ObjectActivate packets.
    *
    * @param pid The pid of the player.
    * @return void
    */
    export function SetObjectActivatingPid(pid: number): void;

    /**
    *  Set the door state of the temporary object stored on the server.
    *
    * Doors are open or closed based on their door state.
    *
    * @param doorState The door state.
    * @return void
    */
    export function SetObjectDoorState(doorState: number): void;

    /**
    *  Set the teleport state of the temporary object stored on the server.
    *
    * If a door's teleport state is true, interacting with the door teleports a player to its
    * destination. If it's false, it opens and closes like a regular door.
    *
    * @param teleportState The teleport state.
    * @return void
    */
    export function SetObjectDoorTeleportState(teleportState: boolean): void;

    /**
    *  Set the door destination cell of the temporary object stored on the server.
    *
    * The cell is determined to be an exterior cell if it fits the pattern of a number followed
    * by a comma followed by another number.
    *
    * @param cellDescription The description of the cell.
    * @return void
    */
    export function SetObjectDoorDestinationCell(cellDescription: string): void;

    /**
    *  Set the door destination position of the temporary object stored on the server.
    *
    * @param x The X position.
    * @param y The Y position.
    * @param z The Z position.
    * @return void
    */
    export function SetObjectDoorDestinationPosition(x: number, y: number, z: number): void;

    /**
    *  Set the door destination rotation of the temporary object stored on the server.
    *
    * Note: Because this sets the rotation a player will have upon using the door, and rotation
    *       on the Y axis has no effect on players, the Y value has been omitted as an argument.
    *
    * @param x The X rotation.
    * @param z The Z rotation.
    * @return void
    */
    export function SetObjectDoorDestinationRotation(x: number, z: number): void;

    /**
    *  Set a player as the object in the temporary object stored on the server.
    *        Currently only used for ConsoleCommand packets.
    *
    * @param pid The pid of the player.
    * @return void
    */
    export function SetPlayerAsObject(pid: number): void;

    /**
    *  Set the refId of the temporary container item stored on the server.
    *
    * @param refId The refId.
    * @return void
    */
    export function SetContainerItemRefId(refId: string): void;

    /**
    *  Set the item count of the temporary container item stored on the server.
    *
    * @param count The item count.
    * @return void
    */
    export function SetContainerItemCount(count: number): void;

    /**
    *  Set the charge of the temporary container item stored on the server.
    *
    * @param charge The charge.
    * @return void
    */
    export function SetContainerItemCharge(charge: number): void;

    /**
    *  Set the enchantment charge of the temporary container item stored on the server.
    *
    * @param charge The enchantment charge.
    * @return void
    */
    export function SetContainerItemEnchantmentCharge(enchantmentCharge: number): void;

    /**
    *  Set the soul of the temporary container item stored on the server.
    *
    * @param refId The soul.
    * @return void
    */
    export function SetContainerItemSoul(soul: string): void;

    /**
    *  Set the action count of the container item at a certain itemIndex in the container
    * changes of the object at a certain objectIndex in the object list stored on the server.
    *
    * When resending a received Container packet, this allows you to correct the amount of items
    * removed from a container by a player when it conflicts with what other players have already
    * taken.
    *
    * @param objectIndex The index of the object.
    * @param itemIndex The index of the container item.
    * @param actionCount The action count.
    * @return void
    */
    export function SetContainerItemActionCountByIndex(objectIndex: number, itemIndex: number, actionCount: number): void;

    /**
    *  Add a copy of the server's temporary object to the server's currently stored object
    * list.
    *
    * In the process, the server's temporary object will automatically be cleared so a new
    * one can be set up.
    *
    * @return void
    */
    export function AddObject(): void;

    /**
    *  Add a copy of the server's temporary container item to the container changes of the
    * server's temporary object.
    *
    * In the process, the server's temporary container item will automatically be cleared so a new
    * one can be set up.
    *
    * @return void
    */
    export function AddContainerItem(): void;

    /**
    *  Send an ObjectActivate packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendObjectActivate(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectPlace packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendObjectPlace(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectSpawn packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendObjectSpawn(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectDelete packet.
    *
    * @param broadcast Whether this packet should be sent only to the player for whom the current
    *                  object list was initialized or to everyone on the server.
    *
    * @return void
    */
    export function SendObjectDelete(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectLock packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendObjectLock(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectTrap packet.
    *
    * @param broadcast Whether this packet should be sent only to the player for whom the current
    *                  object list was initialized or to everyone on the server.
    *
    * @return void
    */
    export function SendObjectTrap(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectScale packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendObjectScale(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send an ObjectState packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendObjectState(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a DoorState packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendDoorState(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a DoorDestination packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendDoorDestination(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a Container packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendContainer(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a VideoPlay packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendVideoPlay(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a ConsoleCommand packet.
    *
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendConsoleCommand(sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // PositionFunctions

    /**
    *  Get the X position of a player.
    *
    * @param pid The player ID.
    * @return The X position.
    */
    export function GetPosX(pid: number): number;

    /**
    *  Get the Y position of a player.
    *
    * @param pid The player ID.
    * @return The Y position.
    */
    export function GetPosY(pid: number): number;

    /**
    *  Get the Z position of a player.
    *
    * @param pid The player ID.
    * @return The Z position.
    */
    export function GetPosZ(pid: number): number;

    /**
    *  Get the X position of a player from before their latest cell change.
    *
    * @param pid The player ID.
    * @return The X position.
    */
    export function GetPreviousCellPosX(pid: number): number;

    /**
    *  Get the Y position of a player from before their latest cell change.
    *
    * @param pid The player ID.
    * @return The Y position.
    */
    export function GetPreviousCellPosY(pid: number): number;

    /**
    *  Get the Z position of a player from before their latest cell change.
    *
    * @param pid The player ID.
    * @return The Z position.
    */
    export function GetPreviousCellPosZ(pid: number): number;

    /**
    *  Get the X rotation of a player.
    *
    * @param pid The player ID.
    * @return The X rotation.
    */
    export function GetRotX(pid: number): number;

    /**
    *  Get the Z rotation of a player.
    *
    * @param pid The player ID.
    * @return The Z rotation.
    */
    export function GetRotZ(pid: number): number;

    /**
    *  Set the position of a player.
    *
    * This changes the positional coordinates recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param x The X position.
    * @param y The Y position.
    * @param z The Z position.
    * @return void
    */
    export function SetPos(pid: number, x: number, y: number, z: number): void;

    /**
    *  Set the rotation of a player.
    *
    * This changes the rotational coordinates recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * A player's Y rotation is always 0, which is why there is no Y rotation parameter.
    *
    * @param pid The player ID.
    * @param x The X position.
    * @param z The Z position.
    * @return void
    */
    export function SetRot(pid: number, x: number, z: number): void;

    /**
    *  Set the momentum of a player.
    *
    * This changes the coordinates recorded for that player's momentum in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param x The X momentum.
    * @param y The Y momentum.
    * @param z The Z momentum.
    * @return void
    */
    export function SetMomentum(pid: number, x: number, y: number, z: number): void;

    /**
    *  Send a PlayerPosition packet about a player.
    *
    * It is only sent to the affected player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendPos(pid: number): void;

    /**
    *  Send a PlayerMomentum packet about a player.
    *
    * It is only sent to the affected player.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendMomentum(pid: number): void;

    // QuestFunctions

    /**
    *  Clear the last recorded journal changes for a player.
    *
    * This is used to initialize the sending of new PlayerJournal packets.
    *
    * @param pid The player ID whose journal changes should be used.
    * @return void
    */
    export function ClearJournalChanges(pid: number): void;

    /**
    *  Clear the last recorded kill count changes for a player.
    *
    * This is used to initialize the sending of new WorldKillCount packets.
    *
    * @param pid The player ID whose kill count changes should be used.
    * @return void
    */
    export function ClearKillChanges(pid: number): void;

    /**
    *  Get the number of indexes in a player's latest journal changes.
    *
    * @param pid The player ID whose journal changes should be used.
    * @return The number of indexes.
    */
    export function GetJournalChangesSize(pid: number): number;

    /**
    *  Get the number of indexes in a player's latest kill count changes.
    *
    * @param pid The player ID whose kill count changes should be used.
    * @return The number of indexes.
    */
    export function GetKillChangesSize(pid: number): number;

    /**
    *  Add a new journal item of type ENTRY to the journal changes for a player,
    *  with a specific timestamp.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param quest The quest of the journal item.
    * @param index The quest index of the journal item.
    * @param actorRefId The actor refId of the journal item.
    * @return void
    */
    export function AddJournalEntry(pid: number, quest: string, index: number, actorRefId: string): void;

    /**
    *  Add a new journal item of type ENTRY to the journal changes for a player,
    *  with a specific timestamp.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param quest The quest of the journal item.
    * @param index The quest index of the journal item.
    * @param actorRefId The actor refId of the journal item.
    * @param The daysPassed for the journal item.
    * @param The month for the journal item.
    * @param The day of the month for the journal item.
    * @return void
    */
    export function AddJournalEntryWithTimestamp(pid: number, quest: string, index: number, actorRefId: string,
        daysPassed: number, month: number, day: number): void;

    /**
    *  Add a new journal item of type INDEX to the journal changes for a player.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param quest The quest of the journal item.
    * @param index The quest index of the journal item.
    * @return void
    */
    export function AddJournalIndex(pid: number, quest: string, index: number): void;

    /**
    *  Add a new kill count to the kill count changes for a player.
    *
    * @param pid The player ID whose kill count changes should be used.
    * @param refId The refId of the kill count.
    * @param number The number of kills in the kill count.
    * @return void
    */
    export function AddKill(pid: number, refId: string, number: number): void;

    /**
    *  Set the reputation of a certain player.
    *
    * @param pid The player ID.
    * @param value The reputation.
    * @return void
    */
    export function SetReputation(pid: number, value: number): void;

    /**
    *  Get the quest at a certain index in a player's latest journal changes.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param index The index of the journalItem.
    * @return The quest.
    */
    export function GetJournalItemQuest(pid: number, index: number): string;

    /**
    *  Get the quest index at a certain index in a player's latest journal changes.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param index The index of the journalItem.
    * @return The quest index.
    */
    export function GetJournalItemIndex(pid: number, index: number): number;

    /**
    *  Get the journal item type at a certain index in a player's latest journal changes.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param index The index of the journalItem.
    * @return The type (0 for ENTRY, 1 for INDEX).
    */
    export function GetJournalItemType(pid: number, index: number): number;

    /**
    *  Get the actor refId at a certain index in a player's latest journal changes.
    *
    * Every journal change has an associated actor, which is usually the quest giver.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param index The index of the journalItem.
    * @return The actor refId.
    */
    export function GetJournalItemActorRefId(pid: number, index: number): string;

    /**
    *  Get the refId at a certain index in a player's latest kill count changes.
    *
    * @param pid The player ID whose kill count changes should be used.
    * @param index The index of the kill count.
    * @return The refId.
    */
    export function GetKillRefId(pid: number, index: number): string;

    /**
    *  Get the number of kills at a certain index in a player's latest kill count changes.
    *
    * @param pid The player ID whose kill count changes should be used.
    * @param index The index of the kill count.
    * @return The number of kills.
    */
    export function GetKillNumber(pid: number, index: number): number;

    /**
    *  Get the a certain player's reputation.
    *
    * @param pid The player ID.
    * @return The reputation.
    */
    export function GetReputation(pid: number): number;

    /**
    *  Send a PlayerJournal packet with a player's recorded journal changes.
    *
    * @param pid The player ID whose journal changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendJournalChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a WorldKillCount packet with a player's recorded kill count changes.
    *
    * @param pid The player ID whose kill count changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendKillChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    /**
    *  Send a PlayerReputation packet with a player's recorded reputation.
    *
    * @param pid The player ID whose reputation should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendReputation(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // RecordsDynamicFunctions

    /**
    *  Clear the data from the records stored on the server.
    *
    * @return void
    */
    export function ClearRecords(): void;

    /**
    *  Get the type of records in the read worldstate's dynamic records.
    *
    * @return The type of records (0 for SPELL, 1 for POTION, 2 for ENCHANTMENT,
    *         3 for NPC).
    */
    export function GetRecordType(): number;

    /**
    *  Get the number of records in the read worldstate's dynamic records.
    *
    * @return The number of records.
    */
    export function GetRecordCount(): number;

    /**
    *  Get the number of effects for the record at a certain index in the read
    * worldstate's current records.
    *
    * @param recordIndex The index of the record.
    * @return The number of effects.
    */
    export function GetRecordEffectCount(recordIndex: number): number;

    /**
    *  Get the id of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The id of the record.
    */
    export function GetRecordId(index: number): string;

    /**
    *  Get the base id (i.e. the id this record should inherit default
    * values from) of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The base id of the record.
    */
    export function GetRecordBaseId(index: number): string;

    /**
    *  Get the subtype of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The type of the record.
    */
    export function GetRecordSubtype(index: number): number;

    /**
    *  Get the name of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The name of the record.
    */
    export function GetRecordName(index: number): string;

    /**
    *  Get the model of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The model of the record.
    */
    export function GetRecordModel(index: number): string;

    /**
    *  Get the icon of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The icon of the record.
    */
    export function GetRecordIcon(index: number): string;

    /**
    *  Get the script of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The script of the record.
    */
    export function GetRecordScript(index: number): string;

    /**
    *  Get the enchantment id of the record at a certain index in the read
    * worldstate's dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The enchantment id of the record.
    */
    export function GetRecordEnchantmentId(index: number): string;

    /**
    *  Get the enchantment charge of the record at a certain index in
    * the read worldstate's dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The enchantment charge of the record.
    */
    export function GetRecordEnchantmentCharge(index: number): number;

    /**
    *  Get the auto-calculation flag value of the record at a certain index in
    * the read worldstate's dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The auto-calculation flag value of the record.
    */
    export function GetRecordAutoCalc(index: number): number;

    /**
    *  Get the charge of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The charge of the record.
    */
    export function GetRecordCharge(index: number): number;

    /**
    *  Get the cost of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The cost of the record.
    */
    export function GetRecordCost(index: number): number;

    /**
    *  Get the flags of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The flags of the spell as an integer.
    */
    export function GetRecordFlags(index: number): number;

    /**
    *  Get the value of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The value of the record.
    */
    export function GetRecordValue(index: number): number;

    /**
    *  Get the weight of the record at a certain index in the read worldstate's
    * dynamic records of the current type.
    *
    * @param index The index of the record.
    * @return The weight of the record.
    */
    export function GetRecordWeight(index: number): number;

    /**
    *  Get the ID of the effect at a certain index in the read worldstate's
    * current records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The ID of the effect.
    */
    export function GetRecordEffectId(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the ID of the attribute modified by the effect at a certain index in the
    * read worldstate's current records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The attribute ID for the effect.
    */
    export function GetRecordEffectAttribute(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the ID of the skill modified by the effect at a certain index in the
    * read worldstate's current records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The skill ID for the effect.
    */
    export function GetRecordEffectSkill(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the range type of the effect at a certain index in the read worldstate's
    * current records (0 for self, 1 for touch, 2 for target).
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The range of the effect.
    */
    export function GetRecordEffectRangeType(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the area of the effect at a certain index in the read worldstate's current
    * records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The area of the effect.
    */
    export function GetRecordEffectArea(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the duration of the effect at a certain index in the read worldstate's current
    * records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The duration of the effect.
    */
    export function GetRecordEffectDuration(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the maximum magnitude of the effect at a certain index in the read
    * worldstate's current records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The maximum magnitude of the effect.
    */
    export function GetRecordEffectMagnitudeMax(recordIndex: number, effectIndex: number): number;

    /**
    *  Get the minimum magnitude of the effect at a certain index in the read
    * worldstate's current records.
    *
    * @param recordIndex The index of the record.
    * @param effectIndex The index of the effect.
    * @return The minimum magnitude of the effect.
    */
    export function GetRecordEffectMagnitudeMin(recordIndex: number, effectIndex: number): number;

    /**
    *  Set which type of temporary records stored on the server should have
    * their data changed via setter functions.
    *
    * @param type The type of records.
    * @return void
    */
    export function SetRecordType(type: number): void;

    /**
    *  Set the id of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param id The id of the record.
    * @return void
    */
    export function SetRecordId(id: string): void;

    /**
    *  Set the base id (i.e. the id this record should inherit default
    * values from) of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param baseId The baseId of the record.
    * @return void
    */
    export function SetRecordBaseId(baseId: string): void;

    /**
    *  Set the inventory base id (i.e. the id this record should inherit
    * its inventory contents from) of the temporary record stored on the server for
    * the currently specified record type.
    *
    * @param inventoryBaseId The inventoryBaseId of the record.
    * @return void
    */
    export function SetRecordInventoryBaseId(inventoryBaseId: string): void;

    /**
    *  Set the subtype of the temporary record stored on the server for
    * the currently specified record type.
    *
    * @param type The spell type.
    * @return void
    */
    export function SetRecordSubtype(subtype: number): void;

    /**
    *  Set the name of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param name The name of the record.
    * @return void
    */
    export function SetRecordName(name: string): void;

    /**
    *  Set the model of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param model The model of the record.
    * @return void
    */
    export function SetRecordModel(model: string): void;

    /**
    *  Set the icon of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param icon The icon of the record.
    * @return void
    */
    export function SetRecordIcon(icon: string): void;

    /**
    *  Set the script of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param script The script of the record.
    * @return void
    */
    export function SetRecordScript(script: string): void;

    /**
    *  Set the enchantment id of the temporary record stored on the server
    * for the currently specified record type.
    *
    * @param enchantmentId The enchantment id of the record.
    * @return void
    */
    export function SetRecordEnchantmentId(enchantmentId: string): void;

    /**
    *  Set the enchantment charge of the temporary record stored on the server
    * for the currently specified record type.
    *
    * @param enchantmentCharge The enchantmentCharge of the record.
    * @return void
    */
    export function SetRecordEnchantmentCharge(enchantmentCharge: number): void;

    /**
    *  Set the auto-calculation flag value of the temporary record stored
    * on the server for the currently specified record type.
    *
    * @param autoCalc The auto-calculation flag value of the record.
    * @return void
    */
    export function SetRecordAutoCalc(autoCalc: number): void;

    /**
    *  Set the charge of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param charge The charge of the record.
    * @return void
    */
    export function SetRecordCharge(charge: number): void;

    /**
    *  Set the cost of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param cost The cost of the record.
    * @return void
    */
    export function SetRecordCost(cost: number): void;

    /**
    *  Set the flags of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param flags The flags of the record.
    * @return void
    */
    export function SetRecordFlags(flags: number): void;

    /**
    *  Set the value of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param value The value of the record.
    * @return void
    */
    export function SetRecordValue(value: number): void;

    /**
    *  Set the weight of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param weight The weight of the record.
    * @return void
    */
    export function SetRecordWeight(weight: number): void;

    /**
    *  Set the armor rating of the temporary record stored on the server
    * for the currently specified record type.
    *
    * @param armorRating The armor rating of the record.
    * @return void
    */
    export function SetRecordArmorRating(armorRating: number): void;

    /**
    *  Set the health of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param health The health of the record.
    * @return void
    */
    export function SetRecordHealth(health: number): void;

    /**
    *  Set the chop damage of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param minDamage The minimum damage of the record.
    * @param maxDamage The maximum damage of the record.
    * @return void
    */
    export function SetRecordDamageChop(minDamage: number, maxDamage: number): void;

    /**
    *  Set the slash damage of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param minDamage The minimum damage of the record.
    * @param maxDamage The maximum damage of the record.
    * @return void
    */
    export function SetRecordDamageSlash(minDamage: number, maxDamage: number): void;

    /**
    *  Set the thrust damage of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param minDamage The minimum damage of the record.
    * @param maxDamage The maximum damage of the record.
    * @return void
    */
    export function SetRecordDamageThrust(minDamage: number, maxDamage: number): void;

    /**
    *  Set the reach of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param reach The reach of the record.
    * @return void
    */
    export function SetRecordReach(reach: number): void;

    /**
    *  Set the speed of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param speed The speed of the record.
    * @return void
    */
    export function SetRecordSpeed(speed: number): void;

    /**
    *  Set whether the temporary record stored on the server for the
    * currently specified record type is a key.
    *
    * Note: This is only applicable to Miscellaneous records.
    *
    * @param keyState Whether the record is a key.
    * @return void
    */
    export function SetRecordKeyState(keyState: boolean): void;

    /**
    *  Set whether the temporary record stored on the server for the
    * currently specified record type is a scroll.
    *
    * Note: This is only applicable to Book records.
    *
    * @param scrollState Whether the record is a scroll.
    * @return void
    */
    export function SetRecordScrollState(scrollState: boolean): void;

    /**
    *  Set the skill ID of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param skillId The skill ID of the record.
    * @return void
    */
    export function SetRecordSkillId(skillId: number): void;

    /**
    *  Set the text of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param text The text of the record.
    * @return void
    */
    export function SetRecordText(text: string): void;

    /**
    *  Set the hair of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param hair The hair of the record.
    * @return void
    */
    export function SetRecordHair(hair: string): void;

    /**
    *  Set the head of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param hair The head of the record.
    * @return void
    */
    export function SetRecordHead(head: string): void;

    /**
    *  Set the gender of the temporary record stored on the server for the
    * currently specified record type (0 for female, 1 for male).
    *
    * @param hair The race of the record.
    * @return void
    */
    export function SetRecordGender(gender: number): void;

    /**
    *  Set the race of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param hair The race of the record.
    * @return void
    */
    export function SetRecordRace(race: string): void;

    /**
    *  Set the character class of the temporary record stored on the server
    * for the currently specified record type.
    *
    * @param hair The character class of the record.
    * @return void
    */
    export function SetRecordClass(charClass: string): void;

    /**
    *  Set the faction of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param faction The faction of the record.
    * @return void
    */
    export function SetRecordFaction(faction: string): void;

    /**
    *  Set the level of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param level The level of the record.
    * @return void
    */
    export function SetRecordLevel(level: number): void;

    /**
    *  Set the magicka of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param magicka The magicka of the record.
    * @return void
    */
    export function SetRecordMagicka(magicka: number): void;

    /**
    *  Set the fatigue of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param fatigue The fatigue of the record.
    * @return void
    */
    export function SetRecordFatigue(fatigue: number): void;

    /**
    *  Set the AI fight value of the temporary record stored on the server for the
    * currently specified record type.
    *
    * @param aiFight The AI fight value of the record.
    * @return void
    */
    export function SetRecordAIFight(aiFight: number): void;

    /**
    *  Set the id of the record at a certain index in the records stored on the server.
    *
    * When resending a received RecordsDynamic packet, this allows you to set the server-generated
    * id of a record without having to clear and recreate the packet.
    *
    * @param index The index of the record.
    * @param id The id of the record.
    * @return void
    */
    export function SetRecordIdByIndex(index: number, id: string): void;

    /**
    *  Set the enchantment id of the record at a certain index in the records stored on
    * the server.
    *
    * When resending a received RecordsDynamic packet, this allows you to set the server-generated
    * enchantment id of a record without having to clear and recreate the packet.
    *
    * @param index The index of the record.
    * @param enchantmentId The enchantment id of the record.
    * @return void
    */
    export function SetRecordEnchantmentIdByIndex(index: number, enchantmentId: string): void;

    /**
    *  Set the ID of the temporary effect stored on the server.
    *
    * @param effectId The ID of the effect.
    * @return void
    */
    export function SetRecordEffectId(effectId: number): void;

    /**
    *  Set the ID of the attribute modified by the temporary effect stored on
    * the server.
    *
    * @param attributeId The ID of the attribute.
    * @return void
    */
    export function SetRecordEffectAttribute(attributeId: number): void;

    /**
    *  Set the ID of the skill modified by the temporary effect stored on the
    * server.
    *
    * @param skillId The ID of the skill.
    * @return void
    */
    export function SetRecordEffectSkill(skillId: number): void;

    /**
    *  Set the range type of the temporary effect stored on the server (0 for
    * self, 1 for touch, 2 for target).
    *
    * @param rangeType The range type of the effect.
    * @return void
    */
    export function SetRecordEffectRangeType(rangeType: number): void;

    /**
    *  Set the area of the temporary effect stored on the server.
    *
    * @param area The area of the effect.
    * @return void
    */
    export function SetRecordEffectArea(area: number): void;

    /**
    *  Set the duration of the temporary effect stored on the server.
    *
    * @param duration The duration of the effect.
    * @return void
    */
    export function SetRecordEffectDuration(duration: number): void;

    /**
    *  Set the maximum magnitude of the temporary effect stored on the server.
    *
    * @param magnitudeMax The maximum magnitude of the effect.
    * @return void
    */
    export function SetRecordEffectMagnitudeMax(magnitudeMax: number): void;

    /**
    *  Set the minimum magnitude of the temporary effect stored on the server.
    *
    * @param magnitudeMin The minimum magnitude of the effect.
    * @return void
    */
    export function SetRecordEffectMagnitudeMin(magnitudeMin: number): void;

    /**
    *  Set the type of the temporary body part stored on the server.
    *
    * @param partType The type of the body part.
    * @return void
    */
    export function SetRecordBodyPartType(partType: number): void;

    /**
    *  Set the id of the male version of the temporary body part stored on the
    * server.
    *
    * @param partId The id of the body part.
    * @return void
    */
    export function SetRecordBodyPartIdForMale(partId: string): void;

    /**
    *  Set the id of the female version of the temporary body part stored on the
    * server.
    *
    * @param partId The id of the body part.
    * @return void
    */
    export function SetRecordBodyPartIdForFemale(partId: string): void;

    /**
    *  Set the id of the of the temporary inventory item stored on the server.
    *
    * @param partId The id of the inventory item.
    * @return void
    */
    export function SetRecordInventoryItemId(itemId: string): void;

    /**
    *  Set the count of the of the temporary inventory item stored on the server.
    *
    * @param count The count of the inventory item.
    * @return void
    */
    export function SetRecordInventoryItemCount(count: number): void;

    /**
    *  Add a copy of the server's temporary record of the current specified
    * type to the stored records.
    *
    * In the process, the server's temporary record will automatically be cleared
    * so a new one can be set up.
    *
    * @return void
    */
    export function AddRecord(): void;

    /**
    *  Add a copy of the server's temporary effect to the temporary record
    * of the current specified type.
    *
    * In the process, the server's temporary effect will automatically be cleared
    * so a new one can be set up.
    *
    * @return void
    */
    export function AddRecordEffect(): void;

    /**
    *  Add a copy of the server's temporary body part to the temporary record
    * of the current specified type.
    *
    * In the process, the server's temporary body part will automatically be cleared
    * so a new one can be set up.
    *
    * @return void
    */
    export function AddRecordBodyPart(): void;

    /**
    *  Add a copy of the server's temporary inventory item to the temporary record
    * of the current specified type.
    *
    * In the process, the server's temporary inventory item will automatically be cleared
    * so a new one can be set up.
    *
    * Note: Any items added this way will be ignored if the record already has a valid
    *       inventoryBaseId.
    *
    * @return void
    */
    export function AddRecordInventoryItem(): void;

    /**
    *  Send a RecordDynamic packet with the current specified record type.
    *
    * @param pid The player ID attached to the packet.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendRecordDynamic(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // ServerFunctions

    /**
    *  Write a log message with its own timestamp.
    *
    * It will have "[Script]:" prepended to it so as to mark it as a script-generated log message.
    *
    * @param level The logging level used (0 for LOG_VERBOSE, 1 for LOG_INFO, 2 for LOG_WARN,
    *              3 for LOG_ERROR, 4 for LOG_FATAL).
    * @param message The message logged.
    * @return void
    */
    export function LogMessage(level: number, message: string): void;

    /**
    *  Write a log message without its own timestamp.
    *
    * It will have "[Script]:" prepended to it so as to mark it as a script-generated log message.
    *
    * @param level The logging level used (0 for LOG_VERBOSE, 1 for LOG_INFO, 2 for LOG_WARN,
    *              3 for LOG_ERROR, 4 for LOG_FATAL).
    * @param message The message logged.
    * @return void
    */
    export function LogAppend(level: number, message: string): void;

    /**
    *  Shut down the server.
    *
    * @param code The shutdown code.
    * @return void
    */
    export function StopServer(code: number): void;

    /**
    *  Kick a certain player from the server.
    *
    * @param pid The player ID.
    * @return void
    */
    export function Kick(pid: number): void;

    /**
    *  Ban a certain IP address from the server.
    *
    * @param ipAddress The IP address.
    * @return void
    */
    export function BanAddress(ipAddress: string): void;

    /**
    *  Unban a certain IP address from the server.
    *
    * @param ipAddress The IP address.
    * @return void
    */
    export function UnbanAddress(ipAddress: string): void;

    /**
    *  Check whether a certain file path exists.
    *
    * This will be a case sensitive check on case sensitive filesystems.
    *
    * Whenever you want to enforce case insensitivity, use GetCaseInsensitiveFilename() instead.
    *
    * @return Whether the file exists or not.
    */
    export function DoesFilePathExist(filePath: string): boolean;

    /**
    *  Get the first filename in a folder that has a case insensitive match with the filename
    * argument.
    *
    * This is used to retain case insensitivity when opening data files on Linux.
    *
    * @return The filename that matches.
    */
    export function GetCaseInsensitiveFilename(folderPath: string, filename: string): string;

    /**
    *  Get the path of the server's data folder.
    *
    * @return The data path.
    */
    export function GetDataPath(): string;

    /**
    *  Get the milliseconds elapsed since the server was started.
    *
    * @return The time since the server's startup in milliseconds.
    */
    export function GetMillisecondsSinceServerStart(): number;

    /**
    *  Get the type of the operating system used by the server.
    *
    * Note: Currently, the type can be "Windows", "Linux", "OS X" or "Unknown OS".
    *
    * @return The type of the operating system.
    */
    export function GetOperatingSystemType(): string;

    /**
    *  Get the architecture type used by the server.
    *
    * Note: Currently, the type can be "64-bit", "32-bit", "ARMv#" or "Unknown architecture".
    *
    * @return The architecture type.
    */
    export function GetArchitectureType(): string;

    /**
    *  Get the TES3MP version of the server.
    *
    * @return The server version.
    */
    export function GetServerVersion(): string;

    /**
    *  Get the protocol version of the server.
    *
    * @return The protocol version.
    */
    export function GetProtocolVersion(): string;

    /**
    *  Get the average ping of a certain player.
    *
    * @param pid The player ID.
    * @return The average ping.
    */
    export function GetAvgPing(pid: number): number;

    /**
    *  Get the IP address of a certain player.
    *
    * @param pid The player ID.
    * @return The IP address.
    */
    export function GetIP(pid: number): string;

    /**
     *  Get the port used by the server.
     *
     * @return The port.
     */
    export function GetPort(): number;

    /**
     *  Get the maximum number of players.
     *
     * @return Max players
     */
    export function GetMaxPlayers(): number;

    /**
     *  Checking if the server requires a password to connect.
     *
     * @return
     */
    export function HasPassword(): boolean;

    /**
    *  Get the data file enforcement state of the server.
    *
    * If true, clients are required to use the same data files as set for the server.
    *
    * @return The enforcement state.
    */
    export function GetDataFileEnforcementState(): boolean;

    /**
    *  Get the script error ignoring state of the server.
    *
    * If true, script errors will not crash the server.
    *
    * @return The script error ignoring state.
    */
    export function GetScriptErrorIgnoringState(): boolean;

    /**
    *  Set the game mode of the server, as displayed in the server browser.
    *
    * @param name The new game mode.
    * @return void
    */
    export function SetGameMode(gameMode: string): void;

    /**
    *  Set the name of the server, as displayed in the server browser.
    *
    * @param name The new name.
    * @return void
    */
    export function SetHostname(name: string): void;

    /**
    *  Set the password required to join the server.
    *
    * @param password The password.
    * @return void
    */
    export function SetServerPassword(password: string): void;

    /**
    *  Set the data file enforcement state of the server.
    *
    * If true, clients are required to use the same data files as set for the server.
    *
    * @param state The new enforcement state.
    * @return void
    */
    export function SetDataFileEnforcementState(state: boolean): void;

    /**
    *  Set whether script errors should be ignored or not.
    *
    * If true, script errors will not crash the server, but could have any number
    * of unforeseen consequences, which is why this is a highly experimental
    * setting.
    *
    * @param state The new script error ignoring state.
    * @return void
    */
    export function SetScriptErrorIgnoringState(state: boolean): void;

    /**
    *  Set a rule string for the server details displayed in the server browser.
    *
    * @param key The name of the rule.
    * @param value The string value of the rule.
    * @return void
    */
    export function SetRuleString(key: string, value: string): void;

    /**
    *  Set a rule value for the server details displayed in the server browser.
    *
    * @param key The name of the rule.
    * @param value The numerical value of the rule.
    * @return void
    */
    export function SetRuleValue(key: string, value: number): void;

    /**
     *  Add a data file and a corresponding CRC32 checksum to the data file loadout
     *        that connecting clients need to match.
     *
     * It can be used multiple times to set multiple checksums for the same data file.
     *
     * Note: If an empty string is provided for the checksum, a checksum will not be
     *       required for that data file.
     *
     * @param dataFilename The filename of the data file.
     * @param checksumString A string with the CRC32 checksum required.
     */
    export function AddDataFileRequirement(dataFilename: string, checksumString: string): void;

    // SettingFunctions

    /**
    *  Set the difficulty for a player.
    *
    * This changes the difficulty for that player in the server memory, but does not by itself
    * send a packet.
    *
    * @param pid The player ID.
    * @param difficulty The difficulty.
    * @return void
    */
    export function SetDifficulty(pid: number, difficulty: number): void;

    /**
    *  Set the client log level enforced for a player.
    *
    * This changes the enforced log level for that player in the server memory, but does not by itself
    * send a packet.
    *
    * Enforcing a certain log level is necessary to prevent players from learning information from
    * their console window that they are otherwise unable to obtain, such as the locations of
    * other players.
    *
    * If you do not wish to enforce a log level, simply set enforcedLogLevel to -1
    *
    * @param pid The player ID.
    * @param enforcedLogLevel The enforced log level.
    * @return void
    */
    export function SetEnforcedLogLevel(pid: number, enforcedLogLevel: number): void;

    /**
    *  Set the physics framerate for a player.
    *
    * This changes the physics framerate for that player in the server memory, but does not by itself
    * send a packet.
    *
    * @param pid The player ID.
    * @param physicsFramerate The physics framerate.
    * @return void
    */
    export function SetPhysicsFramerate(pid: number, physicsFramerate: number): void;

    /**
    *  Set whether the console is allowed for a player.
    *
    * This changes the console permission for that player in the server memory, but does not
    * by itself send a packet.
    *
    * @param pid The player ID.
    * @param state The console permission state.
    * @return void
    */
    export function SetConsoleAllowed(pid: number, state: boolean): void;

    /**
    *  Set whether resting in beds is allowed for a player.
    *
    * This changes the resting permission for that player in the server memory, but does not
    * by itself send a packet.
    *
    * @param pid The player ID.
    * @param state The resting permission state.
    * @return void
    */
    export function SetBedRestAllowed(pid: number, state: boolean): void;

    /**
    *  Set whether resting in the wilderness is allowed for a player.
    *
    * This changes the resting permission for that player in the server memory, but does not
    * by itself send a packet.
    *
    * @param pid The player ID.
    * @param state The resting permission state.
    * @return void
    */
    export function SetWildernessRestAllowed(pid: number, state: boolean): void;

    /**
    *  Set whether waiting is allowed for a player.
    *
    * This changes the waiting permission for that player in the server memory, but does not
    * by itself send a packet.
    *
    * @param pid The player ID.
    * @param state The waiting permission state.
    * @return void
    */
    export function SetWaitAllowed(pid: number, state: boolean): void;

    /**
    *  Send a PlayerSettings packet to the player affected by it.
    *
    * @param pid The player ID to send it to.
    * @return void
    */
    export function SendSettings(pid: number): void;

    // ShapeshiftFunctions

    /**
    *  Get the scale of a player.
    *
    * @param pid The player ID.
    * @return The scale.
    */
    export function GetScale(pid: number): number;

    /**
    *  Check whether a player is a werewolf.
    *
    * This is based on the last PlayerShapeshift packet received or sent for that player.
    *
    * @param pid The player ID.
    * @return The werewolf state.
    */
    export function IsWerewolf(pid: number): boolean;

    /**
    *  Get the refId of the creature the player is disguised as.
    *
    * @param pid The player ID.
    * @return The creature refId.
    */
    export function GetCreatureRefId(pid: number): string;

    /**
    *  Check whether a player's name is replaced by that of the creature they are
    *        disguised as when other players hover over them.
    *
    * This is based on the last PlayerShapeshift packet received or sent for that player.
    *
    * @param pid The player ID.
    * @return The creature name display state.
    */
    export function GetCreatureNameDisplayState(pid: number): boolean;

    /**
    *  Set the scale of a player.
    *
    * This changes the scale recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param scale The new scale.
    * @return void
    */
    export function SetScale(pid: number, scale: number): void;

    /**
    *  Set the werewolf state of a player.
    *
    * This changes the werewolf state recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param isWerewolf The new werewolf state.
    * @return void
    */
    export function SetWerewolfState(pid: number, isWerewolf: boolean): void;

    /**
    *  Set the refId of the creature a player is disguised as.
    *
    * This changes the creature refId recorded for that player in the server memory, but
    * does not by itself send a packet.
    *
    * @param pid The player ID.
    * @param refId The creature refId.
    * @param displaysCreatureName Whether the player's name appears as that of the creature
    *                             when hovered over by others.
    * @return void
    */
    export function SetCreatureRefId(pid: number, refId: string): void;

    /**
    *  Set whether a player's name is replaced by that of the creature they are
    *        disguised as when other players hover over them.
    *
    * @param pid The player ID.
    * @param displayState The creature name display state.
    * @return void
    */
    export function SetCreatureNameDisplayState(pid: number, displayState: boolean): void;

    /**
    *  Send a PlayerShapeshift packet about a player.
    *
    * This sends the packet to all players connected to the server. It is currently used
    * only to communicate werewolf states.
    *
    * @param pid The player ID.
    * @return void
    */
    export function SendShapeshift(pid: number): void;

    // SpellFunctions

    /**
    *  Clear the last recorded spellbook changes for a player.
    *
    * This is used to initialize the sending of new PlayerSpellbook packets.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @return void
    */
    export function ClearSpellbookChanges(pid: number): void;

    /**
    *  Get the number of indexes in a player's latest spellbook changes.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @return The number of indexes.
    */
    export function GetSpellbookChangesSize(pid: number): number;

    /**
    *  Get the action type used in a player's latest spellbook changes.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @return The action type (0 for SET, 1 for ADD, 2 for REMOVE).
    */
    export function GetSpellbookChangesAction(pid: number): number;

    /**
    *  Set the action type in a player's spellbook changes.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @param action The action (0 for SET, 1 for ADD, 2 for REMOVE).
    * @return void
    */
    export function SetSpellbookChangesAction(pid: number, action: number): void;

    /**
    *  Add a new spell to the spellbook changes for a player.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @param spellId The spellId of the spell.
    * @return void
    */
    export function AddSpell(pid: number, spellId: string): void;

    /**
    *  Get the spellId at a certain index in a player's latest spellbook changes.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @param index The index of the spell.
    * @return The spellId.
    */
    export function GetSpellId(pid: number, index: number): string;

    /**
    *  Send a PlayerSpellbook packet with a player's recorded spellbook changes.
    *
    * @param pid The player ID whose spellbook changes should be used.
    * @param sendToOtherPlayers Whether this packet should be sent to players other than the
    *                           player attached to the packet (false by default).
    * @param skipAttachedPlayer Whether the packet should skip being sent to the player attached
    *                           to the packet (false by default).
    * @return void
    */
    export function SendSpellbookChanges(pid: number, sendToOtherPlayers: boolean, skipAttachedPlayer: boolean): void;

    // TimerAPI
    
    export function CreateTimer(callback: any, msec: number): number;

    export function CreateTimerEx(callback: any, msec: number, types: string, args: any[]): number;

    export function StartTimer(timerId: number): void;

    export function StopTimer(timerId: number): void;

    export function RestartTimer(timerId: number, msec: number): void;

    export function FreeTimer(timerId: number): void;

    export function IsTimerElapsed(timerId: number): boolean;

}
