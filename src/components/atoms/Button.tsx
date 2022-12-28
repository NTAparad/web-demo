import { FunctionComponent } from "react";

type Props = {
  children: string;
  className: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};
const Button: FunctionComponent<Props> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
