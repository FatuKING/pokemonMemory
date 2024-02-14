import './App.css'
import { Card } from './assets/src/Card'
import { shuffledPokemonImages } from './assets/logic/imgPokemons.js'
import { useState, useEffect } from 'react'

export default function App () {
  const [board, setBoard] = useState(shuffledPokemonImages)
  const [point, setPoint] = useState(0)
  // const [winner, setWinner] = useState(false)

  const resetGame = () => {
    setBoard([...shuffledPokemonImages])
    setPoint(0)
  }

  useEffect(() => {
    console.log('Se Actualizo el board')
  }, [board])

  return (
    <>
      <header>
        <h1>Pokemon Memory</h1>
        <p>Puntuacion: {point} </p>
      </header>
      <main className='board'>
        <div className='table-grid'>
          {
           board.map((img, index) => {
             return (
               <Card key={index} img={img} />
             )
           })
          }

        </div>
      </main>
      {/* <footer>
        {winner
          ? (
            <div className='winner'>
              Winner
            </div>
            )
          : null}
      </footer> */}
      <button onClick={resetGame}>Reset</button>
    </>
  )
}

// board.map((img, index) => (
//   <Card key={index} img={img} />
// ))
