import { ReactNode } from "react";
import Close from '../../components/close';
import { Wrapper, Items } from "./styles";
import { Button } from '../../components/button/styles';

interface IModalBuyProps {
  bgImage: string,
  leftSide: string,
  rightSide: string,
  submitText: string,
  handleClose: Function,
  children: ReactNode
}
function ModalBuy({
  bgImage,
  leftSide,
  rightSide,
  submitText,
  handleClose,
  children,
}: IModalBuyProps) {

  return (
    <Wrapper>
        <Close handleClose={handleClose} />
        <Items $bgImage={bgImage}>{children}</Items>
        <div className="footer">
          <div className="side-left">{leftSide}</div>
          <Button className="center">{submitText}</Button>
          <div className="side-right">{rightSide}</div>
        </div>
    </Wrapper>
  );
}

export default ModalBuy;
