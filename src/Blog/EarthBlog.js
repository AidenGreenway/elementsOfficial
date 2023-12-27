import { Box, Grid } from "@mui/material";
import { useState } from "react";

const EarthBlog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = () => {
    if (newPost.title.trim() !== "" && newPost.content.trim() !== "") {
      const currentDate = new Date().toISOString().slice(0, 10);
      const newBlogPost = {
        id: blogPosts.length + 1,
        title: newPost.title,
        content: newPost.content,
        date: currentDate,
        comments: [],
      };
      setBlogPosts([newBlogPost, ...blogPosts]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#000",
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid item xs={6}>
          <Box
            sx={
              {
                // Styl dla lewej kolumny
              }
            }
          >
            {/* Formularz dodawania posta */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={
              {
                // Styl dla prawej kolumny
              }
            }
          >
            {/* Wyświetlanie postów */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EarthBlog;
