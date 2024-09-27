import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	theme: "light",
	fontSize: 16,
}

const settingsSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light"
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
	settingsSlice.actions

export default settingsSlice.reducer
