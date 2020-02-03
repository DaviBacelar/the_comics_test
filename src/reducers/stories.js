const stories = (state = false, action) => {
    switch (action.type) {
        case "STORIES":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default stories