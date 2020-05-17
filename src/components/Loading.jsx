import React from 'react';

export default function Loading(props) {
  const loading = props.display;
  return (
    <div className="" style={{ display: loading }}>
      <div className="">
        <div id="loading" class="loading-container">
          <div class="d-flex justify-content-center align-items-center loader">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
