import React from 'react';

const BannerImageOverlay = ({ image, overlay, caption }) => (
    <div id="banner">
        <img id="banner-image" src={image.src} alt={image.alt} />
        
        <div id="banner-cover"><div id="banner-cover-contents">{overlay}</div></div>
        <div id="banner-image-description" className="bottom-right">{caption}</div>
    </div>
);

export default BannerImageOverlay;
