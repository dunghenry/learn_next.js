import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
const initialState = {
    comments: [
        {
            postId: 1,
            id: 1,
            name: 'id labore ex et quam laborum',
            email: 'Eliseo@gardner.biz',
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
        },
        {
            postId: 1,
            id: 2,
            name: 'quo vero reiciendis velit similique earum',
            email: 'Jayne_Kuhic@sydney.com',
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
        },
    ],
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.comments = [...state.comments, action.payload];
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.comment,
                };
            },
        },
    },
});
export const { addComment } = commentSlice.actions;
const commentReducer = commentSlice.reducer;
export default commentReducer;
