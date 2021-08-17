import React, { useState, useContext  } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import '../styles/Login.css'
import { loginUser } from '../services/usersServices'
import { saveToken } from '../util/jwtHandler'
import { setAuthToken } from '../util/axios'
import { authCotext } from '../App'

export default function Login() {
    const [user, setUser] = useState({})
    const [isLoading, setLoading ] = useState(false)
    const hostory = useHistory()
    const { setUserAuth} = useContext(authCotext)
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
      
    }

    const handlerLogin = async () => {
        setLoading(true)
        try {
            const response = await  loginUser(user)
            if (response.data.success) {
              
                saveToken(JSON.stringify(response.data))
                setAuthToken(response.data.token)
                setUserAuth(response.data.userData)
               
                hostory.push("/admin")
                alertWelcome()
            }
           
        } catch (error) {
            alertError()
            
        }
        setLoading(false)
    }

    const alertWelcome=()=>{
        swal({
            title: "Acceso concedido!!",
            text: "Bienvenido al panel de administración",
            icon: "success",
            button: "Aceptar",
            //timer: 1500,
        })
    }

    const alertError=()=>{
        swal({
            title: "Información icorrecta",
            text: "Verifique email y/o contraseña",
            icon: "error",
            button: "Aceptar",
            //buttons: ["no", "si"],
            //timer: 1500,
        })
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
                            <input required value={user.email} onChange={handlerOnChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label  for="exampleInputPassword1" className="form-label login__text-color ">Contraseña</label>
                            <input required value={user.password} onChange={handlerOnChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button  type="submit" className="btn btn-sm btn-primary">Ingresar
                                {isLoading && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                            </button>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                           {/* <button type="submit" className="btn btn-sm btn-success" onClick={()=>alertWelcome()}>Bienvenido</button>
                            <button type="submit" className="btn btn-sm btn-danger" onClick={()=>alertError()}>Datos incorrectos</button>
    */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
