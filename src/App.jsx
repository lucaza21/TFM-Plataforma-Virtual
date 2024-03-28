import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import Login from './components/routes/Login';
import Footer from './components/footer';
import Heather from './components/heather';
import LayoutProfesor from './components/routes/LayoutProfesor';
import LayoutAdmin from './components/routes/LayoutAdmin';
import Navbarr from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <Heather />
      <div className="cont container-fluid">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="profesor/*"
            element={
              <PrivateRoute>
                <LayoutProfesor />
              </PrivateRoute>
            }
          />
          <Route
            path="alumno/*"
            element={
              <PrivateRoute>
                <Navbarr />
              </PrivateRoute>
            }
          />
          <Route
            path="admin/*"
            element={
              <PrivateRoute>
                <LayoutAdmin />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="." replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
