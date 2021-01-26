import React, { useState } from 'react'
import NewsContext from './NewsContext'
import {v4} from 'uuid'
import news1 from '../../img/news1.jpg' // relative path to image 
import news2 from '../../img/news2.jpg' // relative path to image 
import news3 from '../../img/news3.jpg' // relative path to image 
import news4 from '../../img/news4.jpg' // relative path to image 
import news5 from '../../img/news5.jpg' // relative path to image 
import news6 from '../../img/news6.jpg' // relative path to image

const NewsState = (props) => {
    const [news, setNews] = useState([
        {id: v4(), img: news1, title: 'Last Fest фестиваль в Down Town', desc:'21 декабря | LAST FEST | Down Town Разные жанры, разные стили, но всех объединяет одно - любовь к музыке и желание передать часть собственной энергии искушённому слушателю) В общем готовьтесь, это будет высоковольтно!' },
        {id: v4(), img: news2, title: 'Last Fest фестиваль в Down Town', desc:'21 декабря | LAST FEST | Down Town Разные жанры, разные стили, но всех объединяет одно - любовь к музыке и желание передать часть собственной энергии искушённому слушателю) В общем готовьтесь, это будет высоковольтно!' },
        {id: v4(), img: news3, title: 'Last Fest фестиваль в Down Town', desc:'21 декабря | LAST FEST | Down Town Разные жанры, разные стили, но всех объединяет одно - любовь к музыке и желание передать часть собственной энергии искушённому слушателю) В общем готовьтесь, это будет высоковольтно!' },
        {id: v4(), img: news4, title: 'Last Fest фестиваль в Down Town', desc:'21 декабря | LAST FEST | Down Town Разные жанры, разные стили, но всех объединяет одно - любовь к музыке и желание передать часть собственной энергии искушённому слушателю) В общем готовьтесь, это будет высоковольтно!' },
        {id: v4(), img: news5, title: 'Last Fest фестиваль в Down Town', desc:'21 декабря | LAST FEST | Down Town Разные жанры, разные стили, но всех объединяет одно - любовь к музыке и желание передать часть собственной энергии искушённому слушателю) В общем готовьтесь, это будет высоковольтно!' },
        {id: v4(), img: news6, title: 'Last Fest фестиваль в Down Town', desc:'21 декабря | LAST FEST | Down Town Разные жанры, разные стили, но всех объединяет одно - любовь к музыке и желание передать часть собственной энергии искушённому слушателю) В общем готовьтесь, это будет высоковольтно!' }
    ])


 return (
     <NewsContext.Provider value={{
        news: news
     }
     }>
        {props.children}
     </NewsContext.Provider>
 )
}

export default NewsState