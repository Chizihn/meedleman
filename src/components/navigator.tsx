import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

interface NavigatorProps {
  to: string;
}

const Navigator: React.FC<NavigatorProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <span
      className="bx bx-chevron-left text-[2rem] cursor-pointer"
      onClick={handleNavigate}
    >
      {" "}
      <MdArrowBackIos />
    </span>
  );
};

export default Navigator;
