import styledComponents from 'styled-components';
import './App.css';


function App() {
  return (
    <main className= 'login-fondo'>
      <Formulario>
        <div>
          <input type='text' placeholder='Usuario'/>
        </div>
        <div>
          <input type='text' placeholder='Contraseña'/>
        </div>
      </Formulario>
    </main>
  );
}

export default App;