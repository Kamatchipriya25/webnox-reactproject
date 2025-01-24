import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const theme = createTheme();

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>
      <Typography>
        If you have any questions or want to schedule a service, feel free to
        reach out to us at:
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Email: info@amiso.com
      </Typography>
      <Typography variant="h6">Phone: +123 456 7890</Typography>
    </Container>
  );
};

const Home = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Amiso Cleaning Services
          </Typography>

          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: "url('/images/image1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            padding: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" gutterBottom className="segment">
            A Tradition of Quality Cleaning
          </Typography>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </Box>

        <Container maxWidth="lg" sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Professional Cleaning</Typography>
                  <Typography>
                    Housekeeping is responsible for minor security in hotel
                    housekeeping for a clean and tidy environment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Fast and Efficient</Typography>
                  <Typography>
                    Our aim is to keep your house clean with the help of modern
                    tools.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <CardContent>
                  <Typography variant="h6">Renew Your Look</Typography>
                  <Typography>
                    Both of us take pride in creating clean homes with
                    professional services.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ height: "20px" }} />

        <Box
          sx={{
            padding: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            A Clean House is a Happy Place!
          </Typography>
          <Typography>
            Washla has met the demands of a growing world. Let us help you
            achieve the perfect clean home.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
