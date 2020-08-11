import { LifeIternal } from '../models';

export enum ActionType {
    ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME',
    ACTION_CHANGE_LIFE_ITERNALS = 'ACTION_CHANGE_LIFE_ITERNALS'
}

export interface Action {
    type: ActionType;
    payload: any;
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