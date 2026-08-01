

import React, { createContext } from 'react'

    export const themDataContext =  createContext()

function ThemContext({children}) {
  return (
    <themDataContext.Provider value='Wasim'>
    <div>{children}</div>

    </themDataContext.Provider>
  )
}

export default ThemContext