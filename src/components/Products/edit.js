import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import { useRouter } from 'next/router';
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

const Edit = props => {
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

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setName(response.data.name);
        setBrand(response.data.brand);
        setPrice(response.data.price);
        setImage(response.data.image);
        setDescription(response.data.description);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  const onSubmit = async e => {
    e.preventDefault();
    const obj = {
      name,
      brand,
      price,
      image,
      description,
    };
    const token = localStorage.getItem('jwtToken');
    await axios.patch(`/products/${id}`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Router.push(`/products`);
  };

  return (
    <>
      <Navigation />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5 pb-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={onSubmit}>
                  <p className="h4 text-center py-2">Edit {name}</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Brand"
                    name="brand"
                    value={brand}
                    onChange={handleBrandChange}
                    required
                  />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={handlePriceChange}
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image url"
                    name="image"
                    value={image}
                    onChange={handleImageChange}
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
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

export default Edit;
