import { FunctionComponent } from "react";

type Props = {
  className: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  placeholder: string;
  type?: string;
};

const Input: FunctionComponent<Props> = ({
  className,
  value,
  placeholder,
  name,
  onChange,
  type,
}) => {
  return (
    <input
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={(text) => {
        onChange(text.target.value);
      }}
      type={type}
    />
  );
};
export default Input;
