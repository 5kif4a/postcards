import { FormatContext } from "context";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";

const EditableRoot = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 600px;
  height: 720px;
  padding: 30px;
  background: #ffffff;
  border-radius: 1px;
  border: none;
  outline: none;
  resize: none;
`;

const Editable = () => {
  const formatContext = useContext(FormatContext);

  const [value, setValue] = useState("Type Here...");

  return (
    <EditableRoot>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          ...formatContext?.format,
          fontSize: `${formatContext?.format.fontSize}px`,
          lineHeight: `${formatContext?.format.lineHeight}%`,
          letterSpacing: `${formatContext?.format.letterSpacing}px`,
        }}
      />
    </EditableRoot>
  );
};

export default Editable;
