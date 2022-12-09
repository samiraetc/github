export const COMPONENT_ID = 'button';

type ButtonProps = {
  name: string;
  onClick?: () => void;
  className?: string;
};
const Button = ({ name, onClick, className = '' }: ButtonProps) => {
  return (
    <div className={`${COMPONENT_ID} ${className}`} id={`${COMPONENT_ID}`}>
      <button className={`${COMPONENT_ID}__action`} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
