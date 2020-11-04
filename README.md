# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm dev`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### 'handle Error on axios'

´´´´javascript

        console.log(data)
        const url = 'http://localhost:3010/api/v1/contra'
            
          await axios.post(url, data)
          
          .then(res => console.log(res.status))
          .catch(err => {
              console.log(err.response.data)
              console.log(err.response.status)
              console.log(err.response.headers)
          })

      }

´´´´