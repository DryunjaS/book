import PageHome from "../page/home/PageHome"
import PagePreview from "../page/preview/PagePreview"

export const publicRoutes = [
	{
		path: "/",
		Component: PagePreview,
	},
	{
		path: "/home",
		Component: PageHome,
	},
]
