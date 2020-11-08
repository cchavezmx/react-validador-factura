import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'


// Material UI
import { AppBar } from '@material-ui/core'


const Navbar = () => {
    return (
        <Fragment>
            <AppBar  className="navbar__toolbar">
                <Link to={'/'} style={{ textDecoration: 'none', color: '#FFFFFF'}}><h1>Sistema BEO<small>n.0</small></h1></Link>
            </AppBar >
        </Fragment>
    )
}

export default Navbar