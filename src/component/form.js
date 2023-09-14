// Login.js

import React, { useState } from 'react';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import Custom from './custom';

function Form() {

const [showForm, setShowForm] = useState(0);
const [username, setUsername] = useState('');

const [activeItem, setActiveItem] = useState(null);

const [cur_index, curIndex] = useState(null);

const handleClick = (index) => {
    console.log(index)
    setActiveItem(index);
    curIndex(index);
};

const handleFormSubmit = (formData) => {
    console.log(formData[0].user_name);
    setUsername(formData[0].user_name);
    if(formData[0].role === "Admin"){
        setShowForm(1);
    }
    else{
        setShowForm(2);
    }
    
};


const menuItems = [
    { id: 1, name: 'Login' },
    { id: 2, name: 'Signup' }
];

return (
    <div className="form_container">

        {showForm === 0 ? (
            <div className="form_inr">
            <h1>Gozen Hospital Management System</h1>
            <div className="login_form">
                
                <div className="title_box">
                    {menuItems.map((item, index) => (
                        <span
                        key={item.id}
                        className={index === activeItem || (!activeItem && index === 0) ? 'form_title active' : 'form_title'}
                        onClick={() => handleClick(index)}
                        >
                        {item.name}
                        </span>
                    ))}
                </div>
            
                {cur_index ? <Signup handleFormSubmit={handleFormSubmit} /> : <Login handleFormSubmit={handleFormSubmit} />}
            </div>
        </div>
        ) :
        showForm === 1 ? <Dashboard username={username} /> : 
        showForm === 2 ? 
        <div className="form_inr">
        <h1>Gozen Hospital Management System</h1>
            <div className="login_form">
                <div className="title_box">
                    <h2>Appointment List
                    </h2>
                </div>
        
            
                <Custom />
                </div>
            </div> :
            <Dashboard username={username} />
        }
    </div>

    
);
}

export default Form;
