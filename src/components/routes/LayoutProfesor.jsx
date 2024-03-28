import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icono_perfil from '../../assets/iconos/perfil.png';
import icono_listado from '../../assets/iconos/listado.png';
import icono_registro from '../../assets/iconos/registro.png';
import icono_sesion from '../../assets/iconos/sesion.png';
import styles from '../../styles/layout.module.css';
import useAutorizacion from '../../hooks/useAutorizacion';
import AutorizacionContext from '../../context/AutorizacionContext';
import AltaUsuario from '../admin/AltaUsuario';

function LayoutProfesor() {
  const { logout, loadUser } = useAutorizacion();
  const { user } = AutorizacionContext;
  console.log("usuario" + user);

  const cerrarCesion = () => {
    console.log("entro a cerrar cesion");
    logout();
    loadUser();
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/*INICIO SECCIÓN MENÚ*/}
          <div className="col-md-3">
            <div className={styles.menu}>
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#home">
                    <img
                      src={icono_perfil}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="#"
                    /> {' '}
                    Ana Laura Ortega Aguilar
                  </Navbar.Brand>
                </Container>
              </Navbar>
              <br />
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#">
                    <img
                      src={icono_listado}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    /> {' '}
                    Listado de cursos
                  </Navbar.Brand>
                </Container>
              </Navbar>
              <br />
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#home">
                    <img
                      alt=""
                      src={icono_registro}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' '}
                    Registrar Curso
                  </Navbar.Brand>
                </Container>
              </Navbar>
              <br />
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="*" onClick={() => cerrarCesion()}>
                    <img
                      src={icono_sesion}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    /> {' '}
                    Cerrar sesión
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </div>
          </div>
          {/*FIN SECCIÓN MENÚ*/}

          {/*INICIO SECCIÓN CONTENIDO*/}
          <div className="col-md-9 contenido">
            <div className={styles.contenido}>
            </div>
          </div>
          {/*FIN SECCIÓN CONTENIDO*/}

        </div>
      </div>

    </>
  );
}

export default LayoutProfesor;