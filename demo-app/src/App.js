import React from 'react';
import './App.css';
import Header from './components/Header';
import Diagram from './components/Diagram';
import Table from './components/Table';

function App() {
    return (
        <div className="App">
            <Header />
            <Diagram />
            <Table />
        </div>
    );
}

export default App;
