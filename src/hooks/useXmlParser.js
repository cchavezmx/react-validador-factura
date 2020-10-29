import { useState, useEffect } from 'react'


const useXmlParser  = ( url ) => {

//  los tados de los nodos del xml 
    const [ cfdiComprobante, setCfdiComprobante ] = useState([])
    const [ cfdiEmisor, setCfdiEmisor ] = useState([])
    const [ cfdiReceptor, setCfdiReceptor ] = useState([])
    const [ cfdiConcepto, setCfdiConcepto ] = useState([])
    const [ cfdiImpuestos, setCfdiImpuestos ] = useState([])
    const [ cfdiTimbre, setCfdiTimbre ] = useState([])


    const cfdiData = (data) => {

        // const sopas = data.getElementsByTagName('tfd:TimbreFiscalDigital')[0].attributes
        // console.log('Sopas => ',  sopas)
        // Comprobante
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

    return{
        cfdiComprobante, cfdiEmisor, cfdiReceptor, cfdiConcepto, cfdiImpuestos, cfdiTimbre
    }

    
}


export default useXmlParser