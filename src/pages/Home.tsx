import { Link } from 'react-router-dom'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'
import Configurator from '../components/layout/Home/index_configurator/Configurator'
import ProductList from '../components/item_card/ProductList'
import ForumFeed from '../components/layout/Home/index_forumfeed/ForumFeed'
import './Home.css'

export default function Home() {
  return (
    <div> 
      <Header/>
      <main className="layout_page">
        <div className="index_page">
          <div className="page_title">
            <div className="page_title_headers">
              <h1 className="page_title_h1"><u className="underline">24565</u> объявлений.</h1>
              <h1 className="page_title_h1">Привезти ваш автомобиль - наша главная задача</h1>
            </div>
            <div className="page_title_link">
              <Link to="#" className="page_titleHowTo_link">
                <u>почему выбирают sunshine?</u>
              </Link>   
            </div>
          </div>
          <div className="index_platform">
            <div className="index_leftBar">
              <Configurator/>
              <div className="page_feed_title">
                <div className="feed_title">
                  Подборка
                </div>
              </div>
                <ProductList/>
                {/* <div className='index-updateFeed'>
                  <button className='updateFeedButton'>
                    Обновить подборку
                  </button>
                </div> */}
            </div>
            <div className="index_rightBar">
              <ForumFeed/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}