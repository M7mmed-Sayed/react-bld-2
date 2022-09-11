import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/HomePage/Card.css'
import Stars from '../Common/Stars'

function Card(props) {
    let data = props.data
 
    return (
        <div className="card-container">
            <Link to={`course/${data.id}`} className="link">
                <div>
                    <div className="image-container">
                        <img src={data.image} alt="ali" />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h3>{data.title}</h3>
                        </div>
                        <div className="card-body">
                            <h6>{data.author}</h6>
                            <div className="rate-container">
                                <Stars rating={data.rating}/>
                                
                                <h6 className="pepole">{`(${data.people})`}</h6>
                            </div>
                            <div className="price">
                                <h4>{'E£' + data.price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
