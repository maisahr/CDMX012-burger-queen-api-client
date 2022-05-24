import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = (props) => {
    const [quantity, setQuantity] = useState(0);

    console.log(props.array)

    const updateProductsOrderQuantity = (newQuantity) => {
        const newProductsOrder = props.array.filter((product) => product.product !== props.product);
        if(newQuantity > 0) {
            newProductsOrder.push({
                qty: newQuantity,
                product: props.product,
                price: props.price
            })
        }
        props.setProductsOrder(newProductsOrder);
    }
   
    const increment = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateProductsOrderQuantity(newQuantity);
    };

    const decrement = () =>  {
        const newQuantity = quantity === 0 ? 0 : quantity - 1;
        setQuantity(newQuantity);
        updateProductsOrderQuantity(newQuantity);
    };

    return (
        <div className='productContainer'>
            <div>
                <p className='product'>{props.product}</p>
            </div>
            <div className='quantityContainer'>
                <button className='setQuantity' onClick={decrement}>-</button>
                <div className='quantity'>
                    <p>{quantity}</p>
                </div>
                <button className='setQuantity' onClick={increment}>+</button>
            </div>
        </div >
    );
}