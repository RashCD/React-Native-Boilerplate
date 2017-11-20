
export default (state: any = null, action: any) => {
    switch (action.type) {
        case 'SELECT_LIBRARY':
            return action.payload;
        default:
            return state;

    }
};