/* eslint-disable no-unused-expressions */
import teamsForRatings from "../teamsForRating";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ratings: teamsForRatings,
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        changeActivePreviousWeeks: (state, action) => {
            const currentTeam = state.ratings.filter((team) => team.name === action.payload.name);
            currentTeam[0].active = !currentTeam[0].active;
        }
    },
});

export const { changeActivePreviousWeeks } = ratingSlice.actions;

export default ratingSlice.reducer;
