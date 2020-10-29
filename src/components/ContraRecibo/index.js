import React, { Fragment, useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
// import { DOMParser } from 'xmldom'
import useXMLParser from  '../../hooks/useXmlParser'

// import dataxml from '../../assets/b95ec202-c124-5a5b-9763-37674d578248.xml'

const App = () => {

  const [ dataxml, setDataXml ] = useState([])

  const typeAllow = ['text/xml']

  const handleInputData = (e) => {
        const data = e.target.files

        if(typeAllow.includes(data[0].type)){
          // alert('Es Valido')
          return setDataXml(data)
        } else{
          alert('No es valido')
        }

        console.log(e.target.files)
  }
      useEffect(() => {
        console.log("la comida va aqui")
      },[dataxml])

      const { cfdiEmisor, cfdiComprobante, cfdiConcepto, cfdiImpuestos, cfdiReceptor, cfdiTimbre } = useXMLParser(dataxml)
    

  return(
    <Fragment>



      <div className="cont__form_contrarecibo">
        {/* paso 1 ingresar el xml  */}
        <div>
      <label><h3>Cargar xml</h3></label>
      <input 
      type="file"
      onChange={handleInputData}
       />
       <button>Aqui</button>
        </div>

      {/* Inicio de Formualario */}
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
      </div>
    </Fragment>
  )
}
export default App;
