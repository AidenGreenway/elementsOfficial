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
import { useContext, useEffect, useState } from "react";
import dalle from "src/assets/images/forumdall.png";
import YourContext from "src/elementContext/ElementContext";

export const FireBlog = () => {
  const { username } = useContext(YourContext);

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
    if (commentText[postId] !== undefined && commentText[postId].trim() !== "") {
      const updatedPosts = blogPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [`${username}: ${commentText[postId]}`, ...post.comments],
            }
          : post
      );
      setBlogPosts(updatedPosts);
      setCommentText({ ...commentText, [postId]: "" });
    }
  };
  const handleClearData = () => {
    localStorage.removeItem("fireBlogPosts");
    setBlogPosts([]);
  };

  return (
    <Box sx={{ marginTop: "4%" }}>
      <Box
        sx={{
          maxWidth: "auto",
          padding: "0px",
          backgroundImage: `url(${dalle})`,
          backgroundSize: "350px 350px",
          backgroundPosition: "42% 50%",
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
                  backgroundColor: "#FF6E00",
                  borderRadius: "8px",
                },
              }}
            >
              <Typography variant="h6" color="red" sx={{ marginBottom: 1, textAlign: "left" }}>
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
                    border: "3px solid #62383A",
                    backgroundColor: "black",
                    opacity: "100%",
                  },
                  "& input": {
                    color: "white",
                  },
                }}
              />
              <Typography variant="h6" color="red" sx={{ marginBottom: 1, textAlign: "left" }}>
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
                    border: "3px solid #62383A",
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
                    color: "red",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "red",
                    },
                  }}
                >
                  Add Post
                </Button>
                <Typography sx={{ fontFamily: "The Next Font", fontSize: "30px" }}>
                  {username}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleClearData}
                  sx={{
                    backgroundColor: "black",
                    color: "red",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "red",
                    },
                  }}
                >
                  Clear Data
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Typography color="#D70040" sx={{ fontSize: "24px", marginTop: 0, marginLeft: 62 }}>
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
                borderImage: "linear-gradient(45deg, #FF6E00, #FFD700) 1",
                borderImageSlice: 1,
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
                <div key={post.id}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                    <Button
                      onClick={() => handleToggleComments(post.id)}
                      sx={{
                        backgroundColor: "transparent",
                        color: "red",
                        margin: 1,
                        "&:hover": {
                          color: "pink",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      comments
                    </Button>
                  </Box>
                  <Card
                    sx={{
                      marginBottom: 2,
                      borderRadius: "8px",
                      overflowY: "auto",
                      maxHeight: "300px",
                      border: "3px solid #62383A",
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
                        backgroundColor: "#FF6E00",
                        borderRadius: "8px",
                      },
                    }}
                  >
                    <CardHeader
                      title={
                        <>
                          <Typography
                            variant="body2"
                            color="white"
                            sx={{
                              fontSize: "14px", // dostosuj wielkość czcionki według potrzeb
                              display: "block",
                              marginBottom: "4px", // dostosuj odstęp według potrzeb
                            }}
                          >
                            {username}
                          </Typography>
                          {post.title}
                        </>
                      }
                      sx={{
                        color: "red",
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
                      <Typography color="text.secondary" sx={{ color: "white", textAlign: "left" }}>
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
                              marginTop: 4,
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
                              marginBottom: 1,
                            }}
                          >
                            <Button
                              variant="contained"
                              onClick={() => handleAddComment(post.id)}
                              sx={{
                                backgroundColor: "transparent",
                                color: "pink",
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
                            sx={{ marginTop: 2, marginBottom: 3, color: "red", textAlign: "left" }}
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
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        maxWidth="10%"
        fontSize="60px"
        color="#D70040"
        sx={{ marginLeft: 5, marginTop: -30 }}
      >
        Fire Blog
      </Typography>
    </Box>
  );
};
