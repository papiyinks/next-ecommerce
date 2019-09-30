import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProduct } from '../../store/actions/productActions';
import Router from 'next/router';
import Navigation from '../Navigation/navigation';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

export const AddProduct = props => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handleBrandChange = event => setBrand(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);
  const handleImageChange = event => setImage(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      name,
      brand,
      price,
      image,
      description,
    };
    try {
      await props.createProduct(data);
      Router.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5 pb-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-2">Add New Product</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Brand"
                    value={brand}
                    onChange={handleBrandChange}
                    required
                  />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={handlePriceChange}
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image url"
                    value={image}
                    onChange={handleImageChange}
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
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

AddProduct.propTypes = {
  createProduct: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createProduct }
)(AddProduct);
