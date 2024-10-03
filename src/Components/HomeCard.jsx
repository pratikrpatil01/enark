import React from "react";
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const HomeCard = ({ data, index }) => {
  return (
    <Grid2 item xs={12} sm={6} md={3} lg={2} key={index}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          maxWidth: 345,
        }}
      >
        <CardActionArea sx={{ flexGrow: 1 }}>
          <CardMedia
            component="img"
            alt={data?.title}
            image={data?.image}
            title={data?.title}
          />
          <CardContent>
            <Typography variant="h6" component="h2">
              {data?.title}
            </Typography>
            <Typography variant="body2" component="p">
              {data?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid2>
  );
};

export default HomeCard;
