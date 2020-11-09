# Getting Started with Create React App
# Validador de Factura

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Ejemplo de uso de FileRader:
Con esto se puede usar la informacion sin tener que almancenarla

````javascript

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

      try {
        const result = fileAsyncResult(e.target.files[0])
        if(result) {console.log('Datos listos y en pantalla')}
      } catch (error) {
        console.log(error)
      }

    }
    
````

## Ejemplo de axios e history en el control de submit de ract-hook-form

````javascript

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

````
