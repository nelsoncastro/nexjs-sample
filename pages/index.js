import { useState } from 'react'

function Home() {
  return (
    <div>
      <h2>Página principal</h2>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador,setContador] = useState(1)

  function adicionarContatdor() {
      setContador(contador + 1)
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContatdor}>Adicionar</button>
    </div>
  )
}

export default Home