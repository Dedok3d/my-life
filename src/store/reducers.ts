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
            color: 'rgb(33, 110, 57)',
            checked: false,
            name: 'Детство',
            min: 0,
            max: 5,
        },
        {
            color: 'red',
            checked: false,
            name: 'Школьные годы',
            min: 6,
            max: 17,
        },
        {
            color: 'red',
            checked: false,
            name: 'Бакалавриат',
            min: 18,
            max: 21,
        },
        {
            color: 'red',
            checked: false,
            name: 'Магистратура',
            min: 22,
            max: 23,
        },
        {
            color: 'red',
            checked: false,
            name: 'Карьера',
            min: 23,
            max: 65,
        },
        {
            color: 'red',
            checked: false,
            name: 'Пенсия',
            min: 65,
            max: 100,
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