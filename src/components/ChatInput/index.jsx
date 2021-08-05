import React, { useCallback, useState } from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

import "./style.scss"

const ChatInput = ({ onSend }) => {
  const [value, setValue] = useState("")

  const handleChange = useCallback((newValue) => {
    setValue(prev => newValue)
  }, [setValue])

  const handleClicked = useCallback(() => {
    onSend(value)
    setValue("")
  }, [value, setValue])

  return (
    <div className="chat-input-container">
      <AceEditor
        className="editor-container"
        width="100%"
        height="calc(100% - 40px)"
        mode="javascript"
        theme="monokai"
        onChange={handleChange}
        value={value}
        name="only-one"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
      />
      <button className="send-btn" onClick={handleClicked}>Send</button>
    </div>
  )
}

export default ChatInput