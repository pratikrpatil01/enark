import React from "react";
import { Container, Typography, Grid2 } from "@mui/material";
import HomeCard from "../../Components/HomeCard";
import { useSelector } from "react-redux";
import { posts } from "../../assets/data";
const Home = () => {
  return (
    <Grid2>
      <Typography variant="h3">Home Page</Typography>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome Enark Educatoin
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Enark is an educational technology company that offers a variety of
          workshops, courses, and events for students, teachers, and
          professionals. They focus on training, management, and e-learning,
          aiming to enhance and upgrade the educational experience.
        </Typography>
        <Grid2 container spacing={4}>
          {posts.map((post, index) => (
            <HomeCard data={post} index={index} key={index} />
          ))}
        </Grid2>
      </Container>
    </Grid2>
  );
};

export default Home;
