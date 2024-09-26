import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./SettingSlice"

const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
})

export default store
