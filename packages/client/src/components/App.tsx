import '../styles/reset.css';
import {Board, Marker} from "@mapistry/take-home-challenge-shared";
import {Gameboard} from "./Gameboard";


export const App = () => {
  const initialBoard = [null, null, null, null, null, null, null, null, null ]
  return (
    <main>
    <div><Gameboard board={initialBoard}/></div>
  </main>
  )
}
