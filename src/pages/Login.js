import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Login.css'

export default function Login() {
    return (
        <div className="login-page" >
            <div className="login-container">
                <h1 className="login-title">SPORT COLLECTION</h1>

                <div className="form-container">
                    <h5 className="login__text-color" >ACCESO AL PANEL DE ADMINISTRACION</h5>
                    <form className="login-form">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label login__text-color ">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label login__text-color ">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link to="/admin" type="button" className="btn btn-sm btn-primary">Ingresar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
