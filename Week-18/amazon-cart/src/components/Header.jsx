import { ShoppingCart } from 'lucide-react'
import React from 'react'
import "../header.style.css"
import { useNavigate } from 'react-router-dom'
import { cartItemsState } from '../store/cartItemState'
import { useRecoilState } from 'recoil'
const Header = () => {
  const navigate = useNavigate();
  const [items] = useRecoilState(cartItemsState);
  return (

    <div className='container' >
      <div className='logo' onClick={()=> navigate('/')}>
        amazon.in
      </div>
      <div className='cart-main'>
        <div>
          Hello, User
        </div>
        <div className='cart' onClick={() => navigate('/cart')}>
          <ShoppingCart size={24} className='shopping-icon'/>
          <div className='quantity'>
            {items.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header