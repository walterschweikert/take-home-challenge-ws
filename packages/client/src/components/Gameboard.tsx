import {FC, useState} from 'react'
import {GameStatus} from "@mapistry/take-home-challenge-shared";
import { Gamerow} from "./Gamerow";

interface GameboardProps {
  initialStatus: GameStatus
}

export const Gameboard: FC<GameboardProps> = (props) => {
  const {initialStatus } = props
  const [gameStatus, setGameStatus] = useState<GameStatus>(initialStatus)
  const { board } = gameStatus
  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <Gamerow board={board} initialCell={0} setGameStatus={setGameStatus} />
      <Gamerow board={board} initialCell={3} setGameStatus={setGameStatus} />
      <Gamerow board={board} initialCell={6} setGameStatus={setGameStatus} />
    </div>
  )
}
