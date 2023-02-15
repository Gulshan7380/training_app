
const isTokenValid = (user) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const currentToken = `${day}/${month}/${year}`;// .toLocaleString().split(',')[0];;
    if (currentToken === user?.token) {
        return true;
    }
    return false;
};

const getWelocomeText = (user) => {
    return `Welcome, Mr/Ms ${user.userName}`;
};

export {
    isTokenValid,
    getWelocomeText
};