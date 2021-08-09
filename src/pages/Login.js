import React, { useState,  } from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../services/usersServices'

import '../styles/Login.css'
import { setAuthToken } from '../util/axios'
import { saveToken } from '../util/jwtHandler'

export default function Login() {
    const [user, setUser] = useState({})
    const [isLoading, setLoading ] = useState(false)
    const hostory = useHistory()
    const handlerOnChange = (event) => {
        const { name, value} = event.target;
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    const handlerSubmi = async (event) => {
        event.preventDefault();
        await handlerLogin()
        console.log(user)
    }

    const handlerLogin = async () => {
        setLoading(true)
        try {
            const response = await  loginUser(user)
            if (response.data.success) {
                saveToken(response.data.token)
                setAuthToken(response.data.token)
                hostory.push("/admin")
            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className="login-page" >
            <div className="login-container">
                <h1 className="login-title">SPORT COLLECTION</h1>

                <div className="form-container">
                    <h5 className="login__text-color" >ACCESO AL PANEL DE ADMINISTRACION</h5>
                    <form className="login-form" onSubmit={handlerSubmi}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label login__text-color ">Email </label>
                            <input value={user.email} onChange={handlerOnChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label  for="exampleInputPassword1" className="form-label login__text-color ">Contraseña</label>
                            <input value={user.password} onChange={handlerOnChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button  type="submit" className="btn btn-sm btn-primary">Ingresar
                                {isLoading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
