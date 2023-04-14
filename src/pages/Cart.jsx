import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/cart/CartProduct";
import { getAllCartProducts, purchaseCart } from "../store/slices/cart.slice";
import "./styles/Cart.css"

const Cart = () => {
  const { products } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const totalpriceCart = products.reduce((total, product) => total + product.quantity * product.product.price, 0)

  const handlePorchaseCart = () => {
    dispatch(purchaseCart())
  }

  useEffect(() => {
    dispatch(getAllCartProducts());
  }, []);

  return (
    <main className="cart1">
      <section className="">
        {
          products.map((product) => (
          <CartProduct key={product.id} product={product}/> ))
        }
      </section>
      <section className="cart__container">
        {/* <hr className="hr"/> */}
        <div className="cart__div">
          <h3 className="cart__total">Total:</h3>
          <h3>$ {totalpriceCart}</h3>
        </div>
        <button className="cart__btn" onClick={handlePorchaseCart}>checkout</button>
      </section>
    </main>
  );
};

export default Cart;
