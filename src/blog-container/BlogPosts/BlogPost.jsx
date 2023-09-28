import { Link } from "react-router-dom";
import firebaseConfig from "../../firebase";
const DB = firebaseConfig.firestore();
const Blogslist = DB.collection("blogs");
import { useState,useEffect } from "react";



const BlogPosts = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        const unSubscribe = Blogslist.limit(100).onSnapshot((querySnapshot)=>{
            const data = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id,
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
            <p>ID:{blog.id}</p>
            <Link to={"/blog/"+blog.id} >View</Link>
            <Link to={"/edit-blog/"+blog.id} >Edit</Link>
        </div>
      ))}
    </div>
  )
}

export  {BlogPosts}
