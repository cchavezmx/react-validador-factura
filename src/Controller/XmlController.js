

const XmlController = ( data ) => {


    const buildObject = (obj, value, value2) => {
        const dataBuild = []
        Object.keys(obj).map(key => (obj[key].name).toLowerCase() === value || (obj[key].name).toLowerCase() === value2 ? dataBuild.push(obj[key].value) : null)
        return dataBuild
    }
        // Comprobante
        const setComprobante = data.getElementsByTagName('cfdi:Comprobante')[0].attributes
            const folio = buildObject(setComprobante, 'folio').toString();
            const serie = buildObject(setComprobante, 'serie').toString();
            const formapago = buildObject(setComprobante, 'formapago', 'formadepago').toString();
            const numCtaPago = buildObject(setComprobante, 'numctapago').toString();
            const moneda = buildObject(setComprobante, 'moneda').toString();
            const tipocambio = buildObject(setComprobante, 'tipocambio').toString();
            const subtotal = buildObject(setComprobante, 'subtotal').toString();
            const total = buildObject(setComprobante, 'total').toString();
            const metodopago = buildObject(setComprobante, 'metodopago', 'metododepago').toString();
    
        // Emisor
        const setEmisor = (data.getElementsByTagName('cfdi:Emisor')[0].attributes)
            const rfcEmisor = buildObject(setEmisor, 'rfc').toString();
            const nombreEmisor = buildObject(setEmisor, 'nombre').toString();

        // Receptor
        const setReceptor = data.getElementsByTagName('cfdi:Receptor')[0].attributes
            const rfcReceptor = buildObject(setReceptor, 'rfc').toString();
            const nombreReceptor = buildObject(setReceptor, 'nombre').toString().split("\n").join("");

        // Impuestos
        const setImpuesto = data.getElementsByTagName('cfdi:Traslado')[0].attributes
            const impuestoImporte = buildObject(setImpuesto, 'importe').toString();
        
        // Datos del Timbre Fiscal
        const setDatosFiscales = data.getElementsByTagName('tfd:TimbreFiscalDigital')[0].attributes
            const uuid = buildObject(setDatosFiscales, 'uuid').toString();    
        
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
            numCtaPago
        }
        
        return objectDataXml

    }

export default XmlController