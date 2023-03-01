import React from "react";
import { formatDateDDMMYYYY } from "../../utils/date";
import "./styles/PurchaseCard.css"

const PurchaseCard = ({purchase}) => {

  

  return (
    <article className="purchases">
      <div className="purchases__title">
        <div className="purchases__img">
          <img src={purchase.product.images[0].url} alt="" />
        </div>
        <h4 className="purchases__h4">{purchase.product.title}</h4>
      </div>
      <div className="purchases__container">
        <h4 className="purchases__date">{formatDateDDMMYYYY(purchase.createdAt)}</h4>
        <div className="purchases__number">
          <h4>{purchase.quantity}</h4>
        </div>
        <h4 className="purchases__price">$ {purchase.product.price}</h4>
      </div>
    </article>
  );
};

export default PurchaseCard;
