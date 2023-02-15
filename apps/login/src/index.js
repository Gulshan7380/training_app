import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Login from './container/Login';
import Home from './container/Home';
import NotFound from './container/NotFound';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path='home' element={<Home/>} />
                <Route path='search' element={<Home/>} />
                <Route path='about' element={<Home/>} />  
                <Route path='contact' element={<Home/>} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
); 