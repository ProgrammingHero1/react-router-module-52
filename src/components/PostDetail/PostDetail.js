import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId]);

    return (
        <div>
            <h4>This is Post Detail for: {postId}</h4>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;