import { Wrapper } from './styles';

interface ICloseProps {
    handleClose: any;
}

function Close({ handleClose }: ICloseProps) {
  return (
    <Wrapper onClick={handleClose}>
        x
    </Wrapper>
  );
}

export default Close;
