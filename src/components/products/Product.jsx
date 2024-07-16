import { useParams } from "react-router-dom";
import { getProduct } from "../../services/products.js";
import { useEffect, useState } from "react";
import NotFound from "../../routes/NotFound.jsx";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [fetchProduct, setFetchProduct] = useState(false);
  console.log("product: ", product === "");

  useEffect(() => {
    getProduct(Number(productId))
      .then((data) => {
        setProduct(data);
        setFetchProduct(true);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [fetchProduct]);

  if (productId === undefined) return <NotFound />;

  return (
    <>
      {fetchProduct && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="card">
                  <div className="card-img">
                    <img
                      src={product.image}
                      className="card-img-top img-fluid"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.description}</p>
                    <p className="card-text">${product.price}</p>

                    <a to={`#`} className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Product;
