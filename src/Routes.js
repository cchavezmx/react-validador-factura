import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import ContraRecibo from './components/ContraRecibo'

export default 
    <Fragment>
        <Route exact="/contrarecibo" component={ContraRecibo}/>
    </Fragment>