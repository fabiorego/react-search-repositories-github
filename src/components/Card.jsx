import React from 'react';
import '../styles/Card.css';

export default function Card(props) {
  function onClickView() {
    window.open(`${props.url_repo}`, '_blank');
  }

  return (
    <div className="card-result">
      <div className="card-result-img">
        <img src={props.url_avatar} className="card-result-img-profile" alt="Avatar Usuario" />
      </div>

      <div className="card-result-repo">
        <div className="card-result-repo-name">{props.name}</div>
        <div className="card-result-repo-username">
          <b>{props.username}</b>
        </div>
      </div>

      <div className="card-result-repo-description">{props.description}</div>

      <div className="card-result-repo-actions-buttons">
        <button
          onClick={onClickView}
          className="card-result-repo-buttons card-result-repo-button-view"
        >
          View
        </button>
        <button className="card-result-repo-buttons card-result-repo-button-watchers">
          <i className="fas fa-eye"></i> {props.watchers}
        </button>
        <button className="card-result-repo-buttons card-result-repo-button-stars">
          <i className="fas fa-star"></i> {props.stars}
        </button>
        <button className="card-result-repo-buttons card-result-repo-button-forks">
          <i className="fas fa-code-branch"></i> {props.forks}
        </button>
      </div>
    </div>
  );
}
