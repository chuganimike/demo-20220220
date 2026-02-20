import React from 'react';
import {

    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import { ToastContainer} from 'react-toastify';
import Spinner from "react-bootstrap/Spinner";

class LoginJsx extends React.Component {

    checkButtonLoginUsername = (e) => {
        this.props.setUser(e.target.value);
    }

    checkButtonLoginPassword = (e) => {
        this.props.setPass(e.target.value);
    }

    resetState = () => {
        document.querySelector('#loadingOnTop').classList.remove('show');
        document.querySelector('#closeMessage').classList.remove('show');
        document.querySelector('#loadingOnTop').classList.add('hidden');
        document.querySelector('#closeMessage').classList.add('hidden');
        document.querySelector('#register').removeAttribute('disabled');
        document.querySelector('#sentRequest').classList.remove('hidden');
        document.querySelector('#sentRequest').classList.add('show');
        this.setState({
            startType: true
        })
    }

    closeModal = () => {
        this.resetState();
        this.props.executeToggleClose();
    }

    render() {
        return(
            <div className="row align-content-center" >
                <ToastContainer />
                <MDBContainer >
                    <MDBRow>
                        <MDBCol col='12' >
                            <MDBCard id={'loginForm'} className=' my-5  mx-auto cardBodyLogin background-image' >
                                <MDBCardBody className='p-5 w-100 d-flex flex-column cardBodyLogin'>

                                    <h4 className="mb-2 text-center loginHeading">Stack Underflow</h4>
                                    <p className="loginHeading  mb-5 text-center">Please enter your login and password </p>

                                    <MDBInput wrapperClass='mb-4 w-100' label='Username' id='username' type='text' size="lg"
                                              onKeyUp={this.checkButtonLoginUsername}/>
                                    <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password' type='password' size="lg"
                                              onKeyUp={this.checkButtonLoginPassword} />

                                    <button  className='ripple ripple-surface ripple-surface-light btn btn-primary btn-lg parent' disabled={this.props.login} id='loginButton' onClick={this.props.loginExecute}>

                                        <Spinner  id="loadingOnTopLogin" className="hidden loadingOnLogin" animation="border" role="status" size="sm" hidden={false}>
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                        <div className='show' id={'executeLogin'}>Login</div>
                                    </button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }


}

export default LoginJsx;