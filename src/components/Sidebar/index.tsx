import React, { useContext, useState } from "react";
import styled from "styled-components";
import { aligns, fonts, initialFormat, weights } from "utils/constants";
import { ReactComponent as LineHeightIcon } from "assets/line-height.svg";
import { ReactComponent as FontSizeIcon } from "assets/font-size.svg";
import { ReactComponent as LetterSpacingIcon } from "assets/letter-spacing.svg";
import Input from "components/Input";
import ColorPicker from "components/ColorPicker";
import { FormatContext } from "context";
import Select from "components/Select";
import Align from "components/Align";

const SidebarRoot = styled.div`
  width: 240px;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
`;

const Caption = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #788994;
`;

const InputWrapper = styled.div`
  border: 1px solid #e8ecf0;
  border-radius: 4px;
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const VerticalDivider = styled.span`
  width: 1px;
  height: 100%;
  background: #e8ecf0;
`;

const Button = styled.button`
  height: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  background: #27ae60;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Sidebar = () => {
  const formatContext = useContext(FormatContext);

  const [format, setFormat] = useState<React.CSSProperties>(
    formatContext ? formatContext.format : initialFormat
  );

  const hangleChange = (
    key: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormat({ ...format, [key]: event.target.value });
  };

  const applyChanges = () => {
    if (formatContext) {
      formatContext.setFormat(format);
      localStorage.setItem("format", JSON.stringify(format));
    }
  };

  return (
    <SidebarRoot>
      <Caption>Text</Caption>

      {/* Font Family */}
      <InputWrapper>
        <Row>
          <Select
            value={format.fontFamily}
            onChange={(e) => hangleChange("fontFamily", e)}
          >
            {fonts.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </Select>
        </Row>
      </InputWrapper>

      <InputWrapper>
        <Row>
          {/* Font Weight */}
          <Select
            style={{ width: "134px" }}
            value={format.fontWeight}
            onChange={(e) => hangleChange("fontWeight", e)}
          >
            {weights.map((item, index) => (
              <option key={index} value={item.weight}>
                {item.label}
              </option>
            ))}
          </Select>

          <VerticalDivider />

          {/* Font Size */}
          <Input
            value={format.fontSize}
            onChange={(e) => hangleChange("fontSize", e)}
            startAdornment={<FontSizeIcon />}
            type="number"
          />
        </Row>
      </InputWrapper>

      {/* Color */}
      <ColorPicker
        value={format.color}
        onChange={(e) => hangleChange("color", e)}
      />

      <InputWrapper>
        <Row>
          {/* Line Height */}
          <Input
            value={format.lineHeight}
            onChange={(e) => hangleChange("lineHeight", e)}
            startAdornment={<LineHeightIcon />}
            endAdornment="%"
            type="number"
          />

          <VerticalDivider />

          {/* Letter Spacing */}
          <Input
            value={format.letterSpacing}
            onChange={(e) => hangleChange("letterSpacing", e)}
            startAdornment={<LetterSpacingIcon />}
            endAdornment="px"
            type="number"
          />
        </Row>
      </InputWrapper>

      {/* Text Align */}
      <InputWrapper>
        <Row>
          {aligns.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <VerticalDivider />}
              <Align
                active={item.align === format.textAlign}
                onClick={() => setFormat({ ...format, textAlign: item.align })}
              >
                {item.icon}
              </Align>
            </React.Fragment>
          ))}
        </Row>
      </InputWrapper>

      <Button onClick={applyChanges}>Apply Changes</Button>
    </SidebarRoot>
  );
};

export default Sidebar;
