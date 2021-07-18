
import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Menu from './Menu';
import Articles from './Articles';
import Users from './Users'
import "../styles/Admin.css"

export default function Admin() {

    return (
        <>
            <div className="container-fluid " >
                <Navbar />
                <Switch>
                    <Route path="/admin"  exact component={Menu} />
                    <Route path="/admin/users"  component={Users} />
                    <Route path="/admin/articles"  component={Articles} />
                </Switch>
            </div>
        </>

    )
}
