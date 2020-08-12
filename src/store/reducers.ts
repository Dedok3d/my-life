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
            color: 'rgb(162, 255, 252)',
            checked: false,
            name: 'Школьные годы',
            min: 6,
            max: 17,
        },
        {
            color: 'rgb(252, 253, 151)',
            checked: false,
            name: 'Бакалавриат',
            min: 18,
            max: 21,
        },
        {
            color: 'rgb(244, 195, 118)',
            checked: false,
            name: 'Магистратура',
            min: 22,
            max: 23,
        },
        {
            color: 'rgb(250, 166, 153)',
            checked: false,
            name: 'Карьера',
            min: 23,
            max: 65,
        },
        {
            color: 'rgb(226, 181, 247)',
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