import {StyleSheet} from 'react-native'; 


export const colores = {
    uno: '#01B3D9',
    dos: '#86c9df',
    tres: '#a2dfeb',
    cuatro: '#e1f7fb',
    cinco: '#dedfdf',
    seis: '#d1a49f',
    siete: '#ffffff',
    ocho: 'gray',
    nueve:'#4451D3',
    negro: 'black',
};

export const Styles = StyleSheet.create({


    avatarContainer:{ 
        flex:1,
        alignItems:'center', 
        marginTop:20
    },

    title:{
        fontSize:30,
        marginBottom:10
    },
    title_carrito:{
        fontSize:30,
        marginBottom:10,
        color:colores.negro
    },

    avatar: { 
        width:150, 
        height:150,
        borderRadius:100,
    },
    menuTexto:{ 
        fontSize:20, 
        textAlign:'center',
    }, 
    menuContainer: { 
        margin:30,
        alignItems:'center',
    },
    MenuBoton:{
        marginVertical:10,
    }, 

    login_container: { 
        flex: 1,
        backgroundColor: colores.cuatro,
        padding:20, 
        alignItems:'center',
    },

    login_image:{ 
        width: 200,
        height:200,
        borderRadius:100,
        marginVertical:20,
    },
    
    login_texto:{ 
        fontSize:20, 
        color: colores.negro, 
        fontWeight: 'bold',
    }, 

    login_input: { 
        width:'100%',
        height:40,
        margin:12,
        borderWidth:1,
        padding:10, 
        borderLeftWidth:0,
        borderTopWidth:0,
        borderRightWidth:0,
        borderBottomWidth:1,
        borderColor: colores.negro,
        color:'black'
    },

    login_boton:{ 
        backgroundColor: colores.tres,
        width:100,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        marginTop:10
    }, 

    login_boton_texto:{ 
        fontSize:15,
        color:colores.uno,
        fontWeight:'bold',
        textAlign:'center',
    },

    fila_productos: { 
        margin: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },

    producto_productos: { 
        marginVertical: 10,
        alignItems:'center',
        padding:20,
        backgroundColor:colores.dos,
    }, 

    avatar_productos:{ 
        width:100,
        height:100,
        borderRadius:100,
    }, 

    producto_texto_productos: { 
        fontSize:20,
        textAlign:'center',
        marginVertical:2,
    },

    producto_boton_productos: { 
        backgroundColor: colores.nueve,
        alignItems:'center',
        padding:15
    },

    globalMargin: {
        marginHorizontal: 20,
      },

    containter_producto:{ 
        backgroundColor:colores.dos,
        padding:20,
        margin:10,
        alignItems:'center',
        borderRadius:10,
    }, 

    texto_producto1:{ 
            fontSize:18,
    },

    boton_producto:{ 
        backgroundColor:colores.cinco,
        alignItems:'center',
        margin:10, 
        padding:10,
        borderRadius:10,
    },

    carrito_container: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: colores.cuatro, // Cambié el color a uno más suave
        borderRadius: 8, // Añadí bordes redondeados
        padding: 16, // Añadí un espacio interno
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
      },
      
      carrito_texto_titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colores.uno, // Cambié el color del texto
      },
      
      carrito_vistas: {
        padding: 5,
      },
      
      carrito_vista_botones: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        padding:5,
        marginTop:15 ,
        marginBottom:15 ,
        alignItems: 'center',
        // Añade un borde temporal para diagnosticar
        // borderWidth: 1,
        // borderColor: 'red',
      },
      
      carrito_total_container: {
        alignItems: 'center',
        margin: 3,
        marginTop: 20, // Añadí un margen superior
      },
      
      carrito_total_texto: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colores.uno, // Cambié el color del texto
      },
      
      texto_car:{
        color:'black',
        fontSize:15,
        padding:5
      },

      floatingButtonsContainer: {
        position: 'absolute',
        bottom: 10,
        right: -10,
        marginVertical:5,
        // flexDirection: 'row',
        zIndex: 1, // Asegura que los botones estén por encima del contenido
      },
      floatingButton: {
        backgroundColor: "#25D366",
        marginVertical:10,
        borderRadius: 25,
         width: 70,
         height:50 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      floatingButton2: {
        backgroundColor: "#DB4A39",
        marginVertical:10,
        borderRadius: 25,
         width: 70,
         height:50 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },
      floatingButton3: {
        backgroundColor: "#8C8C8C",
        marginVertical:10,
        borderRadius: 25,
         width: 70,
         height:50 ,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      },



});

export const Styles2 = StyleSheet.create({
  fila_productos: {
    // Agrega estilos para la fila de productos si es necesario
    marginBottom: 20,
  },

  producto_productos: {
    // Estilos específicos para el componente de producto en la lista
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    overflow: 'hidden', // Esto asegura que las esquinas redondeadas se vean bien
  },
  avatar_productos: {
    width: '100%', // Toma todo el ancho del contenedor
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover', // Ajusta la imagen para cubrir todo el espacio
  },

  producto_texto_productos: {
    fontSize: 18,
    margin: 10,
  },

  producto_boton_productos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9800', // Color del fondo del botón
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  menuTexto: {
    color: '#fff', // Color del texto del botón
    fontSize: 16,
  },
});

export const Styles3 = StyleSheet.create({
  cardContainer: {
    backgroundColor: colores.uno,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',  // Centra horizontalmente
    justifyContent: 'center',  // Centra verticalmente
  },

  // Agrega otros estilos que desees...
});

// ...

export const Styles4 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colores.dos,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: colores.siete,
  },
  texto_producto1: {
    fontSize: 18,
    marginBottom: 5,
    color: colores.siete,
  },
  boton_producto: {
    backgroundColor: colores.nueve,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  menuTexto: {
    fontSize: 16,
    color: colores.siete,
    marginLeft: 10,
  },
});


export const Styles5 = StyleSheet.create({
  carrito_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',  // Permite que los elementos se envuelvan si no caben en una sola fila
    marginTop: 10,
    backgroundColor: '#EFE4B0', // Amarillo claro
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    justifyContent: 'space-between',  // Distribuye los elementos de forma uniforme en la fila
  },

  carrito_texto_titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733', // Naranja brillante
  },

  carrito_vistas: {
    padding: 10,
  },

  carrito_vista_botones: {
    flexDirection:"row",
    justifyContent: 'center',  // Centra los botones verticalmente
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',  // Ocupa el ancho completo del contenedor
  },

  carrito_total_container: {
    alignItems: 'center',
    margin: 5,
    marginTop: 20,
  },

  carrito_total_texto: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF5733', // Naranja brillante
  },

  texto_car: {
    color: 'black',
    fontSize: 16,
    padding: 8,
  },

  avatar_productos: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },

  carrito_boton: {
    backgroundColor: '#FFF',  // Color de fondo del botón
    borderRadius: 8,
    padding: 8,
    margin: 5,
  },

  title_carrito: {
    fontSize: 32,
    marginBottom: 12,
    color: '#333', // Negro suave
  },
});


