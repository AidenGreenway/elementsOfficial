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
import { addDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react"; // Dodano useRef
import YourContext from "src/elementContext/ElementContext";
import { ColRef2 } from "src/firebaseConfig";

export const FireBlog = () => {
  const { username } = useContext(YourContext);
  const commentsEndRef = useRef(null); // Dodano referencję do ostatniego komentarza

  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [showComments, setShowComments] = useState({});
  const [commentText, setCommentText] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const postsSnapshot = await getDocs(ColRef2);
      const postsData = postsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogPosts(postsData);
    };

    fetchData();
  }, []);

  const handlePostSubmit = async () => {
    if (newPost.title.trim() !== "" && newPost.content.trim() !== "") {
      const currentDate = new Date().toISOString().slice(0, 10);
      const newBlogPost = {
        title: newPost.title,
        content: newPost.content,
        date: currentDate,
        comments: [],
      };

      // Dodanie nowego posta do Firestore
      const docRef = await addDoc(ColRef2, newBlogPost);

      // Aktualizacja stanu blogPosts
      setBlogPosts((prevPosts) =>
        [{ id: docRef.id, ...newBlogPost }, ...prevPosts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
      );
      // Wyczyszczenie pól nowego posta
      setNewPost({ title: "", content: "" });
    }
  };

  const handleToggleComments = (postId) => {
    setShowComments((prevComments) => ({
      ...prevComments,
      [postId]: !prevComments[postId],
    }));
  };
  const handleCommentKeyDown = (postId, e) => {
    if (e.key === "Enter") {
      handleAddComment(postId);
    }
  };
  const handleCommentInputChange = (postId, e) => {
    setCommentText({ ...commentText, [postId]: e.target.value });
  };

  const handleAddComment = async (postId) => {
    if (commentText[postId] !== undefined && commentText[postId].trim() !== "") {
      // Dodanie nowego komentarza do tablicy komentarzy
      const updatedComments = [
        ...blogPosts.find((post) => post.id === postId).comments,
        `${username}: ${commentText[postId]} `,
      ];

      // Aktualizacja komentarza w Firestore
      await updateDoc(doc(ColRef2, postId), { comments: updatedComments });

      // Aktualizacja stanu blogPosts
      const updatedBlogPosts = blogPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: updatedComments.sort((a, b) => {
                const dateA = new Date(a.split(" - ")[1]);
                const dateB = new Date(b.split(" - ")[1]);
                return dateA - dateB;
              }),
            }
          : post
      );

      setBlogPosts(updatedBlogPosts);

      // Wyczyszczenie pola wprowadzania komentarza
      setCommentText({ ...commentText, [postId]: "" });
    }
  };

  return (
    <Box sx={{ marginTop: "4%" }}>
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
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
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
              rows={4} // Ustaw maksymalną liczbę wierszy
              variant="outlined"
              name="content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
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
                  overflowY: "auto", // Wyłącz automatyczne dostosowywanie wysokości
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
                  color: "white",
                  "&:hover": {
                    color: "lightGreen",
                    backgroundColor: "black",
                  },
                }}
              >
                Add Post
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
                            fontSize: "14px",
                            display: "block",
                            marginBottom: "20px",
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
                    <Box sx={{ marginBottom: 8 }} />

                    {/* Linia oddzielająca treść posta od komentarzy */}

                    {showComments[post.id] && (
                      <div>
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
                        <div ref={commentsEndRef} /> {/* Referencja do ostatniego komentarza */}
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Add a comment..."
                          value={commentText[post.id] || ""}
                          onChange={(e) => handleCommentInputChange(post.id, e)}
                          onKeyDown={(e) => handleCommentKeyDown(post.id, e)}
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
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </Box>
        </Grid>
      </Grid>

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
