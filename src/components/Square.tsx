import { useEffect, useState } from 'react';
import { useGame } from '../context/game';
import Cross from './Cross';
import Nought from './Nought';

interface SquareProps {
  value: number;
}
const Square: React.FC<SquareProps> = ({ value }) => {
  const { handlePlay, squares, end, xIsNext } = useGame();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(false);
  }, []);

  useEffect(() => {
    if (squares[value] !== null) {
      setIsShown(false);
    }
  }, [squares]);

  function renderItem() {
    if (squares[value] === null) {
      return null;
    } else if (squares[value] === 'O') {
      return <Nought isAnimated />;
    } else {
      return <Cross isAnimated />;
    }
  }

  const onMouseEnter = () => {
    if (squares[value] !== null) return;
    setIsShown(true);
  };
  const onMouseLeave = () => {
    if (squares[value] !== null) return;
    setIsShown(false);
  };

  return (
    <div
      className={`w-16 h-16 lg:w-20 sm:h-20  bg-gray-900 flex items-center justify-center text-white ${
        !!squares[value] || end ? 'hover:cursor-auto' : 'hover:cursor-pointer'
      }`}
      onClick={() => handlePlay(value)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {squares[value] === null
        ? isShown && (xIsNext ? <Cross hasOpacity /> : <Nought hasOpacity />)
        : renderItem()}
    </div>
  );
};

export default Square;
