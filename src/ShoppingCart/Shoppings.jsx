import { useState } from "react";
import data from "./Shopping.json";
import Shopping from "./Shopping";

const Shoppings = () => {
  const [count, setCount] = useState([]);
  const handleInc = (shop) => {
    const temp = [...count, shop];
    setCount(temp);
  };

  const handleDec = (id) => {
    const temp = count.filter((s) => s.id !== id);
    setCount(temp);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <h1 className="text-end me-5 ">
          {" "}
          <i className="fa-solid fa-cart-shopping me-2"></i>
          {count.length}
        </h1>
      </nav>

      <div className="bg-dark p-5">
        <h1 className="text-center text-light mt-5">Shop in Style</h1>
        <p className="text-center text-light mb-5">
          With this shop homepage template
        </p>
      </div>
      <div className="container">
        <div className="row">
          {data.map((sData) => (
            <div className="col-md-3 g-3" key={sData.id}>
              <Shopping
                {...sData}
                handleInc={handleInc}
                handleDec={handleDec}
                isInCart={Boolean(count.find((f) => f.id === sData.id))}
              />
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="bg-dark p-5 mt-4">
          <p className="text-center text-light">
            Copyright @ your website 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default Shoppings;
