// impariamo ad utilizzare gli hooks: qui faremo pratica con useState()
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'

// REGOLE DEGLI HOOKS:
// 1) È possibile utilizzare i React Hooks solamente nei componenti a FUNZIONE
// (no componenti a classe, no generiche funzioni JS)
// 2) È necessario invocare TUTTI gli hooks presenti nel componente ogni volta e sempre nello stesso ordine
// --> quindi non è possibile utilizzare gli hooks all'interno di strutture if/else, un ciclo o inserirli in un'altra funzione
// ovviamente prima del return :)

// creiamo un componente a funzione
const DemoUseState = () => {
  // useState()
  const [counter, setCounter] = useState(50) // nelle parentesi metto il valore iniziale
  const [isLoading, setIsLoading] = useState(true)

  // è come se fosse...
  // state = {
  //     counter: 0,
  //     isLoading: true
  // }

  return (
    <div>
      <h2>USESTATE NEI COMPONENTI A FUNZIONE</h2>
      <p>Il valore di counter è: {counter}</p>
      <button
        onClick={() => {
          //   setCounter(100) // imposto counter a 100
          setCounter(counter + 1) // leggo il valore presente e lo incremento di uno
        }}
      >
        INCREMENTA COUNTER
      </button>
      <div>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <button
          onClick={() => {
            setIsLoading(!isLoading) // toggla il valore
          }}
        >
          {isLoading ? 'SPEGNI' : 'ACCENDI'} SPINNER
        </button>
      </div>
    </div>
  )
}

export default DemoUseState
