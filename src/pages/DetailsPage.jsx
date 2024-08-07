import   { useEffect, useState } from "react";
import { PRODUCT_API } from "../constant/apiConstant";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/DetailsPage.css"

const DetailsPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    fetchSingleData(id);
  }, [id]);

  const fetchSingleData = async (id) => {
    try {
      const response = await axios.get(`${PRODUCT_API}/${id}`); 
      setProduct(response?.data);
    } catch (error) {
      console.error(`Error in fetching single product`, error);
    }
  };

  return (
    <div className="details-container">
      <h2>Product Details</h2>
      {product ? (
        <div>
          <img src={product.image} alt={product.title} />
          <h3> {product.title} </h3>
          <p> {product.description} </p>
          <p> {product.price} </p>
        </div>
      ) : (
        <h1>Loading product details...</h1>
      )}
    </div>
  );
};

export default DetailsPage;
