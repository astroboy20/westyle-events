import { useParams } from "react-router-dom";
import firebaseConfig from "../../firebase";
const DB = firebaseConfig.firestore();
const Blogslist = DB.collection("blogs");
import { useEffect, useState } from "react";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    Blogslist.doc(id)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setBody(data.body);
        setTitle(data.Title);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Blogslist.update({
      Title: title,
      Body: body,
    })
      .then((docRef) => {
        alert("Data >uccesfully Submited", docRef);
      })
      .catch((error) => {
        console.error("Error adding document", error);
      });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Body..."
          rows="10"
          cols="150"
          value={body}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { EditPost };
