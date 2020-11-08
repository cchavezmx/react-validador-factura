import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidelbar = () => {

    const location = useLocation();


    return (
        <Fragment>
            <div className="sidelbar__container">
                <h2>Hola</h2>
                <ul>
                    <li>
                    <Link to='/contrarecibo'><button className={location.pathname === "/contrarecibo" ? "sidelbar__container__button sidelbar__button__press" : "sidelbar__container__button"}>Contrarecibo</button></Link>
                    </li>
                    <li>
                    <Link><button className={location.pathname === "/encuesta" ? "sidelbar__container__button sidelbar__button__press" : "sidelbar__container__button"}>Encuestas</button></Link>
                    </li>
                </ul>
                <hr />
                <ul>
                    <h2>Canales</h2>
                </ul>
                </div>
        </Fragment>
    )
}

export default Sidelbar
