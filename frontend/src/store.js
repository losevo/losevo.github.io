import { configureStore } from '@reduxjs/toolkit';
import rssReducer from './features/slices/rssSlices.js';

export default configureStore({
    reducer: {
        rss: rssReducer,
    },
});
