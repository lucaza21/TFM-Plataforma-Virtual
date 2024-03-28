import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Loader from '../elements/Loader';
import useAutorizacion from '../../hooks/useAutorizacion';

function AltaUsuario() {
    const { login, isLoading } = useAutorizacion();
    const [errorMsg, setErrorMsg] = useState("");

    const [datos, setDatos] = useState(
        {
            nombre: '',
            paterno: '',
            materno: '',
            celular: '',
            email: '',
            usuario: '',
            password: '',
            perfil: 0
        }
    );


    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
        onChangeAnyInput();
        console.log("imprimir perfil:" + datos.perfil)
    };

    function onChangeEmail(e) {
        setEmail(e.target.value)
        const texto = e.target.value;
        const index = texto.indexOf("@", 0);
        const usuario = texto.substr(0, index);
        setUsuario(usuario);
        onChangeAnyInput();
    }


    function readyToSubmit() {
        return datos.nombre !== "" && datos.paterno !== "" && datos.materno !== ""
            && datos.celular !== "" && datos.email !== "" && datos.usuario !== ""
            && datos.password !== "" && datos.perfil !== 0
    }
    console.log("imprimir perfil:" + datos.perfil)

    function dismissError() {
        setErrorMsg("")
    }
    function onChangeAnyInput() {
        setErrorMsg("")
    }

    async function doAlta(event) {
        dismissError()
        event.preventDefault()
        let a = readyToSubmit();
        console.log("readytosubmit " + a + datos.nombre)
        if (!readyToSubmit()) {
            setErrorMsg("Es necesario llenar todos los campos")
            return
        }
        try {
            {/* Aquí incluir la función para insertar los datos en la base de datos
                para obtener los datos del formulario usar datos.nombre, datos.email, datos. materno
                datos.paterno, datos.celular.......datos.perfil*/}


        } catch (e) {
            setErrorMsg("Acceso incorrecto, usuario o contraseña incorrectos, inténtelo de nuevo")
        }
    }

    return (
        <>
            <div className="container-fluid">
                {isLoading && <Loader message={"loading"} />}
                <form
                    className='formulario'
                    onSubmit={doAlta}
                >
                    {/*SECCIÓN TITULO*/}
                    <div className="row">
                        <div className="col-md-12">
                            <p className="h4" style={{ textAlign: "center" }}>Alta de Usuario</p>
                        </div>
                    </div>
                    {/*FIN SECCIÓN TITULO*/}
                    <hr className="border-1"></hr>

                    {/*SECCIÓN NOMBRE COMPLETO*/}
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="nombre">
                                    Nombre
                                </label>
                                <input
                                    name='nombre'
                                    id="nombre"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder='Introduce tu nombre'
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="paterno">
                                    Apellido paterno
                                </label>
                                <input
                                    name='paterno'
                                    id="paterno"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder='Introduce tu apellido paterno'
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="materno">
                                    Apellido Materno
                                </label>
                                <input
                                    name='materno'
                                    id="materno"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder='Introduce tu appellido materno'
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    {/*FIN SECCIÓN NOMBRE*/}

                    <div className="row">
                        <div className="col-md-1"></div>
                        {/* correo input */}
                        <div className="col-md-4">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="correo">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    id="email"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder='Introduce tu correo'
                                />
                            </div>
                        </div>
                        {/* usuario celular */}
                        <div className="col-md-3">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">
                                    Celular
                                </label>
                                <input
                                    type="tel"
                                    name='celular'
                                    id="celular"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder="(Código de área) Número"
                                />
                            </div>
                        </div>
                        {/* perfil */}
                        <div className="col-md-3">
                            <div className="form-outline input-group mb-4">
                                <label className="form-label" htmlFor="form2Example2">
                                    Perfil
                                    <select className="form-select" onChange={handleInputChange} name="perfil" id="perfil" >
                                        <option defaultValue value={0}>Perfil...</option>
                                        <option value={1}>Alumno</option>
                                        <option value={2}>Profesor</option>
                                        <option value={3}>Administrador</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-1"></div>
                        {/* usuario input */}
                        <div className="col-md-4">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">
                                    Usuario
                                </label>
                                <input
                                    type="text"
                                    name='usuario'
                                    id="usuario"
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder='Introduce tu usuario'
                                />
                            </div>
                        </div>
                        {/* Password input */}
                        <div className="col-md-3">
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    id="password"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    placeholder='Introduce tu password'
                                />
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-1"></div>
                    </div>
                    {errorMsg && <div className="alert alert-danger" role="alert">
                        {errorMsg}
                    </div>}
                    <hr className="border-1"></hr>

                    {/*SECCIÓN BOTONES*/}
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-2">
                            <Button variant="dark" size="sm" type="submit">
                                Guardar
                            </Button>{' '}
                            <Link to='/admin/home'>
                                <Button variant="dark" size="sm">
                                    Cancelar
                                </Button>
                            </Link>
                        </div>
                        <div className="col-md-5"></div>
                    </div>
                    {/*FIN SECCIÓN BOTONES*/}
                </form>
            </div>
        </>
    )
}

export default AltaUsuario