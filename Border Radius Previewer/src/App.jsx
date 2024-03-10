
import { useState } from 'react'

function App() {

  const [topLeftRadius, setTopLeftRadius] = useState()
  const [topRightRadius, setTopRightRadius] = useState()
  const [bottomLeftRadius, setBottomLeftRadius] = useState()
  const [bottomRightRadius, setBottomRightRadius] = useState()

  const caracteristicas = {
    width: "100px",
    height: "100px",
    border: "solid black",
    borderTopLeftRadius: `${topLeftRadius}px`,
    borderTopRightRadius: `${topRightRadius}px`,
    borderBottomLeftRadius: `${bottomLeftRadius}px`,
    borderBottomRightRadius: `${bottomRightRadius}px`
  }

  const handleChange1 = e => {

    let value = e.target.value;

    if(value === ""){
      value = "0";
    }

    setTopLeftRadius(value);
  }

  const handleChange2 = e => {

    let value = e.target.value;

    if(value === ""){
      value = "0";
    }

    setTopRightRadius(value)
  }

  const handleChange3 = e => {

    let value = e.target.value;

    if(value === ""){
      value = "0";
    }

    setBottomLeftRadius(value);
  }

  const handleChange4 = e => {

    let value = e.target.value;

    if(value === ""){
      value = "0";
    }

    setBottomRightRadius(value);
  }

  const gral = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    margin: "0",
    padding: "0",
  }

  const form = {
    display: "flex",
    flexDirection: "column",
    margin: "5px"
  }

  return (
    <div style={gral}>

      <p>Border Radious Previewer</p>

      <div style={caracteristicas}/>

      <form style={form}>

        <input style={{margin: "5px"}} 
          type='text' 
          value={topLeftRadius} 
          onChange={handleChange1} 
          placeholder='Borde Arriba Izquierda'/>

        <input style={{margin: "5px"}} 
          type='text' 
          value={topRightRadius} 
          onChange={handleChange2} 
          placeholder='Borde Arriba Derecha'/>

        <input style={{margin: "5px"}} 
          type='text' 
          value={bottomLeftRadius} 
          onChange={handleChange3} 
          placeholder='Borde Abajo Izquierda'/>

        <input style={{margin: "5px"}} 
          type='text' 
          value={bottomRightRadius} 
          onChange={handleChange4} 
          placeholder='Borde Abajo Derecha'/>

      </form>
    </div>
  )
}

export default App
