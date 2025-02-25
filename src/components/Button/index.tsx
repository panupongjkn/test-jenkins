
import "./button.css";
import { ButtonProps } from "./type";

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`inline-block cursor-pointer border px-3 py-2 rounded-[3em] font-bold leading-[1]`}
      {...props}
    >
      {label}
    </button>
  );
};