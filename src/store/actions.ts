
export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';

export const changeFirstName = (newName: string) => {
    return {
        type: ACTION_CHANGE_FIRST_NAME,
        payload: newName,
    };
};