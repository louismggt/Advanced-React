import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next' ;
        src: url('/static/radnikanext-medium-webfont.woff2')
        format(woff2);
        font-weight: normal;
        font-style: normal;
    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3a3a3a;
        --lightGrey: #e1e1e1;
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    }
    body {
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1rem;
        line-height: 1;
    }
    a {
        text-decoration: none;
        color: var(---lightGrey);
    }
    a:hover{
        text-decoration: underline;
    }
    button {
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
  max-width: var (--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
