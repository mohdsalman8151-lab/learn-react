import React from 'react'
import { useTheme } from '../context/ThemeContext'

function ToggleTheme() {
    const {theme, toggleTheme} = useTheme()
  return (
    <div>
        <button onClick={toggleTheme}>{theme} Mode</button>
    </div>
  )
}

export default ToggleTheme