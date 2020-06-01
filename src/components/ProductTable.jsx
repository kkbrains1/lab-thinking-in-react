import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {props.products.map((product) => {
          if (product.name.toLowerCase().includes(props.searchQuery.toLowerCase())) {
            return (
              <ProductRow
                key={product.name}
                {...product}
                /*name = {product.name} 
                price= {product.price}*/
              />
            );
          }
        })}
      </table>
    </div>
  );
};

export default ProductTable;
