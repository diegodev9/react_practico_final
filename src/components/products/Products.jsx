import { useEffect, useState } from "react";
import { getProducts } from "../../services/products.js";
import { NavLink, Outlet } from "react-router-dom";
import "./Products.css";
import { useParams } from "react-router-dom";
import Product from "../products/Product.jsx";
import TextTruncate from "react-text-truncate";

function Products() {
  const { productId } = useParams();

  const [products, setProducts] = useState([]);
  const [fetchProducts, setFetchProducts] = useState(false);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setFetchProducts(true);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [fetchProducts]);

  if (productId !== undefined) return <Product />;

  return (
    <>
      <Outlet />
      <div className="container">
        <div className="row">
          {products.map(({ id, title, price, description, image }) => (
            <div className="col-md-4 col-sm-6" key={id}>
              <div className="card">
                <div className="card-img">
                  <img
                    src={image}
                    className="card-img-top img-fluid"
                    alt={title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <TextTruncate line={1} truncateText="..." text={title} />
                  </h5>
                  <p className="card-text">${price}</p>
                  <NavLink to={`/products/${id}`} className="btn btn-primary">
                    Info
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
