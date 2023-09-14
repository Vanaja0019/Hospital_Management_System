import React from 'react';

function Home(){

    return (
        <div className="home">
            <div className="overview_content">
                <div className="overview_box white_box">
                    <span className="o_count">100</span>
                    <p>Patient's</p>
                </div>
                <div className="overview_box white_box">
                    <span className="o_count">5</span>
                    <p>Doctor's</p>
                </div>
                <div className="overview_box white_box">
                    <span className="o_count">100</span>
                    <p>Appointments</p>
                </div>
                <div className="overview_box white_box">
                    <span className="o_count">6</span>
                    <p>Rooms</p>
                </div>
            </div>
            <div className="doctors_list">
                <div className="white_box">
                    <div className="inr_title_box">
                        <span className="inr_title">Doctors list</span>
                        <span className="inr_sub_content">This day</span>
                    </div>
                    <ul className="dr_list_box">
                        <li className="dr_list available">
                            <p>Dr. Ashok</p>
                            <span>Dentist</span>
                        </li>
                        <li className="dr_list not_available">
                            <p>Dr. Dimple</p>
                            <span>Cardiologist</span>
                        </li>
                        <li className="dr_list available">
                            <p>Dr. Aswin</p>
                            <span>Dermatologist</span>
                        </li>
                        <li className="dr_list not_available">
                            <p>Dr. Bharath</p>
                            <span>Pediatrician</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="table_box white_box">
                <h3>Recent patients list</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Atharvaa</td>
                            <td>14/10/2023</td>
                            <td>Dr. Bharath</td>
                            <td>Vaccine</td>
                            <td>Token 7</td>
                        </tr>
                        <tr>
                            <td>Raji</td>
                            <td>26/10/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Root Canal</td>
                            <td>Token 19</td>
                        </tr>
                        <tr>
                            <td>Asur</td>
                            <td>15/07/2023</td>
                            <td>Dr. Aswin</td>
                            <td>Skin Allergy</td>
                            <td>Token 2</td>
                        </tr>
                        <tr>
                            <td>Sham</td>
                            <td>13/09/2023</td>
                            <td>Dr. Dimple</td>
                            <td>Choloestral</td>
                            <td>Token 1</td>
                        </tr>
                        <tr>
                            <td>Dev</td>
                            <td>13/09/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Teeth Cleaning</td>
                            <td>Token 5</td>
                        </tr>
                        <tr>
                        <td>Dev</td>
                            <td>13/09/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Teeth Cleaning</td>
                            <td>Token 5</td>
                        </tr>
                        <tr>
                            <td>Dev</td>
                            <td>13/09/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Temporary memory loss</td>
                            <td>Token 111</td>
                        </tr>
                        <tr>
                            <td>Dev</td>
                            <td>13/09/2023</td>
                            <td>Dr. Ashok</td>
                            <td>Temporary memory loss</td>
                            <td>Token 111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;