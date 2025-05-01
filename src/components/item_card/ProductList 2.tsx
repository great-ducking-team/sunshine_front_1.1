// ProductList
import React from 'react';
import ItemCard from './ItemCard';
import './product-list-2.css';
import { products } from './products';

const ProductList2 = () => {
    return (
        <div className="product-list2">
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

export default ProductList2;