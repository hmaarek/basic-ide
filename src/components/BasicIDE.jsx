import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import JSBasic from "../lib/basic";

const BasicIDE = () => {
  const [code, setCode] = useState("PRINT \"Hello, BASIC World!\"");
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
    <div style={{ height: "100vh", backgroundColor: "#282c34", color: "white", padding: "20px" }}>
      <Editor
        height="50vh"
        defaultLanguage="plaintext"
        language="plaintext"
        theme="vs-dark"
        value={code}
        onChange={(newCode) => setCode(newCode)}
      />
      <button onClick={runCode} style={{ marginTop: "10px", padding: "10px" }}>Run</button>
      <pre style={{ marginTop: "10px", backgroundColor: "black", padding: "10px" }}>{output}</pre>
    </div>
  );
};

export default BasicIDE;
