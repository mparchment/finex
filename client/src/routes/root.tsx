import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Finex</h1>
        <nav>
          <ul>
            <li>
              <a href={`/accounts`}>Accounts</a>
            </li>
            <li>
              <a href={`/`}>Transfer</a>
            </li>
            <li>
              <a href={`/`}>Billing</a>
            </li>
            <li>
              <a href={`/`}>Profile</a>
            </li>
            <li>
              <a href={`/`}>Settings</a>
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