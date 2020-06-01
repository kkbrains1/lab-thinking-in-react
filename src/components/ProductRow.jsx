import React from 'react';

const ProductRow = (props) => {
  return (
    <div>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>
            {props.price} 
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default ProductRow;
