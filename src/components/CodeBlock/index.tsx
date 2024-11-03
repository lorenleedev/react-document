import {CopyBlock, dracula} from "react-code-blocks";
import React from "react";
import './CodeBlock.css';

interface MyCodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean
}

const MyCodeBlock = ({ code, language = 'javascript', showLineNumbers }: MyCodeBlockProps)  => {
  return (
    <div className={'code-block'}>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock
      />
    </div>
  )
}

export default MyCodeBlock;