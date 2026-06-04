import React from 'react'
import '../product.css';

const ProductModal = ({imageUrl,title,price}) => {
  return (
    <div className={'product-parent'}>
      <img src={imageUrl} className='image-css'/>
      <h1 className='product-title'>{title}</h1>
      <p className='product-price'>₹{price}</p>
      <button className='cart-btn'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductModal