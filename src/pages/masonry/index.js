import React, {useState} from 'react';
import {PageContainer} from './Masonry.elements';
import {Header, ImageBlock} from 'components';

import useImageSource from 'hooks/useImageSource';

const MasonryContainer = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const {data} = useImageSource(searchKeyword);
  return (
    <>
      <Header setSearchKeyword={setSearchKeyword} />
      <PageContainer data-testid={'masonry-container'}>
        {data.map((el) => (
          <ImageBlock alt={el.name} key={el._id} src={el.src} />
        ))}
      </PageContainer>
    </>
  );
};
MasonryContainer.propTypes = {};
export default MasonryContainer;
