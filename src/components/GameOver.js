import "./GameOver.css"

const GameOver = ({retry,score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>A sua pontuação foi: <span></span>{score}</h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver