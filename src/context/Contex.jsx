import {create} from 'zustand'; 

export const useUsuarioStore = create((set) =>({

    authUsuario: false, 
    emailUsuario:"", 
    nombreUsuario:"",
    fotoUsuario:"",
    tokenUsuario:"", 

    // authUsuario: true, 
    // emailUsuario:"zdavid505@gmail.com", 
    // nombreUsuario:"Emmanuel",
    // fotoUsuario:"rojo.png",
    // tokenUsuario:"aaaaa", 

    signIn:(auth1,email1,nombre1,foto1,token1) => 
    set(() => ({ 
        authUsuario:auth1,
        emailUsuario:email1,
        nombreUsuario:nombre1,
        fotoUsuario:foto1,
        tokenUsuario:token1,
    })),   
    singOut: () => 
        set(() => (
            { 
                authUsuario: false, 
                emailUsuario:"", 
                nombreUsuario:"",
                fotoUsuario:"",
                tokenUsuario:"", 
            })),
}));