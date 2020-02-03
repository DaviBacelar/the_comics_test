const filters = (state = {}, action) => {
    switch (action.type) {
        case "FILTERS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default filters