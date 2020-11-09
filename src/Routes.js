import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import ContraRecibo from './components/ContraRecibo'
import home from './views/home'

// errores
import ErrorContrarecibo from './views/error/ErrorContrarecibo'

export default 
    <Fragment>
        <Route exact path="/" component={home} />
        <Route exact path="/contrarecibo" component={ContraRecibo}/>
        <Route exact path="/error" component={ErrorContrarecibo} />
    </Fragment>