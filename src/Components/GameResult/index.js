import './index.css'

const GameResult = props => {
  const {finalScore, gameOn} = props

  const resetGamePlay = () => {
    gameOn()
  }

  const result = (
    <div className="game-result-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="your-score">YOUR SCORE</p>
      <h1 className="final-score">{finalScore}</h1>
      <button className="play-again-btn" type="button" onClick={resetGamePlay}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
  return result
}

export default GameResult
