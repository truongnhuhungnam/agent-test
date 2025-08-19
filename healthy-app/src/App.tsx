import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Layout from "@/components/Layout"
import TopPage from "@/pages/TopPage"
import MyRecordPage from "@/pages/MyRecordPage"
import ColumnPage from "@/pages/ColumnPage"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="record" element={<MyRecordPage />} />
          <Route path="column" element={<ColumnPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
