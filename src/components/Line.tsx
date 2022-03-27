import { useGame } from '../context/game';
import { PEACES } from '../models';

const Line: React.FC = () => {
  const { winnerInfo } = useGame();
  if (!winnerInfo) return null;
  let strikeClasses = '';
  strikeClasses +=
    winnerInfo.peace === PEACES.X
      ? 'animate-draw-daley-4ms'
      : 'animate-draw-daley-2ms';
  strikeClasses += ' ';
  strikeClasses += winnerInfo.key;

  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className="absolute"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`stroke-green-700 ${strikeClasses}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="300"
        strokeDashoffset="300"
      />
    </svg>
  );
};

export default Line;
