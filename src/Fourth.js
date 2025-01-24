import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const stats = [
  { icon: "😊", value: 385, label: "Happy Customers" },
  { icon: "🏠", value: 842, label: "Houses Cleaned" },
  { icon: "🏆", value: 489, label: "Awards Received" },
  { icon: "🪟", value: 1344, label: "Glass Cleaned" },
];

const news = [
  {
    date: "12 Nov",
    image: "/images/image4.png",
    title: "Temporary Ruling Issued",
    description:
      "Washla has met the demands of a growing world cleaning tremendous.",
    author: "Martha Smith",
    role: "Washla CEO",
  },
  {
    date: "11 Nov",
    image: "/images/image5.png",
    title: "The Expands California",
    description:
      "Welcomed and every sed ut perspiciatis unde omnis iste natus.",
    author: "Laura Jones",
    role: "Accounting",
  },
  {
    date: "10 Nov",
    image: "/images/image6.png",
    title: "Temporary Ruling Issued",
    description: "Washla has met the demands of a growing world cleaning.",
    author: "Matt Ryan",
    role: "Lawyer",
  },
];

export default function StatsAndNews() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginBottom: 6 }}
      >
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                padding: 2,
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Typography variant="h3" color="primary">
                {stat.icon}
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" gutterBottom>
        Recent News
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        We specialize in intelligent & effective Search and believe in the power
        of partnerships to grow business.
      </Typography>

      <Grid container spacing={4}>
        {news.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "primary.main",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  <Typography variant="body2">{item.date}</Typography>
                </Box>
              </Box>
              <CardContent>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  gutterBottom
                  fontWeight="bold"
                >
                  CLEANING
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {item.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>{item.author}</strong> - {item.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
