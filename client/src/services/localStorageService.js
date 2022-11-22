const USER_DATA = "user-data";

export function setUserData(user) {
    localStorage.setItem(USER_DATA, JSON.stringify(user));
}

export function removeTokens() {
    localStorage.removeItem(USER_DATA);
}

export function getUserData() {
    return JSON.parse(localStorage.getItem(USER_DATA));
}

export function changeRoomAtToken(roomId) {
    const user = localStorage.getItem(USER_DATA);
    user.roomId = roomId;
    setUserData(user);
}

const localStorageService = {
    setUserData,
    getUserData,
    removeTokens,
};

export default localStorageService;
