import React, { useState, createContext, useContext, useMemo } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  Grid,
  Switch,
  FormControlLabel,
  Container,
  Paper,
  Divider,
  Chip
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Dashboard,
  People,
  Settings,
  BarChart,
  ArrowBack,
  TrendingUp,
  CheckCircle
} from '@mui/icons-material';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const AdminPanel = ({ onBack }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#1976d2',
                  light: '#42a5f5',
                  dark: '#1565c0',
                },
                secondary: {
                  main: '#dc004e',
                  light: '#f48fb1',
                  dark: '#c51162',
                },
                background: {
                  default: '#f5f7fa',
                  paper: '#ffffff',
                },
              }
            : {
                primary: {
                  main: '#90caf9',
                  light: '#bbdefb',
                  dark: '#42a5f5',
                },
                secondary: {
                  main: '#f48fb1',
                  light: '#f8bbd0',
                  dark: '#f06292',
                },
                background: {
                  default: '#0a1929',
                  paper: '#132f4c',
                },
              }),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
                padding: '8px 20px',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                border: mode === 'light' ? '1px solid #e0e0e0' : '1px solid #1e3a52',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: 'none',
                borderBottom: `1px solid ${mode === 'light' ? '#e0e0e0' : '#1e3a52'}`,
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminPanelContent mode={mode} onBack={onBack} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const AdminPanelContent = ({ mode, onBack }) => {
  const colorMode = useContext(ColorModeContext);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  const sections = [
    {
      title: 'Dashboard Overview',
      icon: <Dashboard sx={{ fontSize: 36 }} />,
      value: '2,543',
      description: 'Total Views',
      color: 'primary.main',
      bgColor: 'primary.light',
      change: '+12.5%'
    },
    {
      title: 'Active Users',
      icon: <People sx={{ fontSize: 36 }} />,
      value: '1,234',
      description: 'Online Now',
      color: 'success.main',
      bgColor: 'success.light',
      change: '+8.3%'
    },
    {
      title: 'Analytics',
      icon: <BarChart sx={{ fontSize: 36 }} />,
      value: '85%',
      description: 'Engagement Rate',
      color: 'info.main',
      bgColor: 'info.light',
      change: '+15.2%'
    },
    {
      title: 'Performance',
      icon: <TrendingUp sx={{ fontSize: 36 }} />,
      value: '94%',
      description: 'System Health',
      color: 'warning.main',
      bgColor: 'warning.light',
      change: '+3.1%'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Top AppBar */}
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar sx={{ py: 1 }}>
          <IconButton
            onClick={onBack}
            edge="start"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Admin Control Panel
          </Typography>
          <Typography variant="body2" sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}>
            {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Welcome Back, Admin
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your system settings and monitor performance metrics
          </Typography>
        </Box>

        {/* Theme Settings Card */}
        <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Theme Settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Customize your visual experience with light or dark mode
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 2, alignItems: 'center' }}>
                <Chip 
                  label={mode === 'light' ? 'Light Mode Active' : 'Dark Mode Active'}
                  color={mode === 'light' ? 'primary' : 'secondary'}
                  icon={<CheckCircle />}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={mode === 'dark'}
                      onChange={colorMode.toggleColorMode}
                      color="primary"
                    />
                  }
                  label="Dark Mode"
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Statistics Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        gutterBottom
                        sx={{ fontWeight: 500 }}
                      >
                        {section.title}
                      </Typography>
                      <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {section.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {section.description}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'success.main', 
                          fontWeight: 600,
                          mt: 1,
                          display: 'block'
                        }}
                      >
                        {section.change} from last week
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ 
                        color: section.color,
                        bgcolor: section.bgColor,
                        p: 1.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.9
                      }}
                    >
                      {section.icon}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Styled Components Section */}
        <Paper elevation={0} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Styled Component Examples
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="contained" 
                fullWidth
                sx={{ py: 1.5 }}
              >
                Primary Button
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="outlined" 
                fullWidth
                sx={{ py: 1.5 }}
              >
                Outlined Button
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="contained" 
                color="secondary"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Secondary Button
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button 
                variant="text" 
                fullWidth
                sx={{ py: 1.5 }}
              >
                Text Button
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Settings Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card elevation={0} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  System Configuration
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary" paragraph>
                  This section demonstrates responsive layout behavior and theme adaptation.
                  On desktop, it occupies two-thirds of the width. On tablet and mobile devices,
                  it stacks vertically and takes full width for optimal readability.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Key Features:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Automatic theme color adjustment for light and dark modes
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Responsive grid system with breakpoint-based layouts
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Customized Material UI component styling
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={0} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Preferences
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={emailNotifications}
                        onChange={(e) => setEmailNotifications(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Email Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={pushNotifications}
                        onChange={(e) => setPushNotifications(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={autoBackup}
                        onChange={(e) => setAutoBackup(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Auto Backup"
                  />
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ mt: 3 }}
                >
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminPanel;