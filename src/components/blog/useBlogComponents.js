import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { ColRef5 } from "src/firebaseConfig";

export const useBlogComponents = (setBlogPosts) => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const handlePostSubmit = async () => {
    if (newPost.title.trim() !== "" && newPost.content.trim() !== "") {
      const currentDate = new Date().toISOString().slice(0, 10);
      const newBlogPost = {
        title: newPost.title,
        content: newPost.content,
        date: currentDate,
        comments: [],
      };

      const docRef = await addDoc(ColRef5, newBlogPost);

      setBlogPosts((prevPosts) => [{ id: docRef.id, ...newBlogPost }, ...prevPosts]);
      setNewPost({ title: "", content: "" });
    }
  };

  return { handlePostSubmit };
};
