
export const parseData = (data) => {
    return JSON.parse(data);
};

export const getItem = (key) => {
    return localStorage.getItem(key);
};

export const setItem = (key, value) => {
    return localStorage.setItem(key, value);
}
