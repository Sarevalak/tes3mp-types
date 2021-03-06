/** @noSelfInFile **/

declare class BaseWorld {
    defaultTimeScale: number;
    monthLengths: number[];
    storedRegions: any;
    constructor();
    HasEntry(): any;
    EnsureTimeDataExists(): void;
    GetRegionVisitorCount(regionNameany: any): any;
    AddRegionVisitor(pidany: any, regionNameany: any): void;
    RemoveRegionVisitor(pidany: any, regionNameany: any): void;
    AddForcedWeatherUpdatePid(pidany: any, regionNameany: any): void;
    RemoveForcedWeatherUpdatePid(pidany: any, regionNameany: any): void;
    IsForcedWeatherUpdatePid(pidany: any, regionNameany: any): boolean;
    GetRegionAuthority(regionNameany: any): any;
    SetRegionAuthority(pidany: any, regionNameany: any): void;
    IncrementDay(): void;
    GetCurrentTimeScale(): any;
    UpdateFrametimeMultiplier(): void;
    GetCurrentMpNum(): any;
    SetCurrentMpNum(currentMpNumany: any): void;
    LoadJournal(pidany: any): void;
    LoadFactionRanks(pidany: any): void;
    LoadFactionExpulsion(pidany: any): void;
    LoadFactionReputation(pidany: any): void;
    LoadTopics(pidany: any): void;
    LoadBounty(pidany: any): void;
    LoadReputation(pidany: any): void;
    LoadMap(pidany: any): void;
    LoadKills(pidany: any, forEveryoneany: any): void;
    LoadRegionWeather(regionNameany: any, pidany: any, forEveryoneany: any, forceStateany: any): void;
    LoadWeather(pidany: any, forEveryoneany: any, forceStateany: any): void;
    LoadTime(pidany: any, forEveryoneany: any): void;
    SaveJournal(pidany: any): void;
    SaveFactionRanks(pidany: any): void;
    SaveFactionExpulsion(pidany: any): void;
    SaveFactionReputation(pidany: any): void;
    SaveTopics(pidany: any): void;
    SaveBounty(pidany: any): void;
    SaveReputation(pidany: any): void;
    SaveKills(pidany: any): void;
    SaveRegionWeather(regionNameany: any): void;
    SaveMapExploration(pidany: any): void;
    SaveMapTiles(pidany: any): void;
}
