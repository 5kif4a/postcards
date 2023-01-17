import Layout from "components/Layout";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background: #f4f4f4;
    font-family: 'Fira Sans', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
}

export default App;
