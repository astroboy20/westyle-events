import firebaseConfig from "../../firebase";
const DB = firebaseConfig.firestore();
const Blogslist = DB.collection("blogs");
import { useState } from "react";
const CreatePost = () => {
  const [title, setTittle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Blogslist.add({
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
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTittle(e.target.value)}
        />
        <textarea
          name="content"
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Body..."
          rows="10"
          cols="150"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export { CreatePost };
