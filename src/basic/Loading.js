import Spinner from 'react-bootstrap/Spinner';


export function Loading (){


    return (
        <Spinner  id="loadingOnTop" className="hidden loadingOntop" animation="border" role="status" size="sm" hidden={false}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );



}