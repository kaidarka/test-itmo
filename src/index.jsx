import './index.sass';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import React from "react";
import ReactDOM, {render} from "react-dom";
import App from "./components/App.jsx"

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
