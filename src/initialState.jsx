export default {
    cart: [],
    buyer: [],
    orders: [],
    searchProducts: [],
    products: [
      {
        '_id': '1',
        'nombre': 'Camiseta blanca lisa, cuello en V',
        "slug": "camiceta-1",
        "codigo": "PR001",
        "precio": 88.50, 
        'imagen': 'https://arepa.s3.amazonaws.com/camiseta.png',
        "stock": 100, 
        "precioOferta": null, 
        'intro': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "categoria": {
            "nombre": "Categoria general",
            "slug": "categoria-general",
            "icono": "mug"
        },
        "descripcion": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "medidas": [
          {'ancho': 30, 'alto': 20, 'profundidad': 35,}
        ],
        "caracteristicas": 
	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ],
      },

      {
        '_id': '2',
        'nombre': 'Taza blanca recta con asa',
        "slug": "taza-1",
        "codigo": "PR001",
        "precio": 14.50, 
        'imagen': 'https://arepa.s3.amazonaws.com/camiseta.png',
        "stock": 0, 
        "precioOferta": 10, 
        'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "categoria": {
            "nombre": "Categoria general",
            "slug": "categoria-general",
            "icono": "mug"
        },
        "caracteristicas": 
	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
      },

      {
        '_id': '3',
        'nombre': 'Taza negra recta con asa',
        "slug": "pin-1",
        "codigo": "PR001",
        "precio": 100.50, 
        'imagen': 'https://arepa.s3.amazonaws.com/camiseta.png',
        "stock": 100, 
        "precioOferta": null, 
        'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "categoria": {
            "nombre": "Categoria general",
            "slug": "categoria-general",
            "icono": "mug"
        },
        "caracteristicas": 
	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
      },

      {
        '_id': '4',
        'nombre': 'media larga color blanco',
        "slug": "calcoPalzi-1",
        "codigo": "PR001",
        "precio": 142.50, 
        'imagen': 'https://arepa.s3.amazonaws.com/camiseta.png',
        "stock": 100, 
        "precioOferta": null, 
        'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "categoria": {
            "nombre": "Categoria general",
            "slug": "categoria-general",
            "icono": "mug"
        },
        "caracteristicas": 
	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
      },

      {
        '_id': '5',
        'nombre': 'Zapatilla blanca para serigrafia en la lengueta',
        "slug": "calcoPalzi-1",
        "codigo": "PR001",
        "precio": 142.50, 
        'imagen': 'https://arepa.s3.amazonaws.com/camiseta.png',
        "stock": 100, 
        "precioOferta": 20, 
        'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "categoria": {
            "nombre": "Categoria general",
            "slug": "categoria-general",
            "icono": "mug"
        },
        "caracteristicas": 
	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
      },

      {
        '_id': '6',
        'nombre': 'Calcomania lista para pegar ',
        "slug": "calcoPalzi-1",
        "codigo": "PR001",
        "precio": 142.50, 
        'imagen': 'https://arepa.s3.amazonaws.com/camiseta.png',
        "stock": 0, 
        "precioOferta": null, 
        'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "categoria": {
            "nombre": "Categoria general",
            "slug": "categoria-general",
            "icono": "mug"
        },
        "caracteristicas": 
	        [ { "nombre": "Volumen", "valor": "100x100cm3" } ]
      },
    ],
  };
