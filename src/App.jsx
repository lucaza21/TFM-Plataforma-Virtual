import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import Login from './components/routes/Login';
import AltaCurso from './components/routes/AltaCurso';
import Footer from './components/footer';
import Heather from './components/heather'
import Prueba from './components/Prueba';

function App() {
  return (
    <Router>
      <Heather/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />     
        <Route
          path="profesor"
          element={
            <PrivateRoute>
              <AltaCurso />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
