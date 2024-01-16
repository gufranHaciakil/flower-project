import React from "react";
import { useGetoneproductByNameQuery } from "../../Redux/productsApi";
import { useParams } from "react-router-dom";
import "./detailse.css";

const Detalise = () => {
  let { params_id } = useParams();
  const { data, error, isLoading } = useGetoneproductByNameQuery(2);
  if (error) {
    return <div>ERROR ! not found result</div>;
  }
  if (isLoading) {
    return <div>Is Loding..</div>;
  }
  if (data) {
    console.log(data);
    return (
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{data.productName}ttt</h2>
              <span>{data.price}10$</span>
            </div>
            <p>{data.description}</p>
            <button className="cart">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Detalise;
