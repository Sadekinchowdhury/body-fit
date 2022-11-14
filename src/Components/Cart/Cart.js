import React, { useEffect, useState } from "react";
import { addToLocalStorage, getStoredBreakTime } from "../../utilities/fakedb";

import "./Cart.css";
import ReactToast from "../ReactToast/ReactToast";

const Cart = ({ cart, position }) => {
  console.log(cart);
  const [breakTime, setBreakTime] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const storedBreakTime = getStoredBreakTime();
    setBreakTime(storedBreakTime);
  }, []);

  let exerciseTime = 0;
  for (const activity of cart) {
    exerciseTime = exerciseTime + activity.time;
    console.log(exerciseTime);
  }

  const handleBreakTime = (e, spanNum) => {
    setBreakTime(e.target.innerText);
    addToLocalStorage(e.target.innerText);

    handleClick(spanNum);
  };

  const handleClick = (spanNum) => {
    setSelected(spanNum);
  };
  const clicktost = () => {
    alert("congratulations your activity complate");
  };
  return (
    <div className="cart-details">
      <div className="user-info">
        <div>
          {" "}
          <img
            className="imag"
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
            alt=""
          />
        </div>
        <div>
          <h2 style={{ marginLeft: ".5rem" }}>
            {" "}
            Sadekin chowdhury{" "}
          </h2>

          <p style={{  marginLeft: ".5rem" }}>
            {" "}
            Sylhet, Bangladesh{" "}
          </p>
        </div>
      </div>

      <div className="user-details-info">
        <div>
          <p>
            <strong>75</strong>
            <span>kg</span>
          </p>

          <p>Weight</p>
        </div>
        <div>
          <p>
            <strong>5'6"</strong>
            <span>fit</span>
          </p>
          <p>Height</p>
        </div>
        <div>
          <p>
            <strong>25</strong>
            <span>year</span>
          </p>

          <p>Age</p>
        </div>
      </div>

      <h4>
        {" "}
        Take Break <span>(minutes)</span>{" "}
      </h4>
      <div className="break-minutes">
        <span
          onClick={(e) => handleBreakTime(e, 1)}
          className={selected === 1 ? "active" : ""}
        >
          10
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 2)}
          className={selected === 2 ? "active" : ""}
        >
          20
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 3)}
          className={selected === 3 ? "active" : ""}
        >
          30
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 4)}
          className={selected === 4 ? "active" : ""}
        >
          40
        </span>
        <span
          onClick={(e) => handleBreakTime(e, 5)}
          className={selected === 5 ? "active" : ""}
        >
          50
        </span>
      </div>

      <h3>Exercise Details</h3>
      <div className="exercise-details">
        <strong>Exercise Time : </strong>
        <span> {exerciseTime} minutes</span>
      </div>
      <div className="divider"></div>

      <div className="break-times">
        <strong> Break Time : </strong>
        <span> {breakTime} minutes</span>
      </div>
      <button  onClick={clicktost} className="activity-btnpro btn">
        {" "}
        activity complated
      </button>
      {/* <ReactToast position={position}></ReactToast> */}
    </div>
  );
};

export default Cart;
