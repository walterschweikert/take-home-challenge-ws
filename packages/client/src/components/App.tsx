import {useState} from 'react'
import '../styles/reset.css';
import {Board, Marker} from "@mapistry/take-home-challenge-shared";
import {Gameboard} from "./Gameboard";


export const App = () => {
  const initialBoard = [null, null, null, null, null, null, null, null, null ]
  const [connected, setConnected] = useState<boolean>(false)

  const [response, setResponse] = useState<any >('')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify({})
  }

  const connect = async () => {
    await fetch("http://localhost:3001/begin")
      .then((res) => {
        console.log('res:', res)
        return res.json()
      })
      .then((data) => {
        setResponse(data.message)
        if(data.message === 'you can play, your color is black'){
          setConnected(true)
        }
      });
  }
  connect()
  return (
    <main>
    <div><Gameboard board={initialBoard}/></div>
  </main>
  )
}
