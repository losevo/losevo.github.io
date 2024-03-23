import { configureStore } from '@reduxjs/toolkit';
import rssReducer from './features/slices/rssSlices.js';
import ratingReducer from './features/slices/ratingSlices.js';

export default configureStore({
    reducer: {
        rss: rssReducer,
        rating: ratingReducer,
    },
});
