import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import store from "../store"

interface SearchState {
	value: string
}

const initialState: SearchState = { value: "" }

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		updateSearchTerm: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
	},
})

export const { updateSearchTerm } = searchSlice.actions
export default searchSlice.reducer
export type RootState = ReturnType<typeof store.getState>
