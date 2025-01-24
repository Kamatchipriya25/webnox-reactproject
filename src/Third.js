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

const services = [
  {
    title: "Home Cleaning",
    description:
      "Homes and thoroughly launder them between usage. We give our teams the accusantium doloremque laudantium.",
    icon: "🏠",
  },
  {
    title: "Windows Cleaning",
    description:
      "We are closely monitoring national, state and local health agencies for the most recent developments.",
    icon: "🪟",
  },
  {
    title: "Office Cleaning",
    description:
      "Follow these tips from the CDC to help prevent the spread of the seasonal flu and respiratory diseases.",
    icon: "🏢",
  },
];

const teamMembers = [
  {
    name: "Monica Gordon",
    role: "House Cleaning",
    image: "/images/member1.png",
  },
  {
    name: "Laura Jones",
    role: "Cleaner",
    image: "/images/member2.png",
  },
  {
    name: "Sara Ryan",
    role: "House Cleaner",
    image: "/images/member3.png",
  },
];

export default function CleaningServicePage() {
  return (
    <Container sx={{ paddingY: 4 }}>
      <Box
        sx={{
          backgroundImage: "url('/images/image3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "white" }}
        >
          Why Choose Us
        </Typography>
        <Typography variant="h6" align="center" color="white" gutterBottom>
          Restoring the beauty and freshness of all your upholstered fabrics and
          take the work out of housework for you.
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h3" align="center">
                  {service.icon}
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" align="center">
                  {service.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography
        variant="h4"
        align="center"
        sx={{ marginTop: 6 }}
        gutterBottom
      >
        Meet Our Team
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        The member of our highly experienced team is dedicated to providing you
        with only the best service we can possibly provide.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="200"
                image={member.image}
                alt={member.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                >
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
