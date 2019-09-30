import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';
import styled from 'styled-components';

const FooterPage = () => {
  const Content = styled(MDBFooter)`
    position: relative;
    width: 100%;
  `;

  return (
    <Content color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <p>
            PappyStore Designed By <strong>Papiyinks</strong> with Stutord
          </p>
        </MDBContainer>
      </div>
    </Content>
  );
};

export default FooterPage;
