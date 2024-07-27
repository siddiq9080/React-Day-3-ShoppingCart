import PropTypes from "prop-types";

const Shopping = ({
  id,
  image,
  sale,
  title,
  oldPrice,
  newPrice,
  btn,
  rating,
  handleInc,
  handleDec,
  isInCart = false,
}) => {
  const renderStars = () => {
    if (rating) {
      return (
        <div className="text-center">
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
        </div>
      );
    } else {
      return (
        <>
          <br /> <br />
        </>
      );
    }
  };

  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: 200 }}
      />

      {sale && (
        <div className="img-overlay">
          <span className="badge bg-danger position-absolute float-end top-0 start-0 m-3">
            Sale
          </span>
        </div>
      )}
      <div className="card-body text-center mt-2 mb-2">
        <h3>{title}</h3>{" "}
        {oldPrice && (
          <span style={{ textDecoration: "line-through", opacity: 0.7 }}>
            {oldPrice}
          </span>
        )}{" "}
        &nbsp;
        {newPrice}
        {renderStars()}
        {isInCart ? (
          <button
            className="btn btn-outline-dark mt-3 w-75"
            onClick={() => handleDec(id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="btn btn-outline-dark mt-3 w-75"
            onClick={() => {
              if (btn === "Add to cart") {
                handleInc({ id, title });
              } else {
                // Handle view option button click if needed
              }
            }}
          >
            {btn}
          </button>
        )}
      </div>
    </div>
  );
};

Shopping.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  sale: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  newPrice: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  rating: PropTypes.bool.isRequired,
  handleInc: PropTypes.func.isRequired,
  handleDec: PropTypes.func.isRequired,
  isInCart: PropTypes.bool,
};

export default Shopping;
