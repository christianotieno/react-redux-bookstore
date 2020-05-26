const filterReducer = (state = 'All', action) => {
    if(action.type == 'CHANGE_FILTER'){
        return state = action.payload
    }

    return state;
}