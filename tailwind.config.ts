/* eslint-disable @typescript-eslint/no-explicit-any */
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'
import defaultTheme from 'tailwindcss/defaultTheme'

import svgToDataUri from 'mini-svg-data-uri'

// import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        ...defaultTheme.screens,
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: {
          primary: 'var(--primary)',
          secondary: 'var(--whiteSmoke)',
          tertiary: 'var(--timberwolf)',
        },
        button: {
          primary: 'var(--pineGreen)',
          secondary: 'var(--aquamarine)',
          tertiary: 'var(--white)',
          quaternary: 'var(--antiflashWhite)',
        },
        border: {
          danger: 'var(--danger)',
          active: 'var(--primary)',
          tertiary: 'var(--timberwolf)',
          quaternary: 'var(--raisinBlack)',
        },
        text: {
          primary: 'var(--night)',
          secondary: 'var(--primary)',
          tertiary: 'var(--platinum)',
          quaternary: 'var(--white)',
          quinary: 'var(--inactive)',
        },
        // border: "hsl(var(--border))",
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // background: "hsl(var(--background))",
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
}

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
