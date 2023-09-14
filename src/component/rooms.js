import React from 'react';

function Rooms(){

    return (
        <div className="home">
            <div className="table_box white_box">
                <h3>Room list</h3>
                <table className="table">
                    <tbody>
                        <tr>
                        <td>Raji</td>
                            <td>26/10/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Root Canal</td>
                           
                        </tr>
                        <tr>
                        <td>Atharvaa</td>
                            <td>14/10/2023</td>
                            <td>Dr. Bharath</td>
                            <td>Vaccine</td>
                        </tr>
                        <tr>
                        <td>Raji</td>
                            <td>26/10/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Root Canal</td>
                            
                        </tr>
                        <tr>
                            <td>Dev</td>
                            <td>13/09/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Temporary memory loss</td>
                         
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Rooms;