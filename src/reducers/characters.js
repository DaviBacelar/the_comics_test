const characters = (state = false, action) => {
    switch (action.type) {
        case "CHARACTERS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default characters