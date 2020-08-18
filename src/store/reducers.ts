import { ActionType, Action } from './actions';
import { LifeIternal, Option, OptionName, FamousDeath } from '../models';
import MStorage from '../actions/storage/storage';


export interface RootState {
    firstName: string;
    lifeIternals: LifeIternal[];
    birthDate: string;
    options: Option[];
    famousDeath: FamousDeath[];
}

const initialState: RootState = {
    birthDate: undefined,
    firstName: '',
    lifeIternals: [
        {
            color: 'rgb(255, 240, 250)',
            checked: false,
            name: 'Детство',
            min: 0,
            max: 4,
        },
        {
            color: 'rgb(162, 255, 252)',
            checked: false,
            name: 'Школьные годы',
            min: 5,
            max: 16,
        },
        {
            color: 'rgb(252, 253, 151)',
            checked: false,
            name: 'Бакалавриат',
            min: 17,
            max: 20,
        },
        {
            color: 'rgb(244, 195, 118)',
            checked: false,
            name: 'Магистратура',
            min: 21,
            max: 22,
        },
        {
            color: 'rgb(250, 166, 153)',
            checked: false,
            name: 'Карьера',
            min: 23,
            max: 63,
        },
        {
            color: 'rgb(226, 181, 247)',
            checked: false,
            name: 'Пенсия',
            min: 64,
            max: 99,
        },
    ],
    options: [
        {
            name: OptionName.Person,
            checked: false,
        },
        {
            name: OptionName.FamousDeaths,
            checked: false,
        },
        {
            name: OptionName.StageOfLife,
            checked: false,
        }
    ],
    famousDeath: [
        {
            name: `Жанна д'Арк`,
            death: 19,
            checked: false,
        },
        {
            name: `Тупак Шакур`,
            death: 25,
            checked: false,
        }, ,
        {
            name: `Курт Кобейн `,
            death: 27,
            checked: false,
        },
    ]
};

const storeState = MStorage.loadFromLocalStorage();


export const rootReducer = (state: RootState = storeState || initialState, action: Action): RootState => {
    switch (action.type) {
        case ActionType.ACTION_CHANGE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case ActionType.ACTION_CHANGE_LIFE_ITERNALS:
            return { ...state, lifeIternals: action.payload };
        case ActionType.ACTION_CHANGE_BIRTH_DATE:
            return { ...state, birthDate: action.payload };
        case ActionType.ACTION_CHANGE_OPTIONS:
            return { ...state, options: action.payload };
        case ActionType.ACTION_CHANGE_FAMOUS_DEATH:
            return { ...state, famousDeath: action.payload };
    }

    return state;
};