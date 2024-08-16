import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ to, text, className }) => {
  return (
    <Link
      className={clsx(
        "bg-primary text-white text-center p-3 rounded-lg transition 800ms ease mt-4 hover:bg-blue-600",
        className
      )}
      to={to}
    >
      <strong>{text}</strong>
    </Link>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
