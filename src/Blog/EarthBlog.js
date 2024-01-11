import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const EarthBlog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // Ładowanie wpisów z localStorage przy montowaniu komponentu
  useEffect(() => {
    const savedPosts = localStorage.getItem("earthBlogPosts");
    if (savedPosts) {
      const loadedPosts = JSON.parse(savedPosts);
      setBlogPosts(loadedPosts);
    }
  }, []);

  // Zapisywanie wpisów do localStorage przy każdej aktualizacji
  useEffect(() => {
    localStorage.setItem("earthBlogPosts", JSON.stringify(blogPosts));
  }, [blogPosts]);

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
      console.log("New post added:", newBlogPost);
    }
  };

  const clearBlogPosts = () => {
    localStorage.removeItem("earthBlogPosts");
    setBlogPosts([]);
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
            sx={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" color="#008000" sx={{ marginBottom: 1 }}>
              Title
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  borderColor: "#008000",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& input": { color: "#FFF" },
              }}
            />
            <Typography variant="h6" color="#008000" sx={{ marginBottom: 1 }}>
              Content
            </Typography>
            <TextField
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              sx={{
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  borderColor: "#008000",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& textarea": { color: "#FFF" },
              }}
            />
            <Button
              variant="contained"
              onClick={handlePostSubmit}
              sx={{ backgroundColor: "#008000", color: "#FFF" }}
            >
              Add Post
            </Button>
            <Button
              variant="contained"
              onClick={clearBlogPosts}
              sx={{ backgroundColor: "#800000", color: "#FFF", marginTop: 2 }}
            >
              Clear Data
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "100%",
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
            }}
          >
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                sx={{
                  marginBottom: 2,
                  borderRadius: "8px",
                  overflowY: "auto",
                  maxHeight: "300px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "16px",
                }}
              >
                <CardHeader
                  title={post.title}
                  subheader={post.date}
                  sx={{
                    color: "#008000",
                    textAlign: "right",
                    fontSize: "14px",
                    "& .MuiCardHeader-subheader": {
                      color: "#FFFF00",
                      textAlign: "right",
                      fontSize: "12px",
                    },
                  }}
                />
                <CardContent>
                  <Typography variant="body1" color="text.secondary" sx={{ color: "#FFFF00" }}>
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EarthBlog;
