import React, { useState, useRef } from "react";
import "./favorite-popup.css";
import ArrowRight from '../../../../../assets/icons/arrow_pointing_right_thin.svg'
import MiniPfp from '../../../../../assets/images/pfp_user_3.png'
import OnlineMarker from '../../../../../assets/icons/online_marker.svg'
import RedCircle from '../../../../../assets/icons/color_car_selection_red.svg'

const FavoritePopup = () => {

return (
    <div>
        <div className="favorite_popup_body">
            <div className="favorite_popup_header">
                <h1 className="favorite_popup_header_label">
                    Избранное
                </h1>
            </div>
            {/* <div className="favorite_popup_favorites_aligner">
                <div className="favorite_popup_favoritebox">
                        
                </div>
            </div> */}
        </div>
    </div>
)
}

export default FavoritePopup;
