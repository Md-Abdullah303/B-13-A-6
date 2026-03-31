import React from 'react';
import Cart from '../../UI/Cart/Cart';

const Carts = ({ AddToCart, setAddToCart, AddToCartLenght, setAddToCartLenght }) => {
    let totalSum = 0;
    AddToCart.map(product => {
        totalSum = totalSum + product.price;
    })
    totalSum = totalSum.toFixed(2);
    const handleDlt = (deletedProduct) => {
        const filterProduct = AddToCart.filter(item => item.id !== deletedProduct.id);
        setAddToCart(filterProduct)
        setAddToCartLenght(filterProduct.length);
        // setAddToCartLenght(AddToCartLenght - 1);
    }
    const handleAllCartDlt = () => {
        setAddToCart([]);
    }
    return (
        <div className='border border-gray-200 p-5 rounded-xl space-y-2.5'>
            <h1 className=' text-2xl font-bold'>Your Cart</h1>
            <div className=" space-y-3 my-5">
                {
                    AddToCart.map(product => <Cart
                        key={product.id}
                        handleDlt={handleDlt}
                        product={product}></Cart>)
                }
            </div>
            <div className=" flex items-center justify-between my-4 gap-4">
                <h2>Total</h2>
                <p className='text-lg font-semibold'>${totalSum}</p>
            </div>
            <button
                onClick={handleAllCartDlt}
                className='btn my-4 w-full bg-linear-to-l from-[#4F39F6] hover:from-[#442cfd] to-[#9514FA] hover:to-[#8404e6] transition-all hover:-translate-y-0.5 hover:shadow-lg ease-out duration-300 text-white rounded-full border-none'>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;