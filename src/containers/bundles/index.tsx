import ModalBuy from '../modal-buy';
import convertMsToTime from '../../lib/timeConverter';
import Item from '../../components/Item';
import { useModalAction, useScroll } from './hooks';
import { IBundle } from '../../types/bundle';
import { BundlesContainer, Items } from './styles';
import { Button } from '../../components/button/styles';

interface IBundlesProps {
    elements: IBundle[]
}

function Bundles({ elements }: IBundlesProps) {
	const {
		innerRef,
		isAtStart,
        isAtEnd,
        scrollToBeginning,
        scrollToEnd
	} = useScroll();
	const {
		currentItem,
		handleClick,
		handleClose
	} = useModalAction();

  return (
    <>
    <BundlesContainer>
		<Button className="back" $hide={isAtStart} onClick={scrollToBeginning}>back</Button>
        <Items>
            <div className="inner" ref={innerRef}>
                {elements.map(el => (
                  	<Item key={el.id} handleClick={()=>handleClick(el.item)} el={el} />
                ))}
            </div>
        </Items>
		<Button className="forth" $hide={isAtEnd} onClick={scrollToEnd}>forth</Button>
    </BundlesContainer>
    {
        !!currentItem && <ModalBuy
            bgImage={currentItem.bgImage}
            leftSide={`Available ${currentItem.available}/${currentItem.maxAvailable}`}
            rightSide={convertMsToTime(+currentItem.timeLeftMs)}
            submitText={`${currentItem.price.currencySymbol}${currentItem.price.amount}`}
            handleClose={handleClose}
        >
            {
                currentItem.products.map((el, idx) => <Item key={idx} el={el} />)
            }
        </ModalBuy>
    }
    </>
  );
}

export default Bundles;
