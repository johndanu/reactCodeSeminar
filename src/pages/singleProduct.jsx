import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
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

  const productId = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    let selected = products.find((product) => product.id === 25);
    setSingleProduct(selected);
  }, []);

  return (
    <>
      {JSON.stringify(singleProduct)}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 ">
            <img
              src="https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
              alt="Product Image"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3">Product Name</h1>
            <p className="text-muted mb-4">Product ID: 12345</p>
            <h2 className="mb-3">$99.99</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="form-control w-25"
                value="1"
                min="1"
              />
            </div>
            <button className="btn btn-primary btn-lg mb-3">
              <i className="bi bi-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
