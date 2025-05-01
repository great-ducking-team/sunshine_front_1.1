// ProductList
import React from 'react';
import ItemCard from './ItemCard';
import './product-list.css';
import { products } from './products';

const ProductList = () => {
    return (
        <div className="product-list">
            <ul>
                {products.map(product => (
                    <ItemCard
                        key={product.id}
                        images={product.images}
                        title={product.title}
                        price={product.price}
                        mileage={product.mileage}
                        specs={product.specs}
                        eta={product.eta}
                        countryFlag={product.countryFlag}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;