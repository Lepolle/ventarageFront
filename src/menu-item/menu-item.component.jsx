import React from "react";
import { Link } from "react-router-dom";
import './menu-item.styles.scss'



const MenuItem = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${props.img})`
                }}
            />
            <Link to={`${props.slug}`} className='content'>
                <h1 className='title'>{props.name.toUpperCase()}</h1>
                <span className='subtitle'>Ver</span>
            </Link>
        </div>
    )
}

export default MenuItem