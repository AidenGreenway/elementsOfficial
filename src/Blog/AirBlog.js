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

export const AirBlog = () => {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem("airBlogPosts")) || []
  );
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem("airBlogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Update localStorage whenever blogPosts changes
  useEffect(() => {
    localStorage.setItem("airBlogPosts", JSON.stringify(blogPosts));
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
        comments: [], // Assuming you want to keep this field
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
            sx={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" color="#87ceeb" sx={{ marginBottom: 1 }}>
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
                  borderColor: "#87ceeb",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& input": { color: "#FFF" },
              }}
            />
            <Typography variant="h6" color="#87ceeb" sx={{ marginBottom: 1 }}>
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
                  borderColor: "#87ceeb",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& textarea": { color: "#FFF" },
              }}
            />
            <Button
              variant="contained"
              onClick={handlePostSubmit}
              sx={{ backgroundColor: "#87ceeb", color: "#FFF" }}
            >
              Add Post
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
                    color: "#87ceeb",
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: 2, color: "#87ceeb" }}
                  >
                    <strong>Comments:</strong>
                    {post.comments.map((comment, index) => (
                      <Typography key={index} variant="body2" color="text.secondary">
                        {comment}
                      </Typography>
                    ))}
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
