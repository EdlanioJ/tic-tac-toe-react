interface NoughtProps {
  stroke?: string;
  isAnimated?: boolean;
  sm?: boolean;
  hasOpacity?: boolean;
}

const Nought: React.FC<NoughtProps> = ({
  stroke = '#006AF9',
  isAnimated,
  hasOpacity,
  sm,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sm ? 'w-4 h-4' : 'lg:w-16 lg:h-16 w-12 h-12'}`}
      fill="none"
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="35"
        className={`${isAnimated && 'animate-draw'} ${
          hasOpacity && 'opacity-30'
        }`}
        strokeWidth="20"
        strokeDasharray={`${isAnimated ? '300' : '0'}`}
        strokeDashoffset={`${isAnimated ? '300' : '0'}`}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default Nought;
