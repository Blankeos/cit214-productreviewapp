import React from 'react'

export const ErrorJSX = (icon, message) => {
  return (
    <>
    <div className="flex space-x-2 items-center">
      {icon}
      <span>{message}</span>
    </div>
  </>
  )
}

export default ErrorJSX;
