import React from 'react';
import Diagram from './Diagram';
import Table from './Table';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>One Line Diagram Report</h1>
            </header>
            <main>
                <Diagram />
                <Table />
            </main>
        </div>
    );
}

export default App;
