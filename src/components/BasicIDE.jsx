import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import styled from "styled-components";
import JSBasic from "../lib/basic.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  background: #282c34;
  color: white;
`;

const EditorContainer = styled.div`
  flex: 1;
  border: 1px solid #444;
  border-radius: 5px;
  overflow: hidden;
`;

const RunButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background: #61dafb;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #21a1f1;
  }
`;

const ConsoleOutput = styled.div`
  margin-top: 10px;
  background: black;
  padding: 10px;
  min-height: 100px;
  font-family: monospace;
  border-radius: 5px;
  white-space: pre-wrap;
`;

const BasicIDE = () => {
  const [code, setCode] = useState("PRINT \"Hello, World!\"");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      let interpreter = new JSBasic();
      let result = interpreter.run(code);
      setOutput(result);
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  return (
    <Container>
      <EditorContainer>
        <Editor
          height="50vh"
          defaultLanguage="plaintext"
          language="plaintext"
          theme="vs-dark"
          value={code}
          onChange={(newCode) => setCode(newCode)}
        />
      </EditorContainer>
      <RunButton onClick={runCode}>Run</RunButton>
      <ConsoleOutput>{output}</ConsoleOutput>
    </Container>
  );
};

export default BasicIDE;
