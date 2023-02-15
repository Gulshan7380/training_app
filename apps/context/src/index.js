import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserDetailsContextProvider from './contextProvider/UserDetailsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('r'));

root.render(
    <UserDetailsContextProvider initalValue={{}}>
        <App />
    </UserDetailsContextProvider>
);