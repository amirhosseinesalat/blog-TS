import { useState } from "react";


import BlogTableComponents from "./components/BlogTables.js";
import NavBar from "./components/Navbar.js";
import { IBlog } from "./types/blog.types.js";
import BlogsList from "./components/BlogList.js";
function App() {
  const blogsData: IBlog[] = [
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
  ];

  const [blogs, setBlogs] = useState<IBlog[]>(blogsData);
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <hr />
        <NavBar></NavBar>
        <BlogTableComponents blogs={blogs} />
        <BlogsList blogs={blogs} />
      </div>
    </>
  );
}

export default App;
