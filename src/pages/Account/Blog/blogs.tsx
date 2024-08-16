import blogs from "./data";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const viewBlog = (id: number) => {
    navigate(`/dashboard/blogs/${id}`);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#eee] ">
      <div
        className={
          "h-screen bg-white p-8 relative overflow-y-auto w-full md:w-[50%]"
        }
      >
        <h2 className="text-3xl font-bold">Blogs</h2>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#eee] w-full p-3 mt-4 rounded"
        />

        <div className="mt-6 space-y-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-featured"
                onClick={() => viewBlog(blog.id)}
              >
                <img
                  src={blog.blogImg.blogPostImage}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="relative w-[80%]">
                  <h4 className="text-lg">{blog.title}</h4>
                  <span className="ml-auto text-sm">{blog.date}</span>
                  <p></p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-center text-2xl text-black">No Blog yet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white absolute top-[-.5rem] left-[0] md:relative w-full md:relative mt-2 md:mt-0 z-[1000]">
        <Outlet />
      </div>
    </div>
  );
};

export default Blogs;
