import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../components/Forms/SignupForm';
import { userSignupRequest } from '../store/actions/signupActions';
import { addFlashMessage } from '../store/actions/flashMessages';
import Navigation from '../components/Navigation/navigation';

const SignupPage = props => {
  const { userSignupRequest, addFlashMessage } = props;
  return (
    <div>
      <Navigation />
      <SignupForm
        userSignupRequest={userSignupRequest}
        addFlashMessage={addFlashMessage}
      />
    </div>
  );
};

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

export default connect(
  null,
  { userSignupRequest, addFlashMessage }
)(SignupPage);
