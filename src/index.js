import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import H from "././App"
import V from "./Videos"
//import { send } from 'emailjs-com';
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
    import Home from "./components/Home"; 
    import Demo from "./components/Demo";
    
ReactDOM.render( V, document.getElementById('next'));
ReactDOM.render( <H />, document.getElementById('root'));

