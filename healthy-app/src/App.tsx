import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import TopPage from "@/pages/TopPage"
import MyRecordPage from "@/pages/MyRecordPage"
import ColumnPage from "@/pages/ColumnPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="record" element={<MyRecordPage />} />
          <Route path="column" element={<ColumnPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
