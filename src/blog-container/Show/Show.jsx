import { useParams } from "react-router-dom";
import firebaseConfig from "../../firebase";
const DB = firebaseConfig.firestore();
const Blogslist = DB.collection("blogs");
import { useState } from "react";
const BlogView = () => {
  const { id } = useParams();

  const [blog, setblog] = useState([]);
  Blogslist.doc(id)
    .get()
    .then((snapshot) => {
      const data = snapshot.data();
      setblog(data);
    });
  return (
    <div>
      <p>Title {blog.Title} </p>
      <p>Body {blog.Body} </p>
    </div>
  );
};

export default BlogView;
