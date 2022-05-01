const data = [
    {
      id: 30,
      name: "Tetera 1",
      stock: 10,
      cost: 2500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROh3kNUyvEkzXATpGHn1Yt_ImbjTxch-KXXnm_vl-h_5hduGndbNU_J_4t1pa9E9Q3-pc&usqp=CAU"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sin Alcohol",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Tetera Modelo 2",
      stock: 10,
      cost: 4500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr90u2HIOK9DvUIwiJPJxiJ7pHwNDdz1V2A&usqp=CAU",      
      ],  sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sin Alcohol",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: [
        {
          "comment": "Muy rico y refrescante",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Tetera modelo 3 ",
      stock:12,
      cost: 5575,
      description: "Tetera confeccionada en fundicion de hierro. Mantiene la temperatura justa del te por más tiempo. Regalo ideal para las personas que necesitan frenar un poco su vorágine... y conectase con los verdaderos placeres de la vida. La capacidad de esta tetera es de 850 ml. Disponible en varios colores",
      capacity: 750,
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdP2f056FrXvxLohPjDOY4eY-mSnUwEVNL_w&usqp=CAU"      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Tetera modelo 4",
      stock: 10,
      cost: 2575,
      description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
      capacity: 750,
      image: ["https://www.ikea.com/es/es/images/products/hembjuden-tetera-blanco-negro__1010013_pe827843_s5.jpg?f=s"
       ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Set Velas 1",
      stock: 20,
      cost: 1765,
      description: "La linea Alambrado esta compuesta por vinos elegantes y de estilo moderno, donde se destacan claramente las características frutales de las variedades que los componen. Su paso por madera les otorgan una complejidad muy particular, acompañando de manera armónica y sutil la calidad obtenida desde el viñedo. Poseen un potencial de guarda de entre 4 y 6 años.\nAlambrado Malbec fue elaborado a partir de una cuidosa selección de uvas cosechadas de forma manual y criado en barricas de roble francés durante 10 meses.",
      capacity: 750,
      image: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/087/888/products/vela-paz-wedding-shop-regalos-11-79e9563e7e31eacd8216216176654586-1024-1024.png"      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Set Velas 2 ",
      stock: 10,
      cost: 2490,
      description: "Color: Rojo rubí con sutiles reflejos terracota. Aroma: Se destacan los aromas a frutas negras como higos, ciruelas y confitura de moras, armónicamente acompañados por notas de pimiento rojo, regaliz y tostado. Boca: Se percibe la untuosidad de la fruta madura junto a una elegante estructura tánica y persistencia en boca.",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_992040-MLA45771867660_042021-O.webp"      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 2,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Set Velas 3",
      stock: 8,
      cost: 3490,
      description: "Altos del Plata Chardonnay pertenece a la bodega Terrazas de los Andes. Su vino es de color amarillo dorado con destellos verdes. Su perfil fresco y frutado revela notas a flores blancas como jazmín y aromas a pera, durazno blanco y ananá. Acompañan sutiles notas tostadas y dulces como vainilla y miel. Presenta ligeros toques tostados y una acidez persistente.",
      capacity: 750,
      image: [
        "https://d22fxaf9t8d39k.cloudfront.net/ab11246e04acae7ce881b8e0644586a436e74c0ea30b4444cdfa8c20d46760c447041.jpeg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 2,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Set Velas 4",
      stock: 10,
      cost: 6300,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 375,
      image: ["https://arredo.vteximg.com.br/arquivos/ids/236381-800-800/81192Z60090-U_0.jpg?v=637707705546630000" ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 2,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Caja Dulce",
      stock: 100,
      cost: 3490,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 750,
      image: [
        "https://static.regalador.com/cdn-cgi/image/w=688,dpr=1,f=auto/https://static.regalador.com/es/wp-content/uploads/sites/1/nggallery/kitchuches/02_KITCUCHES_custom_1.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Portarretratos personalizable",
      stock: 10,
      cost: 3250,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: ["https://static.regalador.com/cdn-cgi/image/w=688,dpr=1,f=auto/https://static.regalador.com/es/wp-content/uploads/sites/1/nggallery/marcofoto/03_MARCOFOTO.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 4,
      brandId: 17,
      packingId: null,
      category: {
        name: "Licores",
        id: 5
      },
      brand: {
        id: 17,
        name: "Amareto Disaronno"
      },
      reviews: []
    }
  ];

export default data;
