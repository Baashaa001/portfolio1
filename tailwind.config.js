/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0e17',
          surface: '#0f172a',
          card: 'rgba(15, 23, 42, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          cardHover: 'rgba(30, 41, 59, 0.8)',
        },
        brand: {
          purple: '#8b5cf6',
          violet: '#7c3aed',
          indigo: '#6366f1',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #9d74f8 0%, #7579f3 50%, #5293f8 100%)',
        'subtle-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)',
        'hero-radial': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(139, 92, 246, 0.3)',
        'glow-md': '0 0 30px -5px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(99, 102, 241, 0.4)',
        'glow-blue': '0 0 25px -4px rgba(59, 130, 246, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
