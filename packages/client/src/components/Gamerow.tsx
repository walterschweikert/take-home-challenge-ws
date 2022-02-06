import React, {FC} from 'react'
import {Board, Marker} from "@mapistry/take-home-challenge-shared";
import {Grid} from '@material-ui/core'
import { Gamecell } from './Gamecell'

interface GamerowProps {
  board: Board
}

export const Gamerow: FC<GamerowProps> = (props) => {
  const {board} = props
  const cValue= Marker.x
  return (
    <Grid container direction="row">
      <Grid item>
        <Gamecell cellValue={board[0]} />
      </Grid>
      <Grid item>
        <Gamecell cellValue={board[1]} />
      </Grid>
      <Grid item>
        <Gamecell cellValue={board[2]} />
      </Grid>
    </Grid>
  )
}
