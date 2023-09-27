import "./App.css";
import { BlogPosts } from "./blog-container/BlogPosts/BlogPost";
import { CreatePost } from "./blog-container/CreatePost/CreatePost";
import BlogView from "./blog-container/Show/Show";
import { Content } from "./containers/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/blog/" element={<BlogPosts />} />
          <Route path="/show/:id" element={<BlogView />} />
          <Route path="blog/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
