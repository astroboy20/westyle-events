
import { useParams } from "react-router-dom";
import firebaseConfig from "../../firebase";
const DB = firebaseConfig.firestore();
const Blogslist = DB.collection("blogs");
import { useState } from "react";
const BlogView = () => {
    const {id} = useParams()
    console.log(id)
    const [blogs, setBlogs] = useState([])
    Blogslist.doc(id).get().then(snapshot=>{
        const data = snapshot.data
        setBlogs(data)
    })
  return (
    <div>
      <p>Title {blogs.Title} </p>
      <p>Body {blogs.Body} </p>
    </div>
  )
}

export default BlogView
