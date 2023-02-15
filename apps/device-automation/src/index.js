import React from 'react';
import ReactDOM from 'react-dom/client';
import NotFound from './container/NotFound';
import Home from  './container/Home';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { createHashRouter  } from 'react-router-dom';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <Router>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 <Route path='home' element={<Home/>} />
//             </Route>
//             <Route path="*" element={<NotFound />} />
//         </Routes>
//     </Router>
// );

    const router = createHashRouter([
        {
            path: '/',
            element: <App />,
            children: [{
                
                    path: 'home',
                    element: <Home/>
                }, {
                    path: '*',
                    element: <NotFound/>
                }]
        
            }
        ])

root.render(
    <RouterProvider router={router}>

    </RouterProvider>
);