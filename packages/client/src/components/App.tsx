import { useEffect, useState} from 'react'
import '../styles/reset.css';
import {Difficulty, Player, GameStatus} from "@mapistry/take-home-challenge-shared";
import {Gameboard} from "./Gameboard";
import {begin} from '../api'


export const App = () => {
  const [initialStatus, setInitialStatus] = useState<GameStatus | null> (null)
  useEffect(() => {
    const getInitialStatus = async () => {
      const initial =  await begin(Difficulty.hard, Player.human)
      setInitialStatus(initial)
    }
    getInitialStatus()
  },[])
  return initialStatus ? (
    <main>
    <div><Gameboard initialStatus={initialStatus}/></div>
  </main>
  ) : null
}
