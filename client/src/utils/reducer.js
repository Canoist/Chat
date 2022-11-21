const reducer = (state, action) => {
    switch (action.type) {
        case "JOIN":
            return {
                joined: action.payload.joined,
                userName: action.payload.userName,
                roomId: action.payload.roomId,
            };
        default:
            return state;
    }
};

export default reducer;
