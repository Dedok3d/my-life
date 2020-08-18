import { LifeIternal, Option, FamousDeath } from '../models';

export enum ActionType {
    ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME',
    ACTION_CHANGE_BIRTH_DATE = 'ACTION_CHANGE_BIRTH_DATE',
    ACTION_CHANGE_SHOW_ME = 'ACTION_CHANGE_SHOW_ME',
    ACTION_CHANGE_LIFE_ITERNALS = 'ACTION_CHANGE_LIFE_ITERNALS',
    ACTION_CHANGE_OPTIONS = 'ACTION_CHANGE_OPTIONS',
    ACTION_CHANGE_FAMOUS_DEATH = 'ACTION_CHANGE_FAMOUS_DEATH',
}

export interface Action {
    type: ActionType;
    payload: any;
};

export const changeShowMe = (showMe: boolean): Action => {
    return {
        type: ActionType.ACTION_CHANGE_SHOW_ME,
        payload: showMe,
    };
};

export const changeFamousDeath = (options: FamousDeath[]): Action => {
    return {
        type: ActionType.ACTION_CHANGE_FAMOUS_DEATH,
        payload: options,
    };
};

export const changeOptions = (options: Option[]): Action => {
    return {
        type: ActionType.ACTION_CHANGE_OPTIONS,
        payload: options,
    };
};

export const changeBirthDate = (birthDate: string): Action => {
    return {
        type: ActionType.ACTION_CHANGE_BIRTH_DATE,
        payload: birthDate,
    };
};

export const changeFirstName = (newName: string): Action => {
    return {
        type: ActionType.ACTION_CHANGE_FIRST_NAME,
        payload: newName,
    };
};

export const changeLifeIternals = (iternals: LifeIternal[]): Action => {
    return {
        type: ActionType.ACTION_CHANGE_LIFE_ITERNALS,
        payload: iternals,
    };
};