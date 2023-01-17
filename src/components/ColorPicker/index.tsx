import { FC, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDownIcon } from "assets/arrow-down.svg";

const ColorPickerRoot = styled.div`
  border: 1px solid #e8ecf0;
  border-radius: 4px;
  padding: 12px 11px;
  background: #ffffff;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2d3a41;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputPicker = styled.input`
  width: 18px;
  height: 18px;
  border: none;
  background: none;
  appearance: none;
  padding: 0;

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: none;
    border-radius: 3px;
  }

  ::-moz-focus-inner {
    border: none;
    padding: 0;
    border-radius: 3px;
  }

  ::-moz-color-swatch {
    border: none;
    border-radius: 3px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  text-indent: 10px;
  color: #2d3a41;
  padding: 0;
`;

interface IColorPickerProps {
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ColorPicker: FC<IColorPickerProps> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickArrow = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <ColorPickerRoot>
      <InnerWrapper>
        <InputPicker
          ref={inputRef}
          type="color"
          value={value}
          onChange={onChange}
        />
        <Input value={value} onChange={onChange} />
      </InnerWrapper>

      <ArrowDownIcon onClick={handleClickArrow} />
    </ColorPickerRoot>
  );
};

export default ColorPicker;
