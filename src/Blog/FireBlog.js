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

const FireBlog = () => {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem("fireBlogPosts")) || []
  );
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [showComments, setShowComments] = useState({});
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const savedPosts = localStorage.getItem("fireBlogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fireBlogPosts", JSON.stringify(blogPosts));
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

  const handleToggleComments = (postId) => {
    setShowComments((prevComments) => ({
      ...prevComments,
      [postId]: !prevComments[postId],
    }));
  };

  const handleCommentInputChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleAddComment = (postId) => {
    if (commentText.trim() !== "") {
      const updatedPosts = blogPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, commentText],
          };
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      setCommentText("");
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
            <Typography variant="h6" color="#FF6E00" sx={{ marginBottom: 1 }}>
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
                  borderColor: "#FF6E00",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                "& input": {
                  color: "#FFF",
                },
              }}
            />
            <Typography variant="h6" color="#FF6E00" sx={{ marginBottom: 1 }}>
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
                  borderColor: "#FF6E00",
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
              sx={{ backgroundColor: "#FF6E00", color: "#FFF" }}
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
                    color: "#FF6E00",
                    textAlign: "left",
                    fontSize: "18px",
                    "& .MuiCardHeader-subheader": {
                      color: "#FFD700",
                      textAlign: "left",
                      fontSize: "14px",
                    },
                  }}
                />
                <CardContent>
                  <Typography variant="body1" color="text.secondary" sx={{ color: "#FFD700" }}>
                    {post.content}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => handleToggleComments(post.id)}
                    sx={{
                      marginTop: 2,
                      color: "#FF6E00",
                      borderColor: "#FF6E00",
                      textTransform: "none",
                    }}
                  >
                    Comments
                  </Button>
                  {showComments[post.id] && (
                    <div>
                      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                        <strong>Comments:</strong>
                      </Typography>
                      {post.comments.map((comment, index) => (
                        <Typography key={index} variant="body2" color="text.secondary">
                          {comment}
                        </Typography>
                      ))}
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={handleCommentInputChange}
                        sx={{
                          marginTop: 1,
                          "& .MuiOutlinedInput-root": {
                            borderColor: "#FF6E00",
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
                        sx={{ backgroundColor: "#FF6E00", color: "#FFF", marginTop: 1 }}
                      >
                        Add Comment
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FireBlog;
