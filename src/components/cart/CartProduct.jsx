import React from "react";
import { useDispatch } from "react-redux";
import { deleteproductCart, updateProductCart } from "../../store/slices/cart.slice";
import "./styles/CartProduct.css"

const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const handleDeleteCartProduct = () => {
    dispatch(deleteproductCart(product.id))
  }

  const handleClickLess = () => {
    const newQauntity = product.quantity - 1
    if(newQauntity <= 0) {
      dispatch(deleteproductCart(product.id))
    } else {
      const data = {
        quantity: newQauntity
      }
      dispatch(updateProductCart(product.id, data))
    }
  }

  const handleClikPlus = () => {
    const newQauntity = product.quantity + 1
    const data = {
      quantity: newQauntity
    }
    dispatch(updateProductCart(product.id, data))
  }

  return (
    
    <article className="cart"> 
      <div className="cart__img">
        <img src={product.product.images[0].url} alt="" />
      </div>
      <section className="cart__container1">
        <h3 className="cart__container1-title">{product.product.title}</h3>

        <div className="cart__container1-btn">
          <button className="cart__container1-button" onClick={handleClickLess}>-</button>
          <h3 className="cart__container1-button">{product.quantity}</h3>
          <button className="cart__container1-button" onClick={handleClikPlus}>+</button>
        </div>
      </section>
      
      <section className="cart__container2">
        <i onClick={handleDeleteCartProduct} className='trash bx bx-trash'></i>
        <div className="cart__container2-div">
          <h3 className="cart__container2-title">Total:</h3>
          <h3 className="cart__container2-price">${product.quantity * product.product.price}</h3>
        </div>
      </section>
    </article>
  );
};

export default CartProduct;
