interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  disabled,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`p-2 px-4 flex border items-center justify-center transition-all duration-300 font-poppins text-sm font-semibold text-white disabled:bg-slate-700 disabled:border-white ${
        variant === 'primary' &&
        ' border-green-800 bg-green-700 hover:bg-green-600'
      } ${
        variant === 'secondary' &&
        'bg-slate-900 shadow-md border-white hover:bg-white hover:font-bold hover:text-slate-900'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
