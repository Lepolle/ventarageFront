import React from 'react'

import './custom-button.styles.scss'

export const CustomButtonComponent = ({ children, inverted, ...props }) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} custom-button`} {...props}>
            {children}
        </button>
    )
}

export default CustomButtonComponent
