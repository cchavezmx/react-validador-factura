import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

// material ui 
import Button from '@material-ui/core/Button';
import { ContraContext }  from '../../hooks/context/ContraContext'


const Formulario = ({ valuesForm }) =>{

    const { handledError440 } = useContext(ContraContext)
    const history = useHistory() 
    const { register, handleSubmit } = useForm()


  //  Funcion OnSubmit del Formulario
  const onSubmit = async (e) => {
    console.log('control onsubmit =>', e)

    const url = 'http://localhost:3010/api/v1/contra'  
    
    await axios.post(url, e)
    .then(res => {
        if(res.status === 200){
            history.push('/datosproveedor')      
        }
    })
    .catch(err => {
        console.log(err.response.data)
        if(err.response.status === 440 ){
          handledError440({message: 'La factura ya fue registrada'})
        }
    })
  }
  
  
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
    {/*  botones de continuar y asi  */}
    <p>Revisa los datos de tu Factura</p>
    <div className="form__controller">
    <Button variant="contained" color="secondary" type="submit">Siguiente</Button>
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
        value={valuesForm.folio}        
      />       
      <label htmlFor="serie">Serie</label>
      <input 
      id="serie"
      name='Serie'
      type='text'
      ref={register}
      value={valuesForm.serie}

      />
      <label htmlFor="uuid">UUID</label>
      <input 
      id="uuid"
      type="text"
      name="UUID"
      ref={register}
      value={valuesForm.uuid}
      
      />
      <label htmlFor="numCtaPago">Numero de Cuenta</label>
      <input 
      id="numCtaPago"
      type="text"
      name="NumCtaPago"
      ref={register}
      value={valuesForm.numCtaPago}
      
      />
      <label htmlFor="formapago">Forma de Pago</label>
      <input 
      id="formapago"
      type="text"
      name="Formapago"
      ref={register}
      value={valuesForm.formapago}
      
      />
      <label htmlFor="metodoPago">Metodo de Pago</label>
      <input 
      id="metodoPado"
      type="text"
      name="MetodoPago"
      ref={register}
      value={valuesForm.metodopago}
      
      />
      <label htmlFor="moneda">Moneda</label>
      <input 
      id="moneda"
      type="text"
      name="Moneda"
      ref={register}
      value={valuesForm.moneda}
      
      />
      <label htmlFor="tipocambio">Tipo de Cambio</label>
      <input 
      id="tipocambio"
      type="text"
      name="TipoCambio"
      ref={register}
      value={valuesForm.tipocambio}
      
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
      value={valuesForm.subtotal}
      
      />
      <label htmlFor="iva">Impuestos</label>
      <input 
      id="iva"
      type="text"
      name="Impuestos"
      ref={register}
      value={valuesForm.impuestoImporte}
      
      />
      <label htmlFor="total">Total</label>
      <input 
      id="total"
      type="text"
      name="Total"
      ref={register}
      value={valuesForm.total}
      
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
      value={valuesForm.rfcEmisor}
      
      />
      <label htmlFor="nombreEmisor">Razón Social</label>
      <input 
      id="nombreEmisor"
      type="text"
      name="NombreEmisor"
      ref={register}
      value={valuesForm.nombreEmisor}
      
      />

     {/* Receptor */}
      <h2>Receptor</h2>
      <label htmlFor="rfcReceptor">RFC</label>
      <input 
      id="rfcReceptor"
      type="text"
      name="RfcReceptor"
      ref={register}
      value={valuesForm.rfcReceptor}
      
      />
      <label htmlFor="nombreReceptor">Razón Social</label>
      <input 
      id="nombreReceptor"
      type="text"
      name="NombreReceptor"
      ref={register}
      value={valuesForm.nombreReceptor}
      
      />
    </div>

    </div>
    </form>
      
  ) 
}

export default Formulario
