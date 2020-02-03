const series = (state = false, action) => {
    switch (action.type) {
        case "SERIES":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default series