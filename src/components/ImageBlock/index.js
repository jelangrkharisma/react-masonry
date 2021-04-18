import React from 'react';
import {string} from 'prop-types';
import {ImageBlocks, Image} from './Image.elements';
import LazyLoad from 'react-lazyload';
import {ImagePlaceholder} from 'components';

const ImageBlocksComponent = ({alt, src}) => {
  return (
    <ImageBlocks>
      <LazyLoad
        once
        height={200}
        debounce={500}
        placeholder={<ImagePlaceholder />}
        offset={[-200, 0]}>
        <Image src={src} alt={alt} />
      </LazyLoad>
    </ImageBlocks>
  );
};
ImageBlocksComponent.propTypes = {
  src: string,
  alt: string,
};
export default ImageBlocksComponent;
