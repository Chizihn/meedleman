import { ReactNode } from "react";
import { MdArrowBackIos } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="h-screen z-[1000]">
      <div className="flex justify-start relative p-3">
        <button
          className="fixed w-[20px] h-[40px] mt-4 md:mt-8 ml-5 text-[2rem] font-semibold"
          onClick={closeModal}
        >
          <MdArrowBackIos />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
