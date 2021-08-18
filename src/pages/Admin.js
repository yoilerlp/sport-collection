
import React, { useEffect } from 'react'
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Menu from './Menu';
import Sales from './Sales';
import Articles from './Articles';
import Users from './Users'
import Statistics from './Statistics';
import "../styles/Admin.css"
import { getToken } from '../util/jwtHandler';
import AuthOut from '../components/AuthOut';

export default function Admin() {
    const hisotory = useHistory()

    useEffect(() => {
        let token = getToken()?.token
        if(!token) {
            hisotory.push("/login")
        }
    })
    return (
        <>
            <div className="container-fluid " >
                <Navbar />
                <Switch>
                    <Route path="/admin"  exact component={Menu} />
                    <Route path="/admin/users"  component={Users} />
                    <Route path="/admin/articles"  component={Articles} />
                    <Route path="/admin/salir" component={AuthOut} />
                    <Route path="/admin/ventas" component={Sales} />
                    <Route path="/admin/estadisticas" component={Statistics} />

                </Switch>
            </div>
        </>

    )
}
