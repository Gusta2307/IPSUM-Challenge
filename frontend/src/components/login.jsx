import React, { useState } from 'react';
import axios from 'axios';
import '../styles/globals.css';

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        
    }


    return (
        <div className="card login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " name="username" value={formData.username} onChange={handleChange} required />
                    <span className="input__label">Username</span>
                </label>
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " name="username" value={formData.username} onChange={handleChange} required />
                    <span className="input__label">Password</span>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;