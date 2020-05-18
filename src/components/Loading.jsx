import React from 'react';
import '../App.css';

export default function Loading(props) {
  const loading = props.display;
  return (
    <div className="loading-content" style={{ display: loading }}>
      <div className="loading-image">
        <i className="fas fa-spinner spinnerLoading"></i>
      </div>
      <div className="loading-text">Making it happen</div>
    </div>
  );
}
