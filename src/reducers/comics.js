const comics = (state = false, action) => {
    switch (action.type) {
        case "COMICS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default comics