import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "../src/css/index.css";
import { MemoryRouter} from 'react-router'
import MainRoute from './main/route/MainRoute.js';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

    <MemoryRouter initialEntries={['/']}>
        < MainRoute/>
    </MemoryRouter>

);











