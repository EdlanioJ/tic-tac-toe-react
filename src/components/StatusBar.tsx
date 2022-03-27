/* eslint-disable @next/next/no-img-element */
import { useGame } from '../context/game';
import { PEACES } from '../models';
import Cross from './Cross';
import Nought from './Nought';

interface ButtonProps {
  isNext: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isNext }) => {
  return (
    <button
      className={`flex items-center w-24 lg:w-28 justify-between h-10  border-2 rounded-sm px-3 font-bold border-white border-b-4 ${
        isNext && 'border-b-green-700'
      }`}
      type="button"
      disabled
    >
      {children}
    </button>
  );
};
const StatusBar: React.FC = () => {
  const { score, xIsNext, end, winnerInfo } = useGame();
  return (
    <div className="w-full text-white font-poppins">
      <div className="flex w-full md:justify-between justify-around">
        <Button isNext={xIsNext && !end}>
          <Cross sm stroke="#fff" />
          <span> - </span>
          <span>{score.playerX}</span>
        </Button>
        <Button isNext={!xIsNext && !end}>
          <Nought sm stroke="#fff" />
          <span> - </span>
          <span>{score.playerO}</span>
        </Button>
      </div>

      <div className="flex items-center justify-center w-full h-8">
        {xIsNext && !end && (
          <>
            <span className="mr-1">É vez de</span>
            <Cross sm stroke="#fff" />
          </>
        )}
        {!xIsNext && !end && (
          <>
            <span className="mr-1">É vez de</span>
            <Nought sm stroke="#fff" />
          </>
        )}
        {end && winnerInfo === null && <span>Empate</span>}
        {end && winnerInfo !== null && (
          <>
            {winnerInfo.peace === PEACES.X ? (
              <Cross sm stroke="#fff" />
            ) : (
              <Nought sm stroke="#fff" />
            )}
            <span className="ml-1">é vencedor</span>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
