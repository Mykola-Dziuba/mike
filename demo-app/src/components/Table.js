import React from 'react';
import './Table.css';

function Table() {
    const data = [
        { parameter: 'VTHD, %', pcc2: '0.1', pcc1: '3.4', distribution: '3.6' },
        { parameter: 'ITHD, %', pcc2: '12.0', pcc1: '12.0', distribution: '13.0' },
        { parameter: 'Irms, A', pcc2: '3.4', pcc1: '53.7', distribution: '105.8' },
        { parameter: 'THC, A', pcc2: '0.1', pcc1: '6.4', distribution: '21.0' },
        { parameter: 'Iscl/load', pcc2: '1126.7', pcc1: '22.1', distribution: '4.8' },
        { parameter: 'Disp. PF', pcc2: '-0.96', pcc1: '0.96', distribution: '0.96' },
        { parameter: 'True PF', pcc2: '0.96', pcc1: '0.92', distribution: '0.92' },
        { parameter: 'K-factor', pcc2: '1.52', pcc1: '4.85', distribution: '7.1' },
        { parameter: 'Isc, (kA)', pcc2: '23.1', pcc1: '1.18', distribution: '1.54' },
        { parameter: 'Active kW', pcc2: '426.2', pcc1: '441.6', distribution: '415.8' },
        { parameter: 'kVAR', pcc2: '140.4', pcc1: '82.1', distribution: '123.3' },
        { parameter: 'kVA', pcc2: '448.7', pcc1: '480.8', distribution: '433.7' },
    ];

    return (
        <div className="table-container">
            <h2>Table Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>PCC #2</th>
                        <th>PCC #1</th>
                        <th>Distribution Panel</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.parameter}</td>
                            <td>{row.pcc2}</td>
                            <td>{row.pcc1}</td>
                            <td>{row.distribution}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
