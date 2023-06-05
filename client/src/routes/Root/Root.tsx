import { Outlet } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Container, Sidebar, Detail } from './Root.styles'

export default function Root() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if(!userContext?.user) {
    navigate('/');
  }

  return (
    <Container>
      <Sidebar>
        <h1>Finex</h1>
        <nav>
          <ul>
            <li>
              <Link to="/portal/accounts">Accounts</Link>
            </li>
            <li>
              <Link to="/portal/planning">Planning</Link>
            </li>
            <li>
              <Link to="/portal/transfer">Transfer</Link>
            </li>
            <li>
              <Link to="/portal/billing">Billing</Link>
            </li>
            <li>
              <Link to="/portal/profile">Profile</Link>
            </li>
            <li>
              <Link to="/portal/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </Sidebar>
      <Detail>
        <Outlet />
      </Detail>
    </Container>
  );
}