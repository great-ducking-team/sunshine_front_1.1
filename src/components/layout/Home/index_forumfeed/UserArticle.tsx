import React from 'react';
import './forum-feed.css';

const UserArticle = ({ 
  username, 
  userAge, 
  title, 
  description, 
  articleImageUrl, 
  userAvatarUrl, 
  articleUrl 
}) => {

  return (
    <li className="forumFeed_articleUser">
      <a className="page_userArticle_link" href={articleUrl}>
        <img className="page_userArticle_img" src={articleImageUrl} alt={title} />
        <div className="forumFeed_article-userInfo"> 
          <img className="forumFeed_article-pfp" src={userAvatarUrl} alt={username} />
          <div className="forumFeed_article-userInfo-status">
            <div className="forumFeed_article-username">{username}</div>
            <div className="forumFeed_article-userAge">{userAge}</div>             
          </div>
        </div>
        <div className="forumFeed_articleUser-title">
          {title}
        </div>
        <div className="forumFeed_articleUser-desc">
          {description}
        </div>
      </a>
    </li>
  );
};

UserArticle.defaultProps = {
  username: 'rreplayer',
  userAge: '4 месяца на автосфере',
  title: 'Нулевое ТО :) BMW 530D G30',
  description: 'Вот и пришел этот долгожданный момент - g30 приехала и пора провести первую ТОшку. Из интересного, что стоит сразу отметить - расширительный бачок был установлен с браком, по крайней мере так',
  articleImageUrl: '../../../../assets/images/forum_plc_3.jpg',
  userAvatarUrl: '/src/img/pfp_user_3.png',
  articleUrl: 'https://sunshineauto.ru/forum/article/15044'
};

export default UserArticle;