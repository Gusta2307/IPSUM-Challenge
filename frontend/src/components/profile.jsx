import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/profile/')
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the user data!', error);
        });
    }, []);

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Favorite Food: {userData.favorite_food}</p>
            <p>Favorite Artist: {userData.favorite_artist}</p>
            <p>Favorite Place: {userData.favorite_place}</p>
            <p>Favorite Color: {userData.favorite_color}</p>
            {userData.profile_image && (
                <img src={`http://localhost:8000${userData.profile_image}`} alt="Profile" />
            )}
        </div>
    );
};

export default Profile;
