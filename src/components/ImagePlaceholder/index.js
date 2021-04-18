import React from 'react';
import {Grid} from 'react-spinners-css';
import {gray} from 'utilities/colors';
import {Placeholder} from './ImagePlaceholder.elements';

const ImagePlaceholder = () => {
  return (
    <Placeholder>
      <Grid color={gray.darker} />
    </Placeholder>
  );
};
ImagePlaceholder.propTypes = {};
export default ImagePlaceholder;
