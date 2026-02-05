import React, { useState } from 'react';
import { Box } from '@mui/material';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'dashboard':
        return <Dashboard onBack={() => setCurrentView('home')} />;
      case 'admin':
        return <AdminPanel onBack={() => setCurrentView('home')} />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {renderView()}
    </Box>
  );
}

export default App;