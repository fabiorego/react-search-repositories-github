import React from 'react';
import '../styles/Search.css';

export default function Search(props) {
  const visibility = props.visibility;

  return (
    <div className="search" style={{ display: visibility }}>
      <div className="title-search">
        <h4>Your search will be here...</h4>
      </div>
      <lottie-player
        src="https://assets2.lottiefiles.com/temp/lf20_LJK4oD.json"
        background="transparent"
        speed="0.4"
        style={{ width: 300, height: 300 }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
