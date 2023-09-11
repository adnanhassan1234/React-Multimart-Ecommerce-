import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({data}) => {
    return (
        <>
           {
            data?.map((item, ind) => {
                return <ProductCard key={ind} item={item} />
            })
           }
        </>
    );
};

export default ProductList;