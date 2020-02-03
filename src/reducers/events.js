const events = (state = false, action) => {
    switch (action.type) {
        case "EVENTS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default events