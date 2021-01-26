import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = ({el}) => {
    return (
        <div className="news-item">
            <div className="news-item__image">
                <img src={el.img} alt="one of the news"/>
            </div>
            <div className="news-item__date">{el.date}</div>
            <h2>{el.title}</h2>
            <p>{el.desc}</p>
            <Link to={`/news/${el.id}`} className="btn btn-primary">Читать далее</Link>
        </div>
    )
}

export default NewsItem
