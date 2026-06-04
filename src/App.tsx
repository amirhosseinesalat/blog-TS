import BlogCardComponent from "./components/BlogCard.js";
import BlogTableComponents from "./components/BlogTables.js";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <hr />
        <BlogTableComponents></BlogTableComponents>
        <BlogCardComponent></BlogCardComponent>
      </div>
    </>
  );
}

export default App;
