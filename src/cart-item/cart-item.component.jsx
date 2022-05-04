import React from 'react'

import './cart-item.styles.scss'

const CartItemComponent = (props) => {
    return (
        <div className='cart-item'>
            <img src={props.img} alt='item' />
            <div className='item-details'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.quantity} X ${props.precio}</span>

            </div>
        </div>
    )
}



export default CartItemComponent
