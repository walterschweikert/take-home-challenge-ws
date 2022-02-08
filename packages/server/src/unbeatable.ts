import {Board, GameStatus, Marker} from "@mapistry/take-home-challenge-shared";

const isWinner = (board: Board, marker: Marker): boolean => {
  if (
    (board[0] === marker && board[1] === marker && board[2] === marker ) ||
    (board[3] === marker && board[4] === marker && board[5] === marker) ||
    (board[6] === marker && board[7] === marker && board[8] === marker) ||
    (board[1] === marker && board[4] === marker && board[8] === marker) ||
    (board[2] === marker && board[4] === marker && board[6] === marker)
  ){
    return true
  }
  return false
}

const otherMarker = (marker: Marker) => marker === Marker.o ? Marker.x : Marker.o


type Minimax = -1 | 1 | 0

export const nextStatus = (board: Board): GameStatus => {

  const searchMoves = (newBoard: Board, marker: Marker) => {
    if(isWinner(newBoard, marker)) {
      return marker === Marker.o ? -1 : +1
    }
    const moves: Minimax[] = newBoard.map((cell, index) => {
      if(newBoard[index] != null){
        return 0
      }
      const nextBoard = newBoard.slice()
      nextBoard[index] = otherMarker(marker)
      return searchMoves(nextBoard, otherMarker(marker))
    })
    if (moves.includes(-1)) {
      return -1
    }
    if(moves.includes(1)) {
      return 1
    }
    return 0
  }
  let firstChoice = -1
  let secondChoice = -1
  board.forEach((cell,index) => {
    if(board[index] === null) {
      const myBoard = board.slice()
      myBoard[index] = Marker.x
      const search = searchMoves(myBoard, Marker.o)
      if(search === 1) {
        firstChoice = index

      }
      if(search === 0) {
        secondChoice = index
      }
    }
  })
  if(firstChoice > -1) {
    const nextBoard = board.slice()
    nextBoard[firstChoice] = Marker.x
    return {
      board: nextBoard,
      winner: Marker.x
    }
  }
  if(secondChoice > 1) {
    const nextBoard = board.slice()
    nextBoard[secondChoice] = Marker.x
    return {
      board: nextBoard,
      winner: null
    }
  }
  return {
    board,
    winner: null
  }
}