import { useState } from "react";
import { IBlog } from "../types/blog.types";

function BlogCardComponent() {
  const [blog, setBlog] = useState<IBlog[]>([
    {
      title: "React Tailwind Card with Grid 1",
      author: "Erfan gholami",
      image: "https://picsum.photos/536/354",
      text: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text",
    },
    {
      title: "React Tailwind Card with Grid 2",
      image: "https://picsum.photos/id/237/536/354",
      author: "amir slt",
      text: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text",
    },
    {
      title: "React Tailwind Card with Grid 3",
      image: "https://picsum.photos/seed/picsum/536/354",
      author: "dina molavi",
      text: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text",
    },
    {
      title: "React Tailwind Card with Grid 4",
      image: "https://picsum.photos/id/1060/536/354?blur=2",
      author: "ali farj",
      text: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text",
    },
  ]);

  return (
    <>
      <div className="w-full shadow-md lg:max-w-sm p-2">
        <img
          className="object-cover w-full h-48"
          src="https://picsum.photos/536/354"
          alt="image"
        />
        <div className="p-4">
          <button className="px-2 py-2 text-sm text-black-300"></button>
          <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
            Read more
          </button>
        </div>
      </div>
    </>
  );
}
export default BlogCardComponent;
