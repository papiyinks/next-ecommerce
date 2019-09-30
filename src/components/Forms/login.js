import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authActions';
import Router from 'next/router';
// import { Redirect } from 'react-router-dom';

import Navbar from '../Navigation/navigation';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [redirect, setRedirect] = useState(false);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const onSubmit = async event => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      await props.login(data);
      Router.push('/products');
      // setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  // if (redirect) {
  //   return <Redirect to={'/products'} />;
  // }

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5 pb-5">
          <MDBCol sm="12" md="8" lg="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={onSubmit}>
                  <p className="h4 text-center py-2">Login</p>
                  <input
                    type="email"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <br />
                  <input
                    type="password"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      Submit
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(
  null,
  { login }
)(Login);
