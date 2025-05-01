import React, { useState, useRef } from "react";
import "./pricing-block.css";
import ArrowRight from './images/arrow_line_pointing_right_thin.svg';
import CompareBtn from './images/listing_compare.svg';
import ReportBtn from './images/listing_report.svg';
import ShareBtn from './images/listing_share.svg';
import UnfavBtn from './images/listing_unfav.svg';
import Clock from './images/clock.svg'
import TruckEta from './images/truck_ETA_thin.svg';
import Checkmark from './images/verified_user.svg';
import { miniPfp } from "../../../../assets/images/images";


const PricingBlock = () => {

return (
    <div className="block_body">
        <div className="price_and_fav">
            <div className="price_block">
                <div className="price_block_element">
                    ₽ 3 200 000
                </div>
            </div>
                <svg
                width="32" 
                height="32" 
                fill={"none"} 
                stroke={"#FFA30F"} 
                strokeWidth="2"
                >
                    <path 
                        d="M17.2459 3.87743L19.5337 8.49074C19.8456 9.13293 20.6775 9.74891 21.3795 9.86687L25.526 10.5615C28.1777 11.0071 28.8016 12.9468 26.8909 14.8602L23.6672 18.1105C23.1213 18.661 22.8223 19.7226 22.9913 20.4827L23.9142 24.5062C24.6421 27.691 22.9653 28.923 20.1706 27.2585L16.284 24.9387C15.5821 24.5194 14.4252 24.5194 13.7103 24.9387L9.82375 27.2585C7.04205 28.923 5.35224 27.6779 6.08016 24.5062L7.00306 20.4827C7.17204 19.7226 6.87307 18.661 6.32713 18.1105L3.10349 14.8602C1.2057 12.9468 1.81663 11.0071 4.46834 10.5615L8.61488 9.86687C9.3038 9.74891 10.1357 9.13293 10.4477 8.49074L12.7354 3.87743C13.9833 1.37419 16.0111 1.37419 17.2459 3.87743Z"
                    />
                </svg>
        </div>
        <div className="msrp_tag">
            Рыночная цена!
        </div>
        <div className="suggest_price">
            Или предложите свою цену:
        </div>
        <div className="price_input_area">
            <input className="price_input_field" type="text" />
            <button className="price_input_button">
                {'>'}
            </button>
        </div>
        <ul className="car_stats_list">
            <li className="car_stats_param">
                <div className="stats_list_label_a">Пробег</div>        
                <div className="dot"></div>
                <div className="stats_list_label_b">52 699 км</div>
            </li>
            <li className="car_stats_param">
                <div className="stats_list_label_a">Владельцы</div>        
                <div className="dot"></div>
                <div className="stats_list_label_b">2 владельца</div>
            </li>
            <li className="car_stats_param">
                <div className="stats_list_label_a">Состояние</div>        
                <div className="dot"></div>
                <div className="stats_list_label_b">не требует ремонта</div>
            </li>
            <li className="car_stats_param">
                <div className="stats_list_label_a">Участие в дтп</div>        
                <div className="dot"></div>
                <div className="stats_list_label_b">1 случай</div>
            </li>
        </ul>
        <div className="eta_info">
            <div className="eta_date">
                До 30 дней
            </div>
            <img src={ArrowRight} alt="point-right" className="img_arrow_right" />
            <img src={TruckEta} alt="truck" className="truck_eta" />
            <div>
                <u>
                    ?
                </u>
            </div>
        </div>
        <div className="delivery_status">
            <div className="delivery_status_label">
                Привозит сам
            </div>
            <div>
                <u>
                    ?
                </u>
            </div>
        </div>
        <div className="user_infoblock">
            <img src={miniPfp} alt="" className="user_pfp" />
            <div className="user_info">
                <div className="user_info_upper">
                    <div className="user_name">
                        Дмитрий
                    </div>
                    <div className="user_status">
                        <img src={Checkmark} alt="" className="verified" />
                    </div>
                </div>
                <div className="user_stats">
                    13 объявлений · 2 года на сайте
                </div>
            </div>
        </div> 
        <div className="contact_buttons">
            <button className="button_message">
                Написать
            </button>
            <button className="button_call">
                Позвонить
            </button>
        </div> 
        <div className="user_notes">
            <img src={Clock} alt="" className="clock" />
            <div className="user_note_status">
                Продавец быстро отвечает
            </div>
        </div>
        <div className="control_panel_cluster">
            <button className="control_panel_button">
                <img src={CompareBtn} alt="" className="control_panel_button_icon" />
            </button>
            <button className="control_panel_button">
                <img src={ShareBtn} alt="" className="control_panel_button_icon" />
            </button>
            <button className="control_panel_button">
                <img src={UnfavBtn} alt="" className="control_panel_button_icon" />
            </button>
            <button className="control_panel_button">
                <img src={ReportBtn} alt="" className="control_panel_button_icon" />
            </button>
        </div>  
    </div>
)
}

export default PricingBlock;
