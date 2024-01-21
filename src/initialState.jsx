// importo el archivo data.json
import data from '../data.json';

// actualizo el default para pasarle los datos del json
export default {
  cart: [],
  buyer: [],
  orders: [],
  searchPro: [],
  products: data.products,
};

// export default {
//     cart: [],
//     buyer: [],
//     orders: [],
//     searchPro: [],
//     products: [
//       {
//         '_id': '1',
//         'name': 'Gorra',
//         "slug": "camiceta-1",
//         "codigo": "PR001",
//         "precio": 88.50, 
//         'img': {
//           'url-1': 'https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png',
//           'url-2': 'https://sublitextil.com'
//         },
//         "stock": 100, 
//         "precioOferta": null, 
//         'intro': 'Gorra deportiva. Logotipo personalizado, hecho de alta calidad, variedad de colores.',
//         "categoria": {
//             "nombre": "Categoria general",
//             "slug": "categoria-general",
//             "icono": "mug"
//         },
//         "descripcion": 
//           'Venta al por mayor en blanco logotipo personalizado 5 Panel deporte Gorras Gorros SARASA bordado algodón estampado papá béisbol malla espuma sombrero gorra de camionero',
//         "medidas": [
//           {'ancho': 30, 'alto': 20, 'profundidad': 35,}
//         ],
//         "caracteristicas": 
// 	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ],
//       },

//       {
//         '_id': '2',
//         'name': 'Taza blanca recta con asa',
//         "slug": "taza-1",
//         "codigo": "PR001",
//         "precio": 14.50, 
//         'img': {
//           'url-1': 'https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png',
//           'url-2': 'https://sublitextil.com'
//         },
//         "stock": 0, 
//         "precioOferta": 10, 
//         'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         "categoria": {
//             "nombre": "Categoria general",
//             "slug": "categoria-general",
//             "icono": "mug"
//         },
//         "caracteristicas": 
// 	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
//       },

//       {
//         '_id': '3',
//         'name': 'vaso para logotipo',
//         "slug": "pin-1",
//         "codigo": "PR001",
//         "precio": 100.50, 
//         'img': {
//           'url-1': 'https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png',
//           'url-2': 'https://sublitextil.com'
//         },
//         "stock": 100, 
//         "precioOferta": null, 
//         'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         "categoria": {
//             "nombre": "Categoria general",
//             "slug": "categoria-general",
//             "icono": "mug"
//         },
//         "caracteristicas": 
// 	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
//       },

//       {
//         '_id': '4',
//         'name': 'media larga color blanco',
//         "slug": "calcoPalzi-1",
//         "codigo": "PR001",
//         "precio": 142.50, 
//         'img': {
//           'url-1': 'https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png',
//           'url-2': 'https://sublitextil.com'
//         },
//         "stock": 100, 
//         "precioOferta": null, 
//         'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         "categoria": {
//             "nombre": "Categoria general",
//             "slug": "categoria-general",
//             "icono": "mug"
//         },
//         "caracteristicas": 
// 	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
//       },

//       {
//         '_id': '5',
//         'name': 'Zapatilla blanca para serigrafia en la lengueta',
//         "slug": "calcoPalzi-1",
//         "codigo": "PR001",
//         "precio": 142.50, 
//         'img': {
//           'url-1': 'https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png',
//           'url-2': 'https://sublitextil.com'
//         },
//         "stock": 100, 
//         "precioOferta": 20, 
//         'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         "categoria": {
//             "nombre": "Categoria general",
//             "slug": "categoria-general",
//             "icono": "mug"
//         },
//         "caracteristicas": 
// 	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
//       },

//       {
//         '_id': '6',
//         'name': 'Calcomania lista para pegar ',
//         "slug": "calcoPalzi-1",
//         "codigo": "PR001",
//         "precio": 142.50, 
//         'img': {
//           'url-1': 'https://sublitextil.com.ar/wp-content/uploads/2019/01/gorra-1.png',
//           'url-2': 'https://sublitextil.com'
//         },
//         "stock": 0, 
//         "precioOferta": null, 
//         'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         "categoria": {
//             "nombre": "Categoria general",
//             "slug": "categoria-general",
//             "icono": "mug"
//         },
//         "caracteristicas": 
// 	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
//       },
//     ],
//   };
