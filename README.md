# Material UI Responsive Interfaces

A comprehensive full-stack development experiment showcasing three responsive user interfaces built with React and Material UI. This project demonstrates modern web design principles, responsive layouts, and theme customization.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Responsive Design](#responsive-design)
- [License](#license)

## 🎯 Overview

This project implements three fully responsive user interfaces as part of a Full Stack Development experiment:

1. **Landing Page** - A modern, responsive landing page with feature cards and call-to-action sections
2. **Dashboard** - An admin dashboard with collapsible sidebar, responsive navbar, and dynamic card grid
3. **Admin Panel** - A comprehensive admin control panel with light/dark theme switching

All components are built using Material UI's Grid system, Container, Typography, and styled components with breakpoint-based responsive layouts.

## ✨ Features

### Landing Page
- ✅ Responsive grid layout using Material UI Grid
- ✅ Feature cards that stack on mobile and display side-by-side on desktop
- ✅ Smooth hover effects and animations
- ✅ Call-to-action section with gradient background
- ✅ Navigation to Dashboard and Admin Panel

### Dashboard
- ✅ Responsive top navigation bar
- ✅ Collapsible sidebar (drawer) for mobile devices
- ✅ Statistics cards with automatic column adjustment
- ✅ Chart placeholders for data visualization
- ✅ Quick stats sidebar
- ✅ Back navigation functionality

### Admin Panel
- ✅ Light/Dark theme switching using Material UI ThemeProvider
- ✅ Styled component overrides for Button, Card, and AppBar
- ✅ Multi-panel layout that collapses to single column on mobile
- ✅ Settings toggles for notifications and preferences
- ✅ Responsive statistics grid
- ✅ Theme-aware color schemes

## 📁 Project Structure

```
material-ui-experiments/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx       # Responsive landing page
│   │   ├── Dashboard.jsx         # Dashboard with sidebar
│   │   └── AdminPanel.jsx        # Admin panel with theme toggle
│   ├── App.jsx                   # Main application router
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Visual Studio Code** (recommended) or any code editor
- **Modern web browser** (Chrome, Firefox, Safari, or Edge)

### Check Installation

```bash
node --version
npm --version
```

## 🚀 Installation

### Step 1: Clone or Download the Project

```bash
# If you have git installed
git clone https://github.com/KartikeyDubey01/Full-Stack-Experiment-2.git
cd Full-Stack-Experiment-2
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- React 18.x
- Material UI 5.x
- Emotion (CSS-in-JS library)
- Vite (build tool)
- All necessary dependencies

### Step 3: Start Development Server

```bash
npm run dev
```

The application will open at: **http://localhost:5173**

## 💻 Usage

### Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** to `http://localhost:5173`

3. **Navigate through the application:**
   - Start at the **Landing Page**
   - Click **"View Dashboard"** to see the dashboard interface
   - Click **"View Admin Panel"** to see the admin control panel
   - Use the **back arrow button** (←) to return to the landing page

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

The build files will be generated in the `dist/` folder.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🧩 Components

### 1. LandingPage.jsx

**Purpose:** Main entry point showcasing features and navigation

**Key Features:**
- Hero section with responsive typography
- 4 feature cards in a responsive grid
- Navigation buttons to other sections
- Call-to-action section

**Props:**
- `onNavigate`: Function to handle navigation between pages

**Breakpoints:**
- Mobile (xs): Cards stack vertically (1 column)
- Tablet (sm): Cards in 2 columns
- Desktop (md+): Cards in 4 columns

### 2. Dashboard.jsx

**Purpose:** Admin dashboard with statistics and navigation

**Key Features:**
- Persistent top navigation bar
- Collapsible sidebar with menu items
- Responsive statistics cards
- Activity chart placeholder
- Quick stats section

**Props:**
- `onBack`: Function to navigate back to landing page

**Breakpoints:**
- Mobile (xs-sm): Hamburger menu, single column stats
- Tablet (md): Sidebar visible, 2 column stats
- Desktop (lg+): Full layout, 4 column stats

### 3. AdminPanel.jsx

**Purpose:** Admin control panel with theme switching

**Key Features:**
- Light/Dark theme toggle
- Theme settings card
- Statistics overview
- Styled component examples
- Settings preferences with toggles

**Props:**
- `onBack`: Function to navigate back to landing page

**Breakpoints:**
- Mobile (xs): Single column layout
- Tablet (sm-md): 2 column layout
- Desktop (lg+): Multi-column grid layout

## 📱 Responsive Design

### Material UI Breakpoints

The application uses Material UI's standard breakpoint system:

| Breakpoint | Min Width | Devices | Typical Layout |
|------------|-----------|---------|----------------|
| **xs** | 0px | Small phones | 1 column, stacked |
| **sm** | 600px | Large phones, tablets (portrait) | 2 columns |
| **md** | 900px | Tablets (landscape), small laptops | Sidebar visible, 3-4 columns |
| **lg** | 1200px | Desktops | Full layout, 4 columns |
| **xl** | 1536px | Large desktops | Maximum width, optimized spacing |

### Responsive Grid Example

```javascript
<Grid item xs={12} sm={6} md={4} lg={3}>
  {/* 
    xs={12}: Full width on mobile
    sm={6}:  Half width on tablets
    md={4}:  1/3 width on small desktops
    lg={3}:  1/4 width on large desktops
  */}
</Grid>
```

## 📚 Learning Resources

### Official Documentation

- [React Documentation](https://react.dev/)
- [Material UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Emotion CSS-in-JS](https://emotion.sh/)

### Tutorials

- [Material UI Tutorial](https://mui.com/material-ui/getting-started/tutorial/)
- [React Tutorial](https://react.dev/learn)
- [Responsive Design Guide](https://mui.com/material-ui/guides/responsive-ui/)

### Community

- [Material UI GitHub](https://github.com/mui/material-ui)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/material-ui)
- [React Community](https://react.dev/community)

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Material UI Experiments

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🎓 Course Information

**Experiment No:** 2  
**Course:** Full Stack Development  
**Topic:** Design and implement a fully responsive user interface using Material UI components and styled layouts

### Learning Objectives

✅ Understand Material UI Grid system and responsive design  
✅ Implement collapsible sidebars and navigation bars  
✅ Create theme providers for light/dark mode switching  
✅ Apply styled component overrides  
✅ Build multi-panel layouts that adapt to screen sizes  
✅ Master breakpoint-based responsive design  

---

**Made with ❤️ using React and Material UI**

*Last Updated: February 2026*
