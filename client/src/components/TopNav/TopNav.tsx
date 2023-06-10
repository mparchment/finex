import { Navbar, NavbarNav } from "./TopNav.styles"
import NavItem from "./NavItem/NavItem.tsx"
import DropdownMenu from "./DropdownMenu/DropdownMenu.tsx"

import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg"
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg"
import { ReactComponent as MessengerIcon } from "../../assets/icons/messenger.svg"
import { ReactComponent as CaretIcon } from "../../assets/icons/caret.svg"

import { CSSTransition } from "react-transition-group"
import { useState } from "react"

export default function TopNav(){
    return (
        <Navbar>
            <NavbarNav>
                <NavItem icon={<PlusIcon/>} />
                <NavItem icon={<MessengerIcon/>} />
                <NavItem icon={<BellIcon/>} />

                <NavItem icon={<CaretIcon/>}>
                   <DropdownMenu/> 
                </NavItem>
            </NavbarNav>
        </Navbar>
    )
}