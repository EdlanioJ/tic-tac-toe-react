interface CrossProps {
  stroke?: string;
  isAnimated?: boolean;
  sm?: boolean;
  hasOpacity?: boolean;
}
const Cross: React.FC<CrossProps> = ({
  stroke = '#FF073A',
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
      <path
        className={`${isAnimated && 'animate-draw'} ${
          hasOpacity && 'opacity-30'
        }`}
        d="M 80 20 L 20 80"
        strokeLinecap="round"
        strokeWidth="20"
        strokeDasharray={`${isAnimated ? '300' : '0'}`}
        strokeDashoffset={`${isAnimated ? '300' : '0'}`}
      />
      <path
        className={`${isAnimated && 'animate-draw-daley-2ms'} ${
          hasOpacity && 'opacity-30'
        }`}
        d="M 20 20 L 80 80"
        strokeLinecap="round"
        strokeWidth="20"
        strokeDasharray={`${isAnimated ? '300' : '0'}`}
        strokeDashoffset={`${isAnimated ? '300' : '0'}`}
      />
    </svg>
  );
};

export default Cross;
