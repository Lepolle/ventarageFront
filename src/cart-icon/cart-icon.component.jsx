import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { MdShoppingBasket } from "react-icons/md";
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../redux/cart/cart.actions'
import { selectCartItemCount } from '../redux/cart/cart.selectors'


const CartIconComponent = (props) => {
    return (

        <div className='cart-icon'  onClick={props.toggleCartHidden}>
            <MdShoppingBasket/>
            <span className='item-count'>
                {props.cartItemCount}
            </span>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent)
