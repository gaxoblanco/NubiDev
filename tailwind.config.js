module.exports={
    purge:[
        './src/**/*.html',
    ],
    darkMode: false,
    theme:{
        extende: {
            backgroundImage : {
                'productImageMedium': "url('https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png')",
                'productImageSmall': "url('https://estilografik.com/web/image/product.template/772/image_256/%5BTX020%5D%20GORRAS%20MALLA%20NYLON%20?unique=301df32')"
            },
            backgroundColor: theme =>({
                ...theme('colors'),
                'verde': '#4ADE04',
                'rojo': '#B70707',
                'naranja': '#FF9D0B',
            }),
            textColor:{
                'blanco': '#F6F6F6',
                'negro': '#0A0909',
                'gris': '#A0A0A0',
                'amarillo': '#FFB800',
            },
            fontFamily:{
                Montserrat:['Montserrat', 'sans-serif']
            }
        },
    },
    variants: {
        extende:{},
    },
    plugins: [],
}