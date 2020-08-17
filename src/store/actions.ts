import { LifeIternal, Option } from '../models';

export enum ActionType {
    ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME',
    ACTION_CHANGE_LIFE_ITERNALS = 'ACTION_CHANGE_LIFE_ITERNALS',
    ACTION_CHANGE_BIRTH_DATE = 'ACTION_CHANGE_BIRTH_DATE',
    ACTION_CHANGE_OPTIONS = 'ACTION_CHANGE_OPTIONS'
}

export interface Action {
    type: ActionType;
    payload: any;
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