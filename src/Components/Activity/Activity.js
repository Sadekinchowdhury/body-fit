import React from 'react';
import './Activity.css';

const Activity = ({ activity, handleAddToList }) => {
  const { name, img, time, desc, age } = activity;

  return (
    <div className="activity-card">
      <div className='img-container'>
        <img src={img} alt="" />
      </div>
      <div className="activity-card-body">
        <h3 style={{ margin: '20px' }}>{name}</h3>

        <p style={{ margin: '20px' }}>
          <p>Desc: {desc}</p>
          <p>age: {age}</p>
          Required Time: <strong>{time} minutes</strong>
        </p>
        <button
          onClick={() => handleAddToList(activity)}
          className="btn-add-to-list btn"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Activity;
