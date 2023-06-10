import { Outlet } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Container, Sidebar, Detail, Chatbox } from './Root.styles';
import TopNav from '../../components/TopNav/TopNav';

export default function Root() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if(!userContext?.user) {
    navigate('/');
  }

  return (
    <>
      <TopNav />
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
            </ul>
          </nav>
        </Sidebar>
        <Detail>
          <Outlet />
        </Detail>
        <Sidebar>
          <Chatbox>
            
          </Chatbox>
        </Sidebar>
      </Container>
    </>
  );
}