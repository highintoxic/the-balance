/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#FFFFF0",
			secondary: "#FFF8DC",
			txt: "#000000",
			pBg: "#3DC2EC",
			blue: "#587ef4",
		},
		extend: {},
	},
	plugins: [
		scrollbar
	],
};
