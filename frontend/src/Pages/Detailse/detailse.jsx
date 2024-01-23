import React from "react";
import { useGetoneproductByNameQuery } from "../../Redux/productsApi";
import { useParams } from "react-router-dom";
import "./detailse.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../Redux/CartSlice";
import { Box } from "@mui/material";
import { Done} from "@mui/icons-material";

const Detalise = () => {
  const dispatch = useDispatch();
  let params_id = useParams();
  const { selectedProductsID } = useSelector((state) => state.Cartt);
  const { data, error, isLoading } = useGetoneproductByNameQuery(params_id.id);
  if (error) {
    return <div>ERROR ! not found result</div>;
  }
  if (isLoading) {
    return <div>Is Loding..</div>;
  }
  if (data) {
    return (
      <div className="details-parent">
        <div className="app">
          <div className="details">
            <div className="big-img">
              <img src={data.imageLink} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h3>{data.productName}</h3>
                <span>{data.price}$</span>
              </div>

              <p>{data.description}</p>
              {selectedProductsID.includes(data.id) ? (
                <Box sx={{ display: "flex",alignItems:"center" }}>
                  <button className="cart cart-already">added to cart</button>
                  <div>
                    <Done
                      fontSize="small"
                      sx={{ ml: "-1.7rem", position: "relative",mt:"18px",color:"white" }}
                    />
                  </div>
                </Box>
              ) : (
                <button
                  className="cart"
                  onClick={() => {
                    dispatch(addToCard(data));
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Detalise;
