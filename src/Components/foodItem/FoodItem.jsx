import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import ReactStars from "react-rating-stars-component";
import bxPlus from "@iconify-icons/bx/bx-plus";
import "./FoodItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodItem = ({ card }) => {
  return (
    <Fragment>
      <div className="col-lg-4  col-md-6 mt-5 ml-5 mr-5">
        <div className="card-deck">
          <div className="card">
            <img
              className=" card-img-top"
              src={card.strMealThumb}
              alt="food at your door step"
            />
            <div className="card-body ">
              <span className="float">
                <h4 className="card-title float-left">{card.title}</h4>
                <h4 className="price float-right">{card.price}</h4>
              </span>
              <p className="card-subtitle float-left mt-4 pt-2">
                {card.strMeal}
              </p>
            </div>

            <div className="card-text h-20 mb-4">{card.description}</div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="star">
                <ReactStars
                  count={card.ratings}
                  activeColor="#eb9605"
                  size={24}
                  color="#eb9605"
                />
              </div>

              <div className="plus">
                <Icon className="icon" icon={bxPlus} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FoodItem;
