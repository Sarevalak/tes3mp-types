declare interface PotionEffect {
    id: number;
    attribute: number;
    skill: number;
    rangeType: number;
    area: number;
    duration: number;
    magnitudeMax: number;
    magnitudeMin: number;
}

declare interface PotionRecord {
    name: string;
    value: number;
    weight: number;
    autoCalc: number;
    icon: string;
    model: string;
    script: string;
    effects: PotionEffect[];
}