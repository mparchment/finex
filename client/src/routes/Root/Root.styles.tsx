import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 22rem;
  background-color: #f7f7f7;
  border-right: solid 1px #e3e3e3;
  display: flex;
  flex-direction: column;

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
    padding: 1rem 2rem;
    border-top: 1px solid #e3e3e3;
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
    border-bottom: 1px solid #e3e3e3;
  }

  > div form {
    position: relative;
  }

  > div form input[type="search"] {
    width: 100%;
    padding-left: 2rem;
    background-repeat: no-repeat;
    background-position: 0.625rem 0.75rem;
    background-size: 1rem;
    position: relative;
  }

  > div form input[type="search"].loading {
    background-image: none;
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

    &:hover {
      background: #e3e3e3;
    }

    &.active {
      background: hsl(224, 98%, 58%);
      color: white;
    }

    &.pending {
      color: hsl(224, 98%, 58%);
    }
  }
`;

const Detail = styled.div`
  flex: 1;
  padding: 2rem 4rem;
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

export { Container, Sidebar, Detail, LastChild, ErrorPage };
