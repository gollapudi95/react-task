import React from 'react';
import { useNavigate } from 'react-router-dom';

const UsersList = (props) => {
    const { name, image, description, language, id } = props;
    const navigation = useNavigate();

    const handleClick = (e, id) => {
        e.preventDefault();
        navigation(`/details/${id}`, { state: { name: `${name}`, description: `${description}`, language: `${language}`, image: `${image}` } });
    }

    return (
        <div style={{ width: '51%', height: '50%', border: '1px solid black', borderRadius: '1rem' }}>
            <h3>{name}</h3>
            <img src={image} style={{ width: '50px', height: '50px', cursor: 'pointer' }} alt="image" onClick={(e) => handleClick(e, id)} />
            <p>{description}</p>
            <p>{language}</p>
        </div>
    )
}

export default UsersList