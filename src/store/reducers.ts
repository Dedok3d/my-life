import { ActionType, Action } from './actions';
import { LifeIternal } from '../models';

interface State {
    firstName: string;
    lifeIternals: LifeIternal[];
}

const initialState: State = {
    firstName: 'Ivan',
    lifeIternals: [
        {
            color: 'red',
            checked: false,
            name: 'Детство',
            max: 6,
            min: 17,
        },
        {
            color: 'red',
            checked: false,
            name: 'Школьные годы',
            max: 6,
            min: 17,
        },
        {
            color: 'red',
            checked: false,
            name: 'Бакалавриат',
            max: 18,
            min: 21,
        },
        {
            color: 'red',
            checked: false,
            name: 'Магистратура',
            max: 22,
            min: 23,
        },
        {
            color: 'red',
            checked: false,
            name: 'Карьера',
            max: 23,
            min: 65,
        },
        {
            color: 'red',
            checked: false,
            name: 'Пенсия',
            max: 65,
            min: 100,
        },
    ],
};


export const rootReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.ACTION_CHANGE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case ActionType.ACTION_CHANGE_LIFE_ITERNALS:
            return { ...state, lifeIternals: action.payload };
    }

    return state;
};