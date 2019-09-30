import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBTooltip,
  MDBCardFooter,
  MDBIcon,
} from 'mdbreact';

const Body = props => {
  const handleClick = product => {
    props.addToCart(product);
    alert('Item added to cart');
  };

  return (
    <MDBCol lg="3" md="6">
      <MDBCard className="mb-4" cascade ecommerce wide>
        <MDBCardImage cascade top src={props.obj.image} waves />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle>
            <Link
              href={`/product?id=${props.obj._id}`}
              as={`/product/${props.obj._id}`}
            >
              <a title="Click to view more info">
                <strong>{props.obj.name}</strong>
              </a>
            </Link>
          </MDBCardTitle>

          <MDBCardFooter>
            <span className="float-left">₦ {props.obj.price}</span>
            <span className="float-right">
              <MDBTooltip placement="top">
                <MDBBtn
                  tag="a"
                  onClick={() => {
                    handleClick(props.obj);
                  }}
                  size="lg"
                  className="p-1 m-0 mr-2 z-depth-0"
                >
                  <MDBIcon icon="shopping-cart" />
                </MDBBtn>
                <div>Add to Cart</div>
              </MDBTooltip>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Body);
