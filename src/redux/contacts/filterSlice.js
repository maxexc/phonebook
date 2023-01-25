const { createSlice } = require("@reduxjs/toolkit");

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter(_, action) {
            return action.payload;
        }
    }
})

export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 