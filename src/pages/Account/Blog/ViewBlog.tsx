import { useParams } from "react-router-dom";
import Navigator from "../../../components/navigator";
import blogs from "./data";

const ViewBlog = () => {
  const { id } = useParams() as { id: string };
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>No such blog</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center md:justify-start items-center bg-white md:bg-slate-100 relative overflow-y-auto ">
      <div className="h-screen w-[90%] md:w-full pt-5 md:pt-10 pb-0 px-2 md:px-6 flex flex-col justify-start items-center md:items-start text-black gap-8 ">
        <div className="flex flex-col w-full gap-0 md:gap-4">
          <div className="flex items-center">
            <Navigator to="/dashboard/blogs" />
            <h2 className="text-3xl md:text-4xl font-bold ml-2">
              {blog.title}
            </h2>
          </div>

          <div className="py-6 px-2 md:px-12 text-1xl">
            <p className="pb-4">{blog.date}</p>
            <div>
              <p className="w-full md:w-[80] text-[1.2rem]">{blog.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white fixed top-0 right-0 w-full md:w-[91%] lg:w-[30rem] z-[10000]"></div>
    </div>
  );
};

export default ViewBlog;
