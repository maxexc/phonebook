import { PuffLoader } from 'react-spinners';
import { LoaderStyle } from './Loader.styled';

const Loader = () => {
  const override = {
    display: 'block',
    margin: '50px auto',
  };
  return (
    <LoaderStyle>
      <PuffLoader
        color={'#2ef1c0'}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </LoaderStyle>
  );
};

export default Loader;
