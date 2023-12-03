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
    negro: 'black',
};

export const Styles = StyleSheet.create({


    avatarContainer:{ 
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
        justifyContent:'center',
        alignItems:'center', 
        marginBottom: 18, 
        paddingHorizontal:10,
    },

    producto_productos: { 
        marginVertical: 10,
        alignItems:'center',
        padding:10,
        backgroundColor:colores.dos,
    }, 

    avatar_productos:{ 
        width:100,
        height:100,
        borderRadius:100,
    }, 

    producto_texto_productos: { 
        fontSize:20,
        textAlign:'center'
    },

    producto_boton_productos: { 
        backgroundColor: colores.cinco,
        alignItems:'center',
        padding:10
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
      }



});