import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import Table from './table';
import { useRouter } from 'next/router';

import { MDBContainer } from 'mdbreact';
import Navigation from '../Navigation/navigation';

const Show = props => {
  const [product, setProduct] = useState(null);
  // const [user, setUser] = useState('');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // const authUser = JSON.parse(localStorage.getItem('user'));
    // setUser(authUser);
    const fecthData = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, [props]);

  const tabRow = () => {
    return (
      product && (
        <Table
          obj={product}
          // userId={user && user._id}
          key={product._id}
        />
      )
    );
  };

  return (
    <>
      <Navigation />
      <MDBContainer>{tabRow()}</MDBContainer>;
    </>
  );
};

export default Show;
