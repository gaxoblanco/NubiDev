/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        productImageMedium:
          "url('https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png')",
        productImageSmall:
          "url('https://estilografik.com/web/image/product.template/772/image_256/%5BTX020%5D%20GORRAS%20MALLA%20NYLON%20?unique=301df32')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primario: "#4ADE04",
        secundario: "#B70707",
        // 'terciario': '#FF9D0B',
        cuarto: "#FF9D0B",
        transparent: "rgba(167, 167, 167, 0.67)",
      }),
      width: {
        128: "32rem",
      },
      textColor: {
        blanco: "#F6F6F6",
        negro: "#0A0909",
        primario: "#4ADE04",
        terciario: "#A0A0A0",
        amarillo: "#FFB800",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
    colors: {
      primary: "#FFC39E",
      secondary: "#fbd5ca",
      icons: "#BF8B5E",
      background: "#FEFEF5",
      text: "#5E483A",
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },

  plugins: [],
};
