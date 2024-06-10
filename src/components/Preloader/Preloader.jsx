import React from 'react';

function Preloader({ isLoading }) {
  return (
    <div className={`${isLoading ? 'preloader_active preloader' : 'preloader'}`}>
      <div className="preloader__item" />
    </div>
  );
}

export default Preloader;
