import {
  Board,
  GameStatus,
  Marker,
  _,
} from '@mapistry/take-home-challenge-shared';
import { Router } from 'express';
import {nextStatus} from './unbeatable'

export const router = Router();

interface MoveBody {
  board: Board;
}
interface TestAnswer {
  result: string
}
router.get<'/', never, TestAnswer>('/', (req, res) => {
  res.status(200).send({"result": "test"});
});
//
router.post<'/begin', never, GameStatus>('/begin', (req, res) => {
  /**
   * FIXME: Delete this function body and complete it correctly instead.
   * You do not need to use the arguments provided, but that
   * is how the other code and tests call it
   */
  const gameStatus = {
    board: [Marker.x, _, _, _, _, _, _, _, _],
    "winner": null
  };

  res.json(gameStatus);
});

router.post<'/move', never, GameStatus, MoveBody>('/move', (req, res) => {
  const { board } = req.body;

  const gameStatus = nextStatus(board)
  res.json(gameStatus);
});
