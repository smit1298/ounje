import React, { useEffect, useState } from "react";
import { Offline } from "react-detect-offline";
// import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import FoodItem from "../foodItem/FoodItem";
import "./FoodList.css";
import dish from "../api";

const FoodList = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(true);

  useEffect(() => {
    
    setFoodItem(dish.data);
        setLoading(false);
        setOffline(false);
    // axios
    //   .get("./api.json")
    //   .then(function (response) {

    //     console.log(response)

    //     setFoodItem(response.data);
    //     setLoading(false);
    //     setOffline(false);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     setLoading(false);
    //   });
  }, []);

  if (loading || offline) {
    if (loading) {
      return (
        <div className="container">
          <div className="row">
            <Spinner
              className="spin"
              animation="border"
              role="status"
            ></Spinner>
          </div>
        </div>
      );
    }
    if (offline) {
      return (
        <Offline>
          <h2 className="offline">
            You're offline right now. Check your connection and reload the
            foodlist page.
          </h2>{" "}
        </Offline>
      );
    }
  }

  return (
    <div className="container">
      <div className="row">
        {foodItem.map((item, index) =>
          index < 6 ? <FoodItem key={item.id} card={item} /> : ""
        )}
        <div className="btn pt-4 pb-3">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
