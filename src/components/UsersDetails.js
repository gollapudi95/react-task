import React from 'react'
import { useLocation } from 'react-router-dom';

const UsersDetails = () => {
    const location = useLocation();
    const data = location?.state;
    return (
        <div>
            <h1>Details Page:</h1>
            <img style={{ width: '50px', height: '50px', cursor: 'pointer' }} src={data.image} alt="image" />
            <h3>Name: {data.name}</h3>
            <h3>Language: {data.language}</h3>
            <p>Description: {data.description}</p>
        </div>
    )
}

export default UsersDetails