import React, { use } from 'react';
import SectionHeading from '../../UI/SectionHeading/SectionHeading';
import Product from '../../UI/Product/Product';

const ProductsContainer = ({fetchProducts}) => {
    const productsData = use(fetchProducts);
    // console.log(productsData);
    return (
        <div className='w-[90%] md:w-[85%] mx-auto py-10'>
            <SectionHeading
            headTitle='Premium Digital Tools'
            peraTitle='Choose from our curated collection of premium digital products designed to boost your productivity and creativity.'></SectionHeading>

            {/* products container  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-5">
                {
                    productsData.map((product)=> <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductsContainer;