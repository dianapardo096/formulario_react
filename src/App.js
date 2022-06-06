import React, {useState}from 'react';
import './App.css';
import{Formulario, H2,IconoUsuario,BotonInicio,Boton, MensajeError,MensajeExito} from'../src/Elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrush, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import CompInput from './Componentes/input';



function App ()  {
  //para validación
  const[usuario,cambiarUsuario]= useState({campo:'', valido: null});
  const[password,cambiarPassword]= useState({campo:'', valido: null});
  const[formularioValido,cambiarFormularioValido]= useState(null);



  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const onSubmit= (event) => {
    event.preventDefault();

    if(usuario.valido==='true'&& password.valido==='true'){
      cambiarFormularioValido(true)
      cambiarUsuario({campo:'', valido:null});
      cambiarPassword({campo:'', valido:null});
    }else{
      cambiarFormularioValido(false)

    }


  }


  return (
    <main className= 'login-fondo'>
      <Formulario action='' onSubmit={onSubmit}>
        <IconoUsuario icon={faPaintbrush}/>
        <H2>Inicio de sesión</H2>
        <CompInput
        estado={usuario}
        cambiarEstado={cambiarUsuario}

        tipo="mail"
        placeholder="ingrese su email"
        name="usuario"
        leyendaError="Su usuario es su correo electrónico"
        expresionRegular={expresiones.correo}
        />

        <CompInput
        estado={password}
        cambiarEstado={cambiarPassword}

        tipo="password"
        placeholder="ingrese su contraseña"
        name="contraseña"
        leyendaError="Contraseña debe ser superior a 4 digitos"
        expresionRegular={expresiones.password}
        />

      { formularioValido===false &&  < MensajeError>
          <p> 
            <FontAwesomeIcon icon={faExclamationTriangle }/>
            <b> Error:</b> Usuario o contraseña incorrecto
          </p>
        </ MensajeError>}
        <BotonInicio>
          <Boton type='submit'>Ingresar</Boton>

          { formularioValido &&  < MensajeExito>
          <p> 
            ¡Bienvenido!
          </p>
        </ MensajeExito>} 

        </BotonInicio>
        <BotonInicio>
         
          <h3>¿No tienes cuenta?</h3>
          <p>REGÍSTRATE</p>
        </BotonInicio>
      </Formulario>
    </main>
  );
}

export default App;