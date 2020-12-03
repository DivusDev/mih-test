const initialState = {
    location: {},
  };


const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_LOCATION':
        return {
            ...state,
            location: action.payload
        };
        case 'ANOTHER_ACTION':
        return {
            ...state,
            anotherProp: anotherValue + action.actionPayload
        };

        default:
        return state;
    }
};

export default reducer;