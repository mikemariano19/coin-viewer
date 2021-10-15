module.exports = {
  purge: {
		content:['.public/**/*.html']
	},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
