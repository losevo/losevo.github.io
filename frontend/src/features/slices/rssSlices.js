/* eslint-disable no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUrl: '',
    urlList: [],
    errors: '',
    rssList: [],
}

const rssSlice = createSlice({
    name: 'rss',
    initialState,
    reducers: {
        addToUrlList: (state, action) => {
            state.urlList.includes(action.payload) ? state : state.urlList.push(action.payload)
        },
        currentUrl: (state, action) => {
            state.currentUrl = action.payload;
        },
        addToRssList: (state, action) => {
            state.rssList.some((channel) => channel.title === action.payload.title)  ? state : state.rssList.push(action.payload);
        },
        catchError: (state, action) => {
            state.errors = action.payload;
        }
    },
});

export const { addToUrlList, currentUrl, addToRssList, catchError } = rssSlice.actions;

export default rssSlice.reducer;
