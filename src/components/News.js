import React, { useContext, useEffect } from 'react' 
import NewsItem from './NewsItem'
import NewsContext from '../context/news/NewsContext'


const News = () => {

    const {news} = useContext(NewsContext)

     useEffect(() => {
         document.querySelector('body').classList.add('news-page');

        return () => {
        document.querySelector('body').classList.remove('news-page'); 
        }
    }, [])

    return (
        <main className="news-page__main container">
            <section className="news-wrapper">
                <div className="news">
                {news.length > 0 && news.map(el => {
                    return <NewsItem key={el.id} el={el}/>

                })}
                </div>

            </section>
        </main>
    )
}

export default News
