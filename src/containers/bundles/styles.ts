import styled from "styled-components";
import { Button } from '../../components/button/styles';

const BundlesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffa500;
    box-sizing: border-box;
    padding: 30px;
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    ${Button} {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        &.back {
            top: 10px
        }
        &.forth {
            bottom: 10px
        }
    }
`;

const Items = styled.div`
    overflow: hidden;
    width: 340px;
    height: 140px;
    background-color: #d9d9d9;
    border-radius: 20px;
    position: relative;
    .inner {
        display: flex;
        align-items: center;
        overflow-x: scroll;
        overflow-y: hidden;
        position: relative;
        height: 140px;
        padding:0 16px 20px;
        scroll-behavior: smooth;
    }
    &::after, &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 36px;
        pointer-events: none;
        z-index: 100;
    }
    &::after {
        right: 0;
        background: linear-gradient(to left, rgba(217, 217, 217, 1) 0%,  rgba(217, 217, 217, 0) 90%);
    }
    &::before {
        left: 0;
        background: linear-gradient(to left, rgba(217, 217, 217, 0), rgba(217, 217, 217, 1) 90%);
    }

`;

export {
    BundlesContainer,
    Items,
}