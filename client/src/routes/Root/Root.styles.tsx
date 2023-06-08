import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: calc(100vh - var(--nav-size));
  color: var(--text-color);
`;

const Sidebar = styled.div`
  width: 18rem;
  background-color: var(--bg-dark);
  display: flex;
  flex-direction: column;
  color: #e3e3e3;
  font-weight: 500;

  > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-variant: small-caps;
    user-select: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: .5rem;
    padding: 1rem 2rem;
    order: 1;
    line-height: 1;

    &::before {
      margin-right: 0.5rem;
      position: relative;
      top: 1px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  > div form {
    position: relative;
  }

  nav {
    flex: 1;
    overflow: auto;
    padding-top: 1rem;
  }

  nav a span {
    float: right;
    color: #eeb004;
  }

  nav a.active span {
    color: inherit;
  }

  i {
    color: #818181;
  }

  nav .active i {
    color: inherit;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin: 0.25rem 0;
  }

  nav a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    white-space: pre;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
    gap: 1rem;
    transition: background-color var(--speed) ease-out;

    &:hover {
      background: var(--bg-accent);
    }

    &.active {
      background: hsl(224, 98%, 58%);
      color: white;
    }

    &.pending {
      color: hsl(224, 98%, 58%);
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Detail = styled.div`
  flex: 1;
  padding: 2rem 4rem;
  background-color: var(--bg-dark);
  width: 100%;

  &.loading {
    opacity: 0.25;
    transition: opacity 200ms;
    transition-delay: 200ms;
  }
`;

const LastChild = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0 0 8rem;
`;

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Chatbox = styled.div`
  padding: 1rem;
  margin-top: .25rem;
`;

export { Container, Sidebar, Detail, LastChild, ErrorPage, Chatbox };
