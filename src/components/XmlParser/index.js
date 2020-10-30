import React, { useState, useEffect } from 'react'

// React from hook 
import { useForm } from 'react-hook-form'

// material ui 
import Button from '@material-ui/core/Button';

const XmlParser  = ({ url }) => {

//  los tados de los nodos del xml 
    const [ cfdiComprobante, setCfdiComprobante ] = useState([])
    const [ cfdiEmisor, setCfdiEmisor ] = useState([])
    const [ cfdiReceptor, setCfdiReceptor ] = useState([])
    const [ cfdiConcepto, setCfdiConcepto ] = useState([])
    const [ cfdiImpuestos, setCfdiImpuestos ] = useState([])
    const [ cfdiTimbre, setCfdiTimbre ] = useState([])


    const cfdiData = (data) => {

        let comprobante = data.getElementsByTagName('cfdi:Comprobante')[0].attributes
        setCfdiComprobante(comprobante)
        // Emisor
        let emisor = data.getElementsByTagName('cfdi:Emisor')[0].attributes
        setCfdiEmisor(emisor)
        // Receptor
        let receptor = data.getElementsByTagName('cfdi:Receptor')[0].attributes
        setCfdiReceptor(receptor)
        // Concepto
        let concepto = data.getElementsByTagName('cfdi:Concepto')[0].attributes
        setCfdiConcepto(concepto)
        // Impuestos
        let impuestos = data.getElementsByTagName('cfdi:Impuestos')[2].attributes
        setCfdiImpuestos(impuestos)
        // Timbre
        let timbre =  data.getElementsByTagName('tfd:TimbreFiscalDigital')[0].attributes
        setCfdiTimbre(timbre)

    }

      const datahadled = () => {
        try {
          const parser = new DOMParser()
          const xml = parser.parseFromString(url, 'text/xml')
          cfdiData(xml)
  
          } catch (error) {
            console.log('Esperando')  
          }
      }

      useEffect(() => {
        datahadled()
      },[url])

      // controles de formulario 

      const { register, handleSubmit } = useForm()
      const onSubmit = data => console.log('data del from => ', data)
    

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
      {/*  botones de continuar y asi  */}
      <div>
      <h4>Revisa que el comprobante sea correcto</h4>
      </div>
      <div>
      <Button variant="contained" color="primary" type="submit">Subir Factura</Button>
      </div>
      {/* Comprobante
      Poner las partes necesarias */}
      <div>
        <h2>Comprobante</h2>
        {Object.keys(cfdiComprobante).map(key => 
          <div>
          <label>{cfdiComprobante[key].nodeName}</label>
          <input name={cfdiComprobante[key].nodeName} value={cfdiComprobante[key].nodeValue} ref={register}/>         
        </div>
        )}
      </div>
      {/* Emisor */}
      <div>
        <h2>Emisor</h2>
        {Object.keys(cfdiEmisor).map(key => 
          <div>
          <label>{cfdiEmisor[key].nodeName}</label>
          <input name={cfdiEmisor[key].nodeName} value={cfdiEmisor[key].nodeValue} ref={register} />
          </div>
        )}
        {/* cfdi Receptor */}
      </div>
      <div>
      <h2>Receptor</h2>
        {Object.keys(cfdiReceptor).map(key => 
          <div>
          <label>{cfdiReceptor[key].nodeName}</label>
          <input name={cfdiReceptor[key].nodeName} value={cfdiReceptor[key].nodeValue} ref={register}/>
          </div>
        )}
      <div>
      </div>
        {/* Concepto */}
      <h2>Concepto</h2>
        {Object.keys(cfdiConcepto).map(key => 
          <div>
          <label>{cfdiConcepto[key].nodeName}</label>
          <input name={cfdiConcepto[key].nodeName} ref={register} value={cfdiConcepto[key].nodeValue} />
          </div>
        )}
      </div>
      {/* impuestos */}
      <div>
      <h2>Impuestos</h2>
        {Object.keys(cfdiImpuestos).map(key => 
          <div>
          <label>{cfdiImpuestos[key].nodeName}</label>
          <input name={cfdiImpuestos[key].nodeName} reg={register} value={cfdiImpuestos[key].nodeValue} />
          </div>
        )}
      </div>
      {/* Timbre */}
      <div>
      <h2>Timbre</h2>
        {Object.keys(cfdiTimbre).map(key => 
          <div>
          <label>{cfdiTimbre[key].nodeName}</label>
          <input name={cfdiTimbre[key].nodeName} ref={register} value={cfdiTimbre[key].nodeValue} />
          </div>
        )}  
      </div>

      </form>
        // cfdiComprobante, cfdiEmisor, cfdiReceptor, cfdiConcepto, cfdiImpuestos, cfdiTimbre
        
    ) 
}

export default XmlParser