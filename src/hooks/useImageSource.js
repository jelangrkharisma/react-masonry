import {data} from 'clients/imageData';

const useImageSource = (keyword = '') => {
  return {
    data: data
        .filter((el) => el.name.includes(keyword))
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }),
  };
};
export default useImageSource;
