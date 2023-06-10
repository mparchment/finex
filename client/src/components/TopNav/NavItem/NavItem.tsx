import styled from 'styled-components';
import { useState } from 'react';

const NavItemContainer = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.div`
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

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    fill: white;
    width: 20px;
    height: 20px;
  }
`;

interface NavItemProps {
    children?: React.ReactNode;
    icon: React.ReactNode;
}

export default function NavItem(props: NavItemProps) {
    const [open, setOpen] = useState(false)

  return (
    <NavItemContainer>
      <IconButton onClick={() => setOpen(!open)}>{props.icon}</IconButton>

        {open && props.children}
    </NavItemContainer>
  );
}