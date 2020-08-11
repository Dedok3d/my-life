const initialState = {
    firstName: 'Ivan'
};


export const rootReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'ACTION_CHANGE_FIRST_NAME':
            return { ...state, firstName: action.payload };
    }

    return state;
};