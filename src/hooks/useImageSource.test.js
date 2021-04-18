import useImageSource from './useImageSource';
describe('useImageSource Hook', () => {
  it('should return 100 image on empty keyword', () => {
    const {data} = useImageSource();
    expect(data.length).toEqual(100);
  });
  it('should return 100 image on empty string keyword', () => {
    const {data} = useImageSource('');
    expect(data.length).toEqual(100);
  });
  it('should return less than 100 on filtered keyword', () => {
    const {data} = useImageSource('yello');
    expect(data.length).toBeLessThan(100);
  });
});
