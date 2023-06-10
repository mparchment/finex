import styled from "styled-components"
import { ReactNode } from "react";

import { ReactComponent as CogIcon } from "../../../assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../../assets/icons/chevron.svg";

import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import { Link } from "react-router-dom";

const Dropdown = styled.div`
    position: absolute;
    top: 60px;
    width: 300px;
    transform: translateX(-45%);
    background-color: var(--bg);
    border-radius: 8px;
    padding: 1rem;
    overflow: hidden;
`

const MenuLink = styled(Link)`
    text-decoration: none;
`

const MenuItem = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background var(--speed);
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background-color: #525357;
`

const RightIcon = styled.span`
    margin-left: auto;
`

const Menu = styled.div`
    width: 100%;
`

const IconButton = styled.span`
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    margin-right: 10px;

    svg {
        fill: white;
        width: 20px;
        height: 20px;
    }
`

interface DropdownItemProps {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

function DropdownItem(props: DropdownItemProps) {
  return (
    <MenuItem>
        <IconButton>{props.leftIcon}</IconButton>
        {props.children}
        <RightIcon>{props.rightIcon}</RightIcon>
    </MenuItem>
  )
}

export default function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main')

    return (
            <Dropdown>
                <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                    <Menu className="menu">
                        <DropdownItem><MenuLink to="/portal/profile">My Profile</MenuLink></DropdownItem>
                        <DropdownItem 
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}>
                        <MenuLink to="/portal/settings">Settings</MenuLink>
                        </DropdownItem>
                    </Menu>
                </CSSTransition>
            </Dropdown>

    )
}