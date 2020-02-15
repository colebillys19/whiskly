import React, { memo } from 'react';
import T from 'prop-types';

import { ImageContainer, Wrapper } from './styles';

const Image = ({
  breakpointStyles,
  className,
  image,
  margin,
  ratio,
  width,
}) => (
  <Wrapper
    breakpointStyles={breakpointStyles}
    className={className}
    ratio={ratio}
    width={width}
  >
    <ImageContainer image={image} margin={margin} />
  </Wrapper>
);

Image.propTypes = {
  breakpointStyles: T.string,
  className: T.string,
  image: T.string.isRequired,
  margin: T.string,
  ratio: T.string,
  width: T.string,
};

Image.defaultProps = {
  breakpointStyles: '',
  className: '',
  margin: '',
  ratio: '56.25%',
  width: '100%',
}

export default memo(Image);
