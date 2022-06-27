import { createSlice } from "@reduxjs/toolkit";

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


const initialState = {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
}

export const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {

    }
});