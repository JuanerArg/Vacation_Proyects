import { useState } from 'react'
import Countdown from 'react-countdown';
import './App.css'

function App() {
  
  const [dif, setDif] = useState('');
  const [escondido, setEscondido] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = e.target.elements.fecha.value;;
    console.log(data)
    setDif(data);
    setEscondido(false);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setDif(e.target.value)
  }

  return (
    <main>
      <h1>Cuenta Regresiva</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="date" 
          name="fecha"
          value={dif} 
          onChange={handleChange}
          id="fecha" 
        />
        <button type='submit'>Enviar</button>
      </form>
      <p hidden={escondido}><Countdown date={new Date(dif)}/></p>
    </main>
  )
}

export default App
