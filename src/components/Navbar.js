/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useContext } from 'react'
import {  authCotext } from '../App'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const { userAuth } = useContext(authCotext)
    const menuRef = useRef(null);
    return (
        <div className="row fixed-top">
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <Link to="/admin" className="navbar-brand white">SPORT COLLECTION</Link>
                    <a onMouseEnter={() => {
                        menuRef.current.classList.add("show")
                    }}
                        onMouseLeave={() => {
                            menuRef.current.classList.remove("show")
                        }}
                        className="navbar-brand white" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list-ul" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <ul ref={menuRef} className="menu-user">
                            {userAuth.rol === 1 && (  <li>
                                <Link to="/admin/users">Gestionar usuarios</Link>
                            </li> )}
                           { userAuth.rol === 2 && ( <li>
                                <Link to="/admin/articles">Gestionar articulos</Link>
                            </li>)}
                           {/* <li>
                                <a href="#">Generar reportes</a>
                           </li>*/}
                            { userAuth.rol === 1 && (  <li>
                                <Link to="/admin/estadisticas">Revisar estadísticas</Link>
                            </li>)}
                            {userAuth.rol === 1 && ( <li>
                                <Link to="/admin/ventas">Resumen de ventas</Link>
                            </li> )}
                            <li>
                                <Link  className="text-danger" to="/admin/salir">Salir</Link>
                            </li>
                        </ul>
                    </a>
                </div>
            </nav>
        </div>
    )
}
