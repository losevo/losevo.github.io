/* eslint-disable no-unused-expressions */
import teamsForRatings from "../teamsForRating";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ratings: teamsForRatings,
    activeRegion: "ALL",
    activeDate: 'march25',
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        changeActivePreviousWeeks: (state, action) => {
            const currentTeam = state.ratings.filter((team) => team.name === action.payload.name);
            currentTeam[0].active = !currentTeam[0].active;
        },
        changeActiveRegion: (state, action) => {
            state.activeRegion = action.payload;
        },
        changeActiveDate: (state, action) => {
            state.activeDate = action.payload;
        }
    },
});

export const { changeActivePreviousWeeks, changeActiveRegion, changeActiveDate } = ratingSlice.actions;

export default ratingSlice.reducer;
