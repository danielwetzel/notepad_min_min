import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			fontFamily: {
				sans: [
					"Avenir Next",
					"SF Pro Display",
					...fontFamily.sans
				],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			typography: {
				DEFAULT: {
					css: {
						fontFamily: [
							"Avenir Next",
							"SF Pro Display",
							...fontFamily.sans
						].join(", "),
						"--tw-prose-body": "hsl(var(--foreground))",
						"--tw-prose-headings": "hsl(var(--foreground))",
						"--tw-prose-lead": "hsl(var(--muted-foreground))",
						"--tw-prose-links": "hsl(var(--primary))",
						"--tw-prose-bold": "hsl(var(--foreground))",
						"--tw-prose-counters": "hsl(var(--muted-foreground))",
						"--tw-prose-bullets": "hsl(var(--muted-foreground))",
						"--tw-prose-hr": "hsl(var(--border))",
						"--tw-prose-quotes": "hsl(var(--foreground))",
						"--tw-prose-quote-borders": "hsl(var(--border))",
						"--tw-prose-captions": "hsl(var(--muted-foreground))",
						"--tw-prose-code": "hsl(var(--foreground))",
						"--tw-prose-pre-code": "hsl(var(--foreground))",
						"--tw-prose-pre-bg": "hsl(var(--muted))",
						"--tw-prose-th-borders": "hsl(var(--border))",
						"--tw-prose-td-borders": "hsl(var(--border))",
					}
				}
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
} satisfies Config;

export default config;
