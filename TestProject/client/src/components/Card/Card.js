import React, { useState } from "react";
import './Card.scss';
import { FaStar } from 'react-icons/fa'

const Card = (props) => {

    const { card } = props;

    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null);
    return (
        <>
            <div className="card-item">
                <div className="item">
                    <a href="/detail">
                        <header>
                            <span className='title-card'>{card.name}</span>
                            <span>
                                {[...Array(3)].map((star, i) => {

                                    const ratingValue = i + 1;

                                    return (
                                        <label key={i}>
                                            <input
                                                type='radio'
                                                name='rating'
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            <FaStar
                                                className='star'
                                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        </label>
                                    )
                                })}
                            </span>
                        </header>
                    </a>

                    {card.image &&
                        <img className="card-cover" src={card.image}
                            onMouseDown={event => event.preventDefault()}
                        />
                    }
                    <span><i className="fa fa-circle icon"></i>
                        {card.project_id[1]}
                    </span>
                    <span><i className="fa fa-circle icon"></i>
                        {card.user_id[1]}
                    </span>
                    <div>
                        <span>
                            <a className="fa fa-paper-plane-o" href="/next"></a>
                        </span>
                        <span>
                            <a className="fa fa-check-square-o" href="/check"></a>
                        </span>
                        <span className="avatar fa fa-circle"></span>
                        <span className="avatars fa fa-angle-right"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;