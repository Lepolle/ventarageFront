import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #000000
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 0.5ram;
    display: flex;
    align-items: center;
    font-size: 1.2ram;
    font-family: sans-serif;

    p{
        &:nth-child(2){
            font-size: 1.5rem;
            font-weight: 500;
            color:white;
        }
        &:nth-child(3){
            font-size: 1.5rem;
            font-weight: 500;
            color: orange;
        }
    }

    svg{
        fill: orange;
        margin-right: 0.5rem;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const MenuItem = styled.li`
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;

`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5ram 2.5ram;
    color: orange;
    font-family: sans-serif;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

`;