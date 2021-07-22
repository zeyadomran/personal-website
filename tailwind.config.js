module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				heading: ["IBM Plex Sans", "Helvetica", "sans-serif"],
				body: ["IBM Plex Sans", "Arial", "sans-serif"],
			},
			keyframes: {
				fadeIn: {
					"0%": {
						opacity: 0,
						transform: "translate3d(0,40px,0)",
					},
					"100%": {
						opacity: 1,
						transform: "translate3d(0,0,0)",
					},
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
			},
			transitionProperty: {
				height: "height",
			},
			backgroundImage: (theme) => ({
				"hero-pattern": "url('/pattern.svg')",
			}),
			blur: {
				xs: "1px",
			},
			backgroundSize: {
				"50%": "50%",
				16: "4rem",
			},
			colors: {
				white: "#FCFAFA",
				black: "#070707",
				blue: {
					DEFAULT: "#082DFF",
					50: "#EDF0FF",
					100: "#D4DAFF",
					200: "#A1AFFF",
					300: "#6E84FF",
					400: "#3B58FF",
					500: "#082DFF",
					600: "#0020D4",
					700: "#0018A1",
					800: "#00106E",
					900: "#00093B",
				},
				pink: {
					DEFAULT: "#FF42D0",
					50: "#FFFFFF",
					100: "#FFFFFF",
					200: "#FFDBF6",
					300: "#FFA8E9",
					400: "#FF75DD",
					500: "#FF42D0",
					600: "#FF0FC3",
					700: "#DB00A5",
					800: "#A8007E",
					900: "#750058",
				},
				orange: {
					DEFAULT: "#FB8B24",
					50: "#FFFFFF",
					100: "#FFF5EC",
					200: "#FEDBBA",
					300: "#FDC088",
					400: "#FCA656",
					500: "#FB8B24",
					600: "#E87104",
					700: "#B65903",
					800: "#844002",
					900: "#522801",
				},
			},
		},
	},
	variants: {
		animation: ["motion-safe"],
		extend: {},
	},
	plugins: [],
};
