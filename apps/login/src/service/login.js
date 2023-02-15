import API from '../constants/api';

const userLogin = (payload) => {
    return fetch(`${API}/login`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json());
};

export default userLogin;