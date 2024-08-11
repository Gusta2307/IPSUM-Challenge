import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
        favorite_food: '',
        favorite_artist: '',
        favorite_place: '',
        favorite_color: '',
        profile_image: null,
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'profile_image') {
            setFormData({
                ...formData,
                profile_image: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key]);
        });

        axios.post('http://127.0.0.1:8000/register/', formDataObj, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': '{{ csrf_token }}',
            },
        })
        .then(response => {
            console.log('User registered:', response.data);
            setError('');
        })
        .catch(error => {
            console.error('There was an error registering the user!', error);
            // print csrf_token
            console.log('CSRF Token:', '{{ csrf_token }}');
            setError('There was an error registering the user.');
        });



    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password1" value={formData.password1} onChange={handleChange} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="password2" value={formData.password2} onChange={handleChange} required />
                </div>
                <div>
                    <label>Favorite Food:</label>
                    <input type="text" name="favorite_food" value={formData.favorite_food} onChange={handleChange} required />
                </div>
                <div>
                    <label>Favorite Artist:</label>
                    <input type="text" name="favorite_artist" value={formData.favorite_artist} onChange={handleChange} required />
                </div>
                <div>
                    <label>Favorite Place:</label>
                    <input type="text" name="favorite_place" value={formData.favorite_place} onChange={handleChange} required />
                </div>
                <div>
                    <label>Favorite Color:</label>
                    <input type="text" name="favorite_color" value={formData.favorite_color} onChange={handleChange} required />
                </div>
                <div>
                    <label>Profile Image:</label>
                    <input type="file" name="profile_image" onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default Register;
