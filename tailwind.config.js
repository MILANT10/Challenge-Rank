/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.html', 'src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        white: 'hsl(var(--white) / <alpha-value>)',
        light: 'hsl(var(--lightGrey) / <alpha-value>)',
        medium: 'hsl(var(--MediumGrey) / <alpha-value>)',
        darkBlue: 'hsl(var(--DarkBlue) / <alpha-value>)',
        VeryDarkBlue: 'hsl(var(--VeryDarkBlue) / <alpha-value>)',
        
      },
    },
  },
  plugins: [],
}

