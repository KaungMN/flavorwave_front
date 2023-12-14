const setSessionStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
};

const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
};

const clearSessionStorage = (key) => {
    sessionStorage.removeItem(key);
};

export { setSessionStorage, getSessionStorage, clearSessionStorage };
