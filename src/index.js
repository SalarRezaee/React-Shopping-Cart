import Reactdom from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css';



Reactdom.render( 
    <BrowserRouter>
        <App/>
    </BrowserRouter> ,
     document.querySelector("#root")
)