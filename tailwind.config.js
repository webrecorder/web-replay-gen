/** @type {import('tailwindcss').Config} */
module.exports = {
  // Look in all 11ty template files
  content: [
    'src/**/*.{html,md,liquid,njk,hbs,mustache,ejs,haml,pug}',
    'src/**/*.11ty.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
