import { IProduct } from '../../types/bundle';
import { ItemWrapper } from './styles';

interface IItemsProps {
    el: IProduct;
    handleClick?: React.MouseEventHandler<HTMLDivElement>
}

function Item({ el, handleClick }: IItemsProps) {
  return (
    <ItemWrapper onClick={handleClick} $productTextColor={el.productTextColor}>
        <img src={el.productImage} alt="" />
        {el.amount}
    </ItemWrapper>
  );
}

export default Item;
