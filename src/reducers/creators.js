const creators = (state = false, action) => {
    switch (action.type) {
        case "CREATORS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default creators