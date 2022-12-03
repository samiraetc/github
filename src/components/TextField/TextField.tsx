export const COMPONENT_ID = 'textfield';

type TextFieldProps = {
  placeholder: string;
  onChange: (value: string) => unknown;
};
const TextField = ({ placeholder, onChange }: TextFieldProps) => {
  const handleChange = (e: any) => {
    console.log(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className={COMPONENT_ID}>
      <input type="text" placeholder={placeholder} onChange={handleChange} className={`${COMPONENT_ID}__input`} />
    </div>
  );
};

export default TextField;
