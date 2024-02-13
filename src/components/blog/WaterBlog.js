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
import dalle from "src/assets/images/forumdall.png";

export const WaterBlog = () => {
  const [blogPosts, setBlogPosts] = useState(
    JSON.parse(localStorage.getItem("waterBlogPosts")) || []
  );
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [showComments, setShowComments] = useState({});
  const [commentText, setCommentText] = useState({});

  useEffect(() => {
    const savedPosts = localStorage.getItem("waterBlogPosts");
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("waterBlogPosts", JSON.stringify(blogPosts));
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
      const updatedPosts = blogPosts.map((post) =>
        post.id === postId ? { ...post, comments: [commentText[postId], ...post.comments] } : post
      );
      setBlogPosts(updatedPosts);
      setCommentText({ ...commentText, [postId]: "" });
    }
  };

  const handleClearData = () => {
    localStorage.removeItem("waterBlogPosts");
    setBlogPosts([]);
  };

  return (
    <Box
      sx={{
        maxWidth: "auto",
        padding: "0px",
        backgroundImage: `url(${dalle})`,
        backgroundSize: "350px 350px",
        backgroundPosition: "42% 50%", // Adjust as needed
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              width: "100%",
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
                backgroundColor: "#0066cc", // Blue color
                borderRadius: "8px",
              },
            }}
          >
            <Typography variant="h6" color="blue" sx={{ marginBottom: 1, textAlign: "left" }}>
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
                width: "60%",
                marginRight: "40%",
                "& .MuiOutlinedInput-root": {
                  border: "3px solid #0066cc",
                  backgroundColor: "black",
                  opacity: "100%",
                },
                "& input": {
                  color: "white",
                },
              }}
            />
            <Typography variant="h6" color="blue" sx={{ marginBottom: 1, textAlign: "left" }}>
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
                width: "60%",
                marginRight: "40%",
                marginBottom: 2,
                "& .MuiOutlinedInput-root": {
                  border: "3px solid #0066cc",
                  backgroundColor: "black",
                  opacity: "100%",
                },
                "& textarea": {
                  color: "#FFF",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <Button
                variant="contained"
                onClick={handlePostSubmit}
                sx={{
                  backgroundColor: "black",
                  color: "#0066cc",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#0066cc",
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
                  color: "#0066cc",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "#0066cc",
                  },
                }}
              >
                Clear Data
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography color="blue" sx={{ fontSize: "15px", textAlign: "right", marginBottom: 0.5 }}>
            posts
          </Typography>
          <Box
            sx={{
              marginLeft: "17%",
              width: "100%",
              padding: "20px",
              borderRadius: "8px",
              height: "80vh",
              overflowY: "auto",
              borderImage: "linear-gradient(45deg, #0066cc, #00ccff) 1", // Blue gradient
              borderImageSlice: 1,
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(0, 102, 204, 0.8)", // Blue color
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#0066cc", // Blue color
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
                  border: "3px solid #0066cc",
                  backgroundColor: "black",
                  padding: "16px",
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    borderRadius: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#0066cc",
                    borderRadius: "8px",
                  },
                }}
              >
                <CardHeader
                  title={post.title}
                  sx={{
                    color: "blue",
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
                    sx={{ color: "white", textAlign: "left" }}
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
                            borderColor: "#0066cc",
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
                          marginBottom: 1,
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => handleAddComment(post.id)}
                          sx={{
                            backgroundColor: "transparent",
                            color: "#0066cc",
                            marginLeft: "auto",
                            "&:hover": {
                              color: "limeGreen",
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          Add Comment
                        </Button>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginTop: 2, marginBottom: 3, color: "blue", textAlign: "left" }}
                      >
                        <strong>Comments:</strong>
                      </Typography>
                      {post.comments.map((comment, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            color: "white",
                            textAlign: "left",
                            borderBottom: "1px solid #0066cc",
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
                        color: "blue",
                        margin: 1,
                        "&:hover": {
                          color: "limeGreen",
                          backgroundColor: "transparent",
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
