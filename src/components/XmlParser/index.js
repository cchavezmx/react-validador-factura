import React, { Fragment, useEffect, useMemo, useState, useContext} from 'react'
import XmlController from '../../Controller/XmlController'

import Formulario from './Formulario'
import { ContraContext }  from '../../hooks/context/ContraContext'

// TODO 4.- Generar contra recibo
// TODO 5.- Crear el manejador de las respuestas del backend
// TODO 6.- Crear el estilo para el error440

const XmlParser  = ({ data }) => {

    const { handledError440 } = useContext(ContraContext)
    
    // valores para el fomulario
    const [valuesForm, setValuesForm ] = useState([])

  // Usamos useMe
  const dataParse = useMemo(() => {
        try {
          const parse = new DOMParser()
          const xml = parse.parseFromString(data, 'text/xml')
          const dataXmlParse = XmlController(xml)
          return dataXmlParse
        } catch (error) {
          handledError440({ message: 'El xml no corresponde a una factura de pago valida'})
        }
    }, [data, handledError440])

  //  pasamos los datos memorizados al control de xml 
    useEffect(() => {
        setValuesForm(dataParse)
      }, [dataParse])

    return(
      <Fragment>
       {valuesForm && <Formulario valuesForm={valuesForm}/>}
      </Fragment>
    ) 
}

export default XmlParser