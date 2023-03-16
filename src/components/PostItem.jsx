import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, remove, number}) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <div>{post.id}. <strong>{post.title}</strong></div>
                <div>{post.body}</div>
            </div>
            <MyButton onClick={() => remove(post.id)}  children='Удалить'/>
        </div>
    );
};

export default PostItem;