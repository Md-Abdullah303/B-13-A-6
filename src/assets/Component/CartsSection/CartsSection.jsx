import React from 'react';
import EmptyMsg from '../../UI/EmptyMsg/EmptyMsg';
import Carts from '../Carts/Carts';

const CartsSection = ({setAddToCart, AddToCart}) => {
    return (
        <div className='my-5'>
            {
                AddToCart.length <= 0 && <EmptyMsg></EmptyMsg>
            }
            {
                AddToCart.length > 0 && <Carts
                AddToCart={AddToCart}
                setAddToCart={setAddToCart}
                ></Carts>
            }

        </div>
    );
};

export default CartsSection;