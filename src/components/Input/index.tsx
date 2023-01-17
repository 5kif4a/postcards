import { FC } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex: 1;
`;

const StartAdornmentRoot = styled.div`
  height: 100%;
  padding: 12px 0 12px 12px;
`;

const EndAdornmentRoot = styled.div`
  width: 30px;
  padding-right: 12px;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #aab2bb;
`;

const InnerInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 14px;
  text-indent: 10px;
  color: #333333;
  padding: 0;
  background: none;
  color: #2d3a41;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface IInputProps {
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input: FC<IInputProps> = ({
  value,
  onChange,
  startAdornment,
  endAdornment,
  type,
}) => {
  return (
    <Root>
      {startAdornment && (
        <StartAdornmentRoot>{startAdornment}</StartAdornmentRoot>
      )}
      <InnerInput value={value} onChange={onChange} type={type} />
      {endAdornment && <EndAdornmentRoot>{endAdornment}</EndAdornmentRoot>}
    </Root>
  );
};

export default Input;
