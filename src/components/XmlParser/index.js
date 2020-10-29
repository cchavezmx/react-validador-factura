import React, { useState, useEffect } from 'react'


const useXmlParser  = ({ url }) => {

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

    
    useEffect(() => {

       fetch(url)
      .then( res => res.text())  
      .then( data => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(data, 'text/xml')
        cfdiData(xml)
        
      })
      .catch( error => console.log(error))


    }, [url])

    // console.log(url)

    return(
      <form>
      {/*  botones de continuar y asi  */}
      <div><h4>Revisa que el comprobante sea correcto</h4></div>
      {/* Comprobante
      Poner las partes necesarias */}
      <div>
        <h2>Comprobante</h2>
        {Object.keys(cfdiComprobante).map(key => 
          <div>
          <label>{cfdiComprobante[key].nodeName}</label>
          <input value={cfdiComprobante[key].nodeValue} />         
        </div>
        )}
      </div>
      {/* Emisor */}
      <div>
        <h2>Emisor</h2>
        {Object.keys(cfdiEmisor).map(key => 
          <div>
          <label>{cfdiEmisor[key].nodeName}</label>
          <input value={cfdiEmisor[key].nodeValue} />
          </div>
        )}
        {/* cfdi Receptor */}
      </div>
      <div>
      <h2>Receptor</h2>
        {Object.keys(cfdiReceptor).map(key => 
          <div>
          <label>{cfdiReceptor[key].nodeName}</label>
          <input value={cfdiReceptor[key].nodeValue} />
          </div>
        )}
      <div>
      </div>
        {/* Concepto */}
      <h2>Concepto</h2>
        {Object.keys(cfdiConcepto).map(key => 
          <div>
          <label>{cfdiConcepto[key].nodeName}</label>
          <input value={cfdiConcepto[key].nodeValue} />
          </div>
        )}
      </div>
      {/* impuestos */}
      <div>
      <h2>Impuestos</h2>
        {Object.keys(cfdiImpuestos).map(key => 
          <div>
          <label>{cfdiImpuestos[key].nodeName}</label>
          <input value={cfdiImpuestos[key].nodeValue} />
          </div>
        )}
      </div>
      {/* Timbre */}
      <div>
      <h2>Timbre</h2>
        {Object.keys(cfdiTimbre).map(key => 
          <div>
          <label>{cfdiTimbre[key].nodeName}</label>
          <input value={cfdiTimbre[key].nodeValue} />
          </div>
        )}  
      </div>

      </form>
        // cfdiComprobante, cfdiEmisor, cfdiReceptor, cfdiConcepto, cfdiImpuestos, cfdiTimbre
        
    ) 
}

export default useXmlParser