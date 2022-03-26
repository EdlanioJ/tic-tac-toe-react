import { createContext, useContext, useEffect, useReducer } from 'react';
import { GameAction, GameContextData, GameState, PEACES } from '../models';

const GameContext = createContext({} as GameContextData);

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'PLAY': {
      const { cell, player } = action.payload;
      const squares = state.squares.slice();
      squares[cell] = player;
      return {
        ...state,
        xIsNext: !state.xIsNext,
        squares,
      };
    }
    case 'SET_WINNER': {
      const { line, peace, key } = action.payload;
      const playerO =
        peace === PEACES.O ? state.score.playerO + 1 : state.score.playerO;
      const playerX =
        peace === PEACES.X ? state.score.playerX + 1 : state.score.playerX;
      return {
        ...state,
        end: true,
        winnerInfo: { line, peace, key },
        score: { playerO, playerX },
      };
    }
    case 'END_GAME': {
      return {
        ...state,
        end: true,
      };
    }
    case 'RESET': {
      return {
        ...state,
        winnerInfo: null,
        end: false,
        xIsNext: true,
        squares: Array(9).fill(null),
      };
    }
    case 'CLEAR': {
      return {
        winnerInfo: null,
        end: false,
        xIsNext: true,
        squares: Array(9).fill(null),
        score: {
          playerO: 0,
          playerX: 0,
        },
      };
    }
    default:
      return state;
  }
}

const initialState: GameState = {
  score: { playerO: 0, playerX: 0 },
  end: false,
  squares: Array(9).fill(null),
  winnerInfo: null,
  xIsNext: true,
};

export const GameProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  function calculateWinner() {
    const { squares } = state;
    const lines = [
      { key: 'strike-row-1', value: [0, 1, 2] },
      { key: 'strike-row-2', value: [3, 4, 5] },
      { key: 'strike-row-3', value: [6, 7, 8] },
      { key: 'strike-col-1', value: [0, 3, 6] },
      { key: 'strike-col-2', value: [1, 4, 7] },
      { key: 'strike-col-3', value: [2, 5, 8] },
      { key: 'strike-diagonal-1', value: [0, 4, 8] },
      { key: 'strike-diagonal-2', value: [2, 4, 6] },
    ];

    for (const line of lines) {
      const [a, b, c] = line.value;
      if (
        squares[a] !== null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        const peace = squares[a] as PEACES;
        dispatch({
          type: 'SET_WINNER',
          payload: { line: line.value, key: line.key, peace },
        });
        return;
      }
    }
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isDraw = false;
        break;
      }
    }

    if (isDraw) {
      dispatch({ type: 'END_GAME' });
    }

    return;
  }

  useEffect(() => {
    calculateWinner();
  }, [state.squares]);
  const handlePlay = (cell: number) => {
    const { squares, xIsNext, end } = state;
    if (squares[cell] !== null || end) {
      return;
    }

    dispatch({
      type: 'PLAY',
      payload: { cell, player: xIsNext ? PEACES.X : PEACES.O },
    });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };
  return (
    <GameContext.Provider
      value={{
        squares: state.squares,
        handlePlay,
        handleReset,
        handleClear,
        winnerInfo: state.winnerInfo,
        end: state.end,
        xIsNext: state.xIsNext,
        score: state.score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  return context;
};
