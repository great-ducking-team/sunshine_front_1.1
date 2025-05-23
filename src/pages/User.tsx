import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import TabComponent from '../components/user_profile_tabs/TabComponent';
import HeadingBanner from '../assets/images/header_banner_a.jpg'
import BMWIcon from '../assets/images/BMWIcon.png'
import { mainPfp } from '../assets/images/images'
import { miniIconPro } from '../assets/icons/icons'

import './User.css'

const UserPageTabs = () => {
    const tabs = [
      {
        id: 'Обзор',
        label: 'Обзор',
        content: (
          <div className="tab-panel">
            <h1>Обзор</h1>
          </div>
        ),
      },
      {
        id: 'Гараж',
        label: 'Гараж',
        content: (
          <div className="tab-panel">
            <h1>Гараж</h1>
          </div>
        ),
      },
      {
        id: 'Избранное',
        label: 'Избранное',
        content: (
          <div className="tab-panel">
            <h1>Избранное</h1>
          </div>
        ),
      },
      {
        id: 'Форум',
        label: 'Форум',
        content: (
          <div className="tab-panel">
            <h1>Форум</h1>
          </div>
        ),
      },
    ];

    return (
    <div>
        <Header/>
        <main className="layout_page">
            <div className="banner">
                <img src={HeadingBanner} alt="" className="heading_banner" />
            </div>    
            <div className="hero_container">
                <div className="user_pfp_name_status">
                    <img src={mainPfp} alt="" className="heading_pfp" />
                    <div>
                        Разработчик
                    </div>
                    <img src={miniIconPro} alt="" className="pro_status" />
                </div>
                <div className="user_fav_stats">
                    <div className="user_driving_car">
                        <div className="user_driving_car_label">
                            Ездит на
                        </div>
                        <div className="user_driving_car_value">
                            Škoda Octavia A6
                        </div>
                    </div>
                    <div className="user_fav_maker">
                        <div className="user_fav_maker_label">
                            Любимая марка
                        </div>
                        <div className="user_fav_maker_value">
                            BMW
                            <img src={BMWIcon} alt="marka" className="user_fav_maker_value_img" />
                        </div>
                    </div>
                    <button className="user_edit_profile_button">
                        Редактировать
                    </button>
                </div>
            </div>
            <div className="hero_container">
                <TabComponent tabs={tabs} />
            </div>
            
        </main>
        <Footer/>
    </div>
    )
}

export default UserPageTabs;