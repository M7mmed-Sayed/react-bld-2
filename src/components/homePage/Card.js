import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/HomePage/Card.css'
import Stars from '../Common/Stars'
import * as Icon from 'react-bootstrap-icons'

function Card({course}) {
    const { id,link, title, author, image, price, rating, people } = course
    return (
        <div className="card-container">
            <Link to={`course/${id}`} className="link">
                <div className="d-block">
                    <div className="image-container">
                        <img src={image} alt="ali" />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="card-body">
                            <h6>{author}</h6>
                            <div className="rate-container">
                                <Stars rating={rating} />

                                <h6 className="pepole">{`(${people})`}</h6>
                            </div>
                            <div className="price">
                                <h4>{'E£' + price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div class="info-back">
                <h4>{title}</h4>
                <h4 className='date-hover'>{'Updated September 2019'}</h4>
                <div >{'2.5 total . hoursAll. LevelsSubtitles'}</div>
                <h5>
                    {
                        'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!'
                    }
                </h5>
                <ul className="list">
                    <li>
                        <Icon.Check />
                        Create their own Python Programs
                    </li>
                    <li>
                        <Icon.Check />
                        Become an experienced Python Programmer
                    </li>
                    <li>
                        <Icon.Check />
                        Parse the Web and Create their own Games
                    </li>
                </ul>
                <div className="d-flex row hover">
                    <button type="button" className="btn-danger">
                        <span>Add To Card</span>
                    </button>
                    <button
                        type="button"
                        className="btn-circle btn-sm"
                    >
                    <Icon.Heart />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
