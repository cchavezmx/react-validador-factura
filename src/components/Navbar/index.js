import React from 'react'
import { Fragment } from 'react'


// Material UI
import { AppBar } from '@material-ui/core'


const Navbar = () => {
    return (
        <Fragment>
            <AppBar  className="navbar__toolbar">
                <h1>Sistema BEO.n0</h1>
            </AppBar >
        </Fragment>
    )
}

export default Navbar