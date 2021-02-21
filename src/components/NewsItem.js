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
            <Link to={`/single-page-app/news/${el.id}`} className="btn btn-primary"
            style={{boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}
            >Читать далее</Link>
        </div>
    )
}

export default NewsItem
