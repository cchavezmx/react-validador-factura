import React, { Fragment, useEffect, useState } from 'react';

// Componente
import XmlParse from '../XmlParser'

// Material
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import url from '../../assets/b95ec202-c124-5a5b-9763-37674d578248.xml'

const App = () => {

  const [ dataxml, setDataXml ] = useState([])

  const typeAllow = ['text/xml']

  const handleInputData = (e) => {
        const data = e.target.files

        if(typeAllow.includes(data[0].type)){
          // alert('Es Valido')
          setDataXml(url)
        } else{
          alert('No es valido')
        }

        console.log(e.target.files)
  }


      useEffect(() => {
        console.log("la comida va aqui")
      },[dataxml])
   

  return(
    <Fragment>
      <div className="cont__form_contrarecibo">
        {/* paso 1 ingresar el xml  */}
        <div>
      <label><h3>Cargar xml</h3></label>
      <input type="file"onChange={handleInputData} id="icon-button-file" />
      <label htmlFor='icon-button-file'>
      <IconButton color="primary" aria-label="upload picture" component="span">
      <AttachFileIcon fontSize='large' />
      </IconButton>
      </label>
    
        </div>
        {dataxml.length > 0 && <XmlParse url={dataxml}/>}
      </div>
      

    
    </Fragment>
  )
}
export default App;
