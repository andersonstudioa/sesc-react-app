import { useState } from 'react'

function TestUseState() {
  const [value, setValue] = useState(2);

  const handleAddTwo = () => {
    setValue(value + 2 );
  }

  const [fruit, setFruit] = useState("");

  const handleClickFruit = (currentFruit) => {
    setFruit(currentFruit);
  }

  return (
    <div style={{
      backgroundColor: "#FFFFFF",
      padding: 20,
      textAlign: "center"
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
        <h1>Escolha uma fruta</h1>
      )}
    </div>
  )
}

export default TestUseState;