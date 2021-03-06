import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const Button = styled.button`
  font-size:1em;
  color : #FFF;
  padding: 8px 15px ;
  border:0; 
  background: ${props => (props.disabled ? 'red' : '#999')};
`;

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory}
    />
    <Button
      onClick={onAddToCartClicked}
      disabled={product.inventory === 0}
    >
      {product.inventory === 0 ? '售完' : '購買'}
    </Button>
  </div>
);

export default ProductItem;
