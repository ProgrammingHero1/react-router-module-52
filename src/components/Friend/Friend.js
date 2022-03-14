import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () =>{
        navigate('/friend/'+id);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/'+ id}>show Detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;