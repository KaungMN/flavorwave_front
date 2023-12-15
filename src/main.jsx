import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReloadingContextProvider from './actions/ReloadContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ReloadingContextProvider>
                <App />
            </ReloadingContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
