import styled, { css } from "styled-components";
import  SearchIcon  from '../../icons/search';
import  ArrowRightIcon  from '../../icons/arrowRight'

export const Container = styled.div`

    position: relative;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 50px;
    border: 4px solid  #94ECBE;
    padding: 5px;
    background:  #2D2244;
    transition: all 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${({ hover }) =>
    hover && 
    css`
        width: 50%;
        -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
        box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
        border: 4px solid #00adb5;

        @media (min-width: 768px) {
            width: 80%;
        }   
    `}
`;
export const SearchInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%auto;
    height: 42px;
    line-height: 30px;
    outline: 0;
    border: 0;
    font-size: 2rem;
    border-radius: 20px;
    padding: 0 20px;
    margin: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    display: ${(props) => (props.showSearchInput ? 'block' : 'none')};
`;

const IconCommonCss = css`
    height: 1.25rem;
    width: 1.25rem;
    fill:  #94ECBE;;
    z-index: 10;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
    ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
    ${IconCommonCss}
    align-self: flex-end;
    cursor: pointer;
    &:hover {
        fill:  #94ECBE;
    }
`;