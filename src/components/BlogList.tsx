import { FC } from "react";
import { PropsBlogs } from "../types/blog.types";
import BlogCardComponent from "./BlogCard";

const BlogsList: FC<PropsBlogs> = ({ blogs }) => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 p-5">
        {blogs.map((blog, key) => (
          <BlogCardComponent blog={blog} key={key} />
        ))}
      </div>
    </>
  );
};
export default BlogsList;
