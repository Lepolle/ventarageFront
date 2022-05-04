import React from 'react'

import './collection-preview.styles.scss'
import {CustomButtonComponent} from "../custom-button/custom-button.component";
import {addItem} from "../redux/cart/cart.actions";
import {connect} from "react-redux";

export const CollectionPreviewComponent = (props) => {
    return (
        <div className='collection-preview'>
            <div className='preview'>
                <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${props.img})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.precio}</span>
            </div>
            <CustomButtonComponent inverted onClick={() => props.addItem(props)}>Añadir</CustomButtonComponent>
        </div>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionPreviewComponent)