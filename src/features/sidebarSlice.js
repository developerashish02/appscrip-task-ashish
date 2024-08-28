import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isVisible: true,
    filters: {
      idealFor: [],
      occasion: [],
      work: [],
      fabric: [],
    },
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isVisible = !state.isVisible;
    },
    updateFilter: (state, action) => {
      const { filterCategory, filterValue } = action.payload;
      const currentFilters = state.filters[filterCategory];
      if (currentFilters.includes(filterValue)) {
        state.filters[filterCategory] = currentFilters.filter(
          (value) => value !== filterValue
        );
      } else {
        state.filters[filterCategory] = [...currentFilters, filterValue];
      }
    },
  },
});

export const { toggleSidebar, updateFilter } = sidebarSlice.actions;

export default sidebarSlice.reducer;
