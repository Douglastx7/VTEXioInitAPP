import React from 'react';


export const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container-custom">
    <div data-testid="breadcrumb" className="vtex-breadcrumb-1-x-container pv3">
        <a href="/" className="vtex-breadcrumb-1-x-link vtex-breadcrumb-1-x-homeLink dib pv1 link ph2 c-muted-2 hover-c-link v-mid">
            <svg fill="none" width="26" height="26" viewBox="0 0 16 16" className=" vtex-breadcrumb-1-x-homeIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <use href="#nav-home" xlinkHref="#nav-home"></use>
            </svg>
        </a>
        <span className="vtex-breadcrumb-1-x-arrow vtex-breadcrumb-1-x-arrow--1 ph2 c-muted-2">
            <svg fill="none" width="8" height="8" viewBox="0 0 16 16" className=" vtex-breadcrumb-1-x-caretIcon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <use href="#nav-caret--right" xlinkHref="#nav-caret--right"></use>
            </svg>
            <span className="vtex-breadcrumb-1-x-link vtex-breadcrumb-1-x-link--1 dib pv1 link ph2 c-muted-2 hover-c-link">Vai da boa</span>
        </span>
    </div>  
</div>
  )
}

