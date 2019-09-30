import React from 'react';
import Link from 'next/link';
import axios from '../../axios-orders';
import styled from 'styled-components';
import Router from 'next/router';

import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';

const Table = props => {
  const deleted = async () => {
    const token = localStorage.getItem('jwtToken');

    try {
      await axios.delete('/products/' + props.obj._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Router.push(`/products`);
    } catch (err) {
      console.log(err);
    }
  };

  const ImgP = styled.img`
    min-width: 335px;
    min-height: 335px;
  `;

  return (
    <MDBRow>
      <MDBCol className="mt-4" md="6">
        <h3>
          <strong>{props.obj.name}</strong>
        </h3>
        <p>
          <strong>Brand:</strong> {props.obj.brand}
        </p>
        <div>
          <ImgP alt="" src={props.obj.image} className="img-fluid w-75" />
        </div>
        <p className="pt-3">₦ {props.obj.price}</p>
      </MDBCol>
      <MDBCol className="mt-md-5" md="6">
        <p className="text-justify">
          <strong>Description: </strong>
          {props.obj.description}
        </p>
        {/* {props.userId === props.obj.owner && ( */}
        <div>
          <MDBBtn color="success">
            <Link
              href={`/edit?id=${props.obj._id}`}
              as={`/edit/${props.obj._id}`}
            >
              <a className="text-reset">Edit</a>
            </Link>
          </MDBBtn>
          <MDBBtn onClick={deleted} color="danger">
            Delete
          </MDBBtn>
        </div>
        {/* )} */}
      </MDBCol>
    </MDBRow>
  );
};

export default Table;
