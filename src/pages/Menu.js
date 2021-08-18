import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authCotext } from '../App'
import imgCardUser from '../assets/images/imgCardUsers.svg';
import imgCardArticle from '../assets/images/imgCardArticle.svg';
import imgCardReport from '../assets/images/imgCardReport.svg';
import imgCardStatistics from '../assets/images/imgCardStatistics.svg';

export default function Menu() {
    const { userAuth } = useContext(authCotext)

    return (
        <>
            <div className="container px-4 mt-3 pt-5">
            <h2 className="mx-4 my-4 text-center"> Modulo de Administracion</h2>
                <div className="row justify-content-center ">
                    {userAuth.rol === 1 && ( <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className="card shadow">
                            <img src={ imgCardUser } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Usuarios</h5>
                                <p className="card-text">Crear nuevos, editar, asignar permisos</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to="/admin/users" type="button" class="btn btn-outline-success">GESTIONAR</Link>
                                </div>
                            </div>
                        </div>
                    </div> )}

                    {userAuth.rol === 2 && (  <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className="card shadow" >
                        <img src={ imgCardArticle } className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Articulos</h5>
                                <p className="card-text">Listar, registrar, editar y eliminar</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to="/admin/articles" type="button" class="btn btn-outline-success">GESTIONAR</Link>
                                </div>
                            </div>
                        </div>
                    </div>)}

                    {userAuth.rol === 1 && ( <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className="card shadow" >
                            <img src={imgCardReport} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Resumen de ventas</h5>
                                <p className="card-text">Listado de ventas</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to="/admin/ventas" type="button" class="btn btn-outline-success">GESTIONAR</Link>

                                </div>
                            </div>
                        </div>
                    </div>)}

                    {userAuth.rol === 1 && ( <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className="card shadow" >
                            <img src={imgCardStatistics} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Estadísticas</h5>
                                <p className="card-text">Revisar estadísticas</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link to="/admin/estadisticas" type="button" class="btn btn-outline-success">VER</Link>
                                </div>
                            </div>
                        </div>
                    </div> )}

                </div>

            </div>
        </>
    )
}
