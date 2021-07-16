import React from 'react'
import '../styles/Login.css'

export default function Login() {
    return (
        <div className="login-page" >
            <div className="login-container">
                <h1 className="login-title">Sistema de Administracion de Inventarios </h1>

                <div className="form-container">
                    <h5 className="login__text-color " style={{
                        textAlign: "center",
                        margin: "8px"
                    }}>ACCESO AL PANEL DE ADMINISTRACION</h5>
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
                            <button class="btn btn-primary" type="button">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
