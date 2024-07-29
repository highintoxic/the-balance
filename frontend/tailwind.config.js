/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
import autoprefixer from "autoprefixer";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "gray-100",
				secondary: "rgba(88,220,143,0.57)",
				txt: "#000000",
				pBg: "#3DC2EC",
				blue: "#587ef4",
			},
		},
	},
	plugins: [scrollbar, autoprefixer],
};
