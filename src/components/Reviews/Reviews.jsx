import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    username: "",
    productName: "",
    feedback: "",
    rating: "",
  });
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setProductData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, { ...newReview, rating: parseInt(newReview.rating) }]);
    setNewReview({ username: "", productName: "", feedback: "", rating: "" });
    toast.success('Successfully Submitted')
  };

  return (
    <div className="reviews-container">
      <Helmet>
        <title>Reviews</title>
      </Helmet>

      <h2 className="text-xl font-bold mb-4 text-center">Submit Your Review</h2>

      <form className="flex flex-col items-center" onSubmit={handleReviewSubmit}>
        <input
          type="text"
          name="username"
          value={newReview.username}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="input input-bordered w-96 mb-3"
          required
        />

        <select
          name="productName"
          value={newReview.productName}
          onChange={handleInputChange}
          className="select select-bordered w-96 mb-3"
          required
        >
          <option value="" disabled>
            Select Product
          </option>
          {productData.map((product) => (
            <option key={product.id} value={product.title}>
              {product.title}
            </option>
          ))}
        </select>

        <textarea
          name="feedback"
          value={newReview.feedback}
          onChange={handleInputChange}
          placeholder="Your Feedback"
          className="textarea textarea-bordered w-96 mb-3"
          required
        ></textarea>

        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
          placeholder="Rating (1-5)"
          className="input input-bordered w-96 mb-3"
          min="1"
          max="5"
          required
        />

        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li
            key={index}
            className="border-2 p-4 rounded-xl border-gray-700 mb-4"
          >
            <p>
              <strong className="text-2xl font-bold text-white"> {review.username}</strong>  reviewed{" "}
              <span className="font-bold text-2xl text-amber-700 ">{review.productName}:</span>
            </p>
            <p className="mt-2 mb-3 text-2xl font-semibold text-gray-300">{review.feedback}</p>
            <div className="flex items-center gap-3">
            <p className="text-yellow-400">Rating: {review.rating}/5 </p>
            <FaStar className="text-yellow-400"></FaStar>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
