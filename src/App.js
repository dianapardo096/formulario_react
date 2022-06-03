import './App.css';
import{Formulario, H2,GrupoInput, Input,LeyendaError,IconoValidacion,IconoUsuario,BotonInicio,Boton, MensajeError} from'../src/Elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faUserAstronaut, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <main className= 'login-fondo'>
      <Formulario>
        <IconoUsuario icon={faUserAstronaut}/>
        <div>
            <H2>Inicio de sesión</H2>
            <GrupoInput>
              <Input type='text' placeholder='Usuario'/>
              <IconoValidacion icon={faSquareCheck}/>
            </GrupoInput>
            <LeyendaError> loren imspup</LeyendaError>
            <GrupoInput>
              <Input type='text' placeholder='Contraseña'/>
              <IconoValidacion icon={faSquareCheck}/>
            </GrupoInput>
        </div>
      { false &&  < MensajeError>
          <p> 
            <FontAwesomeIcon icon={faExclamationTriangle }/>
            <b> Error:</b> Usuario o contraseña incorrecto
          </p>
        </ MensajeError>}
        <BotonInicio>
          <Boton type='submit'>Ingresar</Boton>
          <h3>¿No tienes cuenta?</h3>
          <a>REGÍSTRATE</a>
        </BotonInicio>
      </Formulario>
    </main>
  );
}

export default App;