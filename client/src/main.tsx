import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk'; // Use ChainId
import { StateContextProvider } from './context';

import App from './App'; // Ensure it matches the exported component name
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Ensure type is specified

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}> {/* Fixed ChainId reference */}
        <Router>
            <StateContextProvider>
                <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);
