import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Container
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People,
  Assessment,
  Settings,
  Notifications,
  AccountCircle,
  TrendingUp,
  ShoppingCart,
  AttachMoney,
  ArrowBack
} from '@mui/icons-material';

const drawerWidth = 240;

const Dashboard = ({ onBack }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Users', icon: <People /> },
    { text: 'Analytics', icon: <Assessment /> },
    { text: 'Settings', icon: <Settings /> }
  ];

  const statsCards = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      icon: <AttachMoney sx={{ fontSize: 40 }} />,
      color: 'primary.main',
      bgColor: 'primary.light'
    },
    {
      title: 'New Orders',
      value: '1,245',
      change: '+8.2%',
      icon: <ShoppingCart sx={{ fontSize: 40 }} />,
      color: 'success.main',
      bgColor: 'success.light'
    },
    {
      title: 'Active Users',
      value: '8,542',
      change: '+18.7%',
      icon: <People sx={{ fontSize: 40 }} />,
      color: 'info.main',
      bgColor: 'info.light'
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: '+5.4%',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: 'secondary.main',
      bgColor: 'secondary.light'
    }
  ];

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600 }}>
          Admin Panel
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={item.text}
            sx={{
              py: 1.5,
              px: 2.5,
              mb: 0.5,
              mx: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'primary.main'
              },
              ...(index === 0 && {
                bgcolor: 'primary.light',
                color: 'primary.main'
              })
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'white',
          color: 'text.primary',
          boxShadow: 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            onClick={onBack}
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Collapsible Sidebar */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth 
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: '1px solid',
              borderColor: 'divider'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          bgcolor: '#f5f7fa',
          minHeight: '100vh'
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}

        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Page Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Overview
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Welcome back! Here's what's happening with your business today.
            </Typography>
          </Box>

          {/* Responsive Stats Card Grid */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {statsCards.map((card, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography 
                          color="text.secondary" 
                          variant="body2" 
                          gutterBottom
                          sx={{ fontWeight: 500, mb: 1 }}
                        >
                          {card.title}
                        </Typography>
                        <Typography 
                          variant="h4" 
                          component="div"
                          sx={{ fontWeight: 700, mb: 0.5 }}
                        >
                          {card.value}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'success.main', 
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {card.change}
                          <Typography component="span" variant="caption" sx={{ ml: 0.5, color: 'text.secondary' }}>
                            vs last month
                          </Typography>
                        </Typography>
                      </Box>
                      <Box 
                        sx={{ 
                          color: card.color,
                          bgcolor: card.bgColor,
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {card.icon}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Additional Content Sections */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Recent Activity
                  </Typography>
                  <Box 
                    sx={{ 
                      height: 300, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      bgcolor: '#f8f9fa',
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="body1" color="text.secondary">
                      Activity Chart Placeholder
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <Card elevation={0} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Quick Stats
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[
                      { label: 'Conversion Rate', value: '3.24%' },
                      { label: 'Avg. Order Value', value: '$156' },
                      { label: 'Customer Satisfaction', value: '4.8/5' },
                      { label: 'Response Time', value: '2.3h' }
                    ].map((stat, idx) => (
                      <Box key={idx} sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {stat.label}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {stat.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;