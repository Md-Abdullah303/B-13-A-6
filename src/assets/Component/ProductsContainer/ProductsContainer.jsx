import React, { use, useState } from 'react';
import SectionHeading from '../../UI/SectionHeading/SectionHeading';
import Product from '../../UI/Product/Product';
import CartsSection from '../CartsSection/CartsSection';
import { toast } from 'react-toastify/unstyled';

const ProductsContainer = ({ fetchProducts, AddToCartLenght, setAddToCartLenght}) => {
    const productsData = use(fetchProducts);
    const [active, setActive] = useState(false)
    const [AddToCart, setAddToCart] = useState([]);
    const handleAddToCart = (product)=>{
        const exist = AddToCart.find(item=> item.id === product.id);
        if(!exist){
            toast("Added Successfully");
            setAddToCartLenght(AddToCartLenght + 1)
            const newAddToCart = [...AddToCart, product];
            setAddToCart(newAddToCart);
        }
    }
    // console.log(productsData);
    return (
        <div className='w-[90%] md:w-[85%] mx-auto py-10'>
            <SectionHeading
                headTitle='Premium Digital Tools'
                peraTitle='Choose from our curated collection of premium digital products designed to boost your productivity and creativity.'></SectionHeading>

            <div className="flex justify-center ">
                <div className="border my-3 border-gray-200 rounded-full flex items-center gap-1">
                    <button
                        onClick={() => setActive(false)}
                        className={`${active ? 'btn bg-transparent border-none rounded-full' : 'btn bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] text-white rounded-full border-none'}`}>Products</button>



                    <button
                        onClick={() => setActive(true)}
                        className={`${active ? 'btn bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] text-white rounded-full border-none' : 'btn bg-transparent border-none rounded-full'} `}>Cart ({AddToCart.length})</button>
                </div>
            </div>

            {/* products container  */}
            {
                active ||
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-5">
                    {
                        productsData.map((product) => <Product 
                        key={product.id}
                        handleAddToCart={handleAddToCart} 
                        product={product}></Product>)
                    }
                </div>
            }
            {
                active && <CartsSection 
                AddToCartLenght={AddToCartLenght}
                setAddToCartLenght={setAddToCartLenght}
                AddToCart={AddToCart}
                setAddToCart={setAddToCart}
                ></CartsSection>
            }
        </div>
    );
};

export default ProductsContainer;