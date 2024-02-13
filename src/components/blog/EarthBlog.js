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

export const EarthBlog = () => {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem("earthBlogPosts")) || []
  );
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [showComments, setShowComments] = useState({});
  const [commentText, setCommentText] = useState({});

  useEffect(() => {
    const savedPosts = localStorage.getItem("earthBlogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, []);

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
    }
  };

  const handleClearData = () => {
    localStorage.removeItem("earthBlogPosts");
    setBlogPosts([]);
  };

  const handleToggleComments = (postId) => {
    setShowComments((prevComments) => ({
      ...prevComments,
      [postId]: !prevComments[postId],
    }));
  };

  const handleCommentInputChange = (postId, e) => {
    setCommentText({ ...commentText, [postId]: e.target.value });
  };

  const handleAddComment = (postId) => {
    if (commentText[postId]?.trim() !== "") {
      const updatedPosts = blogPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [commentText[postId], ...post.comments],
          };
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      setCommentText({ ...commentText, [postId]: "" });
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
        backgroundColor: "black", // Kolor ziemi
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "black", // Kolor zieleni
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" color="#a5d6a7" sx={{ marginBottom: 1 }}>
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
                  borderColor: "#a5d6a7",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& input": {
                  color: "#FFF",
                },
              }}
            />
            <Typography variant="h6" color="#a5d6a7" sx={{ marginBottom: 1 }}>
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
                  borderColor: "#a5d6a7",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& textarea": {
                  color: "#FFF",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handlePostSubmit}
              sx={{ backgroundColor: "#81c784", color: "#FFF", marginRight: 2 }}
            >
              Add Post
            </Button>
            <Button
              variant="contained"
              onClick={handleClearData}
              sx={{ backgroundColor: "#81c784", color: "#FFF" }}
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
                  sx={{
                    color: "#66bb6a",
                    textAlign: "left",
                    fontSize: "18px",
                    "& .MuiCardHeader-content": {
                      flexGrow: 1,
                    },
                  }}
                  action={
                    <Typography variant="body2" color="#aed581">
                      {post.date}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ color: "#aed581", textAlign: "left" }}
                  >
                    {post.content}
                  </Typography>
                  {showComments[post.id] && (
                    <div>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Add a comment..."
                        value={commentText[post.id] || ""}
                        onChange={(e) => handleCommentInputChange(post.id, e)}
                        sx={{
                          marginTop: 1,
                          "& .MuiOutlinedInput-root": {
                            borderColor: "#81c784",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "& input": {
                            color: "#FFF",
                          },
                        }}
                      />
                      <Button
                        variant="contained"
                        onClick={() => handleAddComment(post.id)}
                        sx={{ backgroundColor: "#81c784", color: "#FFF", marginTop: 1 }}
                      >
                        Add Comment
                      </Button>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginTop: 2, marginBottom: 3, color: "#aed581", textAlign: "left" }}
                      >
                        <strong>Comments:</strong>
                      </Typography>
                      {post.comments.map((comment, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            color: "#aed581",
                            textAlign: "left",
                            borderBottom: "1px solid #81c784",
                            paddingBottom: 1,
                            marginBottom: 1,
                          }}
                        >
                          {comment}
                        </Typography>
                      ))}
                    </div>
                  )}
                  <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={() => handleToggleComments(post.id)}
                      sx={{
                        color: "#81c784",
                        borderColor: "#81c784",
                        textTransform: "none",
                      }}
                    >
                      Comments
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
