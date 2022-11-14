import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Cart from "../Cart/Cart";
import QuestionAndAnswer from "../QuestionAndAnswer/QuestionAndAnswer";
import "./Home.css";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);
  const [position, setPosition] = useState("top-center");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((Data) => setActivities(Data));
  }, []);

  const handleAddToList = (activity) => {
    const newCart = [...cart, activity];
    setCart(newCart);
  };

  // const handleToastPosition = () => {
  //   setPosition('top-center');
  // };

  return (
    <div>
      <div className="container">
        <div className="home-container">
          <div className=" activity-container">
            {activities.map((activity) => (
              <Activity
                key={activity.id}
                activity={activity}
                handleAddToList={handleAddToList}
              ></Activity>
            ))}
          </div>

          <div className="cart-container">
            {<Cart cart={cart} position={position}></Cart>}
          </div>
        </div>
      </div>

      <QuestionAndAnswer></QuestionAndAnswer>
    </div>
  );
};

export default Home;
