import styled from 'styled-components';
import './App.css';
import{Formulario, H2,GrupoInput, Input,LeyendaError} from'../src/Elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <main className= 'login-fondo'>
      <Formulario>
      <FontAwesomeIcon icon={faUserAstronaut}/>
      <H2>Inicio de sesión</H2>
        <div>
          <Input type='text' placeholder='Usuario'/>
          <FontAwesomeIcon icon={faSquareCheck}/>
        </div>
        <LeyendaError> loren imspup</LeyendaError>
        <div>
          <input type='text' placeholder='Contraseña'/>
        </div>
      </Formulario>
    </main>
  );
}

export default App;