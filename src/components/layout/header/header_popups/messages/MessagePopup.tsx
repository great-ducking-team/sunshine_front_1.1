import React, { useState, useRef } from "react";
import "./message-popup.css";
import ArrowRight from '../../../../../assets/icons/arrow_pointing_right_thin.svg'
import MiniPfp from '../../../../../assets/images/pfp_user_3.png'
import OnlineMarker from '../../../../../assets/icons/online_marker.svg'
import RedCircle from '../../../../../assets/icons/color_car_selection_red.svg'

const MessagePopup = () => {

return (
    <div>
        <div className="message_popup_body">
            <div className="message_popup_header">
                <h1 className="message_popup_header_label">
                    Все сообщения
                </h1>
                
            </div>
            <div className="message_popup_messages_aligner">
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Дмитрий
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Дмитрий
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Серега
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Дмитрий
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Дмитрий
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Дмитрий
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
                <div className="message_popup_messagebox">
                        <img src={MiniPfp} alt="user-profile-picture" className="message_popup_userpfp" />
                        <div className="message_user_context">
                            <div className="message_user_context_a">
                                <div className="message_user_context_name">
                                    Дмитрий
                                </div>
                                <div className="message_user_context_onlineStatus">
                                    <img src={OnlineMarker} alt="" className="message_online_icon" />
                                </div>
                                <div className="messages_user_last_time">
                                    19:36
                                </div>
                            </div>
                            <div className="message_user_context_b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut tempora nobis quisquam, obcaecati aut dolorum ipsam enim minima, at voluptas veniam voluptatem quo totam doloribus adipisci animi cupiditate? Vero!
                            </div>
                        </div>
                        <div className="last_online_aligner">
                            <div className="message_popup_unread">
                                6
                            </div>
                            <img src={RedCircle} alt="" className="last_online_redCircle" />
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default MessagePopup;
