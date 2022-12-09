export const COMPONENT_ID = 'textfield';

type TextFieldProps = {
  placeholder?: string;
  onChange: (value: string) => unknown;
  value?: string | undefined;
};
const TextField = ({ placeholder, onChange, value = '' }: TextFieldProps) => {
  const handleChange = (e: any) => {
    console.log(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className={COMPONENT_ID} id={COMPONENT_ID}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className={`${COMPONENT_ID}__input`}
        value={value}
      />
    </div>
  );
};

export default TextField;
