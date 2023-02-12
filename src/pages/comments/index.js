import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '@/store/slices/commentSlice';
const Comments = () => {
    const { comments } = useSelector((state) => state.comment);
    React.useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get('api/user');
            console.log(res.data);
        };
        fetchComments();
    }, []);
    const dispatch = useDispatch();
    const handleAddComment = () => {
        dispatch(
            addComment({
                postId: 1,
                id: Math.floor(Math.random() * 1000 - 2),
                name: 'Tran Dung',
                email: 'trandungksnb00@gmail.com',
                body: 'Ok',
            }),
        );
    };
    return (
        <div>
            <h1>Comments Page</h1>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h3>{comment.name}</h3>
                    </div>
                );
            })}
            <button onClick={handleAddComment}>Add comment</button>
        </div>
    );
};

export default Comments;
