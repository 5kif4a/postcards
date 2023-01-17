import styled from "styled-components";

const Align = styled.button<{ active: boolean }>`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: #ffffff;
  border-radius: 4px;
  g {
    fill: ${(props) => (props.active ? "#2198ED" : "#AAB2BB")};
    opacity: ${(props) => (props.active ? 1 : 0.5)};
  }
`;

export default Align;
