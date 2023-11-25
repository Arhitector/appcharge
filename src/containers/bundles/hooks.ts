import { useRef, useState, useEffect } from 'react';
import { IItem } from '../../types/bundle';

export function useModalAction() {
  const [currentItem, setCurrentItem] = useState<IItem | null>(null);

  const handleClick = (item: IItem) => {
    setCurrentItem(item);
  };

  const handleClose = () => {
    setCurrentItem(null);
  };

  return {
    currentItem,
    handleClick,
    handleClose
  }
}

export function useScroll() {
    const innerRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
      if (innerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = innerRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft >= scrollWidth - clientWidth);
      }
    };

    useEffect(() => {
      const div = innerRef.current;
      div?.addEventListener('scroll', checkScrollPosition, { passive: true });
      checkScrollPosition();

      return () => {
        div?.removeEventListener('scroll', checkScrollPosition);
      };
    }, []);

    const scrollToBeginning = () => {
      if (innerRef.current) {
        innerRef.current.scrollLeft = 0;
      }
    };

    const scrollToEnd = () => {
      if (innerRef.current) {
        innerRef.current.scrollLeft = innerRef.current.scrollWidth;
      }
    };

    return {
        innerRef,
        isAtStart,
        isAtEnd,
        scrollToBeginning,
        scrollToEnd
    }
  }
  