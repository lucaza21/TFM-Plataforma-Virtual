import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import Login from './components/routes/Login';
import AltaCurso from './components/routes/AltaCurso';
import Footer from './components/footer';
import Heather from './components/heather'; 
import Navbarr from './components/Nav/Navbar';
import GetCursos from './components/cursos/GetCursos';
import DetailCursos from './components/cursos/DetailCursos';
import DetailModulos from './components/modulos/DetailModulos';
import DetailActividades from './components/actividades/DetailActividades';


function App() {

  localStorage.setItem('@user', JSON.stringify({email: "admin@admin.com", role:"admin"}))
  let user = localStorage.getItem('@user');
  user = JSON.parse(user)
 
  console.log('desde App con routes: ' + JSON.stringify(user));


  return (
    <Router>
      <Heather/>
      <Navbarr />
      <Routes>
      {user && (
          <>
            <Route path="/" element={<Login />} />
            {/* <Route path="/galeria" element={} />
            <Route path="/details/:coaster_id" element={} /> */}
            
          </>
        )}

        {!user && (
          <>
          <Route path="/login" element={<Login/>} />
          </>
        )}

        <Route path="*" element={<Navigate to={!user  ? '/login' :'/'}/>}></Route>

        {
          (user) && (user.role=="admin") && (
            <>
               <Route path="/cursos" element={<GetCursos />} />
               <Route path="/cursosDetail/:id_curso" element={<DetailCursos />} />
               <Route path="/modulosDetail/:id_modulo" element={<DetailModulos />} />
               <Route path="/actividadesDetail/:id_actividad" element={<DetailActividades />} />
              {/*<Route path="/updatecoaster/:coaster_id" element={} /> */}
            </>
            )
        }
       {/*<Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />     
          <Route
          path="profesor"
          element={
            <PrivateRoute>
              <AltaCurso />
            </PrivateRoute>
          }
        /> */}
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
