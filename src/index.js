import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'normalize.css';
import ScrollToTop from './Components/Utils/ScrollToTop';

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
