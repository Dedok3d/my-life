export interface LifeIternal {
    color: string;
    checked: boolean;
    name: string;
    max: number;
    min: number;
}

export interface Option {
    name: string;
    checked: boolean;
}

export enum Intervals {
    week = 'Недели',
    month = 'Месяцы',
    year = 'Годы',
};

export enum OptionName {
    Person = 'Личность',
    StageOfLife = 'Этапы жизни',
}


export const LIFE_AVERAGE_DURATION = 72;
export const MONTHS_OF_YAER = 12;
export const WEEKS_OF_MOUNTH = 4;