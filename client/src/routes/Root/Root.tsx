import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Finex</h1>
        <nav>
          <ul>
            <li>
              <a href={`/portal/accounts`}>Accounts</a>
            </li>
            <li>
              <a href={`/portal/planning`}>Planning</a>
            </li>
            <li>
              <a href={`/portal/transfer`}>Transfer</a>
            </li>
            <li>
              <a href={`/portal/billing`}>Billing</a>
            </li>
            <li>
              <a href={`/portal/profile`}>Profile</a>
            </li>
            <li>
              <a href={`/portal/settings`}>Settings</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}