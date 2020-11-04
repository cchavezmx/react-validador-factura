
const XmlController = () =>{

    const buildObject = (obj, value, value2) => {
        const dataBuild = []
        Object.keys(obj).map(key => (obj[key].name).toLowerCase() === value || (obj[key].name).toLowerCase() === value2 ? dataBuild.push(obj[key].value) : null)
        return dataBuild
    }

    const Comprobante = (data) =>{
        // Comprobante
        const setComprobante = data.getElementsByTagName('cfdi:Comprobante')[0].attributes
            const folio = buildObject(setComprobante, 'folio');
            const serie = buildObject(setComprobante, 'serie');
            const formapago = buildObject(setComprobante, 'formapago', 'formadepago');
            const moneda = buildObject(setComprobante, 'moneda');
            const tipocambio = buildObject(setComprobante, 'tipocambio')
            const subtotal = buildObject(setComprobante, 'subtotal');
            const total = buildObject(setComprobante, 'total');
            const metodopago = buildObject(setComprobante, 'metodopago', 'metododepago');
    
        // Emisor
        const setEmisor = (data.getElementsByTagName('cfdi:Emisor')[0].attributes)
            const rfcEmisor = buildObject(setEmisor, 'rfc');
            const nombreEmisor = buildObject(setEmisor, 'nombre');

        // Receptor
        const setReceptor = data.getElementsByTagName('cfdi:Receptor')[0].attributes
            const rfcReceptor = buildObject(setReceptor, 'rfc');
            const nombreReceptor = buildObject(setReceptor, 'nombre');

        // Impuestos
        const setImpuesto = data.getElementsByTagName('cfdi:Traslado')[0].attributes
            const impuestoImporte = buildObject(setImpuesto, 'importe');
        
        // Datos del Timbre Fiscal
        const setDatosFiscales = data.getElementsByTagName('tfd:TimbreFiscalDigital')[0].attributes
            const uuid = buildObject(setDatosFiscales, 'uuid');    
        
        const objectDataXml = {
            folio,
            serie,
            formapago,
            moneda,
            tipocambio,
            subtotal,
            total,
            metodopago,
            rfcEmisor,
            nombreEmisor,
            rfcReceptor,
            nombreReceptor,
            impuestoImporte,
            uuid,
        }

        return objectDataXml
    
    }

    return({
        Comprobante
    })
}

export default XmlController