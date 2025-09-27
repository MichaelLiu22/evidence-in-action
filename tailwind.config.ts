import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	safelist: [
		"backdrop-blur-sm",
		"backdrop-blur-md",
		"backdrop-blur-lg",
		"bg-white/10",
		"bg-white/20",
		"bg-black/40",
		"border-white/20",
		"shadow-lg",
		"shadow-2xl",
		"bg-[length:400%_400%]",
		"animate-gradient-move",
		"animate-float",
		"animate-[gradient-move_22s_ease_infinite]",
		"animate-[float_8s_ease-in-out_infinite]",
	],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				medical: {
					grid: 'hsl(var(--medical-grid))',
					wave: 'hsl(var(--medical-wave))',
					evidence: 'hsl(var(--evidence-highlight))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'section': 'var(--section-spacing)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'counter-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0%)' }
				},
				'pulse-medical': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)' 
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.02)' 
					},
				},
				'gradient-move': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'50%': { transform: 'translate3d(0, -8px, 0)' }
				},
				'float-slower': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
					'50%': { transform: 'translate3d(-6px, -10px, 0) scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'counter-up': 'counter-up 0.4s ease-out',
				'pulse-medical': 'pulse-medical 2s ease-in-out infinite',
				'gradient-move': 'gradient-move 22s ease infinite',
				'float': 'float 8s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-slower': 'float-slower 12s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
