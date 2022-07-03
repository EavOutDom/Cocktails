import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlList = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async () => {
        try {
            const response = await fetch(urlList);
            const data = await response.json();
            return data;
        } catch (error) {
            return console.log(error);
        }
    }
);
 
export const fetchSingleCocktails = createAsyncThunk(
    "cocktails/fetchSingleCocktails",
    async (id) => {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            return console.log(error);
        }
    }
);

export const fetchSearchCocktails = createAsyncThunk(
    "cocktails/fetchSearchCocktails",
    async ({search}) => {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            return console.log(error);
        }
    }
);

const initialState = {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
};

export const cocktailsSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {
        removeSelection: (state, action) => {
            state.cocktail = [];
        },
    },
    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.cocktails = action.payload.drinks;
            state.loading = false;
            console.log("fulfilled");
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
            console.log("rejected");
        },
        [fetchSingleCocktails.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [fetchSingleCocktails.fulfilled]: (state, action) => {
            state.cocktail = action.payload.drinks;
            state.loading = false;
            console.log("fulfilled");
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
            console.log("rejected");
        },
        [fetchSearchCocktails.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [fetchSearchCocktails.fulfilled]: (state, action) => {
            state.cocktails = action.payload.drinks;
            state.loading = false;
            console.log("fulfilled");
        },
        [fetchSearchCocktails.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
            console.log("rejected");
        },
    },
});

export const { removeSelection } = cocktailsSlice.actions;
export default cocktailsSlice.reducer;
