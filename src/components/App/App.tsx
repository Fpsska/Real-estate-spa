import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../Common/Layout';
import MainPage from '../Pages/MainPage';

import '../../assets/styles/style.scss';
import '../../assets/styles/_media.scss';
import '../../assets/styles/_reset.scss';
import './App.css';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/Real-estate-spa"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<MainPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
