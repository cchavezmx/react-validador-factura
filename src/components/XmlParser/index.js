import React, { useState, useEffect } from 'react'
import axios from 'axios'
import XmlController from '../../Controller/XmlController'

// TODO 4.- Generar contra recibo
// TODO 5.- Crear el manejador de las respuestas del backend

// React from hook 
import { useForm } from 'react-hook-form'

// material ui 
import Button from '@material-ui/core/Button';

const XmlParser  = ({ url }) => {

//  los tados de los nodos del xml 
    const [ cfdiComprobante, setCfdiComprobante ] = useState([])
    const [ error440, setError440 ] = useState(null)
    const { Comprobante } = XmlController()

      const datahadled = (url) => {
        try {
          const parser = new DOMParser()
          const xml = parser.parseFromString(url, 'text/xml')
          setCfdiComprobante(Comprobante(xml))
  
          } catch (error) {
            console.log('error => ', error)  
          }
      }

      useEffect(() => {
        datahadled(url)
      },[url])

      // controles de formulario 
      const { register, handleSubmit } = useForm()

      //  Funcion OnSubmit del Formulario
      const onSubmit = async (e) => {

        console.log('control onsubmit', e)

        const url = 'http://localhost:3010/api/v1/contra'
            
          await axios.post(url, e)
          
          .then(res => console.log(res.status))
          .catch(err => {
              console.log(err.response.data)
              if(err.response.status === 440 ){
                setError440(true)
                setTimeout(() => {
                  setError440(false)
                },6000)
              }
          })

      }
    const { folio, serie, formapago, moneda, tipocambio, subtotal, total, metodopago, rfcEmisor, nombreEmisor, rfcReceptor, nombreReceptor, impuestoImporte, uuid } = cfdiComprobante

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
      {/*  botones de continuar y asi  */}
      {error440 ? <p className="handdled__error">La Factura ya fue registrada</p> : <p>Revisa tus datos antes de generar el contra recibo</p>}
      <div className="form__controller">
      <Button variant="contained" color="secondary" type="submit">Subir Factura</Button>
      </div>

      {/* Comprobante */}
      <div className="form__secction__contra">
        {/* Encabezado */}

        <div>
        <h2>Comprobante</h2>
        <label htmlFor='folio'>Folio</label>
        <input
          id='folio'
          name="Folio"
          type="texto"
          ref={register}
          value={folio}
        />       
        <label htmlFor="serie">Serie</label>
        <input 
        id="serie"
        name='Serie'
        type='text'
        ref={register}
        value={serie}
        />
        <label htmlFor="uuid">UUID</label>
        <input 
        id="uuid"
        type="text"
        name="UUID"
        ref={register}
        value={uuid}
        />
        <label htmlFor="formapago">Forma de Pago</label>
        <input 
        id="formapago"
        type="text"
        name="Formapago"
        ref={register}
        value={formapago}
        />
        <label htmlFor="metodoPago">Metodo de Pago</label>
        <input 
        id="metodoPado"
        type="text"
        name="MetodoPago"
        ref={register}
        value={metodopago}
        />
        <label htmlFor="moneda">Moneda</label>
        <input 
        id="moneda"
        type="text"
        name="Moneda"
        ref={register}
        value={moneda}
        />
        <label htmlFor="tipocambio">Tipo de Cambio</label>
        <input 
        id="tipocambio"
        type="text"
        name="TipoCambio"
        ref={register}
        value={tipocambio}
        />
        </div>

        {/* subtotal, iva y gran total */}
        <div>
        <h2>Importe</h2>
        <label htmlFor="subtotal">Subtotal</label>
        <input 
        id="subtotal"
        type="text"
        name="Subtotal"
        ref={register}
        value={subtotal}
        />
        <label htmlFor="iva">Impuestos</label>
        <input 
        id="iva"
        type="text"
        name="Impuestos"
        ref={register}
        value={impuestoImporte}
        />
        <label htmlFor="total">Total</label>
        <input 
        id="total"
        type="text"
        name="Total"
        ref={register}
        value={total}
        />
        </div>

      {/* Emisor */}
      <div>
        <h2>Emisor</h2>
        <label htmlFor="rfcEmisor">Emisor</label>
        <input 
        id="rfcEmisor"
        type="text"
        name="RfcEmisor"
        ref={register}
        value={rfcEmisor}
        />
        <label htmlFor="nombreEmisor">Razón Social</label>
        <input 
        id="nombreEmisor"
        type="text"
        name="NombreEmisor"
        ref={register}
        value={nombreEmisor}
        />
 
       {/* Receptor */}
        <h2>Receptor</h2>
        <label htmlFor="rfcReceptor">RFC</label>
        <input 
        id="rfcReceptor"
        type="text"
        name="RfcReceptor"
        ref={register}
        value={rfcReceptor}
        />
        <label htmlFor="nombreReceptor">Razón Social</label>
        <input 
        id="nombreReceptor"
        type="text"
        name="NombreReceptor"
        ref={register}
        value={nombreReceptor}
        />
      </div>
      {/* Concepto */}
      {/* impuestos */}
      {/* Timbre */}
      
      </div>
      </form>
        
    ) 
}

export default XmlParser