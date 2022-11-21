const reducer = (state, action) => {
    switch (action.type) {
        case "JOIN":
            return {
                joined: action.payload.joined,
                username: action.payload.username,
                roomId: action.payload.roomId,
            };
        default:
            return state;
    }
};

export default reducer;
