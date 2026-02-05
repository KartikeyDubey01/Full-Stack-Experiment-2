import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Stack
} from '@mui/material';
import {
  Rocket,
  Speed,
  Security,
  Support,
  Dashboard as DashboardIcon,
  AdminPanelSettings
} from '@mui/icons-material';

const LandingPage = ({ onNavigate }) => {
  const features = [
    {
      icon: <Rocket sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Fast Performance',
      description:
        'Lightning-fast load times and optimal performance for your applications.'
    },
    {
      icon: <Speed sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: 'Speed Optimized',
      description:
        'Built with modern technologies to ensure maximum speed and efficiency.'
    },
    {
      icon: <Security sx={{ fontSize: 48, color: 'success.main' }} />,
      title: 'Secure & Safe',
      description:
        'Enterprise-grade security to protect your data and applications.'
    },
    {
      icon: <Support sx={{ fontSize: 48, color: 'info.main' }} />,
      title: '24/7 Support',
      description:
        'Round-the-clock customer support to help you whenever you need.'
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h2"
            fontWeight={700}
            mb={3}
            sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}
          >
            Welcome to Material UI Experiments
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            mb={5}
            maxWidth="750px"
            mx="auto"
          >
            Build beautiful, responsive interfaces with ease using Material UI components
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<DashboardIcon />}
              onClick={() => onNavigate('dashboard')}
            >
              View Dashboard
            </Button>

            <Button
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<AdminPanelSettings />}
              onClick={() => onNavigate('admin')}
            >
              View Admin Panel
            </Button>
          </Stack>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} mb={10}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box mb={2}>{feature.icon}</Box>

                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {feature.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box
          textAlign="center"
          bgcolor="primary.main"
          color="white"
          borderRadius={3}
          p={6}
        >
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Ready to Start Building?
          </Typography>

          <Typography maxWidth="600px" mx="auto" mb={3}>
            Join thousands of developers creating amazing applications with Material UI
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;