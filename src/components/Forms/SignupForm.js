import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

const SignupForm = props => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, SetPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  // const [redirect, setRedirect] = useState(false);

  const handleFirstnamechange = event => setFirstname(event.target.value);
  const handleLastnamechange = event => setLastname(event.target.value);
  const handleEmailchange = event => setEmail(event.target.value);
  const handlePhonechange = event => SetPhonenumber(event.target.value);
  const handlePasswordchange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      telephone,
      password,
    };

    try {
      await props.userSignupRequest(data);
      Router.push('/products');
      // setRedirect(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  // if (redirect) {
  //   props.addFlashMessage({
  //     type: 'success',
  //     text: 'You signed up successfully. Welcome',
  //   });
  //   return Router.push('/products');
  // }

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center pb-5 my-5">
        <MDBCol sm="12" md="8" lg="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-2">SignUp</p>
                <input
                  type="text"
                  value={firstname}
                  className="form-control"
                  placeholder="First Name"
                  onChange={handleFirstnamechange}
                  required
                />
                <br />
                <input
                  type="text"
                  value={lastname}
                  className="form-control"
                  placeholder="Last Name"
                  onChange={handleLastnamechange}
                  required
                />
                <br />
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  placeholder="Email Address"
                  onChange={handleEmailchange}
                  required
                />
                <br />
                <input
                  type="number"
                  value={telephone}
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={handlePhonechange}
                  required
                />
                <br />
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="Password"
                  onChange={handlePasswordchange}
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
  );
};

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default SignupForm;
