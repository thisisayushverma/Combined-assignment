import React from 'react'
import "../purchaseModal.css"
import check from "../assets/check.svg";

const PurchaseModal = ({totalPrice}) => {
  return (
    <div className='purchase-container'>
      <h1 className='purchase-header'>Purchase Successful!</h1>
      <img src={check} className='purchase-check'/>
      <p className='purchase-para'>
        Thank you for your purchase. Your order has been Successfully processed.
      </p>
      <p className='purchase-total'>Total Amount: ₹{totalPrice}</p>
      <button className='purchase-button'>
        Close
      </button>
    </div>
  )
}

export default PurchaseModal