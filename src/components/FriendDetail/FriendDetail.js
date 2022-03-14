import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect( ()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])

    return (
        <div>
            <h2>This is Detail about Dosto: {friendId} </h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            <p><small>city: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;