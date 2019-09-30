import React from 'react';
import Navigation from './Navigation/navigation';

const Order = () => {
  return (
    <>
      <Navigation />
      <div className="text-center">
        <img
          src="https://media.wponlinesupport.com/wp-content/uploads/2015/11/payment-successful.png"
          alt=""
        />
        <h4>Your Order Placement is successful</h4>
      </div>
    </>
  );
};

export default Order;
