import Editable from "components/Editable";
import Sidebar from "components/Sidebar";
import { FormatContext } from "context";

import React, { useState } from "react";
import styled from "styled-components";
import { initialFormat } from "utils/constants";

const LayoutRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Layout = () => {
  const [format, setFormat] = useState<React.CSSProperties>(initialFormat);

  return (
    <LayoutRoot>
      <FormatContext.Provider value={{ format, setFormat }}>
        <Editable />
        <Sidebar />
      </FormatContext.Provider>
    </LayoutRoot>
  );
};

export default Layout;
