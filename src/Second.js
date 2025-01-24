import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Tradition of Trust
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          We specialize in intelligent & effective search and believe in the
          power of partnerships to grow businesses.
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <Avatar sx={{ bgcolor: "#1565c0", margin: "0 auto" }}>
                <CleaningServicesIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6">Professional Team</Typography>
                <Typography>
                  Our team uses a sanitizing solution to wipe down light
                  switches and doorknobs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <Avatar sx={{ bgcolor: "#1565c0", margin: "0 auto" }}>
                <AccessTimeIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6">24/7 Services</Typography>
                <Typography>
                  We encourage our customers to let us know in advance of an
                  appointment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <Avatar sx={{ bgcolor: "#1565c0", margin: "0 auto" }}>
                <VerifiedIcon />
              </Avatar>
              <CardContent>
                <Typography variant="h6">Service Guarantee</Typography>
                <Typography>
                  We are telling our team members to watch out all cleaning
                  cloths and mop heads.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#fffde7",
          padding: 4,
          marginTop: 4,
          textAlign: "center",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <img
              src="/images/image2.png"
              alt="Cleaner Place"
              style={{ width: "60%", height: "60%", borderRadius: 3 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              A Cleaner Place is a Safer Place
            </Typography>
            <Typography>
              World-class cleaning service. We are dedicated to giving our
              customers back the time they deserve to enjoy the things they
              love.
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ textAlign: "center", padding: 2 }}>
                  <CardContent>
                    <Typography variant="h6">Professional Cleaning</Typography>
                    <Typography>
                      Housekeeping is responsible for minor security in hotel
                      housekeeping.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
