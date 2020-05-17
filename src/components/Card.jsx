import React from 'react';

export default function Card(props) {
  function onClickView() {
    window.open(`${props.url_repo}`, '_blank');
  }

  return (
    <div class="container">
      <div id="repos-list" class="column">
        <div class="col-md-4 mb-4">
          <div className="">
            <div className="">
              <img src={props.url_avatar} className="my-img-profile" alt="Avatar Usuario" />
            </div>

            <div className="">
              <div className="">{props.name}</div>
              <div className="">
                by <b>{props.username}</b>
              </div>
            </div>

            <div className="">{props.description}</div>

            <div className="">
              <button onClick={onClickView} className="">
                View
              </button>
              <button className="">
                <i className="fas fa-star"></i> {props.stars}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
