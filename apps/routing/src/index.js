import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHtmlHashAPI from './AppHtmlHashAPI';
import AppBrowserRouter from './AppBrowserRouter';
import AppHashRouter from './AppHashRouter';

import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';

import Home from './container/home';
import Contact from './container/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <AppBrowserRouter />,
//         children: [
//             {
//                 path: 'home',
//                 element: <Home />
//             },
//             {
//                 path: 'contact',
//                 element: <Contact />
//             }
//         ]
//     }
// ]);


const router = createHashRouter([
    {
        path: '/',
        element: <AppHashRouter />,
        children: [{
            path: 'home',
            element: <Home />
        }, {
            path: 'contact',
            element: <Contact />
        }]
    }
]);

root.render(
    <RouterProvider router={router}>

    </RouterProvider>
);

// root.render(<AppBrowserRouter/>);