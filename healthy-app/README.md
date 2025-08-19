# 🏥 Healthy App

A modern, animated health tracking web application built with React, TypeScript, and cutting-edge UI technologies. Features smooth page transitions, interactive animations, and a complete authentication system.

## ✨ Key Features

### 🎬 **Smooth Animations & Transitions**
- **Page Transitions**: Beautiful fade/slide animations between routes using Framer Motion
- **Load More Animations**: Staggered animations for dynamically loaded content
- **Interactive Elements**: Hover and click animations for enhanced UX
- **Loading States**: Elegant loading spinners and progress indicators

### 🔐 **Authentication System**
- **Simple Login**: Admin credentials (`admin`/`admin`) for demo purposes
- **Route Protection**: Secure access to dashboard and personal records
- **Session Persistence**: Automatic login state restoration
- **Responsive Navigation**: Dynamic menu based on authentication status

### 📱 **Core Pages**
- **🏠 Top Page** (Protected) - Personal dashboard with meal tracking and body weight charts
- **📊 My Record Page** (Protected) - Detailed health records, exercise logs, and personal diary
- **📰 Column Page** (Public) - Health articles and wellness content

### 🎯 **Interactive Features**
- **Meal Filtering**: Dynamic meal type filtering with visual feedback
- **Chart Visualizations**: Interactive body weight and progress tracking
- **Load More Content**: Animated content loading with smooth transitions
- **Responsive Design**: Seamless experience across all devices

## 🛠️ Technology Stack

### **Frontend Core**
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with full IDE support
- **Vite** - Lightning-fast build tool and dev server

### **UI & Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Framer Motion** - Production-ready motion library for animations
- **Lucide React** - Beautiful, customizable icons

### **Data & Routing**
- **React Router DOM v7** - Modern client-side routing
- **Recharts** - Responsive chart library built on D3
- **Chart.js + React-Chartjs-2** - Advanced charting capabilities

### **Authentication & State**
- **React Context** - Global authentication state management
- **localStorage** - Persistent session management
- **Custom Hooks** - Reusable authentication logic

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd healthy-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Demo Credentials
- **Username**: `admin`
- **Password**: `admin`

## 📁 Project Architecture

```
healthy-app/
├── 📂 public/
│   ├── 🖼️ icons/              # SVG icon assets
│   ├── 📸 photo/              # Sample meal & content images
│   └── 🎨 vite.svg            # Vite logo
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🎬 AnimatedGrid.tsx     # Content loading animations
│   │   ├── 🎬 AnimatedButton.tsx   # Interactive button animations
│   │   ├── 🎬 PageTransition.tsx   # Page transition wrapper
│   │   ├── 🛡️ ProtectedRoute.tsx   # Route authentication guard
│   │   ├── 📊 BodyWeightChart.tsx  # Interactive weight charts
│   │   ├── ⭕ CircularProgress.tsx # Animated progress rings
│   │   ├── 🏗️ Layout.tsx           # Main app layout with nav
│   │   └── 📂 ui/                  # shadcn/ui components
│   ├── 📂 contexts/
│   │   └── 🔐 AuthContext.tsx      # Authentication state management
│   ├── 📂 pages/
│   │   ├── 🏠 TopPage.tsx          # Dashboard (Protected)
│   │   ├── 📊 MyRecordPage.tsx     # Health records (Protected)
│   │   ├── 📰 ColumnPage.tsx       # Articles (Public)
│   │   └── 🔑 LoginPage.tsx        # Authentication page
│   ├── 📂 data/
│   │   └── 📋 mockData.ts          # Comprehensive sample data
│   ├── 📂 lib/
│   │   └── 🛠️ utils.ts             # Utility functions
│   ├── 🎯 App.tsx                  # Main app component
│   ├── 🚀 main.tsx                 # Application entry point
│   └── 🎨 index.css               # Global styles
└── ⚙️ Configuration files
```

## 🎨 Design System

### **Color Palette** (Figma-based)
```css
/* Primary Colors */
--primary-300: #FFCC21  /* Bright Yellow - Main accent */
--primary-400: #FF963C  /* Orange - Secondary accent */
--primary-500: #EA6100  /* Dark Orange - Hover states */

/* Neutral Colors */
--gray-400: #777777     /* Medium gray - Text secondary */
--dark-500: #414141     /* Dark gray - Backgrounds */
--dark-600: #2E2E2E     /* Darker gray - Cards/modals */
--light: #FFFFFF        /* Pure white - Primary text */
```

### **Typography**
- **Primary**: Hiragino Kaku Gothic Pro (Japanese)
- **Fallback**: ヒラギノ角ゴ Pro W3, メイリオ, Meiryo, sans-serif
- **Code**: JetBrains Mono, Consolas, monospace

### **Animation Principles**
- **Duration**: 200ms-500ms for most interactions
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Stagger**: 100ms delays for sequential animations
- **Spring Physics**: Natural bounce for interactive elements

## 🔐 Authentication Flow

### **Route Protection**
```typescript
// Protected routes require authentication
/ (TopPage)           → Requires login
/record (MyRecordPage) → Requires login
/column (ColumnPage)   → Public access
/login                 → Authentication page
```

### **Authentication Features**
- ✅ **Persistent Sessions** - Auto-login on page refresh
- ✅ **Redirect Logic** - Return to intended page after login
- ✅ **Loading States** - Smooth loading animations
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Responsive UI** - Works perfectly on all devices

## 🎬 Animation System

### **Page Transitions**
```typescript
// Smooth page transitions with Framer Motion
Initial State:  opacity: 0, y: 20px, scale: 0.98
Enter State:    opacity: 1, y: 0px,  scale: 1.0
Exit State:     opacity: 0, y: -20px, scale: 1.02
Duration:       400ms with "anticipate" easing
```

### **Content Loading**
```typescript
// Staggered animations for dynamic content
Container:      staggerChildren: 0.1s
Item Animation: fade + slide + scale
Timing:         easeOut, 400ms duration
```

### **Interactive Elements**
```typescript
// Button interactions with spring physics
Hover:          scale: 1.02
Active:         scale: 0.98
Spring Config:  stiffness: 400, damping: 17
```

## 📊 Data Architecture

### **Mock Data Categories**
- **👤 User Data**: Authentication and profile information
- **🍽️ Meal Records**: 24+ sample meals with photos and timestamps
- **🏃 Exercise Records**: Various activities with calories and duration
- **⚖️ Body Records**: Weight and body fat data for charts
- **📝 Diary Entries**: Personal health journal entries
- **📰 Column Articles**: Health and wellness content with tags
- **🎯 Achievement Data**: Progress tracking and goals

### **State Management**
- **Authentication**: React Context with localStorage persistence
- **Component State**: React hooks (useState, useEffect)
- **Route State**: React Router location and navigation state

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run preview      # Preview production build locally

# Production
npm run build        # Build optimized production bundle
npm run lint         # Run ESLint for code quality

# Type Checking
npx tsc --noEmit     # Check TypeScript types without building
```

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm:   640px+    /* Small tablets */
md:   768px+    /* Tablets */
lg:   1024px+   /* Laptops */
xl:   1280px+   /* Desktops */
2xl:  1536px+   /* Large screens */
```

### **Responsive Features**
- ✅ **Mobile Navigation** - Collapsible hamburger menu
- ✅ **Adaptive Layouts** - Grid systems adjust to screen size
- ✅ **Touch Interactions** - Optimized for mobile gestures
- ✅ **Performance** - Lazy loading and optimized images

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |

## 🚀 Deployment Guide

### **Build for Production**
```bash
# Create optimized build
npm run build

# Output directory: ./dist
# Ready for static hosting (Vercel, Netlify, etc.)
```

### **Environment Variables**
```env
# Optional: Add to .env.local for custom configuration
VITE_APP_TITLE="Healthy App"
VITE_API_URL="https://api.example.com"
```

### **Recommended Hosting**
- **Vercel** - Zero-config deployment with GitHub integration
- **Netlify** - Continuous deployment with form handling
- **GitHub Pages** - Free static hosting for open source projects

## 🔧 Development Guidelines

### **Code Style**
- **ESLint** - Enforced code quality and consistency
- **TypeScript** - Strict type checking enabled
- **Prettier** - Automatic code formatting (recommended)

### **Component Structure**
```typescript
// Recommended component pattern
interface ComponentProps {
  // Props with TypeScript types
}

const Component = ({ prop1, prop2 }: ComponentProps) => {
  // Hooks at the top
  const [state, setState] = useState()
  
  // Event handlers
  const handleEvent = () => {}
  
  // Render
  return <div>Component JSX</div>
}

export default Component
```

### **Animation Best Practices**
- Use `framer-motion` for complex animations
- Prefer CSS transitions for simple hover effects
- Always provide reduced motion alternatives
- Test animations on lower-end devices

## 🎯 Feature Roadmap

### **Completed ✅**
- [x] Core page structure and routing
- [x] Authentication system with route protection
- [x] Smooth page transitions and animations
- [x] Interactive content loading animations
- [x] Responsive design across all devices
- [x] Mock data integration
- [x] Chart visualizations

### **Potential Enhancements 🚀**
- [ ] Real API integration
- [ ] User registration and profiles
- [ ] Data export functionality
- [ ] Push notifications
- [ ] Offline support with PWA
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Setup**
```bash
# Fork and clone your fork
git clone https://github.com/YOUR-USERNAME/healthy-app.git
cd healthy-app

# Install dependencies
npm install

# Create feature branch
git checkout -b feature/your-feature-name

# Start development
npm run dev
```

## 📄 License

This project is developed for educational and demonstration purposes. Feel free to use it as a reference for your own projects.

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful, accessible component library
- **Framer Motion** - For smooth, professional animations
- **Tailwind CSS** - For rapid, responsive styling
- **React Team** - For the amazing framework and ecosystem

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

*Last updated: 2024 - Version 2.0 with Authentication & Animations*