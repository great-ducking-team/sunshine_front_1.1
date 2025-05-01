import './listing.css';
import Stars from '../assets/icons/listing_stars.svg';
import StatsHeader from '../assets/icons/listing_stats_header.svg'
import StatsFooter from '../assets/icons/listing_stats_footer.svg'
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import ProductList2 from '../components/item_card/ProductList 2'
import Breadcrumbs from '../components/layout/listing/breadcrumbs/Breadcrumbs';
import ImageGrid from '../components/layout/listing/Images/Images'
import PricingBlock from '../components/layout/listing/Pricing_block/PricingBlock'
import Tags from '../components/layout/listing/Suggestion_tags/Tags'
import { Star } from '@mui/icons-material';

const Listing = () => {
  const breadcrumbsItems = [
    { title: 'Привезти машину', url: '/import', id: 'import' },
    { title: 'Volkswagen', url: '/import/volkswagen', id: 'volkswagen' },
    { title: 'Golf', url: '/import/volkswagen/golf', id: 'golf' },
    { title: 'VII поколение, рестайлинг', url: '/import/volkswagen/golf/7-restyling', id: 'generation' },
    { title: 'Хетчбек', url: '/import/volkswagen/golf/7-restyling/hatchback', id: 'body-type' },
    { title: 'Привезти из Китая', id: 'china' },
  ];

  const handleBreadcrumbClick = (item, index) => {
    // Обработка клика по элементу хлебных крошек
    console.log('Clicked:', item);
    // Можно реализовать навигацию, фильтрацию и т.д.
  };

  return (
    <div>
      <Header/>
      <main className="layout_page">
        <div className="index_page">
          <Breadcrumbs items={breadcrumbsItems} onItemClick={handleBreadcrumbClick} />
          <Tags/>
          <div className='publish__grid'>
            <ImageGrid/>
            <PricingBlock/>
          </div>
          <div className="basic_info">
            <h1 className='vehicle_name_header'>
              Volkswagen Golf, 2024
            </h1>
            <img src={Stars}/>
            <div>
              <u className="about_car">
                о машине
              </u>
            </div>
          </div>
          <img src={StatsHeader}/>
          <img src={StatsFooter}/>
          <div>
            <h1 className="user_feed_header">
              Похожие предложения
            </h1>
          </div>
          <ProductList2/>
          <Footer/>
        </div>
      </main>
    </div>
  );
};

export default Listing; // Исправленная строка экспорта