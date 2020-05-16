import React from 'react';

export default function Loading(props) {
  const loading = props.display;
  return (
    <div className="my-contentLoading" style={{ display: loading }}>
      <div className="my-boxImage-Loading">
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      {/* <div className="my-boxText-Loading">Making it happen</div> */}
    </div>
  );
}
