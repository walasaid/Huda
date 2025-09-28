module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Healing Garden Theme
        primary: {
          DEFAULT: "#2E8B57", // sea-green
          50: "#F0F8F4", // very light sea-green
          100: "#D4F1E0", // light sea-green
          200: "#A9E3C1", // medium-light sea-green
          300: "#7DD5A2", // medium sea-green
          400: "#52C783", // medium-dark sea-green
          500: "#2E8B57", // sea-green base
          600: "#267A4D", // dark sea-green
          700: "#1E6943", // darker sea-green
          800: "#165839", // very dark sea-green
          900: "#0E472F", // deepest sea-green
        },
        // Secondary Colors - Gentle Support
        secondary: {
          DEFAULT: "#9CAF88", // sage-green
          50: "#F7F9F5", // very light sage
          100: "#EEF2EA", // light sage
          200: "#DDE5D5", // medium-light sage
          300: "#CCD8C0", // medium sage
          400: "#BBCBAB", // medium-dark sage
          500: "#9CAF88", // sage base
          600: "#8A9E7A", // dark sage
          700: "#788D6C", // darker sage
          800: "#667C5E", // very dark sage
          900: "#546B50", // deepest sage
        },
        // Accent Colors - Divine Guidance
        accent: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FDF9F0", // very light gold
          100: "#FBF3E1", // light gold
          200: "#F7E7C3", // medium-light gold
          300: "#F3DBA5", // medium gold
          400: "#EFCF87", // medium-dark gold
          500: "#DAA520", // goldenrod base
          600: "#C4941D", // dark gold
          700: "#AE831A", // darker gold
          800: "#987217", // very dark gold
          900: "#826114", // deepest gold
        },
        // Background Colors
        background: "#FEFEFE", // pure white
        surface: {
          DEFAULT: "#F8F9FA", // light gray
          50: "#FFFFFF", // pure white
          100: "#F8F9FA", // very light gray
          200: "#E9ECEF", // light gray
          300: "#DEE2E6", // medium-light gray
          400: "#CED4DA", // medium gray
          500: "#ADB5BD", // medium-dark gray
        },
        // Text Colors
        text: {
          primary: "#2C3E50", // dark blue-gray
          secondary: "#6C757D", // medium gray
          muted: "#868E96", // light gray
          disabled: "#ADB5BD", // very light gray
        },
        // Status Colors
        success: {
          DEFAULT: "#28A745", // green-600
          50: "#F0FDF4", // very light green
          100: "#DCFCE7", // light green
          500: "#28A745", // green base
          600: "#22C55E", // dark green
        },
        warning: {
          DEFAULT: "#FFC107", // amber-400
          50: "#FFFBEB", // very light amber
          100: "#FEF3C7", // light amber
          500: "#FFC107", // amber base
          600: "#F59E0B", // dark amber
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FEF2F2", // very light red
          100: "#FEE2E2", // light red
          500: "#DC3545", // red base
          600: "#EF4444", // dark red
        },
      },
      fontFamily: {
        headline: ['Amiri', 'serif'],
        body: ['Noto Sans Arabic', 'sans-serif'],
        cta: ['Cairo', 'sans-serif'],
        accent: ['Scheherazade New', 'serif'],
        sans: ['Noto Sans Arabic', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(46, 139, 87, 0.1)',
        'gentle': '0 2px 10px rgba(46, 139, 87, 0.08)',
        'subtle': '0 1px 5px rgba(46, 139, 87, 0.05)',
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
        'soft-fade-in': 'soft-fade-in 300ms ease-out forwards',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.02)',
          },
        },
        'soft-fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}