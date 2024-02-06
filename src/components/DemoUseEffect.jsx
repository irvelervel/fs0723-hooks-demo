// useEffect() è un hook che serve ad accedere ai metodi di lifecycle nei componenti a funzione
// nello specifico, useEffect può venire utilizzato per simulare:
// - componentDidMount
// - componentDidUpdate
// (- componentWillUnmount)

import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

// REGOLE DEGLI HOOKS:
// 1) È possibile utilizzare i React Hooks solamente nei componenti a FUNZIONE
// (no componenti a classe, no generiche funzioni JS)
// 2) È necessario invocare TUTTI gli hooks presenti nel componente ogni volta e sempre nello stesso ordine
// --> quindi non è possibile utilizzare gli hooks all'interno di strutture if/else, un ciclo o inserirli in un'altra funzione
// ovviamente prima del return :)

// in un progetto React è possibile utilizzare contemporaneamente componenti a classe e componenti a funzione con hooks!

const DemoUseEffect = () => {
  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  // useEffect() è un hook che può accettare fino a DUE parametri, il primo è obbligatorio.
  // il primo parametro è una callback, ovvero una funzione (che viene passata come parametro ad un'altra funzione)
  useEffect(() => {
    // se noi utilizziamo useEffect SENZA secondo parametro, ovvero senza array di dipendenze, la nostra funzione
    // verrà eseguita ad ogni render
    // questo è il comportamento di una callback inserita in render() nei componenti a classe, oppure in un
    // componentDidUpdate senza condizione
    console.log('SONO USEEFFECT')
    // WARNING: settare una variabile di stato qui dentro porta ad un ciclo infinito!
    // perchè ad ogni settaggio di stato viene re-invocato questo useEffect
    // setCounter(counter + 1)
  })

  useEffect(() => {
    console.log('COMPONENTE MONTATO (componentDidMount)')
    // componentDidMount viene invocato UNA VOLTA SOLA! dopo il primo render
    // questo è un replacement al 100% di componentDidMount
    // questo è un posto sicuro per fare le nostre fetch al montaggio del componente

    // per simulare una fetch, lancereste qui il metodo che recupera i dati
    // e poi li salvereste nello stato con un setQualcosa
    // setCounter(counter + 1)
  }, []) // stiamo ascoltando NIENTE per la ri-esecuzione della callback

  useEffect(() => {
    console.log('COMPONENTDIDUPDATE solo per counter')
    // questo ultimo useEffect ri-esegue la callback solamente quando counter, nello state, cambia
    // all'atto pratico è esattamente come un componentDidUpdate con un if() in ascolto di un
    // cambiamento tra
    // if(prevState.counter !== this.state.counter){}
  }, [counter])

  return (
    <>
      <div>
        <h2>USEEFFECT NEI COMPONENTI A FUNZIONE</h2>
        <p>COUNTER: {counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1)
          }}
        >
          INCREMENTA
        </button>
      </div>
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
    </>
  )
}

export default DemoUseEffect
