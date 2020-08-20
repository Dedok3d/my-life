export interface LifeIternal {
    color: string;
    checked: boolean;
    name: string;
    max: number;
    min: number;
}

export interface RadioOption {
    name: string;
    checked: boolean;
}

export interface FamousDeath {
    name: string;
    death: number;
    checked: boolean;
}

export interface LifeEvent {
    name: string;
    age: number;
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
    LifeEvents = 'События',
    FamousDeaths = 'Смерти знаменитостей'
}

export enum LEvents {
    FirstMarriage = 'Свадьба',
    FirstChild = 'Первый ребёнок',
    OwnBusiness = 'Свой бизнес',
    PurchaseOfFlat = 'Покупка квартиры',
}


export const LIFE_AVERAGE_DURATION = 100;
export const MONTHS_OF_YAER = 12;
export const WEEKS_OF_MOUNTH = 4;