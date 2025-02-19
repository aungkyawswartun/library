import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function useTheme() {

    let contexts = useContext(ThemeContext);
    if(contexts === undefined) {
         new Error('outside the range of ContextProvider');
    }

  return contexts
}
