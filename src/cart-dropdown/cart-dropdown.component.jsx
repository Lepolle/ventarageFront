import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from 'react-router'


import './cart-dropdown.styles.scss'

import { selectCartItems } from '../redux/cart/cart.selectors'

import CartItemComponent from '../cart-item/cart-item.component'
import Button from "@material-ui/core/Button";

const CartDropdownComponent = (props) => {
    const navigate = useNavigate()
    console.log(Math.random())

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    props.cartItems ?
                        props.cartItems.map((item ) => (
                            <CartItemComponent key={`${Math.random()}_${item.name}`} {...item} />
                        ))
                        :
                        <span className='empty-message'>Vacío</span>
                }
            </div>
            <Button onClick={() => navigate('/checkout')}>
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdownComponent)
