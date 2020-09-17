import React from 'react'
import './card.css'

function Card({city, image, name, cuisines, cost, currency, rating}) {
    return (
        <div className="card">
            <div className="city">{city}</div>
            <img src={image ? image : 'https://via.placeholder.com/150'} alt={name} />
            <div>
                <div>
                    <span className="name">{name}</span>
                    <span className="price">{currency} {cost}</span>
                </div>
                <div>
                    <span className="cuisines">{cuisines}</span>
                    <span className="rating">{rating}</span>
                </div>
            </div>
        </div>
    )
}

export default Card