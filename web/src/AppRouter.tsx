import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Markets from "./pages/markets";
import Trade from "./pages/trade";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				index: true,
				element: <Markets />,
			},
			{
				path: "trade",
				element: <Trade />,
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;

