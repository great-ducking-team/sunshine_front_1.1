import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index-configurator.css';

import ColorWhite from '../../../../assets/images/color_car_selection_white.png'
import ColorBlack from '../../../../assets/images/color_car_selection_black.png'
import ColorGray from '../../../../assets/images/color_car_selection_gray.png'
import ColorSilver from '../../../../assets/images/color_car_selection_silver.png'
import ColorRed from '../../../../assets/images/color_car_selection_red.png'
import ColorBlue from '../../../../assets/images/color_car_selection_blue.png'
import ColorGreen from '../../../../assets/images/color_car_selection_green.png'
import FlagDE from '../../../../assets/icons/DE_FLAG.svg'


//добавляем фотки машин
import turbo_gt_001 from './configurator_images/turbo_gt_001.jpg'
import turbo_gt_002 from './configurator_images/turbo_gt_002.jpg'
import turbo_gt_003 from './configurator_images/turbo_gt_003.jpg'
import taycan_turbo_gt_001 from './configurator_images/taycan_turbo_gt_001.jpg'
import taycan_turbo_gt_002 from './configurator_images/taycan_turbo_gt_002.jpg'
import taycan_turbo_gt_003 from './configurator_images/taycan_turbo_gt_003.jpg'
import p991_001 from './configurator_images/p991_001.jpg'
import p991_002 from './configurator_images/p991_002.jpg'
import p991_003 from './configurator_images/p991_003.jpg'
import p992_001 from './configurator_images/p992_001.jpg'
import p992_002 from './configurator_images/p992_002.jpg'
import x5m_001 from './configurator_images/x5m_001.jpg'
import x5m_002 from './configurator_images/x5m_002.jpg'
import m5c_001 from './configurator_images/m5c_001.jpg'
import m5c_002 from './configurator_images/m5c_002.jpg'
import g63_001 from './configurator_images/g63_001.jpg'
import g63_002 from './configurator_images/g63_002.jpg'
import g63_003 from './configurator_images/g63_003.jpg'
import g63_004 from './configurator_images/g63_004.jpg'
import s63_001 from './configurator_images/s63_001.jpg'
import s63_002 from './configurator_images/s63_002.jpg'
import s63_003 from './configurator_images/s63_003.jpg'
import rsq8_001 from './configurator_images/rsq8_001.jpg'
import rsq8_002 from './configurator_images/rsq8_002.jpg'
import rsq8_003 from './configurator_images/rsq8_003.jpg'
import rsq8_004 from './configurator_images/rsq8_004.jpg'
import rs6_001 from './configurator_images/rs6_001.jpg'
import rs6_002 from './configurator_images/rs6_002.jpg'
import lx600_001 from './configurator_images/lx600_001.jpg'
import lx600_002 from './configurator_images/lx600_002.jpg'
import lx600_003 from './configurator_images/lx600_003.jpg'

const Configurator = () => {
  // Данные автомобилей
  const [cars, setCars] = useState([
    {
      id: 1,
      link: "https://sunshineauto.ru/vehicle/1",
      image: turbo_gt_001,
      brand: "Porsche",
      model: "Cayenne Turbo GT",
      generation: "III Рестайлинг (2024-2025)",
      mileage: "5 200 км",
      year: 2024,
      engine: { displacement: "4.0", horsepower: "650", fuelType: "БЕНЗИН" },
      price: "21 900 000",
      country: { code: "SK", name: "Корея" },
      color: { name: "Серый", image: ColorGray },
      isNew: true
    },
    {
      id: 2,
      link: "https://sunshineauto.ru/vehicle/2",
      image: turbo_gt_002,
      brand: "Porsche",
      model: "Cayenne Turbo GT",
      generation: "III Поколение (2018-2023)",
      mileage: "23 750 км",
      year: 2022,
      engine: { displacement: "4.0", horsepower: "640", fuelType: "БЕНЗИН" },
      price: "16 500 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Черный", image: ColorBlack },
      isNew: false
    },
    {
      id: 3,
      link: "https://sunshineauto.ru/vehicle/3",
      image: turbo_gt_003,
      brand: "Porsche",
      model: "Cayenne Turbo GT",
      generation: "III Поколение (2018-2023)",
      mileage: "18 430 км",
      year: 2021,
      engine: { displacement: "4.0", horsepower: "640", fuelType: "БЕНЗИН" },
      price: "15 800 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Белый", image: ColorWhite },
      isNew: false
    },
  
    // Porsche 911 Turbo S (3 варианта)
    {
      id: 4,
      link: "https://sunshineauto.ru/vehicle/4",
      image: p991_001,
      brand: "Porsche",
      model: "911 Turbo S",
      generation: "992 (2019-2023)",
      mileage: "12 340 км",
      year: 2022,
      engine: { displacement: "3.8", horsepower: "650", fuelType: "БЕНЗИН" },
      price: "18 750 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Красный", image: ColorRed },
      isNew: false
    },
    {
      id: 5,
      link: "https://sunshineauto.ru/vehicle/5",
      image: p991_002,
      brand: "Porsche",
      model: "911 Turbo S",
      generation: "991.2 (2016-2019)",
      mileage: "32 150 км",
      year: 2018,
      engine: { displacement: "3.8", horsepower: "580", fuelType: "БЕНЗИН" },
      price: "12 300 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Серый", image: ColorGray },
      isNew: false
    },
    {
      id: 6,
      link: "https://sunshineauto.ru/vehicle/6",
      image: p991_003,
      brand: "Porsche",
      model: "911 Turbo S",
      generation: "992 (2019-2023)",
      mileage: "8 900 км",
      year: 2023,
      engine: { displacement: "3.8", horsepower: "650", fuelType: "БЕНЗИН" },
      price: "19 500 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Синий", image: ColorBlue },
      isNew: true
    },
  
    // Porsche Taycan Turbo (3 варианта)
    {
      id: 7,
      link: "https://sunshineauto.ru/vehicle/7",
      image: taycan_turbo_gt_001,
      brand: "Porsche",
      model: "Taycan Turbo",
      generation: "I Поколение (2019-2023)",
      mileage: "6 780 км",
      year: 2023,
      engine: { displacement: "0", horsepower: "680", fuelType: "ЭЛЕКТРО" },
      price: "17 200 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Черный", image: ColorBlack },
      isNew: true
    },
    {
      id: 8,
      link: "https://sunshineauto.ru/vehicle/8",
      image: taycan_turbo_gt_002,
      brand: "Porsche",
      model: "Taycan Turbo",
      generation: "I Поколение (2019-2023)",
      mileage: "15 230 км",
      year: 2021,
      engine: { displacement: "0", horsepower: "680", fuelType: "ЭЛЕКТРО" },
      price: "14 800 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Белый", image: ColorWhite },
      isNew: false
    },
    {
      id: 9,
      link: "https://sunshineauto.ru/vehicle/9",
      image: taycan_turbo_gt_003,
      brand: "Porsche",
      model: "Taycan Turbo",
      generation: "I Поколение (2019-2023)",
      mileage: "9 450 км",
      year: 2022,
      engine: { displacement: "0", horsepower: "680", fuelType: "ЭЛЕКТРО" },
      price: "15 900 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Серый", image: ColorGray },
      isNew: false
    },
  
    // BMW X5 M (2 варианта)
    {
      id: 10,
      link: "https://sunshineauto.ru/vehicle/10",
      image: x5m_001,
      brand: "BMW",
      model: "X5 M",
      generation: "F95 (2020-2023)",
      mileage: "28 900 км",
      year: 2021,
      engine: { displacement: "4.4", horsepower: "625", fuelType: "БЕНЗИН" },
      price: "12 400 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Синий", image: ColorBlue },
      isNew: false
    },
    {
      id: 11,
      link: "https://sunshineauto.ru/vehicle/11",
      image: x5m_002,
      brand: "BMW",
      model: "X5 M",
      generation: "F95 (2020-2023)",
      mileage: "15 600 км",
      year: 2022,
      engine: { displacement: "4.4", horsepower: "625", fuelType: "БЕНЗИН" },
      price: "13 800 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Черный", image: ColorBlack },
      isNew: false
    },
  
    // BMW M5 Competition (2 варианта)
    {
      id: 12,
      link: "https://sunshineauto.ru/vehicle/12",
      image: m5c_001,
      brand: "BMW",
      model: "M5 Competition",
      generation: "F90 (2017-2023)",
      mileage: "34 200 км",
      year: 2020,
      engine: { displacement: "4.4", horsepower: "625", fuelType: "БЕНЗИН" },
      price: "10 900 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Серый", image: ColorGray },
      isNew: false
    },
    {
      id: 13,
      link: "https://sunshineauto.ru/vehicle/13",
      image: m5c_002,
      brand: "BMW",
      model: "M5 Competition",
      generation: "F90 (2017-2023)",
      mileage: "12 300 км",
      year: 2023,
      engine: { displacement: "4.4", horsepower: "625", fuelType: "БЕНЗИН" },
      price: "14 200 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Белый", image: ColorWhite },
      isNew: true
    },
  
    // Mercedes-Benz G 63 AMG (4 варианта)
    {
      id: 14,
      link: "https://sunshineauto.ru/vehicle/14",
      image: g63_001,
      brand: "Mercedes-Benz",
      model: "G 63 AMG",
      generation: "W463 (2018-2023)",
      mileage: "9 800 км",
      year: 2023,
      engine: { displacement: "4.0", horsepower: "585", fuelType: "БЕНЗИН" },
      price: "23 500 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Черный", image: ColorBlack },
      isNew: true
    },
    {
      id: 15,
      link: "https://sunshineauto.ru/vehicle/15",
      image: g63_002,
      brand: "Mercedes-Benz",
      model: "G 63 AMG",
      generation: "W463 (2018-2023)",
      mileage: "22 400 км",
      year: 2021,
      engine: { displacement: "4.0", horsepower: "585", fuelType: "БЕНЗИН" },
      price: "20 100 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Белый", image: ColorWhite },
      isNew: false
    },
    {
      id: 16,
      link: "https://sunshineauto.ru/vehicle/16",
      image: g63_003,
      brand: "Mercedes-Benz",
      model: "G 63 AMG",
      generation: "W463 (2018-2023)",
      mileage: "18 700 км",
      year: 2022,
      engine: { displacement: "4.0", horsepower: "585", fuelType: "БЕНЗИН" },
      price: "21 300 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Серый", image: ColorGray },
      isNew: false
    },
    {
      id: 17,
      link: "https://sunshineauto.ru/vehicle/17",
      image: g63_004,
      brand: "Mercedes-Benz",
      model: "G 63 AMG",
      generation: "W463 (2018-2023)",
      mileage: "32 100 км",
      year: 2020,
      engine: { displacement: "4.0", horsepower: "585", fuelType: "БЕНЗИН" },
      price: "18 700 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Красный", image: ColorRed },
      isNew: false
    },
  
    // Mercedes-Benz S 63 AMG (3 варианта)
    {
      id: 18,
      link: "https://sunshineauto.ru/vehicle/18",
      image: s63_001,
      brand: "Mercedes-Benz",
      model: "S 63 AMG",
      generation: "W223 (2020-2023)",
      mileage: "7 650 км",
      year: 2023,
      engine: { displacement: "4.0", horsepower: "612", fuelType: "БЕНЗИН" },
      price: "25 800 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Черный", image: ColorBlack },
      isNew: true
    },
    {
      id: 19,
      link: "https://sunshineauto.ru/vehicle/19",
      image: s63_002,
      brand: "Mercedes-Benz",
      model: "S 63 AMG",
      generation: "W223 (2020-2023)",
      mileage: "14 300 км",
      year: 2022,
      engine: { displacement: "4.0", horsepower: "612", fuelType: "БЕНЗИН" },
      price: "23 200 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Серебро", image: ColorSilver },
      isNew: false
    },
    {
      id: 20,
      link: "https://sunshineauto.ru/vehicle/20",
      image: s63_003,
      brand: "Mercedes-Benz",
      model: "S 63 AMG",
      generation: "W223 (2020-2023)",
      mileage: "9 100 км",
      year: 2022,
      engine: { displacement: "4.0", horsepower: "612", fuelType: "БЕНЗИН" },
      price: "24 000 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Синий", image: ColorBlue },
      isNew: false
    },
  
    // Audi RS Q8 (4 варианта)
    {
      id: 21,
      link: "https://sunshineauto.ru/vehicle/21",
      image: rsq8_001,
      brand: "Audi",
      model: "RS Q8",
      generation: "I Поколение (2019-2023)",
      mileage: "11 200 км",
      year: 2023,
      engine: { displacement: "4.0", horsepower: "600", fuelType: "БЕНЗИН" },
      price: "15 300 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Серый", image: ColorGray },
      isNew: true
    },
    {
      id: 22,
      link: "https://sunshineauto.ru/vehicle/22",
      image: rsq8_002,
      brand: "Audi",
      model: "RS Q8",
      generation: "I Поколение (2019-2023)",
      mileage: "24 500 км",
      year: 2021,
      engine: { displacement: "4.0", horsepower: "600", fuelType: "БЕНЗИН" },
      price: "13 700 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Черный", image: ColorBlack },
      isNew: false
    },
    {
      id: 23,
      link: "https://sunshineauto.ru/vehicle/23",
      image: rsq8_003,
      brand: "Audi",
      model: "RS Q8",
      generation: "I Поколение (2019-2023)",
      mileage: "16 800 км",
      year: 2022,
      engine: { displacement: "4.0", horsepower: "600", fuelType: "БЕНЗИН" },
      price: "14 500 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Синий", image: ColorBlue },
      isNew: false
    },
    {
      id: 24,
      link: "https://sunshineauto.ru/vehicle/24",
      image: rsq8_004,
      brand: "Audi",
      model: "RS Q8",
      generation: "I Поколение (2019-2023)",
      mileage: "8 900 км",
      year: 2023,
      engine: { displacement: "4.0", horsepower: "600", fuelType: "БЕНЗИН" },
      price: "15 800 000",
      country: { code: "DE", name: "Германия" },
      color: { name: "Зеленый", image: ColorGreen },
      isNew: true
    },
  
    // Lexus LX 600 (3 варианта)
    {
      id: 25,
      link: "https://sunshineauto.ru/vehicle/25",
      image: lx600_001,
      brand: "Lexus",
      model: "LX 600",
      generation: "I Поколение (2021-2023)",
      mileage: "6 500 км",
      year: 2023,
      engine: { displacement: "3.5", horsepower: "415", fuelType: "БЕНЗИН" },
      price: "12 500 000",
      country: { code: "JP", name: "Япония" },
      color: { name: "Белый", image: ColorWhite },
      isNew: true
    },
    {
      id: 26,
      link: "https://sunshineauto.ru/vehicle/26",
      image: lx600_002,
      brand: "Lexus",
      model: "LX 600",
      generation: "I Поколение (2021-2023)",
      mileage: "11 200 км",
      year: 2022,
      engine: { displacement: "3.5", horsepower: "415", fuelType: "БЕНЗИН" },
      price: "11 800 000",
      country: { code: "JP", name: "Япония" },
      color: { name: "Черный", image: ColorBlack },
      isNew: false
    },
    {
      id: 27,
      link: "https://sunshineauto.ru/vehicle/27",
      image: lx600_003,
      brand: "Lexus",
      model: "LX 600",
      generation: "I Поколение (2021-2023)",
      mileage: "8 300 км",
      year: 2023,
      engine: { displacement: "3.5", horsepower: "415", fuelType: "БЕНЗИН" },
      price: "12 200 000",
      country: { code: "JP", name: "Япония" },
      color: { name: "Серый", image: ColorGray },
      isNew: true
    }

  ]);

  // Данные для выпадающих списков
  const [carData, setCarData] = useState({
    brands: [
      { id: 1, name: "Porsche" },
      { id: 2, name: "BMW" },
      { id: 3, name: "Mercedes-Benz" },
      { id: 4, name: "Audi" },
      { id: 5, name: "Lexus" }
    ],
    models: [
      { id: 1, brandId: 1, name: "Cayenne Turbo GT" },
      { id: 2, brandId: 1, name: "911 Turbo S" },
      { id: 3, brandId: 1, name: "Taycan Turbo" },
      { id: 4, brandId: 2, name: "X5 M" },
      { id: 5, brandId: 2, name: "M5 Competition" },
      { id: 6, brandId: 3, name: "G 63 AMG" },
      { id: 7, brandId: 3, name: "S 63 AMG" },
      { id: 8, brandId: 4, name: "RS Q8" },
      { id: 9, brandId: 4, name: "RS 6" },
      { id: 10, brandId: 5, name: "LX 600" }
    ],
    generations: [
      { id: 1, modelId: 1, name: "III Рестайлинг (2024-2025)" },
      { id: 2, modelId: 1, name: "III Поколение (2018-2023)" },
      { id: 3, modelId: 2, name: "992 (2019-2023)" },
      { id: 4, modelId: 2, name: "991.2 (2016-2019)" },
      { id: 5, modelId: 3, name: "I Поколение (2019-2023)" },
      { id: 6, modelId: 4, name: "F95 (2020-2023)" },
      { id: 7, modelId: 5, name: "F90 (2017-2023)" },
      { id: 8, modelId: 6, name: "W463 (2018-2023)" },
      { id: 9, modelId: 7, name: "W223 (2020-2023)" },
      { id: 10, modelId: 8, name: "I Поколение (2019-2023)" }
    ]
  });

  // Состояние фильтров
  const [filters, setFilters] = useState({
    selectedCar: {
      brand: { id: 1, name: "Porsche" },
      model: { id: 1, name: "Cayenne Turbo GT" },
      generation: { id: 1, name: "III Рестайлинг (2024-2025)" }
    },
    countries: [
      { code: "DE", name: "Германия", selected: true },
      { code: "US", name: "США", selected: true },
      { code: "SK", name: "Южная Корея", selected: true },
    ],
    priceRange: { min: '', max: '' },
    showUsed: true,
    showNew: true,
    expanded: false
  });

  //------------------------------------------------------
  // ----------------- фильтры сортировки ----------------
  //------------------------------------------------------


    

    // Отфильтрованные автомобили
  const [filteredCars, setFilteredCars] = useState(cars);

    // Отфильтрованные модели и поколения
  const filteredModels = carData.models.filter(model => 
    model.brandId === filters.selectedCar.brand.id
  );

  const filteredGenerations = carData.generations.filter(generation => 
    generation.modelId === filters.selectedCar.model.id
  );


  // Состояния для открытия/закрытия выпадающих списков
  const [dropdowns, setDropdowns] = useState({
    brand: false,
    model: false,
    generation: false
  });

  const brandRef = useRef(null);
  const modelRef = useRef(null);
  const generationRef = useRef(null);

  useEffect(() => {
    
    const handleClickOutside = (e) => {
      if (!brandRef.current?.contains(e.target) && 
          !modelRef.current?.contains(e.target) && 
          !generationRef.current?.contains(e.target)) {
        setDropdowns({
          brand: false,
          model: false,
          generation: false
        });
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Обработчики для выпадающих списков
  const toggleDropdown = (dropdown) => {
    setDropdowns(prev => ({
      brand: false,
      model: false,
      generation: false,
      [dropdown]: !prev[dropdown]
    }));
  };

  const selectCarOption = (type, item) => {
    setFilters(prev => {
      const newState = {
        ...prev,
        selectedCar: {
          ...prev.selectedCar,
          [type]: item
        }
      };
      
      // Сброс зависимых полей при изменении
      if (type === 'brand') {
        newState.selectedCar.model = { id: 0, name: "Выберите модель" };
        newState.selectedCar.generation = { id: 0, name: "Выберите поколение" };
      } else if (type === 'model') {
        newState.selectedCar.generation = { id: 0, name: "Выберите поколение" };
      }
      
      return newState;
    });
    
    setDropdowns({
      brand: false,
      model: false,
      generation: false
    });
  };

  useEffect(() => {
    let result = [...cars];
  
    // Фильтр по марке
    if (filters.selectedCar.brand.id) {
      result = result.filter(car => 
        car.brand === filters.selectedCar.brand.name
      );
    }
    
    // Фильтр по модели
    if (filters.selectedCar.model.id) {
      result = result.filter(car => 
        car.model === filters.selectedCar.model.name
      );
    }
    
    // Фильтр по поколению
    if (filters.selectedCar.generation.id) {
      result = result.filter(car => 
        car.generation === filters.selectedCar.generation.name
      );
    }
  
    // Фильтр по странам
    const selectedCountries = filters.countries
      .filter(c => c.selected)
      .map(c => c.code);
    
    if (selectedCountries.length > 0) {
      result = result.filter(car => 
        selectedCountries.includes(car.country.code)
      );
    }
    
     // Фильтр по цене
    if (filters.priceRange.min) {
      const minPrice = parseInt(filters.priceRange.min.replace(/\s/g, '')) || 0;
      result = result.filter(car => {
        const carPrice = parseInt(car.price.replace(/\s/g, ''));
        return carPrice >= minPrice;
      });
    }
    
    if (filters.priceRange.max) {
      const maxPrice = parseInt(filters.priceRange.max.replace(/\s/g, '')) || Infinity;
      result = result.filter(car => {
        const carPrice = parseInt(car.price.replace(/\s/g, ''));
        return carPrice <= maxPrice;
      });
    }
    
    // Фильтр по статусу
    result = result.filter(car => 
      (filters.showNew && car.isNew) || 
      (filters.showUsed && !car.isNew)
    );
    
    // Сортировка
    result = result.sort((a, b) => {
      if (a.brand < b.brand) return -1;
      if (a.brand > b.brand) return 1;
      if (a.model < b.model) return -1;
      if (a.model > b.model) return 1;
      if (a.generation < b.generation) return -1;
      if (a.generation > b.generation) return 1;
      return 0;
    });
  
    setFilteredCars(result);
  }, [filters, cars]);

  //фигня для склонения слова
  const declensionOfNumber = (number, titles) => {
    if (number === 0) return 'объявлений';
    
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 
        ? 2 
        : cases[Math.min(number % 10, 5)]
    ];
  };

  // Обработчики событий
  const toggleCountry = (code) => {
    setFilters(prev => ({
      ...prev,
      countries: prev.countries.map(country => 
        country.code === code ? 
        { ...country, selected: !country.selected } : 
        country
      )
    }));
  };

  const selectAllCountries = (select) => {
    setFilters(prev => ({
      ...prev,
      countries: prev.countries.map(country => ({
        ...country,
        selected: select
      }))
    }));
  };

  const formatPrice = (value) => {
    // Удаляем все нецифровые символы
    const numericValue = value.replace(/\D/g, '');
    
    // Ограничиваем длину до 9 символов
    const limitedValue = numericValue.slice(0, 9);
    
    // Добавляем пробелы как разделители тысяч
    return limitedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };
  
  const handlePriceChange = (field, inputValue) => {
    // Если ввод пустой, сбрасываем значение
    if (inputValue === '') {
      setFilters(prev => ({
        ...prev,
        priceRange: {
          ...prev.priceRange,
          [field]: ''
        }
      }));
      return;
    }
  
    // Форматируем значение
    const formattedValue = formatPrice(inputValue);
    
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [field]: formattedValue
      }
    }));
  };

  const toggleStatus = (type) => {
    setFilters(prev => ({
      ...prev,
      [type === 'new' ? 'showNew' : 'showUsed']: !prev[type === 'new' ? 'showNew' : 'showUsed']
    }));
  };

  const toggleExpanded = () => {
    setFilters(prev => ({
      ...prev,
      expanded: !prev.expanded
    }));
  };

  //для фокуса на поле цены
  const [focusedField, setFocusedField] = useState(null); // 'min' или 'max'

  return (
    <div className="index_configurator_menu">
      
      {/* Панель результатов */}
      <div className="index_configurator_menu_result">
        <h2 className="index_configurator_results_title">Актуальные результаты:</h2>
        <div className="index_configurator_menu_resultPanel_container">
          <ul className="index_configurator_menu_resultPanel">
            {filteredCars.map(car => (
              <li key={car.id} className="index_configurator_menu_itemCard">
                <a className="configurator_menu_itemCard_link" href={car.link}>
                  <div className="configurator_infoBlock1">
                    <img className="configurator_itemImage" src={car.image} alt={car.model} />
                    <div className="configurator_infoBlockMileageYear">
                      <div className="configurator_result_mileage">{car.mileage}</div>
                      <div className="configurator_result_year">{car.year}</div>
                    </div>
                    <div className="configurator_infoBlockCarSpecs">
                      <div className="configurator_infoBlockCarSpecs-Upper">
                        <div className="configurator_infoBlockCarSpecs-UpperPrimary">
                          <div className="configurator_result_displacement_value">{car.engine.displacement}</div>
                          <div className="configurator_result_displacement">объем</div>
                        </div>
                        <div className="configurator_infoBlockCarSpecs-UpperSecondary">
                          <div className="configurator_result_hp_value">{car.engine.horsepower}</div>
                          <div className="configurator_result_hp">л.с</div>
                        </div>
                      </div>
                      <div className="configurator_infoBlockCarSpecs-Lower">
                        <div className="configurator_result_fuel">ТОПЛИВО</div>
                        <div className="configurator_result_fuel_value">{car.engine.fuelType}</div>
                      </div>
                    </div>
                  </div>
                  <div className="configurator_infoBlock2">
                    <div className="configurator_result_price">&#x20bd; {car.price}</div>
                    <div className="configurator_result_country">
                      <img 
                        className="configurator_result_img" 
                        src={`/src/icons/${car.country.code}_FLAG.svg`} 
                        alt={car.country.name} 
                      />
                      <div className="configurator_result_countryName">{car.country.name}</div>
                    </div>
                    <div className="configurator_result_color">
                      <div className="configurator_result_color_label">{car.color.name}</div>
                      <img 
                        className="configurator_result_color_img" 
                        src={car.color.image} 
                        alt={car.color.name} 
                      />
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Панель конфигурации */}
      <div className="index_configurator_menu_form">
        <div className="index_configurator_menu_formHeading">
          <img 
            className="index_configurator_menu_formHeading_logo" 
            src="/src/icons/sunshine_gradient_logo.svg" 
            alt="Sunshine Auto" 
          />
          <div className="index_configurator_menu_heading_text">Конфигуратор</div>
        </div>

        {/* Выбор марки/модели */}
        <ul className="index_configurator_menu_formQuiz">
        <li 
    className="formQuiz_carBrand" 
    onClick={(e) => {
      e.stopPropagation();
      toggleDropdown('brand');
    }}
    ref={brandRef}
  >
    <div className="formQuiz_carBrandText">
      <div className="configuratorLabels_primary">Марка авто</div>
      <div className="configuratorSigns_primary">{filters.selectedCar.brand.name}</div>
    </div>
    <img 
      className={`configurator_img_arrowdown ${dropdowns.brand ? 'rotated' : ''}`} 
      src="/src/icons/arrow_pointing_down_thin.svg" 
      alt="Выбрать" 
    />
    {dropdowns.brand && (
      <div className="dropdown-menu brand-dropdown">
        {carData.brands.map(brand => (
          <div 
            key={brand.id}
            className={`dropdown-item ${filters.selectedCar.brand.id === brand.id ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              selectCarOption('brand', brand);
            }}
          >
            {brand.name}
          </div>
        ))}
      </div>
    )}
  </li>

        <li 
  className={`formQuiz_carBrand ${!filters.selectedCar.brand.id ? 'disabled' : ''}`}
  onClick={(e) => {
    if (!filters.selectedCar.brand.id) return;
    e.stopPropagation();
    toggleDropdown('model');
  }}
  ref={modelRef}
>
  <div className="formQuiz_carBrandText">
    <div className="configuratorLabels_primary">Модель</div>
    <div className="configuratorSigns_primary">
      {filters.selectedCar.model.id ? filters.selectedCar.model.name : "Выберите модель"}
    </div>
  </div>
  <img 
    className={`configurator_img_arrowdown ${dropdowns.model ? 'rotated' : ''}`} 
    src="/src/icons/arrow_pointing_down_thin.svg" 
    alt="Выбрать" 
  />
  {dropdowns.model && (
    <div className="dropdown-menu model-dropdown">
      {filteredModels.length > 0 ? (
        filteredModels.map(model => (
          <div 
            key={model.id}
            className={`dropdown-item ${filters.selectedCar.model.id === model.id ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              selectCarOption('model', model);
            }}
          >
            {model.name}
          </div>
        ))
      ) : (
        <div className="dropdown-item disabled">Нет доступных моделей</div>
      )}
    </div>
  )}
</li>

<li 
  className={`formQuiz_carBrand ${!filters.selectedCar.model.id ? 'disabled' : ''}`}
  onClick={(e) => {
    if (!filters.selectedCar.model.id) return;
    e.stopPropagation();
    toggleDropdown('generation');
  }}
  ref={generationRef}
>
  <div className="formQuiz_carBrandText">
    <div className="configuratorLabels_primary">Поколение</div>
    <div className="configuratorSigns_primary">
      {filters.selectedCar.generation.id ? filters.selectedCar.generation.name : "Выберите поколение"}
    </div>
  </div>
  <img 
    className={`configurator_img_arrowdown ${dropdowns.generation ? 'rotated' : ''}`} 
    src="/src/icons/arrow_pointing_down_thin.svg" 
    alt="Выбрать" 
  />
  {dropdowns.generation && (
    <div className="dropdown-menu generation-dropdown">
      {filteredGenerations.length > 0 ? (
        filteredGenerations.map(generation => (
          <div 
            key={generation.id}
            className={`dropdown-item ${filters.selectedCar.generation.id === generation.id ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              selectCarOption('generation', generation);
            }}
          >
            {generation.name}
          </div>
        ))
      ) : (
        <div className="dropdown-item disabled">Нет доступных поколений</div>
      )}
    </div>
  )}
</li>
        </ul>

        {/* Выбор стран */}
        <div className="index_configurator_menu_countries1">
          <div className="index_configurator_menu_countries_decision">
            <div className="index_configurator_menuLabel_importCountries">Страны импорта</div>
            <button 
              className="index_configurator_menuSelAll_button"
              onClick={() => selectAllCountries(true)}
            >
              Выбрать все
            </button>
          </div>
        </div>

        <nav className="index_configurator_menu_countryballs">
          {filters.countries.map(country => (
            <img 
              key={country.code}
              id="configuratorCountryballs"
              src={`/src/icons/${country.code}_FLAG_square.svg`}
              alt={country.name}
              className={country.selected ? 'selected' : ''}
              onClick={() => toggleCountry(country.code)}
              title={country.name}
            />
          ))}
          {/* Заполнители для пустых слотов */}
          {Array(5).fill(0).map((_, i) => (
            <img 
              key={`empty-${i}`}
              id="configuratorCountryballs"
              src="/src/icons/country_select_blank.svg"
              alt=""
            />
          ))}
        </nav>

        {/* Фильтры по цене и статусу */}
        <div className="index_configurator_menu_pricingAndStatus">
        <div className="configurator_pricingBlock">
          <div className={`configurator_pricingBlock_field ${focusedField === 'min' ? 'focused' : ''}`}>
            <div className="configurator_pricing_label_primary">Цена от</div>
            <input 
              className="configurator_InputPrice" 
              type="text" 
              inputMode="numeric"
              pattern="[0-9\s]*"
              placeholder="..."
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              onFocus={() => setFocusedField('min')}
              onBlur={() => setFocusedField(null)}
              onKeyDown={(e) => {
                if (!/[0-9\s]/.test(e.key) && 
                    !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className={`configurator_pricingBlock_field ${focusedField === 'max' ? 'focused' : ''}`}>
            <div className="configurator_pricing_label_primary">Цена до</div>
            <input 
              className="configurator_InputPrice" 
              type="text" 
              inputMode="numeric"
              pattern="[0-9\s]*"
              placeholder="..."
              value={filters.priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              onFocus={() => setFocusedField('max')}
              onBlur={() => setFocusedField(null)}
              onKeyDown={(e) => {
                if (!/[0-9\s]/.test(e.key) && 
                    !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>
        </div>
          <div className="configurator_statusBlock">
            <button 
              className={`configurator_status_button_a ${filters.showNew ? 'active' : ''}`}
              onClick={() => toggleStatus('new')}
            >
              Новые
            </button>
            <button 
              className={`configurator_status_button_a ${filters.showUsed ? 'active' : ''}`}
              onClick={() => toggleStatus('used')}
            >
              С пробегом
            </button>
          </div>
        </div>

        {/* Кнопки результатов */}
        <div className="index_configurator_menu_resultsAndAddons">
          <Link to="/404">
            <button 
              className={`configurator_button_ViewFeed ${filteredCars.length === 0 ? 'disabled' : ''}`}
              disabled={filteredCars.length === 0}
            >
              {filteredCars.length === 0 
                ? 'Нет подходящих объявлений' 
                : `Смотреть ${filteredCars.length} ` + 
                  declensionOfNumber(filteredCars.length, ['объявление', 'объявления', 'объявлений'])
              }
            </button>
          </Link>
          {/* <div 
            className="configurator_menu_resultsAndAddonsLabel"
            onClick={toggleExpanded}
          >
            Все параметры
          </div>
          <img 
            className={`configurator_menu_resultsAndAddonsImg ${filters.expanded ? 'expanded' : ''}`}
            src="/src/icons/arrow_pointing_down_thin.svg"
            alt="Развернуть"
            onClick={toggleExpanded}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Configurator;