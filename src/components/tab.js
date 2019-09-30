import React from 'react';
import { MDBCol } from 'mdbreact';

const Tab = props => {
  return (
    <MDBCol className="mt-4" sm="6" md="3">
      <img className="img-fluid" src={props.obj.image} alt="" />
    </MDBCol>
  );
};

export default Tab;
