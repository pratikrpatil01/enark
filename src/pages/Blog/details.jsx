import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Grid2 } from "@mui/material";
import { blogsData } from "../../assets/data";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) return <Typography>Blog not found</Typography>;

  return (
    <Grid2>
      <Typography variant="h3">Blog Detail Page</Typography>
      <Container>
        <Box mt={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {blog?.title}
          </Typography>
          <img
            src={blog?.image}
            alt={blog?.title}
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
          <Box mt={2}>
            <Typography variant="h5" component="p">
              {blog?.summary}
            </Typography>
            <Typography variant="h6" component="p">
              {blog?.content}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Grid2>
  );
};

export default BlogDetail;
