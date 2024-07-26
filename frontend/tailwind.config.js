/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import autoprefixer from "autoprefixer";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FFFFF0",
				secondary: "#FFF8DC",
				txt: "#000000",
				pBg: "#3DC2EC",
				blue: "#587ef4",
			}
		},
	},
	plugins: [scrollbar, autoprefixer],
};
