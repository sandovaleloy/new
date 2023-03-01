import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PurchaseCard from '../components/Purchases/PurchaseCard';
import { axiosEcommerce, getConfig } from '../utils/configAxios';
import "./styles/Purchases.css"

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axiosEcommerce
      .get("/purchases", getConfig())
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='purchases'>
      <section>
        <div className='purchases__section'>
          <Link className='purchases__home' to="/">Home</Link>
          <i className='purchases__punto bx bxs-circle'></i>
          <h3 className='purchases__title'>My Purchases</h3>
        </div>
        <section>
          {purchases.map((purchase) => <PurchaseCard key={purchase.id} purchase={purchase} />)}
        </section>
      </section>
    </main>
  );
};

export default Purchases;
