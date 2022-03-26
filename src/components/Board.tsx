import Line from './Line';
import Square from './Square';

const Board: React.FC = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 md:gap-2.5 gap-2 relative before:content-[''] before:absolute before:bg-white before:-z-[1] before:animate-scale before:w-full before:h-full">
      <Square value={0} />
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
      <Square value={4} />
      <Square value={5} />
      <Square value={6} />
      <Square value={7} />
      <Square value={8} />
      <Line />
    </div>
  );
};

export default Board;
