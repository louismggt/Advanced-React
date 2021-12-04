import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  background: red;
  text-transform: uppercase;
  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyled = styled.header`
  .bar {
    border-bottom: 3px solid var(--black);
    display: grid;
    grid-template-columns: auto 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sub-bar {
    grid-template-columns: 1fr auto;
    display: grid;
    border-bottom: 3px solid var(--black);
    margin-bottom: 1rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyled>
  );
}
