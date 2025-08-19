# Healthy App - React Vite Project

A modern health tracking web application built with React, TypeScript, Vite, and shadcn/ui components.

## 🚀 Features

### Pages
- **Top Page (自分の記録)** - Main dashboard with achievement tracking, body weight charts, and meal history
- **My Record Page (体重グラフ)** - Detailed body records, exercise tracking, and diary entries
- **Column Page (コラム一覧)** - Health-related articles and content

### Key Functionality
- **Achievement Tracking** - Visual progress indicators and charts
- **Body Weight Monitoring** - Interactive charts showing weight and body fat percentage trends
- **Meal History** - Photo-based meal tracking with timestamps
- **Exercise Records** - Detailed exercise logs with calories and duration
- **Health Articles** - Categorized health and wellness content
- **Responsive Design** - Mobile-friendly interface
- **Japanese Localization** - Full Japanese language support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd healthy-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
healthy-app/
├── public/
│   ├── icons/           # SVG icons
│   └── photo/           # Sample images
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── Layout.tsx   # Main layout component
│   ├── pages/
│   │   ├── TopPage.tsx      # Main dashboard
│   │   ├── MyRecordPage.tsx # Records and tracking
│   │   └── ColumnPage.tsx   # Articles and content
│   ├── data/
│   │   └── mockData.ts  # Sample data for development
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Design System

### Colors (Based on Figma Design)
- **Primary 300**: `#FFCC21` (Yellow)
- **Primary 400**: `#FF963C` (Orange)
- **Primary 500**: `#EA6100` (Dark Orange)
- **Gray 400**: `#777777`
- **Dark 500**: `#414141`
- **Dark 600**: `#2E2E2E`
- **Light**: `#FFFFFF`

### Typography
- **Primary Font**: Hiragino Kaku Gothic Pro
- **Fallback Fonts**: ヒラギノ角ゴ Pro W3, メイリオ, Meiryo, sans-serif

## 📊 Mock Data

The application includes comprehensive mock data for:
- **Meal Records**: Sample meal photos with timestamps
- **Exercise Records**: Various exercise activities with calories and duration
- **Body Records**: Weight and body fat percentage data for charts
- **Diary Entries**: Sample diary content
- **Column Articles**: Health-related articles with images and tags
- **Achievement Data**: Progress tracking data

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Requirements Met

✅ React Vite project with TypeScript  
✅ shadcn/ui integration  
✅ Tailwind CSS with custom colors from Figma  
✅ Hiragino Kaku Gothic Pro font configuration  
✅ Three main pages: Top Page, My Record, Column  
✅ Interactive charts using Recharts  
✅ Mock data for API simulation  
✅ Responsive design  
✅ Japanese localization  
✅ Clean, maintainable code structure  

## 🚀 Deployment

To deploy the application:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## 📝 Development Notes

- The application uses mock data for development purposes
- Charts may show warnings about width/height in development mode - this is normal
- All images are stored in the `public` folder for easy access
- The design follows the provided Figma specifications
- Code is structured for easy maintenance and scalability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational/testing purposes.
