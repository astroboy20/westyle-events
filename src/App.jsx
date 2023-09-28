import "./App.css";
import { BlogPosts } from "./blog-container/BlogPosts/BlogPost";
import { CreatePost } from "./blog-container/CreatePost/CreatePost";
import { EditPost } from "./blog-container/EditPost";
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
          <Route path="/blog/:id" element={<BlogView />} />
          <Route path="/blog/create" element={<CreatePost />} />
          <Route path="/blog/edit-post/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
