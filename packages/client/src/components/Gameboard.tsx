import {FC} from 'react'
import {Board} from "@mapistry/take-home-challenge-shared";
import { Gamerow} from "./Gamerow";

interface GameboardProps {
  board: Board
}

export const Gameboard: FC<GameboardProps> = (props) => {
  const {board} = props
  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <Gamerow board={board.slice(0,2)} />
      <Gamerow board={board.slice(3,5)} />
      <Gamerow board={board.slice(6,8)} />
    </div>
  )
}
