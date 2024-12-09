import { createSlice } from "@reduxjs/toolkit";

const LayoutSlice = createSlice({
    name: "layout",
    initialState: {
        currentPage: 1,
        itemsPerPage: 6,
        viewType: 'grid',
    },
    reducers: {
        setGridView: (state) => {
            state.viewType = 'grid';
        },
        setListView: (state) => {
            state.viewType = 'list';
        },
    },
});
export const { setGridView, setListView } = LayoutSlice.actions;

export default LayoutSlice.reducer;