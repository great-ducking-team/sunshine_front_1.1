import React from 'react';
import './forum-feed.css';

const ForumSection = ({ 
  isPro = false, 
  title, 
  lastMessage, 
  onlineCount, 
  iconColor = 'white', 
  sectionUrl 
}) => {
  return (
    <li className={isPro ? "forumFeed_forumSection" : "forumFeed_forumSection_def"}>
      <a className="page_forum_link" href={sectionUrl}>
        <div className="forumFeed_sunshinePRO">
          <div className="forumFeed_sunshinePRO_header">
            {isPro && <img className="pro_lightBoltImg" src="/src/icons/sunshine_bolt_white.svg" alt="PRO" />}
            <div className={isPro ? "forumFeed_sunshinePRO_STATUS-SUB" : "forumFeed_sunshine_title"}>
              {title}
            </div>
          </div>
          <div className={isPro ? "forumFeed_sunshinePRO_LM" : "forumFeed_sunshine_LM"}>
            Последнее сообщение: {lastMessage}
          </div>
        </div>
        <div className="forumFeed_onlineCounter">
          <img 
            className="forumFeed_onlineCounter_img" 
            src={`/src/icons/stickman_icon_${iconColor}.svg`} 
            alt="Online" 
          />
          <div className={`forumFeed_onlineCounter_text_${isPro ? 'a' : 'b'}`}>
            {onlineCount}
          </div>
        </div>
      </a>
    </li>
  );
};

export default ForumSection;