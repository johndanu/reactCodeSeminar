import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const products = [
    {
      id: 25,
      name: "Green Bell Pepper",
      description:
        "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      price: 1.29,
      image:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
    },
    {
      id: 26,
      name: "Green Chili Pepper",
      description:
        "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      price: 0.99,
      image:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
    },
    {
      id: 27,
      name: "Honey Jar",
      description:
        "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      price: 6.99,
      image:
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
    },
    {
      id: 28,
      name: "Ice Cream",
      description:
        "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      price: 5.49,
      image:
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
    },
    {
      id: 29,
      name: "Juice",
      description:
        "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      price: 3.99,
      image: "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
    },
    {
      id: 30,
      name: "Kiwi",
      description:
        "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      price: 2.49,
      image: "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png",
    },
  ];

  const navigatePage = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="container bg-light text-dark py-5">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1 className="display-4 fw-bold">Welcome to Buy Da</h1>
            <p className="lead">
              Your one-stop shop for all your needs. Find the best products at
              the most affordable prices.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="#products"
              role="button"
            >
              Shop Now
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198841.jpg"
              className="img-fluid"
              alt="Hero"
            />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-3 mb-4 "
              onClick={() => navigatePage(`product/${product.id}`)}
            >
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
