import { useState } from "react";
import React from 'react';
import Home from "./home";
import Patient from "./patient";
import Rooms from "./rooms";
import Doctors from "./doctors";

function Dashboard({ username }) {

    const [activeItem, setActiveItem] = useState(null);

    const [cur_index, curIndex] = useState(null);

    const handleClick = (index) => {
        console.log(index)
        setActiveItem(index);
        curIndex(index);
    };
    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Patients' },
        { id: 3, name: 'Appointments' },
        { id: 4, name: 'Doctors' }
    ];
    var name = username;
    return (
        <div className="dashboard_container">
            <div className="side_navigation">
                <div className="logo_box">
                    <span className="Logo"></span>
                </div>
                <div className="menu_box">
                    {menuItems.map((item, index) => (
                        <span
                        key={item.id}
                        className={index === activeItem || (!activeItem && index === 0) ? 'menu_list active' : 'menu_list'}
                        onClick={() => handleClick(index)}
                        >
                        {item.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className="main_container">
                <div className="top_box">
                    <h2>Welcome, {name}!</h2>
                    <div className="srch_box">
                        <input 
                            className="frm_fld srch_fld"
                            type="text"
                            name="search"
                            value=""
                            placeholder="Search"
                        />
                        <span className="profile_icon"></span>
                    </div>
                </div>

                <div className="inr_content">
                    {
                        cur_index === 0 ? <Home /> :
                        cur_index === 1 ? <Patient /> :
                        cur_index === 2 ? <Doctors /> :
                        cur_index === 3 ? <Rooms /> :
                        <Home />
                    }
                    
                </div>
                
                
            </div>
        </div>
    );
}

export default Dashboard;