import  {Dispatch, FC, SetStateAction} from 'react'
import {Board, GameStatus} from "@mapistry/take-home-challenge-shared";
import {Grid} from '@material-ui/core'
import { Gamecell } from './Gamecell'

interface GamerowProps {
  board: Board
  initialCell: number
  setGameStatus: Dispatch<SetStateAction<GameStatus>>
}

export const Gamerow: FC<GamerowProps> = (props) => {
  const {board, initialCell, setGameStatus} = props
  return (
    <Grid container direction="row">
      <Grid item>
        <Gamecell board={board} cellPosition={initialCell} setGameStatus={setGameStatus}  />
      </Grid>
      <Grid item>
        <Gamecell board={board} cellPosition={initialCell + 1} setGameStatus={setGameStatus} />
      </Grid>
      <Grid item>
        <Gamecell board={board} cellPosition={initialCell + 2} setGameStatus={setGameStatus} />
      </Grid>
    </Grid>
  )
}
