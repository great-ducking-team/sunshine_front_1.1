import React from 'react';
import './forum-feed.css';
import NewsImg from '../../../../assets/images/forum_plc_1.jpg';

const ForumArticle = ({ date, category, title, imageUrl, articleUrl }) => {
  return (
    <li className="forumFeed_articleNews">
      <a className="page_article_link" href={articleUrl}>
        {/* Используем переданный imageUrl или дефолтное изображение */}
        <img 
          className="forumFeed_articleNewsIMG" 
          src={imageUrl || NewsImg} 
          alt={title} 
        />
        <div className="forumFeed_articleNews_dataSRC">
          <div className="forumFeed_articleNews_date">{date}</div>
          <div className="forumFeed_articleNews_category">{category}</div>
        </div>
        <div className="forumFeed_articleNews_Title">
          {title}
        </div>
      </a>
    </li>
  );
};

ForumArticle.defaultProps = {
  date: '21 января 2025',
  category: 'Лента',
  title: 'Эти запреты ПДД больше не смогут избегать самокатчики. Полный разбор',
  imageUrl: NewsImg,
  articleUrl: 'https://sunshineauto.ru/forum/article/1010'
};

export default ForumArticle;