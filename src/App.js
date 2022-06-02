import './App.css';
import{Formulario, H2,GrupoInput, Input,LeyendaError,IconoValidacion,IconoUsuario} from'../src/Elementos/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut} from '@fortawesome/free-solid-svg-icons';


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
        </div>
          <div>
            <input type='text' placeholder='Contraseña'/>
          </div>
      </Formulario>
    </main>
  );
}

export default App;