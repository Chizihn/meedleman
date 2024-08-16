import { useParams } from "react-router-dom";
import Navigator from "../../../components/navigator";
import disputes from "./data";

const ViewDispute = () => {
  const { id } = useParams() as { id: string };
  const dispute = disputes.find((d) => d.id === parseInt(id));

  if (!dispute) {
    return <p>No such dispute</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center md:justify-start items-center bg-white md:bg-[#eee] relative overflow-y-auto ">
      <div className="h-screen w-[90%] md:w-full pt-5 md:pt-10 pb-0 px-2 md:px-6 flex flex-col justify-start items-center md:items-start text-black gap-8 ">
        <div className="flex flex-col w-full gap-0 md:gap-4">
          <div className="flex items-center">
            <Navigator to="/dashboard/disputes" />
            <h2 className="text-3xl md:text-4xl font-bold ml-2">
              {dispute.title}
            </h2>
          </div>

          <div className="py-6 px-2 md:px-12 text-1xl">
            <p className="pb-4">Dispute started on {dispute.date}</p>
            <div>
              <p className="w-full md:w-[80] text-[1.2rem]">
                {dispute.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white fixed top-0 right-0 w-full md:w-[91%] lg:w-[30rem] z-[10000]"></div>
    </div>
  );
};

export default ViewDispute;
