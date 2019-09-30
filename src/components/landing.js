import React, { useState, useEffect } from 'react';
import axios from '../axios-orders';
import Tab from './tab';
import Navigation from '../components/Navigation/navigation';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';

const Landing = props => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/products');
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  const tabRow = () => {
    return (
      product &&
      product.slice(-4).map(function(object, i) {
        return <Tab obj={object} key={i} />;
      })
    );
  };

  return (
    <>
      <Navigation />
      <MDBContainer>
        <MDBRow className="mt-4 mb-5">
          <MDBCol md="4">
            <div>
              <h4 className="mb-3">
                <strong>Categories</strong>
              </h4>
            </div>
            <div>
              <p>Women's Fashion</p>
            </div>
            <div>
              <p>Men's Fashion</p>
            </div>
            <div>
              <p>Mobile & Accessories</p>
            </div>
            <div>
              <p>Computer，Office & Security</p>
            </div>
            <div>
              <p>Consumer Electronics</p>
            </div>
            <div>
              <p>Jewelry & Watches</p>
            </div>
            <div>
              <p>Home, Garden & Appliances</p>
            </div>
            <div>
              <p>Bags & Shoes</p>
            </div>
            <div>
              <p>Outdoor Fun & Sports</p>
            </div>
            <div>
              <p>Automobiles & Motorcycles</p>
            </div>
          </MDBCol>
          <MDBCol md="8">
            <div>
              <h4 className="mb-3">
                <strong>Flash Deals</strong>
              </h4>
            </div>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
              slide
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1551219059-b5f8e7acee56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1564507791227-bd8332f2566b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>
        <h4 className="text-center">
          <strong>Latest Products</strong>
        </h4>
        <MDBRow className="mb-4 mt-2">{tabRow()}</MDBRow>
      </MDBContainer>
    </>
  );
};

export default Landing;
