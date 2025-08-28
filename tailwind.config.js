export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e6f1ff',
          200: '#cce3ff',
          300: '#99c7ff',
          400: '#66abff',
          500: '#338fff',
          600: '#006eff',
          700: '#0055cc',
          800: '#003b99',
          900: '#002266',
        },
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        primary: {
          50: '#f0fafc',
          100: '#e0f5f9',
          200: '#bae8f0',
          300: '#7ed4e4',
          400: '#38b8d1',
          500: '#007A8F', // Darker base color
          600: '#006677', // Darker hover state
          700: '#005260',
          800: '#003F4A',
          900: '#002A33',
        },
        accent: {
          500: '#8b5cf6', // Keep purple as secondary
          600: '#7c3aed',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
      },
      spacing: {
        'section-mobile': '3rem',    // 48px
        'section-desktop': '6rem',   // 96px
        'container-mobile': '1rem',  // 16px
        'container-desktop': '1.5rem', // 24px
      },
      fontSize: {
        'display-mobile': ['2.5rem', { lineHeight: '1' }],    
        'display-desktop': ['3.5rem', { lineHeight: '1.1' }], 
        'h1-mobile': ['2rem', { lineHeight: '1' }],         
        'h1-desktop': ['2.75rem', { lineHeight: '1.2' }],     
        'h2-mobile': ['1.75rem', { lineHeight: '1.17' }],    // 10% tighter than desktop
        'h2-desktop': ['2.25rem', { lineHeight: '1.3' }],
        'body-large': ['1.125rem', { lineHeight: '1.35' }],   // 10% tighter than 1.5
        'body': ['1rem', { lineHeight: '1.35' }],             // 10% tighter than 1.5
        'body-small': ['0.875rem', { lineHeight: '1.35' }],   // 10% tighter than 1.5
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        serif: [
          'IBM Plex Serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif'
        ],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
}