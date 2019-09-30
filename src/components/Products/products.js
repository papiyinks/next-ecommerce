import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import PropTypes from 'prop-types';
import Body from './body';
import FlashMessagesList from '../../components/flash/flashMessagesList';
import Navigation from '../Navigation/navigation';

import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export const Products = props => {
  const [product, setProduct] = useState(null);

  const { isAuthenticated } = props.auth;

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await axios.get('/products');
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, [props]);

  const tabRow = () => {
    return (
      product &&
      product.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  const userLinks = (
    <p className="lead">
      <MDBBtn color="primary">
        <Link href="/add" as="/products/add">
          <a className="text-reset">Add New Products</a>
        </Link>
      </MDBBtn>
    </p>
  );

  const guestLinks = <div></div>;

  return (
    <>
      <Navigation />
      <MDBContainer className="mt-4">
        <FlashMessagesList />
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className="h1 display-3">Home of Brands</h2>
              {isAuthenticated ? userLinks : guestLinks}
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        <MDBRow>{tabRow()}</MDBRow>
      </MDBContainer>
    </>
  );
};

Products.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  null
)(Products);
