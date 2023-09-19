import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(2);

  const handleAddTwo = () => {
    setValue(value + 2);
  }

  const [fruit, setFruit] = useState("");
  const handleClickFruit = (currentFruit) => {
    setFruit(currentFruit);
  }
  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      backgroundColor: "#00FF00"
    }}>
      <button onClick={handleAddTwo}>Somar 2</button>
      <h1>O valor atual é {value}</h1>
      <hr />
      <button onClick={() => handleClickFruit("Maçã")}>Maçã</button>
      <button onClick={() => handleClickFruit("Banana")}>Banana</button>
      <button onClick={() => handleClickFruit("Morango")}>Morango</button>
      {fruit && (
        <h1>Você clicou em {fruit}</h1>
      )}
      {!fruit && (
        <h1>Clique em uma fruta</h1>
      )}
    </div>
  )
}

export default App
