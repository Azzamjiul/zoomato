import React from 'react'
import styles from './card.css'

function Card({city, image, name, cuisines, cost, currency, rating}) {
    return (
        <div className="Card">
            <div >{city}</div>
            <img src={image} alt={name} />
            <div>
                <div>
                    <span className="">{name}</span>
                    <span className="">{currency} {cost}</span>
                </div>
                <div>
                    <span className="">{cuisines}</span>
                    <span className="">{rating}</span>
                </div>
            </div>
        </div>
    )
}

export default Card