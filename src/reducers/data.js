const data = (state = false, action) => {
    switch (action.type) {
        case "DATA":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default data