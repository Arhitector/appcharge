import styled from "styled-components"

interface ButtonProps {
    $hide?: boolean;
  }

const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: rgba(20,167,62,1);
    background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    font-weight: bold;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    opacity: ${(props) => props.$hide ? 0 : 1};
    visibility: ${(props) => props.$hide ? 'hidden' : 'visible'};
    transition: opacity 200ms ease-in-out, visibility 200s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
        box-shadow: inset 0 0.5em 1.5em -0.5em #14a73e98;
    }
    &:active {
       box-shadow: inset 0 0.3em 1em -0.5em #14a73e98;
    }
`;

export {
    Button,
}