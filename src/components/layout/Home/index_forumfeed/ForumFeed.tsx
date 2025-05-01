import React from 'react';
import './forum-feed.css';
import ForumArticle from './ForumArticle';
import ForumSection from './ForumSection';
import UserArticle from './UserArticle';
import NewsImg from '../../../../assets/images/forum_plc_1.jpg';
import ArticleImg from '../../../../assets/images/forum_plc_4.jpg';
import UserPfp from '../../../../assets/images/pfp_user_3.png';

const ForumFeed = () => {
  return (
    <div className="index_userFeed_forum">
      <a className="forum_link" href="https://sunshineauto.ru/forum">
        <img className="forum_logo" src="/src/icons/autosphere_logo.svg" alt="Forum Logo" />
      </a>
      <ul className="forumFeed_items">
        <ForumArticle 
            date="25 апреля 2025"
            category="Новости"
            title="Эти запреты ПДД больше не смогут избегать самокатчики. Полный разбор"
            imageUrl={NewsImg}
            articleUrl="/article/123"
        />
        
        <ForumSection 
          isPro={true}
          title="Sunshine PRO"
          lastMessage="03:17"
          onlineCount={12}
          iconColor="white"
          sectionUrl="https://sunshineauto.ru/forum/article/1"
        />
        
        <ForumSection 
          isPro={false}
          title="Зарубежные-авто"
          lastMessage="01:44"
          onlineCount={44}
          iconColor="green"
          sectionUrl="https://sunshineauto.ru/forum/article/11233"
        />
        
        <UserArticle 
            username='rreplayer'
            userAge='4 месяца на автосфере'
            title='Нулевое ТО :) BMW 530D G30'
            description='Вот и пришел этот долгожданный момент - g30 приехала и пора провести первую ТОшку. Из интересного, что стоит сразу отметить - расширительный бачок был установлен с браком, по крайней мере так'
            articleImageUrl={ArticleImg}
            userAvatarUrl={UserPfp}
            articleUrl='https://sunshineauto.ru/forum/article/15044'
        />
      </ul>
    </div>
  );
};

export default ForumFeed;