import {Link, LinkProps} from "react-router-dom";
import React from "react";

const TextLink = ({children, ...props}: LinkProps) => {
  return (
    <Link {...props} className={'text-button'}>
      {children}
    </Link>
  )
}

export default TextLink;