/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"ex-white": "#f4f4f6",
				"ex-gray": "#969faf",
			},
		},
	},
	plugins: [],
};

