import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetail({ cartItems, setCartItems }) {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/products/" + id)
      .then((res) => res.json())
      .then((res) => setProduct(res.product));
  }, []);

  function carthandler() {
    const itemExist = cartItems.find((item) => item.product._id == product._id);
    if (!itemExist) {
      const newItems = { product, quantity };
      setCartItems((state) => [...state, newItems]);
      toast.success("Cart item added succesfully!");
    }
  }

  function IncQuantity() {
    if (product.stock == quantity) {
      return;
    }
    setQuantity((state) => state + 1);
  }

  function DecQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }
  return (
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img
            src={
              product.images && product.images.length > 0
                ? product.images[0].image
                : ""
            }
            alt={product.name}
            height="500"
            width="500"
          />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3>{product.name}</h3>
          <p id="product_id">Product # {product._id}</p>

          <hr />

          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(product.ratings / 5) * 100}%` }}
            ></div>
          </div>

          <hr />

          <p id="product_price">₹ {product.price}</p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={DecQuantity}>
              -
            </span>

            <input
              type="number"
              className="form-control count d-inline"
              value={quantity}
              readOnly
            />

            <span className="btn btn-primary plus" onClick={IncQuantity}>
              +
            </span>
          </div>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
            onClick={carthandler}
            disabled={product.stock == 0}
          >
            Add to Cart
          </button>

          <hr />

          <p>
            Status:{" "}
            <span
              id="stock_status"
              className={product.stock > 0 ? "text-success" : "text danger"}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          <hr />

          <h4 className="mt-2">Description:</h4>
          <p>{product.description}</p>
          <hr />
          <p id="product_seller mb-3">
            Sold by: <strong>{product.seller}</strong>
          </p>

          <div className="rating w-50"></div>
        </div>
      </div>
    </div>
  );
}
