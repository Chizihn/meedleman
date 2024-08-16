import { useParams, useLocation, useNavigate, Outlet } from "react-router-dom";
import Navigator from "../../../components/navigator";
import transactions from "./data";
import { useState, useEffect } from "react";
import Modal from "../../../components/modal";

const ViewTransaction = () => {
  const { id } = useParams() as { id: string };
  const transaction = transactions.find((t) => t.id === parseInt(id));
  const [isModal, setIsModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openModal = () => setIsModal(true);

  const closeModal = () => {
    setIsModal(false);
    navigate(-1);
  };

  useEffect(() => {
    if (location.pathname.includes(`/dashboard/transactions/${id}/`)) {
      setIsModal(true);
    }
  }, [location.pathname, id]);

  const viewTransactionInfo = () => {
    openModal();
    navigate(`/dashboard/transactions/${id}/info`);
  };

  if (!transaction) {
    return <p>No such transaction</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center md:justify-start items-center bg-white md:bg-slate-100 relative ">
      <div className="h-screen w-full pt-0 pb-0 px- flex flex-col justify-start items-center md:items-start text-black gap-8 ">
        <div className="flex items-center w-full gap-0 md:gap-4 bg-white p-6">
          <span className="ml-0 lg:ml-4">
            {" "}
            <Navigator to="/dashboard/transactions" />
          </span>

          <div
            className="flex flex-row gap-0 md:gap-2 w-[100%] cursor-pointer"
            onClick={viewTransactionInfo}
          >
            <img
              src={transaction.profileImg.profileImage}
              alt="profile"
              className="hidden md:flex w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-medium md:font-semibold text-lg md:text-xl">
                {transaction.title}
              </h3>
              <p>
                NGN {transaction.price.toLocaleString()} Due on{" - "}
                {transaction.due}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white fixed top-0 right-0 w-full md:w-[91%] lg:w-[30rem] z-[10000]">
        <Modal isOpen={isModal} onClose={closeModal}>
          <Outlet />
        </Modal>
      </div>
    </div>
  );
};

export default ViewTransaction;
