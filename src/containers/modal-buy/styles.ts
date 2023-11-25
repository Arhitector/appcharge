import styled from "styled-components"
import {Wrapper as Close} from '../../components/close/styles';

const width = '430px';
const height = '220px';

const Wrapper = styled.div`
    position: absolute;
    top: calc(50% - ${height} / 2);
    left: calc(50% - ${width} / 2);
    display: flex;
    flex-wrap: wrap;
    width: ${width};
    padding: 8px;
    border-radius:  20px;
    box-shadow: 0 6px 0 #8c5a00;
    font-weight: 900;
    background: linear-gradient(125deg, rgba(255,216,0,1) 30%, rgba(248,255,13,1) 36%, rgba(255,231,22,1) 47%, rgba(255,178,28,1) 55%, rgba(255,232,29,1) 65%);
    transform-origin: center;
    animation-duration: 360ms;
    animation-name: animate-fade;
    animation-delay: 150ms;
    animation-fill-mode: backwards;

    @keyframes animate-fade {
        0% {
            opacity: 0;
            transform: rotate(0deg) scale(0.4);
        }
        100% {
            opacity: 1;
            transform: rotate(360deg) scale(1);
        }
    }
    ${Close} { 
        right: -16px;
        top: -16px;
    }
    .side-left,
    .side-right {
        display: flex;
        justify-content: center;
        width: 33%;
        color: white;
        text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px  1px 0 #000,
            1px  1px 0 #000;
    }
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .center {
        transform: translateY(-25%);
        color: #000;
        border-radius: 1rem;
        min-width: 116px;
        justify-content: center;
    }
`;

interface ItemProps {
    $bgImage: string;
}

const Items = styled.div<ItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;
    gap: 12px;
    overflow: hidden;
    border-radius:  20px;
    background-image: url("${(props) => props.$bgImage}");
    background-size: cover;
    background-position: center;
    & > div {
        filter: drop-shadow(0 0 4px currentColor);
    }
`;

export {
    Wrapper,
    Items,
};
