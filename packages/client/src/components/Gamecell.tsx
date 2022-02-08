import {Dispatch, FC, SetStateAction} from 'react'
import {Board, Difficulty, GameStatus, Marker} from "@mapistry/take-home-challenge-shared";
import '../index.css'
import {move} from '../api'

interface GamecellProps {
  board: Board
  cellPosition: number
  setGameStatus: Dispatch<SetStateAction<GameStatus>>
}

const cellStyle = {
  'width':'60px',
  'height':'60px',
  'border': '1px solid black',
  'text-align': 'center',
  'vertical-align': 'middle',
  'line-height': '60px',
  'font-size': '30pt'
}

export const Gamecell: FC<GamecellProps> = (props) => {
  const {cellPosition, board, setGameStatus} = props
  const handleClick = async () => {
    const newBoard = board.slice(0)
    newBoard[cellPosition] = Marker.o
    const newState = await move(newBoard, Difficulty.hard)
    setGameStatus(newState)
  }
  const cellValue = board[cellPosition]
  return cellValue ? (
      <div style={cellStyle}  >
        {cellValue}
      </div>
  ): (
    <div style={cellStyle}  onClick={handleClick}
         role="button"
         onKeyDown={handleClick}
         tabIndex={cellPosition}
         aria-label="select input" >
      {cellValue}
    </div>
  )
}
