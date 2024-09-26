import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	theme: "Светлая",
	fontSize: 16,
}

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === "Светлая" ? "Темная" : "Светлая"
		},
		increaseFontSize: (state) => {
			state.fontSize += 1
		},
		decreaseFontSize: (state) => {
			if (state.fontSize > 10) {
				state.fontSize -= 1
			}
		},
		setFontSize: (state, action) => {
			state.fontSize = action.payload
		},
	},
})

export const { toggleTheme, increaseFontSize, decreaseFontSize, setFontSize } =
	themeSlice.actions

export default themeSlice.reducer
