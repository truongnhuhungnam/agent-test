import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { AuthProvider } from "@/contexts/AuthContext"
import Layout from "@/components/Layout"
import ProtectedRoute from "@/components/ProtectedRoute"
import TopPage from "@/pages/TopPage"
import MyRecordPage from "@/pages/MyRecordPage"
import ColumnPage from "@/pages/ColumnPage"
import LoginPage from "@/pages/LoginPage"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <TopPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="record"
            element={
              <ProtectedRoute>
                <MyRecordPage />
              </ProtectedRoute>
            }
          />
          <Route path="column" element={<ColumnPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App
