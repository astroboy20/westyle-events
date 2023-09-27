import firebaseConfig from "../../firebase";
const DB = firebaseConfig.firestore();
const Blogslist = DB.collection("blogs");
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



const BlogList = () => {
    const [blogs,setBlogs] = useState([])
    console.log(blogs)
    useEffect(() => {
        const unSubscribe = Blogslist.limit(100).onSnapshot((querySnapshot)=>{
            const data = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id:doc.data
            }))
            setBlogs(data)
        })
        return unSubscribe
    }, [])
  return (
    <div>
      {blogs.map((blog)=>(
        <div key={blog.id}>
            <p>Title:{blog.Title}</p>
            <p>Body:{blog.Body}</p>
            <Link to={"/blog/"+blog.id} >View</Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
