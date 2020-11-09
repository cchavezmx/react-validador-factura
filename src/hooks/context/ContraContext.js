import React, { useState, createContext } from 'react'

// cremos el Context que llevara todos los metodos y variables
export const ContraContext = createContext()


//  este componente debe enolver todos los componentes 
const ContraContextProvider = (props) => {


//  para manejar los errores en el formulario 
const [ error440, setError440 ] = useState(null)

// class dataStorage = new Object


const handledError440 = ( obj ) =>{
        setError440(obj)
        setTimeout(() => {
          setError440(null)
        },4000)
    }

    return(
        <ContraContext.Provider
            value={
                {
                    handledError440, error440
                }
            }
        >
            { props.children }
        </ContraContext.Provider>
    )
}

export default ContraContextProvider

