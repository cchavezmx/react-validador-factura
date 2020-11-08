import React, { Fragment, useState } from 'react';

// Componente
import XmlParse from '../XmlParser'

// Material
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';

 const typeAllow = ['text/xml']

const App = () => {

  const [ dataxml, setDataXml ] = useState([])
    
  // mandarlo a su carpeta de controlador 
  
  const fileAsyncResult = (file) => {

    const fr = new FileReader();
        
    fr.onload = () => {
      console.log('cargando...')
    }
    fr.onloadend = () => setDataXml(fr.result)
    
    fr.readAsText(file, 'txt/xml')
    
  }

   const handleInputData = (e) => {
          const file = e.target.files[0]
      if((file.type).includes(typeAllow)){
        fileAsyncResult(file)
      }else {
        alert('Solo admite archivos XML')
      }
    }


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
        {dataxml.length > 0 && <XmlParse data={dataxml}/>}
      </div>
      

    
    </Fragment>
  )
}
export default App;
