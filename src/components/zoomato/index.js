import React, { useState, useEffect } from 'react';
import { searchRestaurants, getCities } from '../cheat-sheets/api-call/api'
import Card from './card'
import './style.css'

const Zoomato = () => {
    const [query, setQuery] = useState('')
    const [restaurants, setRestaurants] = useState('')

    useEffect(() => {
        const searchRestaurantsFromCity = async () => {
            const restaurants = await searchRestaurants(1);
            setRestaurants(restaurants);
        };
    
        searchRestaurantsFromCity();
        
    }, [])

    const search = () => {
        const searchRestaurantsFromCity = async () => {
            const restaurants = await searchRestaurants(query)
            setRestaurants(restaurants)
            // setQuery('')
        }

        searchRestaurantsFromCity()
    }

    return (
        <div>
            <div className="search">
                <div className="search-bar">
                    <input value={query} placeholder="Type a City" onChange={e => setQuery(e.target.value)} />
                    <button onClick={search} >Search Restaurant</button>
                </div>
            </div>

            <div className="results">
                <div className="row">
                    {
                        restaurants.restaurants?.map( (restaurant) => 
                            <Card 
                                key={restaurant.restaurant.id}
                                city = {restaurant.restaurant.location.city}
                                image = {restaurant.restaurant.thumb} 
                                name = {restaurant.restaurant.name}
                                currency = {restaurant.restaurant.currency}
                                cost = {restaurant.restaurant.price_range}
                                cuisines = {restaurant.restaurant.cuisines}
                                rating = {restaurant.restaurant.user_rating.aggregate_rating} 
                            ></Card>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Zoomato