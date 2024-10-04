import { Link } from "react-router-dom";

export default function ProductCard({ productValue }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          alt="card"
          src={productValue.images[0].image}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={"products/" + productValue._id}>{productValue.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(productValue.ratings / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="card-text">{productValue.price}</p>
          <Link
            to={"products/" + productValue._id}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
