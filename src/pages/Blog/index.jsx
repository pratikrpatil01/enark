import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
} from "@mui/material";
import { blogsData } from "../../assets/data";

const Blogs = () => {
  const route = useNavigate();

  const handleClick = (id) => {
    route(`/blogs/details/${id}`);
  };

  return (
    <>
      <Grid2>
        <Typography variant="h3">Blog Page</Typography>

        <Grid2 container spacing={4} justifyContent="center">
          {blogsData &&
            blogsData?.map((blog, index) => (
              <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 345,
                  }}
                >
                  <CardActionArea onClick={() => handleClick(blog?.id)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={blog?.image}
                      alt={blog?.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog?.summary}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {blog?.category}
                      </Typography>{" "}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid2>
            ))}
        </Grid2>
      </Grid2>
    </>
  );
};
export default Blogs;
