import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/actions/authActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

export const NavbarPage = props => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = event => {
    event.preventDefault();
    props.logout();
  };

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const { isAuthenticated } = props.auth;

  const userLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/products">
          <a className="nav-link">Products</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/cart">
          <a className="nav-link">Cart</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <span className="mr-2">Profile</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu right basic>
            <MDBDropdownItem href="#!">Orders</MDBDropdownItem>
            <MDBDropdownItem href="#!">Account</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/">
          <a onClick={logout} className="nav-link">
            Logout
          </a>
        </Link>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  const guestLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/products">
          <a className="nav-link">Products</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/login">
          <a className="nav-link">Login</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/register">
          <a className="nav-link">Sign Up</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/cart">
          <a className="nav-link">Cart</a>
        </Link>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  return (
    <MDBNavbar color="cyan" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">PappyStore</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        {isAuthenticated ? userLinks : guestLinks}
      </MDBCollapse>
    </MDBNavbar>
  );
};

NavbarPage.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(NavbarPage);
