import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, Link
} from "react-router-dom";
import Login from './components/Login';
import About from './components/About';
import Admin from './components/Admin';
import Prod from './features/products/Prod';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<App />} >
                        <Route index element={<h1> please select a route</h1>} />
                        <Route path='/Login' element={<Login></Login>} />
                        <Route path='/About' element={<About/>} />
                        <Route path='/Admin' element={<Admin/>} />
                        <Route path='/Products' element={<Prod/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

