import React, {FC} from 'react'
import {_, Marker} from "@mapistry/take-home-challenge-shared";
import  '../index.css'

interface GamecellProps {
  cellValue: (Marker | typeof _)
}

const cellStyle = {
  'width':'4em',
  'height':'4em',
  'border': '1px solid black'
}

export const Gamecell: FC<GamecellProps> = (props) => {
  const {cellValue} = props

  return (
      <div style={cellStyle}>
        {cellValue}
      </div>
  )
}
