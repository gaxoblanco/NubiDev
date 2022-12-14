/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'productImageMedium': "url('https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png')",
        'productImageSmall': "url('https://estilografik.com/web/image/product.template/772/image_256/%5BTX020%5D%20GORRAS%20MALLA%20NYLON%20?unique=301df32')"
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primario': '#4ADE04',
        'secundario': '#B70707',
        // 'terciario': '#FF9D0B',
        'cuarto': '#FF9D0B',
        'transparent': 'rgba(167, 167, 167, 0.67)',
      }),
      textColor:{
        'blanco': '#F6F6F6',
        'negro': '#0A0909',
        'primario': '#4ADE04',
        'terciario': '#A0A0A0',
        'amarillo': '#FFB800',
      },
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif']
      },
      fontSize: {
        sm: ['1.2rem', '20rem'],
        base: ['1.6rem', '2.4rem'],
        lg: ['2rem', '2.8rem'],
        xl: ['4rem', '4.6rem'],
      }
    },
  },
  variants:{
    width: ["responsive", "hover", "focus"],
    extend: {},
  },

  plugins: [],
}
