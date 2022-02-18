import { Triangle } from 'react-loader-spinner';
import { LoaderStyled } from './Loader..styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <Triangle color="#10a446" height={300} width={300} />
    </LoaderStyled>
  );
};

export default Loader;
