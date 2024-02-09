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

export const FireBlog = () => {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem("fireBlogPosts")) || []
  );
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [showComments, setShowComments] = useState({});
  const [commentText, setCommentText] = useState({});

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

  const handleClearData = () => {
    localStorage.removeItem("fireBlogPosts");
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
          {/* Section for adding a new post */}
          <Box
            sx={{
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#FF6E00",
                borderRadius: "8px",
              },
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
              sx={{
                backgroundColor: "black",
                color: "orange",
                marginRight: 2,
                "&:hover": {
                  color: "black",
                  backgroundColor: "orange", // Ustaw kolor hover background tutaj
                },
              }}
            >
              Add Post
            </Button>
            <Button
              variant="contained"
              onClick={handleClearData}
              sx={{
                backgroundColor: "black",
                color: "orange",
                marginRight: 2,
                "&:hover": {
                  color: "black",
                  backgroundColor: "orange", // Ustaw kolor hover background tutaj
                },
              }}
            >
              Clear Data
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="#FF6E00" sx={{ marginBottom: 1 }}>
            posts
          </Typography>
          {/* Section for displaying posts with added frame */}
          <Box
            sx={{
              width: "100%",
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
              borderImage: "linear-gradient(45deg, #FF6E00, #FFD700) 1",
              borderImageSlice: 1,
              boxShadow: "2px 2px 10px rgba(255, 0, 0, 0.8)", // Red shadow
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255, 0, 0, 0.8)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#FF6E00",
                borderRadius: "8px",
              },
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
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    borderRadius: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#FF6E00",
                    borderRadius: "8px",
                  },
                }}
              >
                <CardHeader
                  title={post.title}
                  sx={{
                    color: "#FF6E00",
                    textAlign: "left",
                    fontSize: "18px",
                    "& .MuiCardHeader-content": {
                      flexGrow: 1,
                    },
                  }}
                  action={
                    <Typography variant="body2" color="white">
                      {post.date}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ color: "#FFD700", textAlign: "left" }}
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
                            borderColor: "#FF6E00",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                          "& input": {
                            color: "#FFF",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: 2,
                          marginBottom: 1, // Dodaj margines na dole dla estetyki
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => handleAddComment(post.id)}
                          sx={{
                            backgroundColor: "transparent",
                            color: "orange",
                            marginLeft: "auto", // Przesuń przycisk na prawą stronę
                            "&:hover": {
                              color: "limeGreen",
                              backgroundColor: "transparent", // Ustaw kolor hover background tutaj
                            },
                          }}
                        >
                          Add Comment
                        </Button>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginTop: 2, marginBottom: 3, color: "white", textAlign: "left" }}
                      >
                        <strong>Comments:</strong>
                      </Typography>
                      {post.comments.map((comment, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            color: "#FFD700",
                            textAlign: "left",
                            borderBottom: "1px solid #FF6E00",
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
                      onClick={() => handleToggleComments(post.id)}
                      sx={{
                        backgroundColor: "transparent",
                        color: "orange",
                        margin: 1,
                        "&:hover": {
                          color: "black",
                          backgroundColor: "transparent", // Ustaw kolor hover background tutaj
                        },
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

export default FireBlog;
