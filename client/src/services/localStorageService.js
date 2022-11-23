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

export function changeRoom(roomId) {
    const user = getUserData();
    user.roomId = roomId;
    setUserData(user);
}

const localStorageService = {
    setUserData,
    getUserData,
    removeTokens,
    changeRoom,
};

export default localStorageService;
