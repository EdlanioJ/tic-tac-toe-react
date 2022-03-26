export enum PEACES {
  X = 'X',
  O = 'O',
}

export type WinnerInfo = {
  peace: PEACES;
  key: string;
  line: Array<number>;
};

export type Score = {
  playerX: number;
  playerO: number;
};

export type GameContextData = {
  squares: Array<PEACES | null>;
  handlePlay: (cell: number) => void;
  handleReset: () => void;
  handleClear: () => void;
  winnerInfo: WinnerInfo | null;
  end: boolean;
  xIsNext: boolean;
  score: Score;
};

export interface GameState {
  score: Score;
  squares: Array<PEACES | null>;
  winnerInfo: WinnerInfo | null;
  xIsNext: boolean;
  end: boolean;
}

export type GameAction =
  | { type: 'PLAY'; payload: { cell: number; player: PEACES } }
  | { type: 'RESET' }
  | { type: 'END_GAME' }
  | { type: 'SET_WINNER'; payload: WinnerInfo }
  | { type: 'CLEAR' };
