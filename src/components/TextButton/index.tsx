import React from "react";
import './TextButton.css';

interface TextButtonProps {
  children: React.ReactNode;
  href: string;
}

const TextButton = ({children, href}: TextButtonProps) => {
  return (
    <a
      className={'text-button'}
      href={href}
      target={'_blank'}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default TextButton;