import React, { useState, useEffect } from 'react';
import { searchRestaurants } from '../cheat-sheets/api-call/api'
import Card from './card'

const Zoomato = () => {
    const [query, setQuery] = useState('')
    const [restaurants, setRestaurants] = useState('')

    useEffect(() => {
        const searchRestaurantsFromCity = async () => {
            // const restaurants = await searchRestaurants(1);
            const restaurants = {
                "results_found": 39049,
                "results_start": 0,
                "results_shown": 20,
                "restaurants": [
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 0,
                                    "takeaway": -1
                                },
                                "res_id": 307374,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "307374",
                            "name": "AMA Cafe",
                            "url": "https://www.zomato.com/ncr/ama-cafe-majnu-ka-tila-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "House 6, New Colony, Majnu ka Tilla, New Delhi",
                                "locality": "Majnu ka Tila",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.7026440000",
                                "longitude": "77.2282940000",
                                "zipcode": "110054",
                                "country_id": 1,
                                "locality_verbose": "Majnu ka Tila, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Continental, Desserts, Beverages",
                            "timings": "8am – 10pm (Mon-Sun)",
                            "average_cost_for_two": 550,
                            "price_range": 2,
                            "currency": "Rs.",
                            "highlights": [
                                "Takeaway Available",
                                "Dinner",
                                "Delivery",
                                "Debit Card",
                                "Breakfast",
                                "Cash",
                                "Credit Card",
                                "Lunch",
                                "Wifi",
                                "Indoor Seating",
                                "Smoking Area",
                                "Desserts and Bakes",
                                "Air Conditioned",
                                "Reopened"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/res_imagery/307374_RESTAURANT_6688d81a57b8da4bcf20d725de39a3d2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.5",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.5"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 5061
                            },
                            "all_reviews_count": 3057,
                            "photos_url": "https://www.zomato.com/ncr/ama-cafe-majnu-ka-tila-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 10495,
                            "menu_url": "https://www.zomato.com/ncr/ama-cafe-majnu-ka-tila-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/res_imagery/307374_RESTAURANT_6688d81a57b8da4bcf20d725de39a3d2.jpg",
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/307374",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/ama-cafe-majnu-ka-tila-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 61408132, +91 8448994257, +91 8448994259",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Café"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 1,
                                    "takeaway": -1
                                },
                                "res_id": 307113,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "307113",
                            "name": "Diggin",
                            "url": "https://www.zomato.com/ncr/diggin-anand-lok-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "Shop 1 & 2, Sri Fort Road, Opposite Gargi College, Anand Lok, New Delhi",
                                "locality": "Anand Lok",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5556449601",
                                "longitude": "77.2184361890",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Anand Lok, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Continental, Italian, Fast Food, Beverages, Pizza, Desserts",
                            "timings": "11:30 AM to 11 PM",
                            "average_cost_for_two": 1400,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Takeaway Available",
                                "Dinner",
                                "Credit Card",
                                "Cash",
                                "Breakfast",
                                "Delivery",
                                "Debit Card",
                                "Outdoor Seating",
                                "Indoor Seating",
                                "Reopened",
                                "Table booking recommended",
                                "Air Conditioned"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/res_imagery/307113_RESTAURANT_e2f599e624e5e8c01404af7608728671.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.4",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.4"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 14994
                            },
                            "all_reviews_count": 3055,
                            "photos_url": "https://www.zomato.com/ncr/diggin-anand-lok-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 7290,
                            "menu_url": "https://www.zomato.com/ncr/diggin-anand-lok-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/res_imagery/307113_RESTAURANT_e2f599e624e5e8c01404af7608728671.jpg",
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/307113",
                            "order_url": "https://www.zomato.com/ncr/diggin-anand-lok-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/diggin-anand-lok-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 40800082, 011 40800081, +91 9560304124",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Casual Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 7713,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "7713",
                            "name": "Ardor 2.1",
                            "url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "N-55/56 & 88/89, Outer Circle, Connaught Place, New Delhi",
                                "locality": "Connaught Place",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6301215395",
                                "longitude": "77.2202215344",
                                "zipcode": "0",
                                "country_id": 1,
                                "locality_verbose": "Connaught Place, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Chinese, Continental, Italian",
                            "timings": "1pm – 11pm (Mon-Sun)",
                            "average_cost_for_two": 1800,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Cash",
                                "Credit Card",
                                "Dinner",
                                "Delivery",
                                "Debit Card",
                                "Live Sports Screening",
                                "Valet Parking Available",
                                "Live Music",
                                "Romantic Dining",
                                "Free Wifi",
                                "Digital Payments Accepted",
                                "Axis Bank - Dining Delights",
                                "Smoking Area",
                                "Nightlife",
                                "Fullbar",
                                "Indoor Seating",
                                "Rooftop",
                                "Table booking recommended",
                                "Air Conditioned",
                                "Reopened",
                                "Hookah"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/3/7713/36f1115d9df99648ead246ea2d894d3d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.1",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.1"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 4099
                            },
                            "all_reviews_count": 2709,
                            "photos_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 8764,
                            "menu_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/3/7713/36f1115d9df99648ead246ea2d894d3d.jpg",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/7713",
                            "order_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 1,
                            "book_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "events_url": "https://www.zomato.com/ncr/ardor-2-1-connaught-place-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9811766888",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Lounge"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 1,
                                    "takeaway": -1
                                },
                                "res_id": 18198449,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18198449",
                            "name": "Punjabi Angithi",
                            "url": "https://www.zomato.com/ncr/punjabi-angithi-paschim-vihar-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "32-22, A 4, DDA Market, Paschim Vihar, New Delhi",
                                "locality": "Paschim Vihar",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6726861364",
                                "longitude": "77.1090091020",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Paschim Vihar, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Chinese, Kebab, Rolls, Fast Food, Momos",
                            "timings": "10am – 11pm (Mon-Sun)",
                            "average_cost_for_two": 400,
                            "price_range": 1,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Cash",
                                "Takeaway Available",
                                "Credit Card",
                                "Debit Card",
                                "Dinner",
                                "Delivery",
                                "Breakfast",
                                "Free Parking",
                                "Digital Payments Accepted",
                                "Indoor Seating",
                                "Air Conditioned",
                                "Pure Veg"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/9/18198449/3a1a35fc55e8054a476e671c15bc4838.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.3",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.3"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 74865
                            },
                            "all_reviews_count": 3012,
                            "photos_url": "https://www.zomato.com/ncr/punjabi-angithi-paschim-vihar-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 1682,
                            "menu_url": "https://www.zomato.com/ncr/punjabi-angithi-paschim-vihar-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/9/18198449/3a1a35fc55e8054a476e671c15bc4838.jpg?output-format=webp",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18198449",
                            "order_url": "https://www.zomato.com/ncr/punjabi-angithi-paschim-vihar-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/punjabi-angithi-paschim-vihar-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 40191599, +91 9999613673",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Casual Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 0,
                                    "takeaway": -1
                                },
                                "res_id": 307065,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "307065",
                            "name": "Music & Mountains - Hillside Cafe",
                            "url": "https://www.zomato.com/ncr/music-mountains-hillside-cafe-greater-kailash-gk-1-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "M-23, M Block Market, Greater Kailash (GK) 1, New Delhi",
                                "locality": "M Block Market, Greater Kailash 1 (GK1)",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5497829558",
                                "longitude": "77.2357843816",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "M Block Market, Greater Kailash 1 (GK1), New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Italian, Continental, Fast Food, Salad, Beverages",
                            "timings": "11:30 AM to 11 PM (Mon-Fri, Sun), 11:30 AM to 10 PM (Sat)",
                            "average_cost_for_two": 2100,
                            "price_range": 4,
                            "currency": "Rs.",
                            "highlights": [
                                "Credit Card",
                                "Takeaway Available",
                                "Debit Card",
                                "Lunch",
                                "Dinner",
                                "Cash",
                                "Gourmet",
                                "Indoor Seating",
                                "Outdoor Seating",
                                "Fullbar",
                                "Wifi",
                                "All Day Breakfast",
                                "Reopened",
                                "Smoking Area",
                                "Air Conditioned",
                                "Romantic Dining"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/5/307065/241557703f722c885582346b06d78a04.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.3",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.3"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 3616
                            },
                            "all_reviews_count": 1802,
                            "photos_url": "https://www.zomato.com/ncr/music-mountains-hillside-cafe-greater-kailash-gk-1-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 3148,
                            "menu_url": "https://www.zomato.com/ncr/music-mountains-hillside-cafe-greater-kailash-gk-1-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/5/307065/241557703f722c885582346b06d78a04.jpg",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/307065",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 1,
                            "book_url": "https://www.zomato.com/ncr/music-mountains-hillside-cafe-greater-kailash-gk-1-new-delhi/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "events_url": "https://www.zomato.com/ncr/music-mountains-hillside-cafe-greater-kailash-gk-1-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 7827576707, +91 9811408127, +91 9873160659",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Café"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 308022,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "308022",
                            "name": "Farzi Cafe",
                            "url": "https://www.zomato.com/ncr/farzi-cafe-dlf-cyber-city-gurgaon?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "7-8, Ground Floor, Cyber Hub, DLF Cyber City, Gurgaon",
                                "locality": "Cyber Hub, DLF Cyber City",
                                "city": "Gurgaon",
                                "city_id": 1,
                                "latitude": "28.4951550747",
                                "longitude": "77.0888771117",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Cyber Hub, DLF Cyber City, Gurgaon"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Fast Food",
                            "timings": "1pm – 11pm (Mon-Sun)",
                            "average_cost_for_two": 1500,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Dinner",
                                "Cash",
                                "Credit Card",
                                "Lunch",
                                "Debit Card",
                                "Fullbar",
                                "Indoor Seating",
                                "Air Conditioned",
                                "Live Music",
                                "Table booking recommended",
                                "Reopened",
                                "Wifi"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/chains/2/308022/9cf0c48fb022382ce5ac6886fc719abe.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.5",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.5"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 6083
                            },
                            "all_reviews_count": 3717,
                            "photos_url": "https://www.zomato.com/ncr/farzi-cafe-dlf-cyber-city-gurgaon/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 10627,
                            "menu_url": "https://www.zomato.com/ncr/farzi-cafe-dlf-cyber-city-gurgaon/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/chains/2/308022/9cf0c48fb022382ce5ac6886fc719abe.jpg?output-format=webp",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/308022",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 1,
                            "book_url": "https://www.zomato.com/ncr/farzi-cafe-dlf-cyber-city-gurgaon/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "events_url": "https://www.zomato.com/ncr/farzi-cafe-dlf-cyber-city-gurgaon/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 8800690419, 0124 4922273",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Casual Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 1777,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "1777",
                            "name": "Rajinder Da Dhaba",
                            "url": "https://www.zomato.com/ncr/rajinder-da-dhaba-safdarjung-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "AB 14, Safdarjung Enclave Market, Safdarjung, New Delhi",
                                "locality": "Safdarjung",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5655299661",
                                "longitude": "77.1992550418",
                                "zipcode": "0",
                                "country_id": 1,
                                "locality_verbose": "Safdarjung, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Chinese, Mughlai",
                            "timings": "3pm – 11pm (Mon-Sun)",
                            "average_cost_for_two": 800,
                            "price_range": 2,
                            "currency": "Rs.",
                            "highlights": [
                                "Dinner",
                                "Credit Card",
                                "Cash",
                                "Debit Card",
                                "Delivery",
                                "Lunch",
                                "Takeaway Available",
                                "Indoor Seating"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/9/7319/e1b7673ed0aa2993b55b177409d5596c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.3",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.3"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 10070
                            },
                            "all_reviews_count": 2748,
                            "photos_url": "https://www.zomato.com/ncr/rajinder-da-dhaba-safdarjung-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 1972,
                            "menu_url": "https://www.zomato.com/ncr/rajinder-da-dhaba-safdarjung-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/9/7319/e1b7673ed0aa2993b55b177409d5596c.jpg?output-format=webp",
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/1777",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/rajinder-da-dhaba-safdarjung-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9990033229",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Quick Bites"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 2742,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "2742",
                            "name": "Bukhara - ITC Maurya",
                            "url": "https://www.zomato.com/ncr/bukhara-itc-maurya-chanakyapuri-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "ITC Maurya, Chanakyapuri, New Delhi",
                                "locality": "ITC Maurya, Chanakyapuri",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5982159011",
                                "longitude": "77.1736473218",
                                "zipcode": "0",
                                "country_id": 1,
                                "locality_verbose": "ITC Maurya, Chanakyapuri, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Kebab",
                            "timings": "12:30 PM to 3 PM, 7 PM to 11:45 PM",
                            "average_cost_for_two": 6500,
                            "price_range": 4,
                            "currency": "Rs.",
                            "highlights": [
                                "Dinner",
                                "Credit Card",
                                "Lunch",
                                "Cash",
                                "Debit Card",
                                "Valet Parking Available",
                                "Indoor Seating",
                                "Table booking recommended",
                                "Air Conditioned",
                                "Luxury Dining",
                                "Fullbar",
                                "4/5 Star",
                                "Restricted Entry",
                                "Wheelchair Accessible"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/res_imagery/2742_RESTAURANT_b42f02ef23f24c3bcc0b005606d34b63.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.7",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.7"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "800"
                                    }
                                },
                                "votes": 4560
                            },
                            "all_reviews_count": 1876,
                            "photos_url": "https://www.zomato.com/ncr/bukhara-itc-maurya-chanakyapuri-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 1503,
                            "menu_url": "https://www.zomato.com/ncr/bukhara-itc-maurya-chanakyapuri-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/res_imagery/2742_RESTAURANT_b42f02ef23f24c3bcc0b005606d34b63.jpg",
                            "has_online_delivery": 0,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/2742",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/bukhara-itc-maurya-chanakyapuri-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 46215152, 011 66325124",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Fine Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 18245298,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18245298",
                            "name": "Boa Village",
                            "url": "https://www.zomato.com/ncr/boa-village-civil-lines-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "13, Alipur Road, Civil Lines, New Delhi",
                                "locality": "Civil Lines",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6766166672",
                                "longitude": "77.2252111137",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Civil Lines, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Asian, Japanese, Korean, Chinese, Momos, Thai",
                            "timings": "11:30 AM to 12:30 AM",
                            "average_cost_for_two": 2300,
                            "price_range": 4,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Takeaway Available",
                                "Dinner",
                                "Credit Card",
                                "Cash",
                                "Debit Card",
                                "Delivery",
                                "Nightlife",
                                "Rooftop",
                                "Smoking Area",
                                "Fullbar",
                                "Air Conditioned",
                                "Live Music",
                                "Table Reservation Not Required",
                                "Reopened",
                                "Live Sports Screening",
                                "Indoor Seating",
                                "Wifi"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/8/18245298/bff8c184a35d1cf57a58abac1e96881b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.3",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.3"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 2606
                            },
                            "all_reviews_count": 1225,
                            "photos_url": "https://www.zomato.com/ncr/boa-village-civil-lines-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 2829,
                            "menu_url": "https://www.zomato.com/ncr/boa-village-civil-lines-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/8/18245298/bff8c184a35d1cf57a58abac1e96881b.jpg",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18245298",
                            "order_url": "https://www.zomato.com/ncr/boa-village-civil-lines-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 1,
                            "book_url": "https://www.zomato.com/ncr/boa-village-civil-lines-new-delhi/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "events_url": "https://www.zomato.com/ncr/boa-village-civil-lines-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 8375021313, +91 8375091313",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Bar"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 18562836,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18562836",
                            "name": "Diggin",
                            "url": "https://www.zomato.com/ncr/diggin-chanakyapuri-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "10, Santushti Shopping Complex, Race Course Road, Chanakyapuri, New Delhi",
                                "locality": "Chanakyapuri",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5951426153",
                                "longitude": "77.1979655698",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Chanakyapuri, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Italian, Fast Food",
                            "timings": "11:30 PM to 10 PM",
                            "average_cost_for_two": 1300,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Debit Card",
                                "Cash",
                                "Takeaway Available",
                                "Dinner",
                                "Credit Card",
                                "Outdoor Seating",
                                "Indoor Seating",
                                "Air Conditioned",
                                "Reopened"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/6/18562836/f5cf30a33f5a788c28ebf88ceedaf178.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.5",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.5"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 3369
                            },
                            "all_reviews_count": 1784,
                            "photos_url": "https://www.zomato.com/ncr/diggin-chanakyapuri-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 4586,
                            "menu_url": "https://www.zomato.com/ncr/diggin-chanakyapuri-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/6/18562836/f5cf30a33f5a788c28ebf88ceedaf178.jpg",
                            "has_online_delivery": 0,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18562836",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/diggin-chanakyapuri-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 26110787, 011 26110788",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Café"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 18273624,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18273624",
                            "name": "Cafeteria & Co.",
                            "url": "https://www.zomato.com/ncr/cafeteria-co-vijay-nagar-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "G 14, Hudson Lane, Vijay Nagar, New Delhi",
                                "locality": "Vijay Nagar",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6944828092",
                                "longitude": "77.2042758018",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Vijay Nagar, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Continental, Mexican, Italian, Fast Food",
                            "timings": "11:30AM to 11:30PM (Mon-Sun)",
                            "average_cost_for_two": 1300,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Credit Card",
                                "Takeaway Available",
                                "Delivery",
                                "Cash",
                                "Dinner",
                                "Debit Card",
                                "Live Sports Screening",
                                "Table booking recommended",
                                "Indoor Seating",
                                "Beer",
                                "Wine",
                                "Air Conditioned"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/0/18279460/37fdc1c68698dfd4b6049887e9653bfc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.4",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.4"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 5435
                            },
                            "all_reviews_count": 3207,
                            "photos_url": "https://www.zomato.com/ncr/cafeteria-co-vijay-nagar-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 11584,
                            "menu_url": "https://www.zomato.com/ncr/cafeteria-co-vijay-nagar-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/0/18279460/37fdc1c68698dfd4b6049887e9653bfc.jpg",
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18273624",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/cafeteria-co-vijay-nagar-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 42870010",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Casual Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 1,
                                    "takeaway": -1
                                },
                                "res_id": 799,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "799",
                            "name": "Gulati",
                            "url": "https://www.zomato.com/ncr/gulati-pandara-road-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "6, Pandara Road Market, New Delhi",
                                "locality": "Pandara Road Market",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6080070000",
                                "longitude": "77.2301400000",
                                "zipcode": "110003",
                                "country_id": 1,
                                "locality_verbose": "Pandara Road Market, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Mughlai, Kebab",
                            "timings": "12noon – 10:30pm (Mon-Sun)",
                            "average_cost_for_two": 2500,
                            "price_range": 4,
                            "currency": "Rs.",
                            "highlights": [
                                "Credit Card",
                                "No Alcohol Available",
                                "Lunch",
                                "Delivery",
                                "Takeaway Available",
                                "Debit Card",
                                "Dinner",
                                "Cash",
                                "Air Conditioned",
                                "Indoor Seating"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/9/799/0343ee5a88478b2416a4105f7e41c388.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.5",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.5"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 13983
                            },
                            "all_reviews_count": 3180,
                            "photos_url": "https://www.zomato.com/ncr/gulati-pandara-road-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 2634,
                            "menu_url": "https://www.zomato.com/ncr/gulati-pandara-road-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/9/799/0343ee5a88478b2416a4105f7e41c388.jpg?output-format=webp",
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/799",
                            "order_url": "https://www.zomato.com/ncr/gulati-pandara-road-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/gulati-pandara-road-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 23388836, 011 23388839, 011 23782949",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Casual Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 1,
                                    "takeaway": -1
                                },
                                "res_id": 7224,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "7224",
                            "name": "Cafe Wink",
                            "url": "https://www.zomato.com/ncr/cafe-wink-anand-vihar-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "G-1, Plot 9, Sikka Galaxy, Shreshtha Vihar, Anand Vihar, New Delhi",
                                "locality": "Anand Vihar",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6572599816",
                                "longitude": "77.3172340170",
                                "zipcode": "110092",
                                "country_id": 1,
                                "locality_verbose": "Anand Vihar, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Continental, Italian",
                            "timings": "12 Noon to 10 PM",
                            "average_cost_for_two": 800,
                            "price_range": 2,
                            "currency": "Rs.",
                            "highlights": [
                                "Dinner",
                                "Credit Card",
                                "Takeaway Available",
                                "Debit Card",
                                "Delivery",
                                "Lunch",
                                "Cash",
                                "Digital Payments Accepted",
                                "Table booking recommended",
                                "Reopened",
                                "Indoor Seating",
                                "Air Conditioned"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/chains/4/7224/adcbc9bf75f6c1808867f18dc867bff9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.5",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.5"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 7258
                            },
                            "all_reviews_count": 1920,
                            "photos_url": "https://www.zomato.com/ncr/cafe-wink-anand-vihar-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 6523,
                            "menu_url": "https://www.zomato.com/ncr/cafe-wink-anand-vihar-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/chains/4/7224/adcbc9bf75f6c1808867f18dc867bff9.jpg",
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/7224",
                            "order_url": "https://www.zomato.com/ncr/cafe-wink-anand-vihar-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/cafe-wink-anand-vihar-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 8130370123, +91 8130470123, 011 43596979",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Café"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 0,
                                    "takeaway": -1
                                },
                                "res_id": 18454488,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18454488",
                            "name": "The G.T. Road",
                            "url": "https://www.zomato.com/ncr/the-g-t-road-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "M 39, Outer Circle, Connaught Place, New Delhi",
                                "locality": "Connaught Place",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6331346529",
                                "longitude": "77.2229161486",
                                "zipcode": "",
                                "country_id": 1,
                                "locality_verbose": "Connaught Place, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "North Indian, Mughlai, Beverages",
                            "timings": "12noon – 3:30pm, 7pm – 11:30pm (Mon-Sun)",
                            "average_cost_for_two": 1200,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Delivery",
                                "Dinner",
                                "Cash",
                                "Credit Card",
                                "Debit Card",
                                "Fullbar",
                                "Table reservation required",
                                "Reopened",
                                "Buffet",
                                "Desserts and Bakes",
                                "Indoor Seating",
                                "Air Conditioned"
                            ],
                            "offers": [],
                            "zomato_events": [
                                {
                                    "event": {
                                        "event_id": 469254,
                                        "friendly_start_date": "14 September",
                                        "friendly_end_date": "31 October",
                                        "friendly_timing_str": "Monday, 14th September - Saturday, 31st October",
                                        "start_date": "2020-09-14",
                                        "end_date": "2020-10-31",
                                        "end_time": "23:55:00",
                                        "start_time": "12:00:00",
                                        "is_active": 1,
                                        "date_added": "2020-08-12 16:35:17",
                                        "photos": [
                                            {
                                                "photo": {
                                                    "url": "https://b.zmtcdn.com/data/zomato_events/photos/f31/84d642aec493e8362f3e9e66b3941f31_1600091785.jpeg",
                                                    "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/f31/84d642aec493e8362f3e9e66b3941f31_1600091785.jpeg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                                    "order": 0,
                                                    "md5sum": "84d642aec493e8362f3e9e66b3941f31",
                                                    "id": 636605,
                                                    "photo_id": 636605,
                                                    "uuid": 1600091767061724,
                                                    "type": "NORMAL"
                                                }
                                            },
                                            {
                                                "photo": {
                                                    "url": "https://b.zmtcdn.com/data/zomato_events/photos/f15/fb4d0538f898cb29e8b46b3ba6ba1f15_1600091785.jpeg",
                                                    "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/f15/fb4d0538f898cb29e8b46b3ba6ba1f15_1600091785.jpeg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                                    "order": 1,
                                                    "md5sum": "fb4d0538f898cb29e8b46b3ba6ba1f15",
                                                    "id": 636606,
                                                    "photo_id": 636606,
                                                    "uuid": 1600091774221589,
                                                    "type": "NORMAL"
                                                }
                                            },
                                            {
                                                "photo": {
                                                    "url": "https://b.zmtcdn.com/data/zomato_events/photos/3aa/614358b3067f7795d24ef97d6ede23aa_1598094185.jpg",
                                                    "thumb_url": "https://b.zmtcdn.com/data/zomato_events/photos/3aa/614358b3067f7795d24ef97d6ede23aa_1598094185.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
                                                    "order": 2,
                                                    "md5sum": "614358b3067f7795d24ef97d6ede23aa",
                                                    "id": 635313,
                                                    "photo_id": 635313,
                                                    "uuid": 1598094129682994,
                                                    "type": "NORMAL"
                                                }
                                            }
                                        ],
                                        "restaurants": [],
                                        "is_valid": 1,
                                        "share_url": "http://www.zoma.to/r/0",
                                        "show_share_url": 0,
                                        "title": "King Of Buffets- The G.T. Road New Menu!",
                                        "description": "Now enjoy all new Menu at The G.T. Road. Dimsums, Shawarma, Satay Stcks (Both Veg & NonVeg ), fresh bakery items and much more!  or call  9871121428!",
                                        "display_time": "12:00 pm - 11:55 pm",
                                        "display_date": "14 September - 31 October",
                                        "is_end_time_set": 1,
                                        "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                                        "event_category": 0,
                                        "event_category_name": "",
                                        "book_link": "",
                                        "types": [
                                            {
                                                "name": "SPECIAL MENU",
                                                "color": "#F96C6A"
                                            }
                                        ],
                                        "share_data": {
                                            "should_show": 0
                                        }
                                    }
                                }
                            ],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/8/18454488/18529e4f622485a316903afe8f37b426.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.4",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.4"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 3356
                            },
                            "all_reviews_count": 2011,
                            "photos_url": "https://www.zomato.com/ncr/the-g-t-road-connaught-place-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 7312,
                            "menu_url": "https://www.zomato.com/ncr/the-g-t-road-connaught-place-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/8/18454488/18529e4f622485a316903afe8f37b426.jpg",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18454488",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 1,
                            "book_url": "https://www.zomato.com/ncr/the-g-t-road-connaught-place-new-delhi/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "events_url": "https://www.zomato.com/ncr/the-g-t-road-connaught-place-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9871121428",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Casual Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 2004,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "2004",
                            "name": "Indian Accent",
                            "url": "https://www.zomato.com/ncr/indian-accent-lodhi-road-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "The Lodhi, Lodhi Road, New Delhi",
                                "locality": "The Lodhi, Lodhi Road",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5920639406",
                                "longitude": "77.2376998141",
                                "zipcode": "0",
                                "country_id": 1,
                                "locality_verbose": "The Lodhi, Lodhi Road, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Modern Indian",
                            "timings": "",
                            "average_cost_for_two": 5000,
                            "price_range": 4,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Cash",
                                "Debit Card",
                                "Dinner",
                                "Credit Card",
                                "Table booking recommended",
                                "Fullbar",
                                "4/5 Star",
                                "Wifi",
                                "Valet Parking Available",
                                "Indoor Seating",
                                "Air Conditioned",
                                "Luxury Dining"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/4/2004/3cd622ca37a9ec01e2d8ec9bf4a7bdc3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.9",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.9"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "800"
                                    }
                                },
                                "votes": 3739
                            },
                            "all_reviews_count": 1567,
                            "photos_url": "https://www.zomato.com/ncr/indian-accent-lodhi-road-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 5649,
                            "menu_url": "https://www.zomato.com/ncr/indian-accent-lodhi-road-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/4/2004/3cd622ca37a9ec01e2d8ec9bf4a7bdc3.jpg",
                            "has_online_delivery": 0,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/2004",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/indian-accent-lodhi-road-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9871117968, 011 66175151",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Fine Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 0,
                                    "takeaway": -1
                                },
                                "res_id": 18538208,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18538208",
                            "name": "Rustique",
                            "url": "https://www.zomato.com/ncr/rustique-adchini-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "Essex Farms, 4 Aurobindo Marg, Adchini, New Delhi",
                                "locality": "Essex Farms, Adchini",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5438673163",
                                "longitude": "77.2013431415",
                                "zipcode": "110016",
                                "country_id": 1,
                                "locality_verbose": "Essex Farms, Adchini, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Bakery, Desserts, Italian, Beverages",
                            "timings": "10am – 11pm (Mon-Sun)",
                            "average_cost_for_two": 800,
                            "price_range": 2,
                            "currency": "Rs.",
                            "highlights": [
                                "Dinner",
                                "Credit Card",
                                "Debit Card",
                                "Lunch",
                                "Cash",
                                "Breakfast",
                                "Free Parking",
                                "Indoor Seating",
                                "Air Conditioned",
                                "Outdoor Seating",
                                "Free Wifi",
                                "Desserts and Bakes"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/reviews_photos/168/9a37535e7037e8c5133821225bdd6168_1566373675.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.5",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.5"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 1195
                            },
                            "all_reviews_count": 819,
                            "photos_url": "https://www.zomato.com/ncr/rustique-adchini-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 3283,
                            "menu_url": "https://www.zomato.com/ncr/rustique-adchini-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/reviews_photos/168/9a37535e7037e8c5133821225bdd6168_1566373675.jpg?output-format=webp",
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18538208",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/rustique-adchini-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9811331122, +91 9873739393",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Café"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 1,
                                    "takeaway": -1
                                },
                                "res_id": 3258,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "3258",
                            "name": "Olive Bar & Kitchen",
                            "url": "https://www.zomato.com/ncr/olive-bar-kitchen-mehrauli-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "6-8, Kalka Das Marg, Mehrauli, New Delhi",
                                "locality": "Mehrauli",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5257778773",
                                "longitude": "77.1843540296",
                                "zipcode": "110030",
                                "country_id": 1,
                                "locality_verbose": "Mehrauli, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Mediterranean, European, Italian, Pizza, Seafood, Desserts, Beverages",
                            "timings": "1pm – 12midnight (Mon, Wed, Thu, Fri, Sat, Sun), Closed (Tue)",
                            "average_cost_for_two": 4000,
                            "price_range": 4,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Cash",
                                "Delivery",
                                "Dinner",
                                "Credit Card",
                                "Debit Card",
                                "Valet Parking Available",
                                "Outdoor Seating",
                                "Speakeasy",
                                "Table booking recommended",
                                "Wheelchair Accessible",
                                "Brunch",
                                "Fullbar",
                                "Live Music",
                                "Indoor Seating",
                                "Axis Bank - Dining Delights",
                                "Smoking Area",
                                "Wifi"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/8/3258/53255d275cdb69bac909248f0e0f4ec2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.7",
                                "rating_text": "Excellent",
                                "rating_color": "3F7E00",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.7"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "800"
                                    }
                                },
                                "votes": 2660
                            },
                            "all_reviews_count": 1116,
                            "photos_url": "https://www.zomato.com/ncr/olive-bar-kitchen-mehrauli-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 2478,
                            "menu_url": "https://www.zomato.com/ncr/olive-bar-kitchen-mehrauli-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/8/3258/53255d275cdb69bac909248f0e0f4ec2.jpg",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/3258",
                            "order_url": "https://www.zomato.com/ncr/olive-bar-kitchen-mehrauli-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 1,
                            "book_url": "https://www.zomato.com/ncr/olive-bar-kitchen-mehrauli-new-delhi/book?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "events_url": "https://www.zomato.com/ncr/olive-bar-kitchen-mehrauli-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9810235472",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Fine Dining"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": -1,
                                    "takeaway": -1
                                },
                                "res_id": 18216901,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "18216901",
                            "name": "Unplugged Courtyard",
                            "url": "https://www.zomato.com/ncr/unplugged-courtyard-connaught-place-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "23/7, L Block, Middle Circle, Connaught Place, New Delhi",
                                "locality": "Connaught Place",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.6342240491",
                                "longitude": "77.2215066478",
                                "zipcode": "110001",
                                "country_id": 1,
                                "locality_verbose": "Connaught Place, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Finger Food, North Indian, Continental, Momos, Asian",
                            "timings": "12 Noon to 12:30 AM",
                            "average_cost_for_two": 1600,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Dinner",
                                "Credit Card",
                                "Lunch",
                                "Delivery",
                                "Cash",
                                "Debit Card",
                                "Takeaway Available",
                                "Wifi",
                                "Valet Parking Available",
                                "Indoor Seating",
                                "Axis Bank - Dining Delights",
                                "Brunch",
                                "Live Entertainment",
                                "Fullbar",
                                "Romantic Dining",
                                "Live Sports Screening",
                                "Outdoor Seating",
                                "Table booking recommended",
                                "Smoking Area",
                                "Nightlife",
                                "Live Music",
                                "Air Conditioned"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/1/18216901/e118f1bf9d6af576a4a3439044ce9f18.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.2",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.2"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 4094
                            },
                            "all_reviews_count": 2653,
                            "photos_url": "https://www.zomato.com/ncr/unplugged-courtyard-connaught-place-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 8423,
                            "menu_url": "https://www.zomato.com/ncr/unplugged-courtyard-connaught-place-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/1/18216901/e118f1bf9d6af576a4a3439044ce9f18.jpg?output-format=webp",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/18216901",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/unplugged-courtyard-connaught-place-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9999396662, +91 9999396661",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Bar"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 1,
                                    "takeaway": -1
                                },
                                "res_id": 5229,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "5229",
                            "name": "The Potbelly Rooftop Cafe",
                            "url": "https://www.zomato.com/ncr/the-potbelly-rooftop-cafe-shahpur-jat-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "116/C, 4th Floor, Shahpur Jat, New Delhi",
                                "locality": "Shahpur Jat",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5495918204",
                                "longitude": "77.2153151035",
                                "zipcode": "0",
                                "country_id": 1,
                                "locality_verbose": "Shahpur Jat, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Bihari, Fast Food, Beverages",
                            "timings": "11am – 10:30pm (Mon-Sun)",
                            "average_cost_for_two": 1000,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Delivery",
                                "Credit Card",
                                "Lunch",
                                "Cash",
                                "Debit Card",
                                "Dinner",
                                "Takeaway Available",
                                "Air Conditioned",
                                "Reopened",
                                "Indoor Seating",
                                "Rooftop",
                                "Digital Payments Accepted",
                                "Wifi"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/9/5229/7f7bda9ae20bb7e7fa385ea1e610d1cb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.4",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.4"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 4127
                            },
                            "all_reviews_count": 1519,
                            "photos_url": "https://www.zomato.com/ncr/the-potbelly-rooftop-cafe-shahpur-jat-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 2768,
                            "menu_url": "https://www.zomato.com/ncr/the-potbelly-rooftop-cafe-shahpur-jat-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/9/5229/7f7bda9ae20bb7e7fa385ea1e610d1cb.jpg",
                            "medio_provider": 1,
                            "has_online_delivery": 1,
                            "is_delivering_now": 1,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/5229",
                            "order_url": "https://www.zomato.com/ncr/the-potbelly-rooftop-cafe-shahpur-jat-new-delhi/order?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "order_deeplink": "",
                            "is_table_reservation_supported": 1,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/the-potbelly-rooftop-cafe-shahpur-jat-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "011 41612048, 011 49054549, +91 9811122764",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Quick Bites"
                            ],
                            "establishment_types": []
                        }
                    },
                    {
                        "restaurant": {
                            "R": {
                                "has_menu_status": {
                                    "delivery": 0,
                                    "takeaway": -1
                                },
                                "res_id": 8621,
                                "is_grocery_store": false
                            },
                            "apikey": "1a925bd3d2d1dedf236fe96cdb73fbe5",
                            "id": "8621",
                            "name": "Rose Cafe",
                            "url": "https://www.zomato.com/ncr/rose-cafe-saket-new-delhi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "location": {
                                "address": "2, Westend Marg, Saidulajab, Saket, New Delhi",
                                "locality": "Saket",
                                "city": "New Delhi",
                                "city_id": 1,
                                "latitude": "28.5178877015",
                                "longitude": "77.1984067932",
                                "zipcode": "110030",
                                "country_id": 1,
                                "locality_verbose": "Saket, New Delhi"
                            },
                            "switch_to_order_menu": 0,
                            "cuisines": "Cafe, Italian, Continental, Mediterranean, Salad, Beverages",
                            "timings": "12 Noon to 9 PM",
                            "average_cost_for_two": 1400,
                            "price_range": 3,
                            "currency": "Rs.",
                            "highlights": [
                                "Lunch",
                                "Cash",
                                "Takeaway Available",
                                "Credit Card",
                                "Debit Card",
                                "Dinner",
                                "Delivery",
                                "Board Games",
                                "Outdoor Seating",
                                "Free Wifi",
                                "Air Conditioned",
                                "Free Parking",
                                "Indoor Seating",
                                "Table booking recommended",
                                "Reopened",
                                "Vegan Options",
                                "All Day Breakfast"
                            ],
                            "offers": [],
                            "opentable_support": 0,
                            "is_zomato_book_res": 0,
                            "mezzo_provider": "OTHER",
                            "is_book_form_web_view": 0,
                            "book_form_web_view_url": "",
                            "book_again_url": "",
                            "thumb": "https://b.zmtcdn.com/data/pictures/1/8621/16562a0f06885536465a262311fcd6e2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                            "user_rating": {
                                "aggregate_rating": "4.3",
                                "rating_text": "Very Good",
                                "rating_color": "5BA829",
                                "rating_obj": {
                                    "title": {
                                        "text": "4.3"
                                    },
                                    "bg_color": {
                                        "type": "lime",
                                        "tint": "700"
                                    }
                                },
                                "votes": 3263
                            },
                            "all_reviews_count": 1940,
                            "photos_url": "https://www.zomato.com/ncr/rose-cafe-saket-new-delhi/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                            "photo_count": 4806,
                            "menu_url": "https://www.zomato.com/ncr/rose-cafe-saket-new-delhi/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                            "featured_image": "https://b.zmtcdn.com/data/pictures/1/8621/16562a0f06885536465a262311fcd6e2.jpg?output-format=webp",
                            "has_online_delivery": 1,
                            "is_delivering_now": 0,
                            "store_type": "",
                            "include_bogo_offers": true,
                            "deeplink": "zomato://restaurant/8621",
                            "is_table_reservation_supported": 0,
                            "has_table_booking": 0,
                            "events_url": "https://www.zomato.com/ncr/rose-cafe-saket-new-delhi/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                            "phone_numbers": "+91 9810088762, +91 9810101132",
                            "all_reviews": {
                                "reviews": [
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    },
                                    {
                                        "review": []
                                    }
                                ]
                            },
                            "establishment": [
                                "Café"
                            ],
                            "establishment_types": []
                        }
                    }
                ]
            }
            setRestaurants(restaurants);
        };
    
        searchRestaurantsFromCity();
        
    }, [])

    const search = () => {
        const searchRestaurantsFromCity = async () => {
            const restaurants = await searchRestaurants(query)
            setRestaurants(restaurants)
            setQuery('')
        }

        searchRestaurantsFromCity()
    }

    return (
        <div>
            <div className="search">
                <input value={query} placeholder="Type a City" onChange={e => setQuery(e.target.value)} />
                <button onClick={search} >Search Restaurant</button>
            </div>

            <div className="results">
                {
                    typeof(restaurants.results_found)
                }
                <br/> 
                <p>Results:</p>
                {
                    restaurants.restaurants?.map(
                        restaurant => 
                        <Card 
                            city = {restaurant.restaurant.location.city}
                            image = {restaurant.restaurant.thumb} 
                            name = {restaurant.restaurant.name}
                            currency = {restaurant.restaurant.currency}
                            cost = {restaurant.restaurant.price_range}
                            cuisines = {restaurant.restaurant.cuisines}
                            rating = {restaurant.restaurant.user_rating.aggregate_rating} 
                        ></Card>)
                }
            </div>
        </div>
    )
}

export default Zoomato