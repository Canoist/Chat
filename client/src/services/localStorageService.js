const USERID_KEY = "user-local-id";

export function setUserData(user) {
    localStorage.setItem(USERID_KEY, user);
}

export function removeTokens() {
    localStorage.removeItem(USERID_KEY);
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

export function changeRoomAtToken(roomId) {
    const user = localStorage.getItem(USERID_KEY);
    user.roomId = roomId;
    setUserData(user);
}

const localStorageService = {
    setUserData,
    getUserId,
    removeTokens,
};

export default localStorageService;
