import React from 'react';

function Table() {
    return (
        <div className="table-container">
            <h2>Table Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Приклад даних */}
                    <tr>
                        <td>VTHD</td>
                        <td>0.1%</td>
                    </tr>
                    <tr>
                        <td>ITHD</td>
                        <td>12.0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
