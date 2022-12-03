export const COMPONENT_ID = 'button';

type ButtonProps = {
  name: string;
  onClick: () => void;
};
const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <div>
      <button className={`${COMPONENT_ID}__action`} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
