import React, { useEffect, useState } from "react";
import ProductCard from "../components/Home/ProductCard";
import { axiosEcommerce } from "../utils/configAxios";
import "./styles/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameProduct = e.target.nameProduct.value;
    setNameFilter(nameProduct);
  };

  useEffect(() => {
    axiosEcommerce
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axiosEcommerce
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newProductsByname = products.filter((product) =>
      product.title.toLowerCase().includes(nameFilter.toLowerCase())
    );
    if (categoryFilter) {
      const newProductsByCategory = newProductsByname.filter(
        (product) => product.categoryId === categoryFilter
      );
      setFilterProducts(newProductsByCategory);
    } else {
      setFilterProducts(newProductsByname);
    }
  }, [nameFilter, products, categoryFilter]);

  return (
    <main className="home">
      <form onSubmit={handleSubmit}>
        <div className="home__div">
          <input
            className="home__input"
            id="nameProduct"
            type="text"
            placeholder="What are you looking for?"
          />
          <button className="home__btn">
            <i className="bx bx-search"></i>
          </button>
        </div>

        <div className="container">
          <div className="div">
            <h3>
              <label className="categories" htmlFor="activar">
                <h3 className="icon">Categories</h3>
              </label>
            </h3>
            <input className="input" type="checkbox" id="activar" />
            <ul className="ul">
              <li className="li" onClick={() => setCategoryFilter(0)}>All</li>
              {categories.map((category) => (
                <li className="li"
                  onClick={() => setCategoryFilter(category.id)}
                  key={category.id}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
      <section className="home__listProducts">
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
