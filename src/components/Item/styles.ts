import styled from "styled-components";

interface ItemWrapperProps {
  $productTextColor: string;
}

const ItemWrapper = styled.div<ItemWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 70px;
  padding: 12px;
  color: ${(props) => props.$productTextColor};
  text-shadow:
	-1px -1px 0 #000,
	1px -1px 0 #000,
	-1px  1px 0 #000,
	1px  1px 0 #000;
  img {
    max-width: 95%;
    object-fit: cover;
  }
`;

export {
    ItemWrapper
}