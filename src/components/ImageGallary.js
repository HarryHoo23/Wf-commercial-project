import React from 'react';
import ImageGallery from 'react-image-gallery';
import { ImageList } from '../data/ImageList';

const ImageGallary = () => {
  return (
    <ImageGallery
      items={ImageList}
      showThumbnails={false}
      showBullets={true}
      showNav={true}
      showPlayButton={false}
    />
  );
};

export default ImageGallary;
