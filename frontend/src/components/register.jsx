import React, { useState } from 'react';
import axios from 'axios';
import '../styles/globals.css';
import Image from '../styles/avatar.png'

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
            const file = e.target.files[0];
            setFormData({
                ...formData,
                profile_image: file,
            });

            const reader = new FileReader();
            reader.onload = function(event) {
                // console.log(document.getElementsByClassName('image-cover'))
                document.getElementsByClassName('image-cover')[0].src = event.target.result;
            }
            reader.readAsDataURL(file);
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

    const handleClick = () => {
        document.querySelector('.input_image').click();
    };

    return (
        <div className="card">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="profile-image">
                    <img src={Image} alt="" className="image-cover" onClick={handleClick}/>
                    <input className="input_image" type="file" accept="image/png, image/jpeg, image/jpg, image/gif" name="profile_image" onChange={handleChange} />
                </div>
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " name="username" value={formData.username} onChange={handleChange} required />
                    <span className="input__label">Username</span>
                </label>
                <label className="input">
                    <input className="input__field" type="email" placeholder=" " name="email" value={formData.email} onChange={handleChange} required />
                    <span className="input__label">Email</span>
                </label>
                <label className="input">
                    <input className="input__field" type="password" placeholder=" " name="password1" value={formData.password1} onChange={handleChange} required />
                    <span className="input__label">Password</span>
                </label>
                <label className="input">
                    <input className="input__field" type="password" placeholder=" " name="password2" value={formData.password2} onChange={handleChange} required />
                    <span className="input__label">Confirm Password</span>
                </label>

                <div className='container'>
                    <label className="input">
                        <input className="input__field" type="text" placeholder=" " name="favorite_food" value={formData.favorite_food} onChange={handleChange} required />
                        <span className="input__label">Favorite Food</span>
                    </label >
                    <label className="input">
                        <input className="input__field" type="text" placeholder=" " name="favorite_artist" value={formData.favorite_artist} onChange={handleChange} required />
                        <span className="input__label">Favorite Artist</span>
                    </label>
                </div>
                <div className="container">
                    <label className="input">
                        <input className="input__field" type="text" placeholder=" " name="favorite_place" value={formData.favorite_place} onChange={handleChange} required />
                        <span className="input__label">Favorite Place</span>
                    </label>
                    <label className="input">
                        <input className="input__field" type="text" placeholder=" " name="favorite_color" value={formData.favorite_color} onChange={handleChange} required />
                        <span className="input__label">Favorite Color</span>
                    </label>
                </div>
                <button type="submit">Register</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default Register;
